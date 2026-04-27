import Link from 'next/link'

const Footer = () => {
  return (
    <footer
      className="mt-20 w-full border-t border-[var(--border-color)]"
      style={{ background: 'var(--section-bg)' }}
      aria-label="Site footer"
    >
      {/* Top section */}
      <div className="px-6 md:px-[10%] pt-14 pb-8">
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Brand column */}
          <div className="max-w-xs">
            <p className="font-Sora font-bold text-xl text-[var(--text-primary)] mb-2">
              Shivendra Singh
            </p>
            <div
              className="w-8 h-0.5 mb-4"
              style={{ background: 'var(--accent-color)' }}
            />
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Head of Data, Information & AI. Transforming organisations through
              trusted data and strategic AI leadership.
            </p>
            <a
              href="mailto:connect.shivendra@gmail.com"
              className="inline-flex items-center gap-2 mt-4 text-sm font-medium underline underline-offset-2 transition-colors duration-300 hover:text-[var(--accent-color)]"
              style={{ color: 'var(--text-primary)', textDecorationColor: 'var(--accent-color)' }}
            >
              connect.shivendra@gmail.com
            </a>
          </div>

          {/* Nav columns */}
          <div className="flex flex-wrap gap-10">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4 text-[var(--text-secondary)]">
                Navigation
              </p>
              <ul className="space-y-2">
                {[
                  { label: 'About', href: '/#about' },
                  { label: 'Blog', href: '/#blogs' },
                  { label: 'My Work', href: '/#work' },
                  { label: 'Contact', href: '/#contact' },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors duration-300"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4 text-[var(--text-secondary)]">
                Connect
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.linkedin.com/in/connectshivendra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors duration-300"
                    aria-label="LinkedIn profile"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Connect-Shivendra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors duration-300"
                    aria-label="GitHub profile"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="/Shivendra-Singh-HoData-CV.pdf"
                    download
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors duration-300"
                  >
                    Download CV
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--border-color)] px-6 md:px-[10%] py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-[var(--text-secondary)]">
          © 2026 Shivendra Singh — Licensed under CC BY-NC-ND 4.0
        </p>
        <p className="text-xs text-[var(--text-secondary)]">
          Built with Next.js · Deployed on Vercel
        </p>
      </div>
    </footer>
  );
};

export default Footer;
