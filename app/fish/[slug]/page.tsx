import Link from "next/link";
import { notFound } from "next/navigation";
import { getFishBySlug, fishDatabase, categories } from "@/app/lib/fishData";
import type { Metadata } from "next";

export function generateStaticParams() {
  return fishDatabase.map((fish) => ({ slug: fish.slug }));
}

export async function generateMetadata(
  props: PageProps<"/fish/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const fish = getFishBySlug(slug);
  if (!fish) return { title: "Fish Not Found — Zukipedia" };
  return {
    title: `${fish.commonName} (${fish.scientificName}) — Zukipedia`,
    description: fish.shortDescription,
  };
}

export default async function FishArticlePage(props: PageProps<"/fish/[slug]">) {
  const { slug } = await props.params;
  const fish = getFishBySlug(slug);

  if (!fish) {
    notFound();
  }

  const category = categories.find((c) => c.slug === fish.category);

  return (
    <div className="article-container">
      {/* Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="breadcrumb-sep">›</span>
        {category && (
          <>
            <Link href={`/category/${category.slug}`}>{category.name}</Link>
            <span className="breadcrumb-sep">›</span>
          </>
        )}
        <span>{fish.commonName}</span>
      </nav>

      {/* Article Hero */}
      <div className="article-hero">
        <div
          className="article-hero-bg"
          style={{ background: fish.heroGradient }}
        >
          <span className="article-hero-emoji">{fish.emoji}</span>
          <div className="article-hero-overlay">
            <div className="article-hero-label">
              {category?.icon} {category?.name}
            </div>
            <h1 className="article-hero-title">{fish.commonName}</h1>
            <div className="article-hero-sci">{fish.scientificName}</div>
          </div>
        </div>
      </div>

      {/* Two-Column Layout */}
      <div className="article-layout">
        {/* Article Body */}
        <div className="article-body">
          {/* Introduction */}
          <p className="article-intro">
            <strong>{fish.commonName}</strong> (
            <em>{fish.scientificName}</em>) — {fish.description}
          </p>

          {/* Table of Contents */}
          <div className="toc" id="table-of-contents">
            <div className="toc-title">📑 Contents</div>
            <ol className="toc-list">
              {fish.sections.map((section) => (
                <li key={section.title}>
                  <a
                    href={`#${section.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* Sections */}
          {fish.sections.map((section) => (
            <section
              className="article-section"
              key={section.title}
              id={section.title.toLowerCase().replace(/\s+/g, "-")}
            >
              <h2 className="article-section-title">
                {section.title}
                <a
                  href={`#${section.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="section-anchor"
                  aria-label={`Link to ${section.title}`}
                >
                  #
                </a>
              </h2>
              <p>{section.content}</p>
            </section>
          ))}

          {/* Did You Know Callout */}
          {fish.didYouKnow && (
            <div className="dyk-item" style={{ marginTop: "24px" }}>
              <span className="dyk-icon">💡</span>
              <p className="dyk-text">
                <strong>Did you know?</strong> {fish.didYouKnow}
              </p>
            </div>
          )}
        </div>

        {/* Infobox Sidebar */}
        <aside>
          <div className="infobox" id="taxonomy-infobox">
            <div className="infobox-header">
              {fish.commonName}
            </div>
            <div className="infobox-emoji">{fish.emoji}</div>
            <table className="infobox-table">
              <tbody>
                <tr>
                  <th>Status</th>
                  <td>
                    <span
                      className={`conservation-badge ${fish.conservationStatus.toLowerCase()}`}
                    >
                      {fish.conservationStatus} — {fish.conservationLabel}
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>Kingdom</th>
                  <td>{fish.kingdom}</td>
                </tr>
                <tr>
                  <th>Phylum</th>
                  <td>{fish.phylum}</td>
                </tr>
                <tr>
                  <th>Class</th>
                  <td>{fish.classname}</td>
                </tr>
                <tr>
                  <th>Order</th>
                  <td>{fish.order}</td>
                </tr>
                <tr>
                  <th>Family</th>
                  <td>{fish.family}</td>
                </tr>
                <tr>
                  <th>Scientific</th>
                  <td>
                    <em>{fish.scientificName}</em>
                  </td>
                </tr>
                <tr>
                  <th>Habitat</th>
                  <td>{fish.habitat}</td>
                </tr>
                <tr>
                  <th>Diet</th>
                  <td>{fish.diet}</td>
                </tr>
                <tr>
                  <th>Size</th>
                  <td>{fish.size}</td>
                </tr>
                <tr>
                  <th>Weight</th>
                  <td>{fish.weight}</td>
                </tr>
                <tr>
                  <th>Lifespan</th>
                  <td>{fish.lifespan}</td>
                </tr>
                <tr>
                  <th>Range</th>
                  <td>{fish.distribution}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </aside>
      </div>
    </div>
  );
}
