import type { Locale } from "@/lib/i18n";

type SeoContent = {
  title: string;
  description: string;
  guideTitle: string;
  guideIntro: string;
  sections: { title: string; text: string }[];
  faqTitle: string;
  faqs: { question: string; answer: string }[];
};

export const seoContent: Record<Locale, SeoContent> = {
  en: {
    title: "Squishy Toys: Global Guide & International Picks",
    description: "Discover squishy toys, compare glitter, dumpling, mystery-box and multipack styles, and browse affiliate offers with international shipping.",
    guideTitle: "Squishy toys: a practical guide",
    guideIntro: "Squishy is the common name for a squeezable toy that compresses in the hand and regains its shape. Designs, finishes and packaging vary, so compare the exact listing before choosing.",
    sections: [
      { title: "Popular squishy styles", text: "Food shapes, dumplings, glitter finishes, surprise boxes and multipacks are common options. A surprise listing may send a random color or design, while a set includes more than one piece." },
      { title: "How to compare squishies", text: "Check the number of pieces, dimensions, finish, selectable variations and whether the design is random. Product photos help compare appearance, but the seller listing is the source for current specifications." },
      { title: "International delivery", text: "Confirm that the seller ships to your country before checkout. Price, availability, taxes, delivery time and import charges can change by destination." },
    ],
    faqTitle: "Squishy questions",
    faqs: [
      { question: "What is a squishy?", answer: "A squishy is a soft, squeezable toy designed to compress and return toward its original shape. The exact feel and construction vary by model." },
      { question: "What is a dumpling squishy?", answer: "It is a squishy shaped like a dumpling or bao, often presented in a small steamer-style basket. Some listings use a surprise format with a random color or finish." },
      { question: "Can I choose the color?", answer: "Only when the seller provides a selectable variation. Mystery and random-color listings may not guarantee the design shown in the main photo." },
      { question: "Does Squishy Vibe sell the products?", answer: "No. Squishy Vibe is an independent affiliate showcase. The seller handles price, payment, shipping and returns." },
    ],
  },
  pt: {
    title: "Squishy: guia, tipos e ofertas internacionais",
    description: "Descubra o que é squishy, compare modelos dumpling, glitter, caixa surpresa e kits, e veja ofertas de afiliados com envio internacional.",
    guideTitle: "Squishy: guia prático para escolher",
    guideIntro: "Squishy é o nome usado para um brinquedo macio de apertar, que se comprime na mão e recupera o formato. Modelos, acabamentos e embalagens variam, por isso compare o anúncio exato antes de escolher.",
    sections: [
      { title: "Tipos populares de squishy", text: "Formatos de comida, dumpling squishy, acabamento com glitter, caixa surpresa e kits são opções comuns. Um anúncio surpresa pode enviar cor ou modelo aleatório; um kit reúne mais de uma peça." },
      { title: "Como comparar squishies", text: "Confira quantidade de peças, dimensões, acabamento, variações disponíveis e se o modelo é aleatório. As fotos ajudam a comparar a aparência, mas as especificações atuais devem ser confirmadas no anúncio da loja." },
      { title: "Envio internacional", text: "Antes de comprar, confirme se a loja entrega no seu país. Preço, disponibilidade, impostos, prazo e custos de importação podem variar conforme o destino." },
    ],
    faqTitle: "Dúvidas sobre squishy",
    faqs: [
      { question: "O que é squishy?", answer: "Squishy é um brinquedo macio feito para apertar, comprimir e retornar ao formato. A sensação e a composição exata variam conforme o modelo." },
      { question: "O que é dumpling squishy?", answer: "É um squishy no formato de dumpling ou bao, muitas vezes apresentado em uma cestinha que lembra uma vaporera. Alguns anúncios usam formato surpresa, com cor ou acabamento aleatório." },
      { question: "Posso escolher a cor do squishy?", answer: "Somente quando a loja oferece uma variação selecionável. Anúncios de caixa surpresa ou cor aleatória podem não garantir o modelo da foto principal." },
      { question: "A Squishy Vibe vende os produtos?", answer: "Não. A Squishy Vibe é uma vitrine independente de afiliados. Preço, pagamento, envio e devolução são responsabilidade da loja." },
    ],
  },
  es: {
    title: "Squishy: guía, tipos y ofertas internacionales",
    description: "Descubre qué es un squishy, compara dumplings, purpurina, cajas sorpresa y sets, y consulta ofertas con envío internacional.",
    guideTitle: "Squishy: guía práctica para elegir",
    guideIntro: "Squishy es el nombre común de un juguete blando que se comprime con la mano y recupera su forma. Los diseños, acabados y envases varían; compara siempre el anuncio exacto.",
    sections: [
      { title: "Tipos populares de squishy", text: "Las formas de comida, los dumplings, los acabados con purpurina, las cajas sorpresa y los sets son opciones habituales. Un producto sorpresa puede incluir un color o diseño aleatorio." },
      { title: "Cómo comparar squishies", text: "Comprueba el número de piezas, las dimensiones, el acabado, las variantes y si el diseño es aleatorio. Confirma las especificaciones actuales en el anuncio de la tienda." },
      { title: "Envío internacional", text: "Antes de pagar, confirma que la tienda envía a tu país. El precio, la disponibilidad, los impuestos, el plazo y los costes de importación dependen del destino." },
    ],
    faqTitle: "Preguntas sobre squishy",
    faqs: [
      { question: "¿Qué es un squishy?", answer: "Es un juguete blando diseñado para apretarse, comprimirse y recuperar su forma. La sensación y la composición exacta cambian según el modelo." },
      { question: "¿Qué es un dumpling squishy?", answer: "Es un squishy con forma de dumpling o bao, a menudo presentado en una cestita tipo vaporera. Algunas ofertas incluyen color o acabado aleatorio." },
      { question: "¿Puedo elegir el color?", answer: "Solo cuando la tienda ofrece una variante seleccionable. Una caja sorpresa puede no garantizar el diseño de la foto principal." },
      { question: "¿Squishy Vibe vende los productos?", answer: "No. Squishy Vibe es un escaparate independiente de afiliados. La tienda gestiona precio, pago, envío y devoluciones." },
    ],
  },
  da: {
    title: "Squishy legetøj: guide, typer og internationale tilbud",
    description: "Lær hvad squishy legetøj er, sammenlign dumplings, glitter, overraskelsesæsker og sæt, og se internationale tilbud.",
    guideTitle: "Squishy legetøj: en praktisk guide",
    guideIntro: "Squishy er navnet på blødt legetøj, der kan klemmes sammen i hånden og genfinder formen. Design, finish og emballage varierer, så sammenlign altid den konkrete vare.",
    sections: [
      { title: "Populære squishy typer", text: "Madformer, dumplings, glitterfinish, overraskelsesæsker og sæt er almindelige valg. En overraskelsesvare kan indeholde en tilfældig farve eller variant." },
      { title: "Sådan sammenligner du squishies", text: "Tjek antal dele, mål, finish, valgmuligheder og om designet er tilfældigt. Bekræft de aktuelle specifikationer i sælgerens varebeskrivelse." },
      { title: "International levering", text: "Bekræft levering til dit land før betaling. Pris, lagerstatus, afgifter, leveringstid og importomkostninger afhænger af destinationen." },
    ],
    faqTitle: "Spørgsmål om squishy legetøj",
    faqs: [
      { question: "Hvad er en squishy?", answer: "Det er blødt legetøj, der er lavet til at blive klemt sammen og genfinde formen. Følelse og konstruktion varierer efter model." },
      { question: "Hvad er en dumpling squishy?", answer: "Det er en squishy formet som en dumpling eller bao, ofte i en lille dampkurv. Nogle varer kommer som en tilfældig overraskelse." },
      { question: "Kan jeg vælge farven?", answer: "Kun hvis sælgeren tilbyder en valgmulighed. Overraskelsesvarer garanterer ikke altid farven på hovedbilledet." },
      { question: "Sælger Squishy Vibe produkterne?", answer: "Nej. Squishy Vibe er en uafhængig affiliateside. Sælgeren håndterer pris, betaling, levering og retur." },
    ],
  },
  sv: {
    title: "Squishy leksaker: guide, typer och internationella erbjudanden",
    description: "Lär dig vad squishy leksaker är, jämför dumplings, glitter, överraskningsboxar och set, och se internationella erbjudanden.",
    guideTitle: "Squishy leksaker: en praktisk guide",
    guideIntro: "Squishy är namnet på en mjuk leksak som kan tryckas ihop i handen och återfår formen. Design, finish och förpackning varierar, så jämför alltid den exakta varan.",
    sections: [
      { title: "Populära squishy typer", text: "Matformer, dumplings, glitterfinish, överraskningsboxar och set är vanliga alternativ. En överraskningsprodukt kan innehålla en slumpmässig färg eller variant." },
      { title: "Så jämför du squishies", text: "Kontrollera antal delar, mått, finish, valbara varianter och om designen är slumpmässig. Bekräfta aktuella specifikationer i säljarens annons." },
      { title: "Internationell leverans", text: "Bekräfta leverans till ditt land före betalning. Pris, lagerstatus, skatter, leveranstid och importkostnader beror på destinationen." },
    ],
    faqTitle: "Frågor om squishy leksaker",
    faqs: [
      { question: "Vad är en squishy?", answer: "Det är en mjuk leksak som är gjord för att tryckas ihop och återfå formen. Känsla och konstruktion varierar mellan modeller." },
      { question: "Vad är en dumpling squishy?", answer: "Det är en squishy formad som en dumpling eller bao, ofta i en liten ångkorg. Vissa produkter levereras som en slumpmässig överraskning." },
      { question: "Kan jag välja färg?", answer: "Bara om säljaren erbjuder ett val. Överraskningsprodukter garanterar inte alltid färgen på huvudbilden." },
      { question: "Säljer Squishy Vibe produkterna?", answer: "Nej. Squishy Vibe är en oberoende affiliatesida. Säljaren hanterar pris, betalning, leverans och returer." },
    ],
  },
};
