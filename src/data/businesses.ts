import nerminPdf from "../assets/nermin.pdf";
export type BusinessProfile = {
  id: string;
  name: string;
  category: string;
  email?: string;
  website?: string;
  phone?: string;
  story: string;
  instagramEmbedUrl?: string;
  pdfUrl?: string;
};

const placeholderStory =
  "We will capture each family's 1–2 paragraph story here once the details are ready. This temporary text ensures the layout reflects the intended length and provides a reminder to circle back.\n\nPlease keep any notes about this family's journey handy so we can replace this placeholder quickly during the next pass.";

const toInstagramEmbed = (url?: string) => {
  if (!url || !url.includes("instagram.com")) return undefined;
  const cleaned = url.split("?")[0].replace(/\/?$/, "");
  return `${cleaned}/embed`;
};

export const businesses: BusinessProfile[] = [
  {
    id: "mo-cuts",
    name: "Mo Cuts",
    category: "Barber",
    phone: "2897075944",
    story:
      "Mo Cuts Studio was founded by a Gazan barber who learned his craft in Gaza during the genocide and continues that work here in Canada. Built on skill, precision, and passion, the studio offers expert cuts and grooming that blend authentic technique with modern style.",
    instagramEmbedUrl: toInstagramEmbed("https://www.instagram.com/mo_cuts07"),
  },
  {
    id: "yansoona-bakery",
    name: "Yansoona Bakery",
    category: "Date Cookie Bracelets",
    email: "neqdaih@gmail.com",
    instagramEmbedUrl: toInstagramEmbed(
      "https://www.instagram.com/yansoonabakery/"
    ),
    phone: "905 971 6700",
    story:
      'At "Yansoona" (meaning "Anise" in Arabic), we craft our mouth-melting, well-spiced treasures to decorate your tables on every delightful occasion. Paired with a cup of aromatic tea or coffee, each bite invites you to savor moments of joy, heritage, and togetherness. Our Date Bracelet Cookies (Kaak Asawer) bring the taste and aroma of Gazan Eid nights into your home.',
  },
  {
    id: "bid-zone-canada",
    name: "AUCTION ZONE CANADA INC",
    category: "Art / Merchandise",
    website: "https://www.auctionzone.ca/",
    email: "auctionzoneservice@gmail.com",
    instagramEmbedUrl: toInstagramEmbed(
      "https://www.instagram.com/auctionzone_canada/"
    ),
    phone: "437 772 4147",
    story:
      "Auction Zone Canada is your go-to bidding platform where excitement meets opportunity. Discover unique items, great value, and hidden deals with surprises waiting inside every auction!",
  },
  {
    id: "al-dar-catering",
    name: "Al Dar Catering",
    category: "Food",
    instagramEmbedUrl: toInstagramEmbed(
      "https://www.instagram.com/al_dar_catering/"
    ),
    phone: "905 749 6560",
    story:
      "Al Dar Catering was founded to blend a deep passion for cooking with a commitment to preserving the richness of Palestinian cuisine. Each dish embodies the taste of home and the warmth of tradition, crafted with care to satisfy every palate. Where skill meets heritage, Al Dar brings authentic flavors to every table.",
  },
  {
    id: "supreme-car-wash",
    name: "Supreme Car Wash",
    category: "Car Detailing",
    phone: "(905) 749-3912",
    instagramEmbedUrl: toInstagramEmbed(
      "https://www.instagram.com/supreme__car_wash/"
    ),
    story:
      "Supreme Car Wash was founded to provide high-quality car cleaning services at fair, accessible prices while building a family business that helps support our new life in Canada. With care, precision, and dedication, every wash reflects our commitment to excellence and community.",
  },
  {
    id: "rajaa-moda",
    name: "Rajaa Moda",
    category: "Clothes",
    phone: "6476400334",
    story:
      "Rajaa Moda offers elegant women's sets, pyjamas, and stylish hijabs that blend comfort with timeless design. Inspired by refined Turkish fashion, each piece celebrates beauty in modesty and effortless everyday style.",
    instagramEmbedUrl: toInstagramEmbed("https://www.instagram.com/rmoda426"),
  },
  {
    id: "forno-amore",
    name: "Forno Amore",
    category: "Food",
    email: "nourrajjab@gmail.com",
    instagramEmbedUrl: toInstagramEmbed(
      "https://www.instagram.com/forno._amore/"
    ),
    phone: "(437) 385-2655",
    story:
      "Forno Amore is a Palestinian homemade bakery sharing the authentic flavors of Palestine, made from heart to heart. Every baked good is crafted with love, tradition, and the warmth of home, bringing a taste of Palestine to your table.",
  },
  {
    id: "lammetna",
    name: "Lammetna",
    category: "Food",
    instagramEmbedUrl: toInstagramEmbed(
      "https://www.instagram.com/lammetnakitchen/"
    ),
    phone: "(437) 385-7818",
    story:
      "Inspired by the warmth of Palestinian hospitality, Lammetna serves a delightful mix of traditional dishes, pastries, and desserts. Every recipe carries the familiar comfort of home-cooked flavor, inviting you to gather, share, and savor the true taste of Palestine.",
  },
  {
    id: "nermin-aiad-design",
    name: "Nermin Aiad",
    category: "Design",
    website: "https://www.behance.net/nermin-aiad?locale=de_DE",
    email: "nerminfora5@gmail.com",
    phone: "970 597 790 536",
    story:
      "Nermin Aiad is a graphic designer who brings ideas to life through meaningful design--crafting branding, business cards, flyers, and social media visuals that tell each project's story. Her love for art also flows into her tatreez, where every stitch weaves the stories of her homeland and keeps its heritage alive.",
    pdfUrl: nerminPdf,
  },
  {
    id: "palestinian-hands",
    name: "Palestinian hands",
    category: "Selling handmade Palestinian embroidery goods",
    instagramEmbedUrl: toInstagramEmbed(
      "https://www.instagram.com/palestinianhand2025/"
    ),
    website: "https://palestinian-hands.com/",
    email: "elramlylaila8@gmail.com",
    phone: "4167956011",
    story:
      "Palestinian Hands was founded to revitalize, preserve, and celebrate Palestinian heritage through the work of Palestinian artisans themselves. Each handmade piece carries the depth of our history and the strength of our identity. Every Palestinian stitch tells a story--one of culture, resilience, and enduring beauty.",
  },
  {
    id: "cake-up",
    name: "Cake up",
    category: "Cakes / Dessert",
    phone: "437-662-6262",
    story:
      "Founded by a Gazan baker building a new chapter in Canada, Cake Up blends tradition with creativity to craft beautifully made cakes, cupcakes, and cheesecakes. Each dessert reflects a passion for flavor, design, and the comforting sweetness of home.",
    instagramEmbedUrl: toInstagramEmbed("https://www.instagram.com/cake_up_1"),
  },
  {
    id: "nevins-maamool",
    name: "Nevin's Ma3mool",
    category: "Ma3mool and Ka'ak",
    story:
      "Nevin's Ma'amool crafts traditional ma'amool cookies the Gazawi way, delicate, fragrant, and filled with the flavors of home. Each piece is made with care and love, preserving a timeless taste passed down through generations.",
    instagramEmbedUrl: toInstagramEmbed(
      "https://www.instagram.com/gaza.cookies"
    ),
  },
  {
    id: "neveens-kitchen",
    name: "Neveen's Kitchen",
    category: "Food",
    instagramEmbedUrl: toInstagramEmbed(
      "https://www.instagram.com/neveens.kitchen/"
    ),
    phone: "437 838 6177",
    story: placeholderStory,
  },
];
