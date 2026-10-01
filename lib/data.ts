export type Product = {
  slug: string;
  name: string;
  category: string;
  price?: string;
  badge?: string;
  description: string;
  specs: string[];
  image: string;

  // Filtros
  brand?: string;
  power?: number;
  powerUnit?: string;
  systemType?: string;
  application?: string;
  technology?: string;
  availability?: string;
};

export const categories = [
  ["Painéis Solares", "painel", "Produção de energia limpa"],
  ["Inversores", "inversor", "Conversão e gestão de energia"],
  ["Baterias", "bateria", "Armazenamento de energia"],
  ["Bombas Solares", "bomba", "Água e irrigação"],
  ["Estruturas", "estrutura", "Montagem segura"],
  ["Cabos e Acessórios", "acessorio", "Instalação completa"],
];

export const products: Product[] = [
  // ============================================================
  // PRODUTOS EM DESTAQUE
  // ============================================================

  {
    name: "Inversor LuxPower 5kW 48V",
    slug: "inversor-luxpower-5kw-48v",
    category: "Inversores",
    description:
      "Inversor LuxPower de 5 kW com sistema de bateria de 48V.",
    image: "/products/inversor-luxpower-5kw-48v.png",
    price: "55.500 MT",
    badge: "Destaque",

    specs: [
      "Potência: 5 kW",
      "Tensão de bateria: 48V",
      "Marca: LuxPower",
    ],

    brand: "LuxPower",
    power: 5,
    powerUnit: "kW",
    availability: "Disponível",
  },

  {
    name: "Inversor LuxPower 12kW 48V",
    slug: "inversor-luxpower-12kw-48v",
    category: "Inversores",
    description:
      "Inversor LuxPower de 12 kW com sistema de bateria de 48V.",
    image: "/products/inversor-luxpower-12kw-48v.png",
    price: "185.890 MT",
    badge: "Destaque",

    specs: [
      "Potência: 12 kW",
      "Tensão de bateria: 48V",
      "Marca: LuxPower",
    ],

    brand: "LuxPower",
    power: 12,
    powerUnit: "kW",
    availability: "Disponível",
  },

  {
    name: "Inversor Deye 12kW 48V",
    slug: "inversor-deye-12kw-48v",
    category: "Inversores",
    description:
      "Inversor Deye de 12 kW com sistema de bateria de 48V.",
    image: "/products/Inverters-Deye-12kW-1-Phase-48V-Hybrid-Inverter.png",
    price: "220.760 MT",
    badge: "Destaque",

    specs: [
      "Potência: 12 kW",
      "Tensão de bateria: 48V",
      "Marca: Deye",
    ],

    brand: "Deye",
    power: 12,
    powerUnit: "kW",
    availability: "Disponível",
  },

  {
    name: "Inversor Deye 20kW High Voltage",
    slug: "inversor-deye-20kw-high-voltage",
    category: "Inversores",
    description:
      "Inversor Deye de 20 kW com sistema de alta tensão.",
    image: "/products/inversor-deye-20kw-high-voltage.png",
    price: "440.220 MT",
    badge: "Destaque",

    specs: [
      "Potência: 20 kW",
      "Sistema: High Voltage",
      "Marca: Deye",
    ],

    brand: "Deye",
    power: 20,
    powerUnit: "kW",
    systemType: "High Voltage",
    availability: "Disponível",
  },
];

// ============================================================
// PRODUTOS EM DESTAQUE
// ============================================================

export const featuredProducts = [
  "inversor-luxpower-5kw-48v",
  "inversor-luxpower-12kw-48v",
  "inversor-deye-12kw-48v",
  "inversor-deye-20kw-high-voltage",
];

// ============================================================
// SOLUÇÕES
// ============================================================

export const solutions = [
  [
    "Residencial",
    "Energia solar para casas, condomínios e propriedades.",
    "/solutions/home.svg",
  ],
  [
    "Comercial",
    "Reduza custos energéticos e aumente a autonomia da sua empresa.",
    "/solutions/business.svg",
  ],
  [
    "Industrial",
    "Projetos fotovoltaicos de média e grande escala.",
    "/solutions/industry.svg",
  ],
  [
    "Off-Grid",
    "Energia onde a rede elétrica não chega.",
    "/solutions/offgrid.svg",
  ],
  [
    "Agricultura",
    "Bombagem e irrigação com energia solar.",
    "/solutions/agriculture.svg",
  ],
  [
    "Institucional",
    "Escolas, hospitais, universidades, ONGs e instituições públicas.",
    "/solutions/institutional.svg",
  ],
];

// ============================================================
// PROJETOS
// ============================================================

export const projects = [
  {
    slug: "sistema-50kw",
    title: "Sistema Solar 50 kW",
    type: "Comercial",
    location: "Moçambique",
    image: "/projects/project.svg",
  },
  {
    slug: "sistema-residencial",
    title: "Sistema Residencial Híbrido",
    type: "Residencial",
    location: "Maputo",
    image: "/projects/project.svg",
  },
  {
    slug: "irrigacao-solar",
    title: "Bombagem Solar para Irrigação",
    type: "Agrícola",
    location: "Moçambique",
    image: "/projects/project.svg",
  },
];

// ============================================================
// BANNERS
// ============================================================

export const marketplaceBanners = [
  {
    title: "Energia solar para todos",
    sub: "Soluções completas em Moçambique",
    image: "/market/Casa Painel Solar.png",
  },
  {
    title: "Inversores e baterias",
    sub: "Tecnologia para maior autonomia",
    image: "/market/Bombas.png",
  },
];

// ============================================================
// MARCAS
// ============================================================

export const brands = [
  "LuxPower",
  "Deye",
  "Megatron",
  "MUST",
  "Jinko Solar",
  "LONGi",
  "JA Solar",
  "Tigo",
];