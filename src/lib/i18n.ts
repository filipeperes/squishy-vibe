export const locales = ["en", "pt", "es", "da", "sv"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English", pt: "Português", es: "Español", da: "Dansk", sv: "Svenska",
};

export const localeTags: Record<Locale, string> = {
  en: "en", pt: "pt-BR", es: "es", da: "da", sv: "sv",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

type Copy = {
  navProducts: string; navAbout: string; language: string; eyebrow: string; heroTitle: string;
  heroAccent: string; heroText: string; explore: string; howItWorks: string;
  focusOne: string; focusOneText: string; focusTwo: string; focusTwoText: string;
  focusThree: string; focusThreeText: string; catalogTitle: string; catalogIntro: string;
  catalogEmpty: string; catalogEmptyText: string; aboutTitle: string; aboutText: string;
  shippingTitle: string; shippingText: string; affiliateNote: string; productDetails: string;
  viewOffer: string; images: string; shippingCheck: string; back: string; internationalShipping: string;
};

export const copy: Record<Locale, Copy> = {
  en: {
    navProducts: "Products", navAbout: "How it works", language: "Language", eyebrow: "Discover your next favorite",
    heroTitle: "Find your", heroAccent: "squishy vibe", heroText: "Explore squishy toys across styles and shapes. We only feature affiliate offers after confirming international shipping for at least one destination outside the seller's country.",
    explore: "Explore products", howItWorks: "How it works", focusOne: "Discover", focusOneText: "Browse shapes, finishes, and collections.",
    focusTwo: "Compare", focusTwoText: "Check the seller's current photos, variations, and terms.", focusThree: "Shop", focusThreeText: "Complete payment and delivery directly with the seller.",
    catalogTitle: "Squishy picks", catalogIntro: "Internationally shippable offers, reviewed before they appear here.",
    catalogEmpty: "Our global catalog is being curated", catalogEmptyText: "No affiliate offer has passed our international shipping checks yet. Check back as verified products are added.",
    aboutTitle: "A global guide to squishies", aboutText: "Squishy Vibe helps you discover and compare squishy toys. We are an independent affiliate showcase; each seller handles checkout, shipping, and returns.",
    shippingTitle: "Check delivery before checkout", shippingText: "Availability, destination countries, price, taxes, and shipping time can change. Confirm all details on the seller's product page.",
    affiliateNote: "Some outbound links are affiliate links. We may earn a commission from qualifying purchases at no extra cost to you.",
    productDetails: "Product details", viewOffer: "View offer at {marketplace}", images: "Product media", shippingCheck: "Confirm shipping to your country on the seller's page.", back: "Back to products", internationalShipping: "International shipping",
  },
  pt: {
    navProducts: "Produtos", navAbout: "Como funciona", language: "Idioma", eyebrow: "Descubra seu próximo favorito",
    heroTitle: "Encontre seu", heroAccent: "squishy vibe", heroText: "Explore squishies de vários formatos e estilos. Só exibimos ofertas de afiliados após confirmar envio internacional para ao menos um destino fora do país do vendedor.",
    explore: "Explorar produtos", howItWorks: "Como funciona", focusOne: "Descubra", focusOneText: "Veja formatos, acabamentos e coleções.",
    focusTwo: "Compare", focusTwoText: "Confira fotos, variações e condições atuais do vendedor.", focusThree: "Compre", focusThreeText: "Finalize pagamento e entrega diretamente na loja.",
    catalogTitle: "Seleção de squishies", catalogIntro: "Ofertas com envio internacional verificadas antes de entrar na vitrine.",
    catalogEmpty: "Estamos preparando o catálogo global", catalogEmptyText: "Nenhuma oferta de afiliado passou ainda pela checagem de envio internacional. Os produtos verificados aparecerão aqui.",
    aboutTitle: "Um guia global de squishies", aboutText: "A Squishy Vibe ajuda a descobrir e comparar squishies. Somos uma vitrine independente de afiliados; cada loja cuida do pagamento, envio e devoluções.",
    shippingTitle: "Confira a entrega antes de comprar", shippingText: "Disponibilidade, países atendidos, preço, impostos e prazo podem mudar. Confirme tudo na página do vendedor.",
    affiliateNote: "Alguns links são de afiliados. Podemos receber comissão por compras qualificadas, sem custo adicional para você.",
    productDetails: "Detalhes do produto", viewOffer: "Ver oferta na {marketplace}", images: "Mídias do produto", shippingCheck: "Confirme o envio para seu país na loja.", back: "Voltar aos produtos", internationalShipping: "Envio internacional",
  },
  es: {
    navProducts: "Productos", navAbout: "Cómo funciona", language: "Idioma", eyebrow: "Descubre tu próximo favorito",
    heroTitle: "Encuentra tu", heroAccent: "squishy vibe", heroText: "Explora squishies de distintas formas y estilos. Solo mostramos ofertas de afiliados tras confirmar envío internacional a un destino fuera del país del vendedor.",
    explore: "Explorar productos", howItWorks: "Cómo funciona", focusOne: "Descubre", focusOneText: "Explora formas, acabados y colecciones.",
    focusTwo: "Compara", focusTwoText: "Consulta fotos, variantes y condiciones actuales del vendedor.", focusThree: "Compra", focusThreeText: "Paga y organiza la entrega directamente en la tienda.",
    catalogTitle: "Selección de squishies", catalogIntro: "Ofertas con envío internacional verificadas antes de aparecer aquí.",
    catalogEmpty: "Estamos preparando el catálogo global", catalogEmptyText: "Todavía no hay ofertas de afiliados que hayan pasado nuestra verificación de envío internacional.",
    aboutTitle: "Una guía global de squishies", aboutText: "Squishy Vibe te ayuda a descubrir y comparar squishies. Somos una vitrina independiente de afiliados; cada tienda gestiona el pago, envío y devoluciones.",
    shippingTitle: "Comprueba la entrega antes de comprar", shippingText: "La disponibilidad, los países de entrega, el precio, los impuestos y los plazos pueden cambiar. Confirma todo en la página del vendedor.",
    affiliateNote: "Algunos enlaces son de afiliados. Podemos recibir una comisión por compras que cumplan los requisitos, sin coste adicional para ti.",
    productDetails: "Detalles del producto", viewOffer: "Ver oferta en {marketplace}", images: "Contenido del producto", shippingCheck: "Confirma el envío a tu país en la tienda.", back: "Volver a productos", internationalShipping: "Envío internacional",
  },
  da: {
    navProducts: "Produkter", navAbout: "Sådan fungerer det", language: "Sprog", eyebrow: "Find din næste favorit",
    heroTitle: "Find din", heroAccent: "squishy vibe", heroText: "Udforsk squishy legetøj i forskellige former og stilarter. Vi viser kun affiliate tilbud, når international levering til mindst ét land uden for sælgerens land er bekræftet.",
    explore: "Se produkter", howItWorks: "Sådan fungerer det", focusOne: "Udforsk", focusOneText: "Se former, detaljer og kollektioner.",
    focusTwo: "Sammenlign", focusTwoText: "Tjek sælgerens aktuelle billeder, varianter og vilkår.", focusThree: "Køb", focusThreeText: "Betal og aftal levering direkte hos sælgeren.",
    catalogTitle: "Udvalgte squishies", catalogIntro: "Tilbud med international levering gennemgås, før de vises her.",
    catalogEmpty: "Vi sammensætter det globale katalog", catalogEmptyText: "Ingen affiliate tilbud har endnu bestået vores kontrol af international levering.",
    aboutTitle: "En global guide til squishies", aboutText: "Squishy Vibe hjælper dig med at opdage og sammenligne squishy legetøj. Vi er en uafhængig affiliate oversigt; sælgeren håndterer betaling, levering og retur.",
    shippingTitle: "Tjek levering før køb", shippingText: "Tilgængelighed, leveringslande, pris, afgifter og leveringstid kan ændre sig. Bekræft alle detaljer hos sælgeren.",
    affiliateNote: "Nogle links er affiliate links. Vi kan modtage provision fra kvalificerede køb uden ekstra omkostninger for dig.",
    productDetails: "Produktdetaljer", viewOffer: "Se tilbud hos {marketplace}", images: "Produktmedier", shippingCheck: "Bekræft levering til dit land hos sælgeren.", back: "Tilbage til produkter", internationalShipping: "International levering",
  },
  sv: {
    navProducts: "Produkter", navAbout: "Så fungerar det", language: "Språk", eyebrow: "Hitta din nästa favorit",
    heroTitle: "Hitta din", heroAccent: "squishy vibe", heroText: "Utforska squishy leksaker i olika former och stilar. Vi visar bara affiliaterbjudanden när internationell leverans till minst ett land utanför säljarens land har bekräftats.",
    explore: "Utforska produkter", howItWorks: "Så fungerar det", focusOne: "Upptäck", focusOneText: "Se former, detaljer och kollektioner.",
    focusTwo: "Jämför", focusTwoText: "Kontrollera säljarens aktuella bilder, varianter och villkor.", focusThree: "Handla", focusThreeText: "Betala och ordna leverans direkt hos säljaren.",
    catalogTitle: "Utvalda squishies", catalogIntro: "Erbjudanden med internationell leverans granskas innan de visas här.",
    catalogEmpty: "Vi sammanställer den globala katalogen", catalogEmptyText: "Inga affiliaterbjudanden har ännu klarat vår kontroll av internationell leverans.",
    aboutTitle: "En global guide till squishies", aboutText: "Squishy Vibe hjälper dig att upptäcka och jämföra squishy leksaker. Vi är en oberoende affiliatesida; säljaren hanterar betalning, leverans och returer.",
    shippingTitle: "Kontrollera leverans före köp", shippingText: "Tillgänglighet, leveransländer, pris, skatter och leveranstid kan ändras. Bekräfta alla detaljer hos säljaren.",
    affiliateNote: "Vissa länkar är affiliatelänkar. Vi kan få provision för kvalificerade köp utan extra kostnad för dig.",
    productDetails: "Produktinformation", viewOffer: "Se erbjudandet hos {marketplace}", images: "Produktmedia", shippingCheck: "Bekräfta leverans till ditt land hos säljaren.", back: "Tillbaka till produkter", internationalShipping: "Internationell leverans",
  },
};
