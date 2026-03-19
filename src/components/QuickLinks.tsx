import { Phone, MapPin, CalendarDays, Car, Mail } from "lucide-react";

const links = [
  { icon: Phone, label: "Contact Us" },
  { icon: MapPin, label: "Find Us" },
  { icon: CalendarDays, label: "Book a Visit" },
  { icon: Car, label: "Test Drive" },
  { icon: Mail, label: "Send Email" },
];

const QuickLinks = () => {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="flex flex-wrap justify-center divide-x divide-primary-foreground/10">
        {links.map(({ icon: Icon, label }) => (
          <a
            key={label}
            href="#"
            className="flex items-center gap-3 px-6 sm:px-10 py-5 hover:bg-primary-foreground/5 transition-colors group"
          >
            <Icon className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
            <span className="text-xs sm:text-sm font-light tracking-wide">{label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default QuickLinks;
