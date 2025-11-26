export type BusinessProfile = {
  id: string;
  name: string;
  category: string;
  contact: string;
  emailOrSocial?: string;
  phone?: string;
  story: string;
  instagramEmbedUrl?: string;
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
    contact: "Mohammed AlHalis",
    emailOrSocial:
      "https://www.instagram.com/mo_cuts07?igsh=MWFjemd1eGhiZnJ6dA==",
    phone: "2897075944",
    story: placeholderStory,
    instagramEmbedUrl: toInstagramEmbed("https://www.instagram.com/mo_cuts07"),
  },
  {
    id: "yansoona-bakery",
    name: "Yansoona Bakery",
    category: "Date Cookie Bracelets",
    contact: "Nedaa Eqdaih",
    emailOrSocial: "neqdaih@gmail.com",
    phone: "905 971 6700",
    story: placeholderStory,
  },
  {
    id: "bid-zone-canada",
    name: "BID ZONE CANADA INC",
    category: "Art / Merchandise",
    contact: "HOSSAM JARGHON",
    emailOrSocial: "auctionzoneservice@gmail.com",
    phone: "437 772 4147",
    story: placeholderStory,
  },
  {
    id: "al-dar-catering",
    name: "Al Dar Catering",
    category: "Food",
    contact: "khalto Eman abu Mattar",
    phone: "905 749 6560",
    story: placeholderStory,
  },
  {
    id: "supreme-car-wash",
    name: "Supreme Car Wash",
    category: "Car Detailing",
    contact: "Abu Mattar",
    phone: "(905) 749-3912",
    story: placeholderStory,
  },
  {
    id: "rajaa-moda",
    name: "Rajaa Moda",
    category: "Clothes",
    contact: "Rajaa",
    emailOrSocial: "https://www.instagram.com/rmoda426?igsh=NGJxbjNtY2lxNTFm",
    phone: "6476400334",
    story: placeholderStory,
    instagramEmbedUrl: toInstagramEmbed("https://www.instagram.com/rmoda426"),
  },
  {
    id: "forno-amore",
    name: "Forno Amore",
    category: "Food",
    contact: "Sireen Alsaqqa",
    emailOrSocial: "nourrajjab@gmail.com",
    phone: "(437) 385-2655",
    story: placeholderStory,
  },
  {
    id: "lammetna",
    name: "Lammetna",
    category: "Food",
    contact: "Sabrine Alborno",
    phone: "(437) 385-7818",
    story: placeholderStory,
  },
  {
    id: "nermin-aiad-design",
    name: "Graphic Designer - Freelance",
    category: "Design",
    contact: "Nermin Aiad",
    emailOrSocial: "nerminfora5@gmail.com",
    phone: "970 597 790 536",
    story: placeholderStory,
  },
  {
    id: "palestinian-hands",
    name: "Palestinian hands",
    category: "Selling handmade Palestinian embroidery goods",
    contact: "Laila ahmad",
    emailOrSocial: "elramlylaila8@gmail.com",
    phone: "4167956011",
    story: placeholderStory,
  },
  {
    id: "cake-up",
    name: "Cake up",
    category: "Cakes / Dessert",
    contact: "Fedaa Yacoub",
    emailOrSocial:
      "https://www.instagram.com/cake_up_1?igsh=MTF5YjNrMTgwNnF3ZQ==",
    phone: "437-662-6262",
    story: placeholderStory,
    instagramEmbedUrl: toInstagramEmbed("https://www.instagram.com/cake_up_1"),
  },
  {
    id: "nevins-maamool",
    name: "Nevin's Ma3mool",
    category: "Ma3mool and Ka'ak",
    contact: "Nevin's family",
    emailOrSocial: "https://www.instagram.com/gaza.cookies/",
    story: placeholderStory,
    instagramEmbedUrl: toInstagramEmbed(
      "https://www.instagram.com/gaza.cookies"
    ),
  },
  {
    id: "neveens-kitchen",
    name: "Neveen's Kitchen",
    category: "Food",
    contact: "Nevin Abu Hassira",
    phone: "437 838 6177",
    story: placeholderStory,
  },
  {
    id: "hijab-islamic-fashion",
    name: "Hijab Islamic Fashion",
    category: "Clothes",
    contact: "Ayah El Sisi",
    phone: "437 830 6940",
    story: placeholderStory,
  },
];
