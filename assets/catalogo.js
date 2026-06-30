const products = [
  {
    name: "Compressor Industrial 20 PCM",
    category: "Compressores",
    code: "CE-COM-020",
    description:
      "Alta vazão para oficinas, pintura, marcenarias e linhas pneumáticas.",
    tags: ["20 PCM", "175 PSI", "Trifásico"],
  },
  {
    name: "Lavadora de Alta Pressão Pro",
    category: "Limpeza",
    code: "CE-LAV-310",
    description:
      "Pressão constante para limpeza pesada em frotas, pisos e equipamentos.",
    tags: ["2.400 W", "Água fria", "Uso profissional"],
  },
  {
    name: "Gerador Diesel 8 kVA",
    category: "Energia",
    code: "CE-GER-008",
    description:
      "Energia estável para obras, eventos, propriedades rurais e emergências.",
    tags: ["Diesel", "8 kVA", "Partida elétrica"],
  },
  {
    name: "Empilhadeira Manual 2,5 t",
    category: "Movimentação",
    code: "CE-EMP-250",
    description:
      "Transporte interno seguro para paletes em depósitos e centros logísticos.",
    tags: ["2,5 t", "Nylon", "Garfo reforçado"],
  },
  {
    name: "Betoneira 400 L",
    category: "Construção",
    code: "CE-BET-400",
    description:
      "Tambor robusto para mistura uniforme em obras de pequeno e médio porte.",
    tags: ["400 L", "Motor 2 cv", "Chassi reforçado"],
  },
  {
    name: "Placa Vibratória Compactadora",
    category: "Construção",
    code: "CE-PLA-090",
    description:
      "Compactação eficiente para solos, calçadas, bases e reparos urbanos.",
    tags: ["Motor 6,5 hp", "90 kg", "Baixa vibração"],
  },
  {
    name: "Talha Elétrica 1 t",
    category: "Movimentação",
    code: "CE-TAL-100",
    description:
      "Elevação precisa de cargas com controle seguro e estrutura compacta.",
    tags: ["1 t", "Cabo de aço", "Controle remoto"],
  },
  {
    name: "Solda Inversora 200 A",
    category: "Ferramentas",
    code: "CE-SOL-200",
    description:
      "Equipamento portátil para manutenção, serralheria e serviços de campo.",
    tags: ["200 A", "Bivolt", "MMA"],
  },
  {
    name: "Motobomba Autoescorvante",
    category: "Bombas",
    code: "CE-BOM-300",
    description:
      "Transferência de água em irrigação, drenagem e abastecimento auxiliar.",
    tags: ["3 pol.", "Gasolina", "Alta vazão"],
  },
];

const productGrid = document.querySelector("#productGrid");
const searchInput = document.querySelector("#searchInput");
const categoryFilters = document.querySelector("#categoryFilters");
const resultCount = document.querySelector("#resultCount");
const clearFilters = document.querySelector("#clearFilters");

let selectedCategory = "Todos";

const categories = [
  "Todos",
  ...Array.from(new Set(products.map((product) => product.category))).sort(),
];

function normalize(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
}

function renderFilters() {
  categoryFilters.innerHTML = categories
    .map(
      (category) => `
        <button
          class="filter-button ${category === selectedCategory ? "is-active" : ""}"
          type="button"
          data-category="${category}"
        >
          ${category}
        </button>
      `,
    )
    .join("");
}

function getFilteredProducts() {
  const searchTerm = normalize(searchInput.value.trim());

  return products.filter((product) => {
    const matchesCategory =
      selectedCategory === "Todos" || product.category === selectedCategory;
    const searchableText = normalize(
      `${product.name} ${product.category} ${product.code} ${product.description} ${product.tags.join(" ")}`,
    );

    return matchesCategory && searchableText.includes(searchTerm);
  });
}

function renderProducts() {
  const filteredProducts = getFilteredProducts();

  resultCount.textContent =
    filteredProducts.length === 1
      ? "1 produto encontrado"
      : `${filteredProducts.length} produtos encontrados`;

  if (filteredProducts.length === 0) {
    productGrid.innerHTML = `
      <div class="empty-state">
        Nenhum produto encontrado. Tente outra busca ou limpe os filtros.
      </div>
    `;
    return;
  }

  productGrid.innerHTML = filteredProducts
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-card__visual" aria-hidden="true">
            ${getInitials(product.name)}
          </div>
          <div class="product-card__body">
            <div>
              <span class="tag">${product.category}</span>
              <h3>${product.name}</h3>
            </div>
            <p>${product.description}</p>
            <div class="product-card__tags">
              ${product.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
            <div class="product-card__footer">
              <span class="product-card__code">${product.code}</span>
              <a class="product-card__quote" href="#contato">Orçar</a>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

categoryFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");

  if (!button) {
    return;
  }

  selectedCategory = button.dataset.category;
  renderFilters();
  renderProducts();
});

searchInput.addEventListener("input", renderProducts);

clearFilters.addEventListener("click", () => {
  selectedCategory = "Todos";
  searchInput.value = "";
  renderFilters();
  renderProducts();
});

renderFilters();
renderProducts();
