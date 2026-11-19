import type { Metadata } from "next";
import houseExterior from "./images/edison-nook-exterior.webp";

const siteName = "Edison Nook";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const fullTitle = `${title} | ${siteName}`;

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      title: fullTitle,
      description,
      url: path,
      images: [{
        url: houseExterior.src,
        width: houseExterior.width,
        height: houseExterior.height,
        alt: "Edison Nook farmhouse in Boyne Falls, Michigan",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [houseExterior.src],
    },
  };
}
