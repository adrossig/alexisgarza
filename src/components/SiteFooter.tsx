import Link from "next/link";

const social = [
  { label: "Instagram", href: "https://www.instagram.com/casa.garza_/" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61570955280081" },
  // { label: "Pinterest", href: "https://pinterest.com" },
];

const company = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Philosophy", href: "/philosophy" },
  { label: "Inquire", href: "/inquire" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-footer">
      <div className="shell py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link
              href="/"
              aria-label="Alexis Garza — home"
              className="font-display text-2xl uppercase tracking-[0.35em] text-accent"
            >
              Alexis Garza
            </Link>
            <p className="mt-4 max-w-xs text-sm font-light text-muted">
              Interior design studio. Latin warmth, held to an exact plan.
            </p>
            <a
              href="mailto:studio@alexisgarza.com"
              className="link-gold mt-6 inline-block py-1 text-sm"
            >
              studio@alexisgarza.com
            </a>
          </div>

          <nav aria-label="Social">
            <p className="label-caps text-muted">Connect</p>
            <ul className="mt-3">
              {social.map((item) => (
                <li key={item.label}>
                  <a
                    className="link-gold inline-block py-2 text-sm"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer">
            <p className="label-caps text-muted">Company</p>
            <ul className="mt-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link className="link-gold inline-block py-2 text-sm" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="label-caps label-caps-quiet mt-10 text-muted">
          © {new Date().getFullYear()} Alexis Garza Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
