"use client";
import assets from "../../public/assets.json";

type AssetKey = keyof typeof assets;

export function ProjectImage({ id, className }: { id: AssetKey; className?: string }) {
  const asset = assets[id as keyof typeof assets] as any;
  if (!asset || !asset.url) {
    if (typeof window !== "undefined") {
      console.warn(`[ProjectImage] Missing asset for key: ${String(id)}`);
    }
    return <span aria-hidden="true" className={className} />;
  }
  return (
    <img
      src={asset.url}
      alt={asset.alt || ""}
      width={asset.width}
      height={asset.height}
      className={className}
      loading={id === "hero" ? "eager" : "lazy"}
      fetchPriority={id === "hero" ? "high" : "auto"}
    />
  );
}