import { Menu, MapPin } from "lucide-react";
import porscheLogo from "@/assets/porsche-logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between px-6 py-3">
        <button className="flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity">
          <Menu className="w-5 h-5" />
          <span className="text-sm font-medium tracking-wide hidden sm:inline">Menu</span>
        </button>

        <div className="absolute left-1/2 -translate-x-1/2">
          <img src={porscheLogo} alt="Porsche" className="h-40 sm:h-48 w-auto" />
        </div>

        <div className="flex items-center gap-2 text-foreground">
          <MapPin className="w-4 h-4" />
          <span className="text-xs sm:text-sm font-light tracking-wide hidden sm:inline">Porsche Center</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
