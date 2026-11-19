const siteUrl = "https://www.edisonnook.com";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

export function WebsiteStructuredData() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Edison Nook",
        alternateName: "Edison Nook Northern Michigan",
        url: siteUrl,
      }}
    />
  );
}

export function BreadcrumbStructuredData({ label, path }: { label: string; path: string }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: label, item: `${siteUrl}${path}` },
        ],
      }}
    />
  );
}
