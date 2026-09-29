import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-text">
          🐠 Zukipedia — The Free Fish Encyclopedia • {new Date().getFullYear()}
        </p>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/category/freshwater">Freshwater</Link>
          <Link href="/category/saltwater">Saltwater</Link>
          <Link href="/category/sharks-rays">Sharks & Rays</Link>
          <Link href="/category/tropical">Tropical</Link>
          <Link href="/category/deep-sea">Deep Sea</Link>
        </div>
      </div>
    </footer>
  );
}
