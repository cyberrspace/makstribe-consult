import { services, site } from "@/lib/site";
import Wordmark from "./ui/Wordmark";

const company = [
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t-2 border-accent bg-ink-deep text-white">
      <div className="shell py-16 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Wordmark tone="dark" />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/55">
              A multi-service digital agency for businesses serious about growth.
              Project-based, globally delivered.
            </p>
          </div>

          <div>
            <h2 className="label text-white/45">Services</h2>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-[15px] text-white/75 transition-colors duration-300 hover:text-accent-bright"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="label text-white/45">Company</h2>
            <ul className="mt-5 space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[15px] text-white/75 transition-colors duration-300 hover:text-accent-bright"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-[15px] text-white/75 transition-colors duration-300 hover:text-accent-bright"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[14px] text-white/45">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-[14px] text-white/45">Made with intent.</p>
        </div>
      </div>
    </footer>
  );
}
