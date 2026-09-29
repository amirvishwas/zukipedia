import Link from "next/link";
import { categories, fishDatabase } from "@/app/lib/fishData";

export default function Sidebar() {
  return (
    <aside className="sidebar" id="sidebar">
      {/* Main Navigation */}
      <div className="sidebar-section">
        <div className="sidebar-section-title">Main</div>
        <Link href="/" className="sidebar-link" id="nav-home">
          Main Page
        </Link>
        <Link href="/random" className="sidebar-link" id="nav-random">
          Random Article
        </Link>
      </div>

      {/* Categories */}
      <div className="sidebar-section">
        <div className="sidebar-section-title">Categories</div>
        {categories.map((cat) => (
          <Link
            href={`/category/${cat.slug}`}
            className="sidebar-link"
            key={cat.slug}
            id={`nav-category-${cat.slug}`}
          >
            <span className="sidebar-link-icon" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--gray-300)" }}></span>
            {cat.name}
            <span className="sidebar-link-count">{cat.count}</span>
          </Link>
        ))}
      </div>

      {/* All Species */}
      <div className="sidebar-section">
        <div className="sidebar-section-title">All Species</div>
        {fishDatabase.map((fish) => (
          <Link
            href={`/fish/${fish.slug}`}
            className="sidebar-link"
            key={fish.slug}
            id={`nav-fish-${fish.slug}`}
          >
            <span className="sidebar-link-icon" style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--gray-400)" }}></span>
            {fish.commonName}
          </Link>
        ))}
      </div>
    </aside>
  );
}
