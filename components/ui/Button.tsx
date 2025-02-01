export const Button = () => {
  return (
    <button className="relative rounded-lg bg-gradient-to-b from-[#190d2e] to-[#4a208a] px-3 py-2 text-sm font-medium shadow-[0px_0px_10px_#8c45ff]">
      <div className="absolute inset-0">
        <div className="[mask-image:linear-gradiant(to_top,black,transparent) absolute inset-0 rounded-lg border border-white/20"></div>
        <div className="[mask-image:linear-gradiant(to_bottom,black,transparent) absolute inset-0 rounded-lg border border-white/40"></div>
        <div className="classabsolute inset-0 rounded-lg shadow-[0px_0px_10px_rgb(140,69,255,.7)_inset]"></div>
      </div>
      <span className="text-white">Button</span>
    </button>
  );
};
