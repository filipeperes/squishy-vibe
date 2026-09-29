import { NextResponse, type NextRequest } from "next/server";
import { getPublishedProduct } from "@/lib/catalog";

export async function GET(_request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getPublishedProduct(slug);
  if (!product) return new NextResponse("Offer unavailable", { status: 404 });
  return NextResponse.redirect(product.affiliateUrl, 307);
}
