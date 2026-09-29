import Link from "next/link";
import Image from "next/image";
import { searchFish } from "@/app/lib/fishData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Results — Zukipedia",
  description: "Search for fish species on Zukipedia.",
};

export default async function SearchPage(props: PageProps<"/search">) {
  const searchParams = await props.searchParams;
  const query = typeof searchParams.q === "string" ? searchParams.q : "";
  const results = query ? searchFish(query) : [];

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="breadcrumb-sep">›</span>
        <span>Search Results</span>
      </nav>

      <h1 className="search-results-title">
        Search Results{" "}
        {query && (
          <span className="search-results-count">
            for &ldquo;{query}&rdquo; — {results.length}{" "}
            {results.length === 1 ? "result" : "results"}
          </span>
        )}
      </h1>

      {results.length > 0 ? (
        <div className="species-grid">
          {results.map((fish) => (
            <Link
              href={`/fish/${fish.slug}`}
              className="species-card"
              key={fish.slug}
              id={`search-result-${fish.slug}`}
            >
              <div className="card">
                <div className="species-card-hero">
                  <Image
                    src={fish.imagePath}
                    alt={fish.commonName}
                    width={600}
                    height={320}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="species-card-body">
                  <div className="species-card-name">{fish.commonName}</div>
                  <div className="species-card-sci">
                    {fish.scientificName}
                  </div>
                  <p className="species-card-desc">
                    {fish.shortDescription}
                  </p>
                </div>
                <div className="species-card-footer">
                  <span
                    className={`conservation-badge ${fish.conservationStatus.toLowerCase()}`}
                  >
                    {fish.conservationStatus}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <div className="no-results-emoji" style={{ color: "var(--gray-300)" }}>—</div>
          <h3>No species found</h3>
          <p>
            {query
              ? `We couldn't find any fish matching "${query}". Try a different search term.`
              : "Enter a search term to find fish species."}
          </p>
        </div>
      )}
    </div>
  );
}
