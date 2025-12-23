"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import Heading from "@tiptap/extension-heading";
import { useEffect, useRef } from "react";
import {
  FiBold,
  FiItalic,
  FiUnderline,
  FiCode,
  FiList,
  FiLink,
  FiImage,
  FiRotateCcw,
  FiRotateCw,
  FiType,
  FiPlus,
} from "react-icons/fi";

interface TiptapEditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null;
  }

  const addImage = () => {
    const url = window.prompt("Enter the image URL");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        editor.chain().focus().setImage({ src: base64 }).run();
      };
      reader.readAsDataURL(file);
    }
  };

  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    if (url === null) {
      return;
    }

    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const buttonClass = (isActive: boolean = false) => `
    p-2 rounded-lg transition-all
    ${
      isActive
        ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
        : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
    }
  `;

  return (
    <div className="flex flex-wrap items-center gap-1 border-b border-zinc-200 bg-zinc-50/50 p-2 dark:border-zinc-800 dark:bg-zinc-900/50">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={buttonClass(editor.isActive("bold"))}
        title="Bold"
      >
        <FiBold />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={buttonClass(editor.isActive("italic"))}
        title="Italic"
      >
        <FiItalic />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={buttonClass(editor.isActive("underline"))}
        title="Underline"
      >
        <FiUnderline />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={buttonClass(editor.isActive("code"))}
        title="Inline Code"
      >
        <FiCode />
      </button>

      <div className="mx-1 h-6 w-px bg-zinc-200 dark:bg-zinc-800" />

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={buttonClass(editor.isActive("heading", { level: 1 }))}
        title="Heading 1"
      >
        <span className="text-xs font-bold">H1</span>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={buttonClass(editor.isActive("heading", { level: 2 }))}
        title="Heading 2"
      >
        <span className="text-xs font-bold">H2</span>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={buttonClass(editor.isActive("heading", { level: 3 }))}
        title="Heading 3"
      >
        <span className="text-xs font-bold">H3</span>
      </button>

      <div className="mx-1 h-6 w-px bg-zinc-200 dark:bg-zinc-800" />

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={buttonClass(editor.isActive("bulletList"))}
        title="Bullet List"
      >
        <FiList />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={buttonClass(editor.isActive("codeBlock"))}
        title="Code Block"
      >
        <div className="flex items-center gap-0.5">
          <FiCode />
          <span className="text-[8px] font-bold">BLOCK</span>
        </div>
      </button>

      <div className="mx-1 h-6 w-px bg-zinc-200 dark:bg-zinc-800" />

      <button
        type="button"
        onClick={setLink}
        className={buttonClass(editor.isActive("link"))}
        title="Insert Link"
      >
        <FiLink />
      </button>

      <div className="relative flex items-center gap-1">
        <button
          type="button"
          onClick={addImage}
          className={buttonClass()}
          title="Image URL"
        >
          <FiImage />
        </button>
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className={buttonClass()}
          title="Upload Image"
        >
          <FiPlus className="text-xs" />
          <FiImage />
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileUpload}
          accept="image/*"
          className="hidden"
        />
      </div>

      <div className="mx-1 h-6 w-px bg-zinc-200 dark:bg-zinc-800" />

      <button
        type="button"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className={buttonClass()}
        title="Undo"
      >
        <FiRotateCcw />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className={buttonClass()}
        title="Redo"
      >
        <FiRotateCw />
      </button>
    </div>
  );
};

const TiptapEditor = ({
  content,
  onChange,
  placeholder,
}: TiptapEditorProps) => {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Underline,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-blue-600 dark:text-blue-400 underline cursor-pointer",
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class:
            "rounded-xl border border-zinc-200 dark:border-zinc-800 max-w-full h-auto my-6 shadow-lg",
        },
      }),
      Placeholder.configure({
        placeholder: placeholder || "Write your story...",
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose-base dark:prose-invert max-w-none focus:outline-none min-h-[400px] p-6 leading-relaxed",
      },
    },
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 dark:border-zinc-700 dark:bg-zinc-800">
      <style jsx global>{`
        .tiptap code {
          background-color: #f3f4f6;
          color: #1f2937;
          border-radius: 0.375rem;
          padding: 0.2rem 0.4rem;
          font-family:
            ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", "Courier New", monospace;
          font-size: 0.875rem;
        }
        .dark .tiptap code {
          background-color: #27272a;
          color: #e4e4e7;
        }
        .tiptap pre {
          background-color: #18181b;
          color: #f4f4f5;
          border-radius: 0.75rem;
          padding: 1.25rem;
          margin: 1.5rem 0;
          font-family:
            ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", "Courier New", monospace;
        }
        .tiptap pre code {
          background-color: transparent;
          color: inherit;
          padding: 0;
          border-radius: 0;
          font-size: 0.875rem;
        }
        .tiptap p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: #adb5bd;
          pointer-events: none;
          height: 0;
        }
      `}</style>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default TiptapEditor;
