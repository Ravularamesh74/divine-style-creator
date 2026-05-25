import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Style Daddy" className="h-12 w-12 rounded-full ring-2 ring-primary" />
              <span className="font-display text-2xl tracking-widest">
                STYLE <span className="text-gradient-fire">DADDY</span>
              </span>
            </Link>
            <p className="mt-4 max-w-md text-muted-foreground">
              Nacharam's streetwear kingdom. Bold drops, brutal prices. Stay trendy, stay daddy.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://instagram.com/_style_daddy_" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-neon-grad px-5 py-2.5 text-sm font-bold text-primary-foreground glow-neon">
                <Instagram className="h-4 w-4" /> @_style_daddy_
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg tracking-widest text-primary">EXPLORE</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground">Home</Link></li>
              <li><Link to="/shop" className="hover:text-foreground">Shop</Link></li>
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg tracking-widest text-primary">VISIT</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent" /> 7-26/3, opp CS Brother, New Raghavendra Nagar, Nacharam, Hyderabad 500076</li>
              <li className="flex gap-2"><MessageCircle className="h-4 w-4 mt-0.5 text-accent" /> DM us on Instagram to order</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Style Daddy. All rights reserved.</p>
          <p className="font-display tracking-widest">STAY TRENDY · STAY DADDY</p>
        </div>
      </div>
    </footer>
  );
}
