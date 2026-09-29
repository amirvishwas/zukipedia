import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { categories, getFishByCategory } from "@/app/lib/fishData";
import type { Metadata } from "next";

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata(
  props: PageProps<"/category/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return { title: "Category Not Found — Zukipedia" };
  return {
    title: `${category.name} — Zukipedia`,
    description: `Explore ${category.count} ${category.name.toLowerCase()} species on Zukipedia, the free fish encyclopedia.`,
  };
}

export default async function CategoryPage(props: PageProps<"/category/[slug]">) {
  const { slug } = await props.params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const fishList = getFishByCategory(slug);

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="breadcrumb-sep">›</span>
        <span>{category.name}</span>
      </nav>

      {/* Category Header */}
      <div className="category-header">
        <div className="category-icon-large" style={{ color: "var(--blue-500)", fontWeight: "bold" }}>Z</div>
        <div>
          <h1 className="category-title">{category.name}</h1>
          <p className="category-subtitle">
            {fishList.length} species in this category
          </p>
        </div>
      </div>

      {/* Species Grid */}
      {fishList.length > 0 ? (
        <div className="species-grid">
          {fishList.map((fish) => (
            <Link
              href={`/fish/${fish.slug}`}
              className="species-card"
              key={fish.slug}
              id={`card-${fish.slug}`}
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
                  <span
                    style={{
                      marginLeft: "auto",
                      fontSize: "12px",
                      color: "var(--muted)",
                    }}
                  >
                    {fish.habitat.split(",")[0]}
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
            This category doesn&apos;t have any species yet. Check back later or
            explore other categories!
          </p>
        </div>
      )}
    </div>
  );
}
