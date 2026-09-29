import Link from "next/link";
import { fishDatabase, categories, getFeaturedFish } from "@/app/lib/fishData";

export default function Home() {
  const featuredFish = getFeaturedFish();
  const didYouKnowItems = fishDatabase.filter((f) => f.didYouKnow);

  return (
    <div>
      {/* Hero Banner */}
      <div className="hero-banner" id="hero-banner">
        {/* Floating fish decorations */}
        <div className="hero-fish">🐠</div>
        <div className="hero-fish">🐟</div>
        <div className="hero-fish">🐡</div>

        <div className="hero-content">
          <div className="hero-eyebrow">
            <span>🐠</span> Welcome to Zukipedia
          </div>
          <h1 className="hero-title">
            The Free Encyclopedia
            <br />
            of Fish Species
          </h1>
          <p className="hero-subtitle">
            Dive into the fascinating underwater world. Explore detailed articles
            on hundreds of fish species — from vibrant coral reef dwellers to
            mysterious deep-sea creatures.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">{fishDatabase.length}</span>
              <span className="hero-stat-label">Species</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">{categories.length}</span>
              <span className="hero-stat-label">Categories</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">
                {fishDatabase.reduce((acc, f) => acc + f.sections.length, 0)}
              </span>
              <span className="hero-stat-label">Sections</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">∞</span>
              <span className="hero-stat-label">Wonder</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="home-grid">
        {/* Left Column */}
        <div>
          {/* Featured Articles */}
          <div className="card" id="featured-articles">
            <div className="card-header">
              <span className="card-header-icon">⭐</span>
              <span className="card-header-title">Featured Articles</span>
            </div>
            <div className="card-body" style={{ padding: 0 }}>
              {featuredFish.slice(0, 3).map((fish) => (
                <Link
                  href={`/fish/${fish.slug}`}
                  className="featured-article"
                  key={fish.slug}
                  id={`featured-${fish.slug}`}
                >
                  <div className="card-body">
                    <div
                      className="featured-hero-img"
                      style={{ background: fish.heroGradient, height: "160px" }}
                    >
                      <span style={{ fontSize: "72px", position: "relative", zIndex: 1 }}>
                        {fish.emoji}
                      </span>
                    </div>
                    <div className="featured-info">
                      <div className="featured-species">
                        {fish.scientificName}
                      </div>
                      <div className="featured-name">{fish.commonName}</div>
                      <p className="featured-excerpt">
                        {fish.shortDescription}
                      </p>
                      <span className="featured-readmore">
                        Read full article →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* All Species */}
          <div className="card" style={{ marginTop: "24px" }} id="all-species">
            <div className="card-header">
              <span className="card-header-icon">📚</span>
              <span className="card-header-title">
                All Species ({fishDatabase.length})
              </span>
            </div>
            <div className="card-body">
              <div className="species-list">
                {fishDatabase.map((fish) => (
                  <Link
                    href={`/fish/${fish.slug}`}
                    className="species-item"
                    key={fish.slug}
                    id={`species-${fish.slug}`}
                  >
                    <span className="species-item-emoji">{fish.emoji}</span>
                    <div className="species-item-info">
                      <div className="species-item-name">
                        {fish.commonName}
                      </div>
                      <div className="species-item-sci">
                        {fish.scientificName}
                      </div>
                    </div>
                    <span
                      className={`conservation-badge ${fish.conservationStatus.toLowerCase()}`}
                      style={{ marginLeft: "auto" }}
                    >
                      {fish.conservationStatus}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* Did You Know */}
          <div className="card" id="did-you-know">
            <div className="card-header">
              <span className="card-header-icon">💡</span>
              <span className="card-header-title">Did You Know?</span>
            </div>
            <div className="card-body">
              <div className="dyk-list">
                {didYouKnowItems.slice(0, 5).map((fish) => (
                  <Link
                    href={`/fish/${fish.slug}`}
                    key={fish.slug}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div className="dyk-item">
                      <span className="dyk-icon">{fish.emoji}</span>
                      <p className="dyk-text">
                        <strong>{fish.commonName}:</strong> {fish.didYouKnow}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="card" style={{ marginTop: "20px" }} id="categories-card">
            <div className="card-header">
              <span className="card-header-icon">🗂️</span>
              <span className="card-header-title">Browse by Category</span>
            </div>
            <div className="card-body" style={{ padding: "8px 12px" }}>
              <div className="species-list">
                {categories.map((cat) => (
                  <Link
                    href={`/category/${cat.slug}`}
                    className="species-item"
                    key={cat.slug}
                    id={`home-category-${cat.slug}`}
                  >
                    <span className="species-item-emoji">{cat.icon}</span>
                    <div className="species-item-info">
                      <div className="species-item-name">{cat.name}</div>
                      <div className="species-item-sci">
                        {cat.count} {cat.count === 1 ? "species" : "species"}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Today&apos;s Spotlight */}
          <div className="card" style={{ marginTop: "20px" }} id="spotlight-card">
            <div className="card-header">
              <span className="card-header-icon">🔦</span>
              <span className="card-header-title">Species Spotlight</span>
            </div>
            <div className="card-body">
              <Link
                href={`/fish/${fishDatabase[4].slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  style={{
                    background: fishDatabase[4].heroGradient,
                    borderRadius: "12px",
                    height: "120px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "56px",
                    marginBottom: "12px",
                  }}
                >
                  {fishDatabase[4].emoji}
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    marginBottom: "4px",
                  }}
                >
                  {fishDatabase[4].commonName}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    fontStyle: "italic",
                    color: "var(--muted)",
                    marginBottom: "8px",
                  }}
                >
                  {fishDatabase[4].scientificName}
                </div>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.55,
                    color: "#475569",
                    margin: 0,
                  }}
                >
                  {fishDatabase[4].shortDescription}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
