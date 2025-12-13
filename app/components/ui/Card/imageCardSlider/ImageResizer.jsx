// pages/index.js
import { useState, useRef, useEffect } from "react";
import Head from "next/head";

export default function ImageResizer() {
  const [originalImage, setOriginalImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef(null);
  const [mobileMaxWidth, setMobileMaxWidth] = useState(600);
  const [quality, setQuality] = useState(1); // 1 = 100% quality
  const [newDimensions, setNewDimensions] = useState({ width: 0, height: 0 });

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsProcessing(true);

    // Read the uploaded image
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;

      img.onload = () => {
        // Store original image data and dimensions
        setOriginalImage(event.target.result);
        setDimensions({
          width: img.width,
          height: img.height,
        });

        // Process for mobile
        processImageForMobile(img);
      };
    };

    reader.readAsDataURL(file);
  };

  const processImageForMobile = (img) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Calculate new dimensions while maintaining aspect ratio
    const aspectRatio = img.width / img.height;
    let newWidth = Math.min(img.width, mobileMaxWidth);
    let newHeight = newWidth / aspectRatio;

    // Set canvas dimensions
    canvas.width = newWidth;
    canvas.height = newHeight;

    // Draw the resized image with high quality
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, 0, 0, newWidth, newHeight);

    // Create the processed image in WebP format with 100% quality
    const processedDataUrl = canvas.toDataURL("image/webp", quality);
    setProcessedImage(processedDataUrl);
    setNewDimensions({ width: newWidth, height: newHeight });
    setIsProcessing(false);
  };

  const downloadImage = () => {
    if (!processedImage) return;

    const link = document.createElement("a");
    link.href = processedImage;
    link.download = "responsive-image.webp";
    link.click();
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  // Re-process image when settings change
  useEffect(() => {
    if (originalImage) {
      const img = new Image();
      img.src = originalImage;
      img.onload = () => processImageForMobile(img);
    }
  }, [mobileMaxWidth, quality]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <Head>
        <title>Responsive WebP Image Resizer</title>
        <meta
          name="description"
          content="Resize images to WebP format while maintaining aspect ratio and quality"
        />
      </Head>

      <div className="mx-auto max-w-4xl">
        <header className="mb-12 text-center">
          <h1 className="mb-3 mt-6 text-3xl font-bold text-gray-800 md:text-4xl">
            Responsive WebP Image Resizer
          </h1>
          <p className="mx-auto max-w-2xl text-gray-600">
            Upload an image to resize it while maintaining the original aspect
            ratio and quality. Output is converted to efficient WebP format.
          </p>
        </header>

        <div className="mb-8 rounded-xl bg-white p-6 shadow-lg">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Upload & Settings Section */}
            <div className="flex flex-col">
              <div
                className="mb-6 cursor-pointer rounded-xl border-2 border-dashed border-gray-300 p-8 text-center transition-all hover:border-blue-400 hover:bg-blue-50"
                onClick={triggerFileInput}
              >
                <div className="flex flex-col items-center">
                  <svg
                    className="mx-auto mb-4 h-16 w-16 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <p className="mb-2 text-lg font-medium text-gray-700">
                    Click to upload an image
                  </p>
                  <p className="text-sm text-gray-500">
                    JPG, PNG, or WebP (Max 10MB)
                  </p>
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>

              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Mobile Max Width: {mobileMaxWidth}px
                </label>
                <input
                  type="range"
                  min="300"
                  max="1200"
                  value={mobileMaxWidth}
                  onChange={(e) => setMobileMaxWidth(parseInt(e.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
                />
                <div className="mt-1 flex justify-between text-xs text-gray-500">
                  <span>300px</span>
                  <span>600px</span>
                  <span>900px</span>
                  <span>1200px</span>
                </div>
              </div>

              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Quality: {quality * 100}%
                </label>
                <input
                  type="range"
                  min="0.8"
                  max="1"
                  step="0.01"
                  value={quality}
                  onChange={(e) => setQuality(parseFloat(e.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
                />
                <div className="mt-1 flex justify-between text-xs text-gray-500">
                  <span>80%</span>
                  <span>90%</span>
                  <span>100%</span>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  WebP at 100% quality maintains visual fidelity
                </p>
              </div>

              {dimensions.width > 0 && (
                <div className="mb-4 rounded-lg bg-gray-50 p-4">
                  <h3 className="mb-3 font-medium text-gray-700">
                    Image Dimensions
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded bg-blue-50 p-3">
                      <h4 className="mb-1 text-sm font-medium text-blue-700">
                        Original
                      </h4>
                      <p className="text-sm text-blue-600">
                        {dimensions.width} × {dimensions.height}px
                      </p>
                      <p className="mt-1 text-xs text-blue-500">
                        Aspect:{" "}
                        {(dimensions.width / dimensions.height).toFixed(2)}:1
                      </p>
                    </div>
                    <div className="rounded bg-green-50 p-3">
                      <h4 className="mb-1 text-sm font-medium text-green-700">
                        Processed
                      </h4>
                      <p className="text-sm text-green-600">
                        {newDimensions.width} × {newDimensions.height}px
                      </p>
                      <p className="mt-1 text-xs text-green-500">
                        Size:{" "}
                        {Math.round(
                          (newDimensions.width / dimensions.width) * 100,
                        )}
                        % of original
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Preview Section */}
            <div className="flex flex-col">
              <h2 className="mb-4 text-lg font-semibold text-gray-800">
                Preview
              </h2>

              {isProcessing ? (
                <div className="flex h-64 flex-col items-center justify-center">
                  <div className="mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
                  <p className="text-gray-600">Processing image...</p>
                </div>
              ) : processedImage ? (
                <div className="flex flex-col">
                  <div className="mb-4 overflow-hidden rounded-lg border border-gray-200">
                    <img
                      src={processedImage}
                      alt="Processed"
                      className="h-auto max-h-[400px] w-full object-contain"
                    />
                  </div>
                  <div className="mb-4 rounded-lg border border-green-200 bg-green-50 p-3">
                    <p className="text-sm text-green-700">
                      Image processed! Maintained original aspect ratio and
                      converted to WebP format.
                    </p>
                  </div>
                  <button
                    onClick={downloadImage}
                    className="flex items-center justify-center rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white transition-colors hover:bg-blue-700"
                  >
                    <svg
                      className="mr-2 h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      ></path>
                    </svg>
                    Download WebP Image
                  </button>
                </div>
              ) : (
                <div className="flex h-64 items-center justify-center rounded-lg border border-gray-200 bg-gray-50">
                  <p className="text-gray-500">
                    Upload an image to see the preview
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Responsive Preview Section */}
        <div className="mb-8 rounded-xl bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Responsive Preview
          </h2>
          <p className="mb-4 text-gray-600">
            See how your resized WebP image will appear on different devices:
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Mobile Preview */}
            <div className="overflow-hidden rounded-3xl border-2 border-gray-800 bg-gray-900 p-4">
              <div className="mb-3 flex items-center justify-center">
                <div className="mr-1 h-6 w-3 rounded-l bg-gray-800"></div>
                <div className="mr-3 h-10 w-10 rounded-full bg-gray-800"></div>
                <h3 className="text-sm font-medium text-gray-200">Mobile</h3>
              </div>
              <div className="flex h-48 items-center justify-center overflow-hidden rounded-xl bg-gray-800">
                {processedImage ? (
                  <img
                    src={processedImage}
                    alt="Mobile preview"
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <span className="text-gray-400">No image</span>
                )}
              </div>
            </div>

            {/* Tablet Preview */}
            <div className="overflow-hidden rounded-xl border-2 border-gray-800 bg-gray-900 p-4">
              <div className="mb-3 flex items-center justify-center">
                <div className="mr-3 h-12 w-16 rounded border-2 border-gray-800"></div>
                <h3 className="text-sm font-medium text-gray-200">Tablet</h3>
              </div>
              <div className="flex h-48 items-center justify-center overflow-hidden rounded-lg bg-gray-800">
                {processedImage ? (
                  <img
                    src={processedImage}
                    alt="Tablet preview"
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <span className="text-gray-400">No image</span>
                )}
              </div>
            </div>

            {/* Desktop Preview */}
            <div className="overflow-hidden rounded-lg border-2 border-gray-800 bg-gray-900 p-4">
              <div className="mb-3 flex items-center justify-center">
                <div className="mr-3 h-16 w-24 rounded border-2 border-gray-800"></div>
                <h3 className="text-sm font-medium text-gray-200">Desktop</h3>
              </div>
              <div className="flex h-48 items-center justify-center overflow-hidden rounded bg-gray-800">
                {processedImage ? (
                  <img
                    src={processedImage}
                    alt="Desktop preview"
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <span className="text-gray-400">No image</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-8 rounded-xl bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            How It Works
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-blue-100 bg-blue-50 p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-2 font-semibold text-blue-700">
                Aspect Ratio Preserved
              </h3>
              <p className="text-sm text-blue-600">
                Original proportions maintained for natural-looking images
              </p>
            </div>

            <div className="rounded-lg border border-green-100 bg-green-50 p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-2 font-semibold text-green-700">
                WebP Conversion
              </h3>
              <p className="text-sm text-green-600">
                Images converted to efficient WebP format without quality loss
              </p>
            </div>

            <div className="rounded-lg border border-purple-100 bg-purple-50 p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                <svg
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-2 font-semibold text-purple-700">
                Mobile-First
              </h3>
              <p className="text-sm text-purple-600">
                Optimized for all device sizes with responsive previews
              </p>
            </div>
          </div>
        </div>

        <footer className="py-6 text-center text-sm text-gray-600">
          <p>
            All image processing happens in your browser - no server upload
            required.
          </p>
          <p className="mt-2">Your images are never sent to any server.</p>
        </footer>
      </div>
    </div>
  );
}
