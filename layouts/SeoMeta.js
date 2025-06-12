"use client";

import config from "../config/config.json";
import { usePathname } from "next/navigation";

const SeoMeta = ({ title, description }) => {
  const pathname = usePathname();
  const { meta_image, meta_author, meta_description } = config.metadata;
  const { base_url, title: defaultTitle } = config.site;

  const finalTitle = title || defaultTitle;
  const finalDescription = description || meta_description;
  const pageUrl = `${base_url}${pathname}`;

  return (
    <>
      {/* Title */}
      <title>{finalTitle}</title>

      {/* Meta Tags */}
      <meta name="description" content={finalDescription} />
      <meta name="author" content={meta_author} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={`${base_url}${meta_image}`} />

      {/* Twitter Tags */}
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={`${base_url}${meta_image}`} />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
};

export default SeoMeta;
