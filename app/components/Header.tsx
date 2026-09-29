"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";

export default function Header() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (query.trim()) {
        router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      }
    },
    [query, router]
  );

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo" id="site-logo">
          <div className="logo-icon">Z</div>
          <div>
            <div className="logo-text">Zukipedia</div>
            <div className="logo-tagline">The Fish Encyclopedia</div>
          </div>
        </Link>

        <div className="search-container">
          <form className="search-bar" onSubmit={handleSearch}>
            <span className="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </span>
            <input
              id="search-input"
              type="text"
              placeholder="Search fish species..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search fish species"
            />
          </form>
        </div>

        <nav className="header-nav">
          <Link href="/">Home</Link>
          <Link href="/category/freshwater">Freshwater</Link>
          <Link href="/category/saltwater">Saltwater</Link>
          <Link href="/category/sharks-rays">Sharks</Link>
          <Link href="/category/tropical">Tropical</Link>
        </nav>
      </div>
    </header>
  );
}
