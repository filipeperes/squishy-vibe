"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/lib/catalog";

export function ProductMedia({ product, label, title }: { product: Product; label: string; title: string }) {
  const media = [
    ...(product.videoUrl ? [{ kind: "video" as const, url: product.videoUrl }] : []),
    ...product.images.map((url) => ({ kind: "image" as const, url })),
  ];
  const [active, setActive] = useState(0);
  const selected = media[active];
  return <div aria-label={label} className="product-media">
    <div className="media-main">
      {selected?.kind === "video" ? <video controls playsInline preload="none" src={selected.url} /> : selected ? <Image src={selected.url} alt={`${title} ${active + 1}`} width={800} height={800} priority /> : null}
    </div>
    {media.length > 1 ? <div className="media-thumbs">{media.map((item, index) => <button key={item.url} type="button" className={active === index ? "active" : ""} onClick={() => setActive(index)} aria-label={`${label} ${index + 1}`} aria-pressed={active === index}>{item.kind === "video" ? "▶" : <Image src={item.url} alt="" width={72} height={72} />}</button>)}</div> : null}
  </div>;
}
