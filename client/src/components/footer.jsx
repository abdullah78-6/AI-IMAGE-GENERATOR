const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 text-gray-400" id="Details">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

        
        <div className="flex justify-between items-center gap-10 flex-wrap">

          
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold text-white">
              AI<span className="text-purple-500">Vision</span>
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-6">
              Create stunning images with the power of artificial intelligence.
              Turn your ideas into beautiful visuals in seconds.
            </p>
          </div>

          
          <div>
            <h3 className="text-sm font-semibold text-white">
              Product
            </h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#" className="transition hover:text-white">
                  AI Image Generator
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Explore
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Features
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Company
            </h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#" className="transition hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

        
          {/* <div>
            <h3 className="text-sm font-semibold text-white">
              Follow Us
            </h3>

            <div className="mt-4 flex gap-3">
              <a
                href="#"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 transition hover:border-purple-500 hover:bg-purple-500/10 hover:text-white"
              >
                GH
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 transition hover:border-purple-500 hover:bg-purple-500/10 hover:text-white"
              >
                X
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 transition hover:border-purple-500 hover:bg-purple-500/10 hover:text-white"
              >
                IG
              </a>
            </div>
          </div> */}
        </div>

        
        <div className="mt-10 flex flex-col gap-4 border-t border-gray-800 pt-6 text-center text-sm sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} AI Vision. All rights reserved.
          </p>

          <p>
            Powered by AI ✨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;