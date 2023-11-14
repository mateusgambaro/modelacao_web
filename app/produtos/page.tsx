import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";

const Products: React.FC = () => {
  const productsData = [
    {
      id: 1,
      title: "Termoformados",
      description:
        "Projeto e fabricação de moldes completos com refrigeração, facas integradas e dispositivos.",
      images: [
        {
          id: 1,
          image: "/terformados/termoformado1.jpeg",
        },
        {
          id: 2,
          image: "/terformados/termoformado2.jpeg",
        },
        {
          id: 3,
          image: "/terformados/termoformado3.jpeg",
        },
      ],
    },
    {
      id: 2,
      title: "Sopro",
      description:
        "Projeto e fabricação de moldes ferramentais e dispositivos com refrigeração e cilindros.",
      images: [
        {
          id: 1,
          image: "/sopro/sopro1.jpg",
        },
        {
          id: 2,
          image: "/sopro/sopro2.jpeg",
        },
        {
          id: 3,
          image: "/sopro/sopro3.jpeg",
        },
        {
          id: 4,
          image: "/sopro/sopro4.jpeg",
        },
      ],
    },
    {
      id: 3,
      title: "Fundição",
      description:
        "Projeto e fabricação de moldes ferramentais de alta produção e dispositivos de controle.",
      images: [
        {
          id: 1,
          image: "/fundicao/fun1.jpg",
        },
        {
          id: 2,
          image: "/fundicao/fun2.jpeg",
        },
        {
          id: 3,
          image: "/fundicao/fun3.jpeg",
        },
        {
          id: 4,
          image: "/fundicao/fun4.jpeg",
        },
        {
          id: 5,
          image: "/fundicao/fun5.jpeg",
        },
        {
          id: 6,
          image: "/fundicao/fun6.jpeg",
        },
        {
          id: 7,
          image: "/fundicao/fun7.jpeg",
        },
      ],
    },
    {
      id: 4,
      title: "Embalagem",
      description:
        "Projeto e fabricação de moldes para embalagem em EPP, EPS, PU, Polpa e Vacum Forming, a partir do arquivo 3D, amostras e protótipos.",
      images: [
        {
          id: 1,
          image: "/embalagens/emb1.jpeg",
        },
        {
          id: 2,
          image: "/embalagens/emb2.jpeg",
        },
        {
          id: 3,
          image: "/embalagens/emb3.jpeg",
        },
        {
          id: 4,
          image: "/embalagens/emb4.jpeg",
        },
      ],
    },
    {
      id: 5,
      title: "Dispositivos de Processo - Controle",
      description:
        "Projeto e fabricação de dispositivos de controle, resfriamento, rebarbadores e simuladores.",
      images: [
        {
          id: 1,
          image: "/dispotivos/disp1.jpg",
        },
        {
          id: 2,
          image: "/dispotivos/disp2.jpeg",
        },
        {
          id: 3,
          image: "/dispotivos/disp3.jpeg",
        },
        {
          id: 4,
          image: "/dispotivos/disp4.jpeg",
        },
        {
          id: 5,
          image: "/dispotivos/disp5.jpeg",
        },
      ],
    },
    {
      id: 6,
      title: "ABS",
      description:
        "Projeto e fabricação de peças funcionais, moldes pilotos e dispositivos.",
      images: [
        {
          id: 1,
          image: "/abs/abs1.jpeg",
        },
        {
          id: 2,
          image: "/abs/abs2.jpeg",
        },
        {
          id: 3,
          image: "/abs/abs3.jpeg",
        },
      ],
    },
    {
      id: 7,
      title: "Automotivos",
      description:
        "Projeto e fabricação de moldes ferramentais de alta complexidade.",
      images: [
        {
          id: 1,
          image: "/automoveis/auto1.jpeg",
        },
        {
          id: 2,
          image: "/automoveis/auto2.jpeg",
        },
        {
          id: 3,
          image: "/automoveis/auto3.jpeg",
        },
        {
          id: 4,
          image: "/automoveis/auto4.jpeg",
        },
        {
          id: 5,
          image: "/automoveis/auto5.jpeg",
        },
      ],
    },
    {
      id: 8,
      title: "Borracha",
      description:
        "Projeto e fabricação de moldes completos para injeção, transferência, compressão e dispositivos.",
      images: [
        {
          id: 1,
          image: "/borracha/bor1.jpeg",
        },
        {
          id: 2,
          image: "/borracha/bor2.jpeg",
        },
        {
          id: 3,
          image: "/borracha/bor3.jpeg",
        },
        {
          id: 4,
          image: "/borracha/bor4.jpeg",
        },
        {
          id: 5,
          image: "/borracha/bor5.jpeg",
        },
      ],
    },
  ];
  return (
    <section className="bg-green-90 text-center py-32">
      <h1 className="bold-52 sm:bold-88 text-white text-center">Produtos</h1>
      <p className="regular-16 text-white text-center mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
        vestibulum risus mauris, pharetra semper sem fermentum id. Phasellus
        facilisis quis orci quis molestie.
      </p>
      <div className="bg-green-90 flex flex-col sm:flex-row sm:flex-wrap justify-center items-center  py-16 gap-10">
        {productsData.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
