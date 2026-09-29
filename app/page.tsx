import Link from "next/link";
import Image from "next/image";
import { fishDatabase, categories, getFeaturedFish } from "@/app/lib/fishData";

export default function Home() {
  const featuredFish = getFeaturedFish();
  const didYouKnowItems = fishDatabase.filter((f) => f.didYouKnow);

  return (
    <div>
      {/* Hero Banner */}
      <div className="hero-banner" id="hero-banner">
        <div className="hero-content">
          <div className="hero-eyebrow">Welcome to Zukipedia</div>
          <h1 className="hero-title">
            The Free Encyclopedia
            <br />
            of Fish Species
          </h1>
          <p className="hero-subtitle">
            Explore detailed articles on fish species from around the world — 
            from vibrant coral reef dwellers to mysterious deep-sea creatures.
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
              <span className="card-header-icon" style={{ color: "var(--blue-500)" }}>★</span>
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
                  <div className="card-body" style={{ borderBottom: "1px solid var(--border)" }}>
                    <div className="featured-hero-img">
                      <Image
                        src={fish.imagePath}
                        alt={fish.commonName}
                        width={800}
                        height={400}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
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
          <div className="card" style={{ marginTop: "20px" }} id="all-species">
            <div className="card-header">
              <span className="card-header-icon" style={{ color: "var(--blue-500)" }}>☰</span>
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
                    <div className="species-item-thumb">
                      <Image
                        src={fish.imagePath}
                        alt={fish.commonName}
                        width={72}
                        height={72}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
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
              <span className="card-header-icon" style={{ color: "var(--blue-500)" }}>?</span>
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
                      <div className="dyk-icon">
                        <Image
                          src={fish.imagePath}
                          alt={fish.commonName}
                          width={72}
                          height={72}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>
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
          <div className="card" style={{ marginTop: "16px" }} id="categories-card">
            <div className="card-header">
              <span className="card-header-icon" style={{ color: "var(--blue-500)" }}>≡</span>
              <span className="card-header-title">Browse by Category</span>
            </div>
            <div className="card-body" style={{ padding: "6px 10px" }}>
              <div className="species-list">
                {categories.map((cat) => (
                  <Link
                    href={`/category/${cat.slug}`}
                    className="species-item"
                    key={cat.slug}
                    id={`home-category-${cat.slug}`}
                  >
                    <span className="species-item-emoji" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--blue-500)", margin: "0 8px" }}></span>
                    <div className="species-item-info">
                      <div className="species-item-name">{cat.name}</div>
                      <div className="species-item-sci">
                        {cat.count} species
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Species Spotlight */}
          <div className="card" style={{ marginTop: "16px" }} id="spotlight-card">
            <div className="card-header">
              <span className="card-header-icon" style={{ color: "var(--blue-500)" }}>◎</span>
              <span className="card-header-title">Species Spotlight</span>
            </div>
            <div className="card-body">
              <Link
                href={`/fish/${fishDatabase[4].slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  style={{
                    borderRadius: "6px",
                    height: "120px",
                    overflow: "hidden",
                    marginBottom: "10px",
                  }}
                >
                  <Image
                    src={fishDatabase[4].imagePath}
                    alt={fishDatabase[4].commonName}
                    width={640}
                    height={240}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ fontSize: "15px", fontWeight: 700, marginBottom: "2px" }}>
                  {fishDatabase[4].commonName}
                </div>
                <div style={{ fontSize: "12.5px", fontStyle: "italic", color: "var(--muted)", marginBottom: "6px" }}>
                  {fishDatabase[4].scientificName}
                </div>
                <p style={{ fontSize: "13px", lineHeight: 1.5, color: "var(--gray-600)", margin: 0 }}>
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
