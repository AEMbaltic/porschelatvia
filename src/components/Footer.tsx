import porscheLogo from "@/assets/porsche-logo.png";

const footerColumns = [
  {
    title: "Models",
    links: ["911", "Taycan", "Cayenne", "Macan", "Panamera"],
  },
  {
    title: "Services",
    links: ["Service & Parts", "Porsche Approved", "Financing", "Insurance"],
  },
  {
    title: "Experience",
    links: ["Test Drive", "Events", "Porsche Museum", "Motorsport"],
  },
  {
    title: "Contact",
    links: ["Find a Dealer", "Customer Service", "Newsletter", "Careers"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase mb-6 opacity-50">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm font-light opacity-70 hover:opacity-100 transition-opacity"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <img src={porscheLogo} alt="Porsche" className="h-6 w-auto invert" />
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs font-light opacity-50 hover:opacity-100 transition-opacity">
              Legal Notice
            </a>
            <a href="#" className="text-xs font-light opacity-50 hover:opacity-100 transition-opacity">
              Privacy Policy
            </a>
            <a href="#" className="text-xs font-light opacity-50 hover:opacity-100 transition-opacity">
              Cookie Policy
            </a>
          </div>
          <p className="text-xs font-light opacity-40">
            © {new Date().getFullYear()} Porsche. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
