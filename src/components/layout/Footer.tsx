import { Logo } from "@/components/icons/Logo";
import { APP_DESCRIPTION } from "@/lib/constants";

const footerLinks = {
  Platform: [
    { label: "Fitur", href: "#features" },
    { label: "Harga", href: "#" },
    { label: "FAQ", href: "#" },
  ],
  Perusahaan: [
    { label: "Tentang Kami", href: "#about" },
    { label: "Blog", href: "#" },
    { label: "Karir", href: "#" },
  ],
  Dukungan: [
    { label: "Pusat Bantuan", href: "#" },
    { label: "Kontak", href: "#contact" },
    { label: "Kebijakan Privasi", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-cream-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              {APP_DESCRIPTION}
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 transition-colors hover:text-primary-700"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-cream-200 pt-8">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Kamar Santri. Hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
