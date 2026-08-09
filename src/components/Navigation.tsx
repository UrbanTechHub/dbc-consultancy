import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (to: string) => location.pathname === to;

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/lovable-uploads/f9fd1225-357f-4466-950b-fbdff9000e66.png"
              alt="DBC Consultancy logo"
              className="h-10 w-auto"
            />
            <span className="leading-tight">
              <span className="block font-display text-lg font-bold tracking-[0.08em] text-primary md:text-xl">
                DBC CONSULTANCY
              </span>
              <span className="hidden text-[11px] uppercase tracking-[0.22em] text-muted-foreground sm:block">
                Engineering Excellence Delivered
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(l.to)
                    ? 'bg-secondary text-primary'
                    : 'text-muted-foreground hover:bg-secondary/60 hover:text-primary'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-3 inline-flex items-center gap-1 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-deep"
            >
              Request a consultation <ArrowUpRight size={15} />
            </Link>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            className="rounded-lg p-2 text-primary transition-colors hover:bg-secondary md:hidden"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="space-y-1 px-4 py-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                  isActive(l.to) ? 'bg-secondary text-primary' : 'text-muted-foreground hover:bg-secondary/60'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-1 rounded-xl bg-primary px-4 py-3 text-base font-medium text-primary-foreground"
            >
              Request a consultation <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
