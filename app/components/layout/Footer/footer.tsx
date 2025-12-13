const Footer = () => {
  return (
    <footer className="mt-16 flex w-full flex-row flex-wrap items-center justify-center gap-x-12 gap-y-3 border-t border-slate-200 px-3 py-4 text-center md:justify-between">
      <p className="font-sans text-base text-current antialiased">
        © 2025 copyright All Rights Reserved
      </p>
      <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
        <li>
          <a
            href="#"
            className="font-sans text-base text-current antialiased hover:text-slate-800"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-sans text-base text-current antialiased hover:text-slate-800"
          >
            License
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-sans text-base text-current antialiased hover:text-slate-800"
          >
            Contribute
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-sans text-base text-current antialiased hover:text-slate-800"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
