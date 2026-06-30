const completeProducts = [
  {
    name: "Compressor Industrial 20 PCM",
    category: "Compressores",
    code: "CE-COM-020",
    application: "Oficinas",
    availability: "Pronta entrega",
    budget: "Intermediário",
    description:
      "Alta vazão para pintura, marcenaria, borracharia e redes pneumáticas.",
    specs: ["20 PCM", "175 PSI", "Trifásico"],
    highlight: "Mais buscado",
  },
  {
    name: "Compressor Silencioso 10 PCM",
    category: "Compressores",
    code: "CE-COM-010",
    application: "Manutenção",
    availability: "Pronta entrega",
    budget: "Econômico",
    description:
      "Operação com ruído reduzido para ambientes internos e manutenção leve.",
    specs: ["10 PCM", "Baixo ruído", "Monofásico"],
    highlight: "Compacto",
  },
  {
    name: "Lavadora de Alta Pressão Pro",
    category: "Limpeza",
    code: "CE-LAV-310",
    application: "Limpeza pesada",
    availability: "Pronta entrega",
    budget: "Intermediário",
    description:
      "Pressão constante para limpeza de frotas, pisos, máquinas e fachadas.",
    specs: ["2.400 W", "Água fria", "Uso profissional"],
    highlight: "Alta pressão",
  },
  {
    name: "Lavadora Industrial Água Quente",
    category: "Limpeza",
    code: "CE-LAV-520",
    application: "Limpeza pesada",
    availability: "Sob consulta",
    budget: "Premium",
    description:
      "Remove graxa e sujeira severa em oficinas, indústrias e transportadoras.",
    specs: ["Água quente", "Diesel", "Alta performance"],
    highlight: "Uso severo",
  },
  {
    name: "Gerador Diesel 8 kVA",
    category: "Energia",
    code: "CE-GER-008",
    application: "Energia auxiliar",
    availability: "Pronta entrega",
    budget: "Intermediário",
    description:
      "Energia estável para obras, eventos, propriedades rurais e emergências.",
    specs: ["Diesel", "8 kVA", "Partida elétrica"],
    highlight: "Versátil",
  },
  {
    name: "Gerador Gasolina 3,5 kVA",
    category: "Energia",
    code: "CE-GER-035",
    application: "Energia auxiliar",
    availability: "Pronta entrega",
    budget: "Econômico",
    description:
      "Solução portátil para ferramentas, iluminação temporária e pequenos pontos.",
    specs: ["Gasolina", "3,5 kVA", "Portátil"],
    highlight: "Portátil",
  },
  {
    name: "Empilhadeira Manual 2,5 t",
    category: "Movimentação",
    code: "CE-EMP-250",
    application: "Logística",
    availability: "Pronta entrega",
    budget: "Intermediário",
    description:
      "Transporte interno seguro para paletes em depósitos e centros logísticos.",
    specs: ["2,5 t", "Rodas nylon", "Garfo reforçado"],
    highlight: "Robusta",
  },
  {
    name: "Paleteira Manual 2 t",
    category: "Movimentação",
    code: "CE-PAL-200",
    application: "Logística",
    availability: "Pronta entrega",
    budget: "Econômico",
    description:
      "Movimentação ágil de cargas paletizadas em corredores e estoques.",
    specs: ["2 t", "Giro 180°", "Baixa manutenção"],
    highlight: "Custo-benefício",
  },
  {
    name: "Talha Elétrica 1 t",
    category: "Movimentação",
    code: "CE-TAL-100",
    application: "Elevação",
    availability: "Sob consulta",
    budget: "Premium",
    description:
      "Elevação precisa de cargas com controle seguro e estrutura compacta.",
    specs: ["1 t", "Cabo de aço", "Controle remoto"],
    highlight: "Precisão",
  },
  {
    name: "Betoneira 400 L",
    category: "Construção",
    code: "CE-BET-400",
    application: "Obras",
    availability: "Pronta entrega",
    budget: "Intermediário",
    description:
      "Tambor robusto para mistura uniforme em obras de pequeno e médio porte.",
    specs: ["400 L", "Motor 2 cv", "Chassi reforçado"],
    highlight: "Obra civil",
  },
  {
    name: "Placa Vibratória Compactadora",
    category: "Construção",
    code: "CE-PLA-090",
    application: "Obras",
    availability: "Pronta entrega",
    budget: "Intermediário",
    description:
      "Compactação eficiente para solos, calçadas, bases e reparos urbanos.",
    specs: ["Motor 6,5 hp", "90 kg", "Baixa vibração"],
    highlight: "Compactação",
  },
  {
    name: "Cortadora de Piso 13 hp",
    category: "Construção",
    code: "CE-COR-130",
    application: "Obras",
    availability: "Sob consulta",
    budget: "Premium",
    description:
      "Cortes lineares em concreto e asfalto com profundidade controlada.",
    specs: ["13 hp", "Disco diamantado", "Guia frontal"],
    highlight: "Precisão",
  },
  {
    name: "Solda Inversora 200 A",
    category: "Ferramentas",
    code: "CE-SOL-200",
    application: "Manutenção",
    availability: "Pronta entrega",
    budget: "Econômico",
    description:
      "Equipamento portátil para manutenção, serralheria e serviços de campo.",
    specs: ["200 A", "Bivolt", "MMA"],
    highlight: "Portátil",
  },
  {
    name: "Furadeira de Bancada 5/8",
    category: "Ferramentas",
    code: "CE-FUR-058",
    application: "Oficinas",
    availability: "Pronta entrega",
    budget: "Intermediário",
    description:
      "Perfuração estável para oficinas, manutenção industrial e pequenas séries.",
    specs: ["5/8 pol.", "Mesa ajustável", "Correia"],
    highlight: "Estável",
  },
  {
    name: "Serra Policorte 14 pol.",
    category: "Ferramentas",
    code: "CE-SER-140",
    application: "Oficinas",
    availability: "Pronta entrega",
    budget: "Econômico",
    description:
      "Cortes rápidos em metais para serralheria, montagem e manutenção.",
    specs: ["14 pol.", "2.200 W", "Morsa integrada"],
    highlight: "Produtiva",
  },
  {
    name: "Motobomba Autoescorvante",
    category: "Bombas",
    code: "CE-BOM-300",
    application: "Abastecimento",
    availability: "Pronta entrega",
    budget: "Intermediário",
    description:
      "Transferência de água em irrigação, drenagem e abastecimento auxiliar.",
    specs: ["3 pol.", "Gasolina", "Alta vazão"],
    highlight: "Alta vazão",
  },
  {
    name: "Bomba Submersível 1 cv",
    category: "Bombas",
    code: "CE-BOM-100",
    application: "Drenagem",
    availability: "Pronta entrega",
    budget: "Econômico",
    description:
      "Drenagem de poços, reservatórios, valas e áreas com acúmulo de água.",
    specs: ["1 cv", "Submersível", "Boia automática"],
    highlight: "Drenagem",
  },
  {
    name: "Roçadeira Lateral Profissional",
    category: "Jardinagem",
    code: "CE-ROC-043",
    application: "Áreas verdes",
    availability: "Pronta entrega",
    budget: "Econômico",
    description:
      "Manutenção de terrenos, chácaras, condomínios e áreas industriais.",
    specs: ["43 cc", "Gasolina", "Guidão aberto"],
    highlight: "Campo",
  },
];

const filterConfig = [
  { key: "category", label: "Categoria", elementId: "categoryOptions" },
  { key: "application", label: "Aplicação", elementId: "applicationOptions" },
  {
    key: "availability",
    label: "Disponibilidade",
    elementId: "availabilityOptions",
  },
  { key: "budget", label: "Faixa", elementId: "budgetOptions" },
];

const state = {
  query: "",
  sort: "relevance",
  view: "grid",
  filters: {
    category: new Set(),
    application: new Set(),
    availability: new Set(),
    budget: new Set(),
  },
};

const completeSearch = document.querySelector("#completeSearch");
const sortSelect = document.querySelector("#sortSelect");
const completeProductGrid = document.querySelector("#completeProductGrid");
const completeResultCount = document.querySelector("#completeResultCount");
const completeResultHint = document.querySelector("#completeResultHint");
const activeFilters = document.querySelector("#activeFilters");
const clearAllFilters = document.querySelector("#clearAllFilters");
const totalProducts = document.querySelector("#totalProducts");
const totalCategories = document.querySelector("#totalCategories");
const viewToggle = document.querySelector(".view-toggle");

function normalize(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getUniqueValues(key) {
  return Array.from(new Set(completeProducts.map((product) => product[key]))).sort(
    (first, second) => first.localeCompare(second, "pt-BR"),
  );
}

function getSearchScore(product) {
  if (!state.query) {
    return 0;
  }

  const query = normalize(state.query);
  const name = normalize(product.name);
  const code = normalize(product.code);
  const category = normalize(product.category);
  const application = normalize(product.application);
  const allText = normalize(
    `${product.name} ${product.code} ${product.category} ${product.application} ${product.availability} ${product.budget} ${product.description} ${product.specs.join(" ")}`,
  );

  if (code.includes(query)) {
    return 50;
  }

  if (name.includes(query)) {
    return 40;
  }

  if (category.includes(query) || application.includes(query)) {
    return 25;
  }

  return allText.includes(query) ? 10 : -1;
}

function productMatchesFilters(product) {
  const searchScore = getSearchScore(product);

  if (state.query && searchScore < 0) {
    return false;
  }

  return filterConfig.every(({ key }) => {
    const selectedValues = state.filters[key];
    return selectedValues.size === 0 || selectedValues.has(product[key]);
  });
}

function getFilteredProducts() {
  const filteredProducts = completeProducts.filter(productMatchesFilters);

  return filteredProducts.sort((first, second) => {
    if (state.sort === "name") {
      return first.name.localeCompare(second.name, "pt-BR");
    }

    if (state.sort === "category") {
      return (
        first.category.localeCompare(second.category, "pt-BR") ||
        first.name.localeCompare(second.name, "pt-BR")
      );
    }

    if (state.sort === "availability") {
      return (
        first.availability.localeCompare(second.availability, "pt-BR") ||
        first.name.localeCompare(second.name, "pt-BR")
      );
    }

    return getSearchScore(second) - getSearchScore(first);
  });
}

function getFilterCount(key, value) {
  return completeProducts.filter((product) => {
    if (product[key] !== value) {
      return false;
    }

    return filterConfig.every((filter) => {
      if (filter.key === key) {
        return true;
      }

      const selectedValues = state.filters[filter.key];
      return selectedValues.size === 0 || selectedValues.has(product[filter.key]);
    });
  }).length;
}

function renderFilterOptions() {
  filterConfig.forEach(({ key, elementId }) => {
    const container = document.querySelector(`#${elementId}`);
    const values = getUniqueValues(key);

    container.innerHTML = values
      .map((value) => {
        const id = `${key}-${normalize(value).replaceAll(" ", "-")}`;
        const count = getFilterCount(key, value);
        const isChecked = state.filters[key].has(value);

        return `
          <label class="filter-option ${count === 0 ? "is-muted" : ""}" for="${id}">
            <input
              id="${id}"
              type="checkbox"
              data-filter-key="${key}"
              value="${escapeHtml(value)}"
              ${isChecked ? "checked" : ""}
            />
            <span>${escapeHtml(value)}</span>
            <small>${count}</small>
          </label>
        `;
      })
      .join("");
  });
}

function renderActiveFilters() {
  const selectedFilters = filterConfig.flatMap(({ key, label }) =>
    Array.from(state.filters[key]).map((value) => ({ key, label, value })),
  );

  if (selectedFilters.length === 0 && !state.query) {
    activeFilters.innerHTML = "<span>Nenhum filtro ativo</span>";
    clearAllFilters.hidden = true;
    return;
  }

  clearAllFilters.hidden = false;
  activeFilters.innerHTML = [
    state.query
      ? `<button type="button" data-clear-search>Busca: ${escapeHtml(state.query)} ×</button>`
      : "",
    ...selectedFilters.map(
      ({ key, label, value }) => `
        <button type="button" data-remove-filter="${key}" data-value="${escapeHtml(value)}">
          ${label}: ${escapeHtml(value)} ×
        </button>
      `,
    ),
  ].join("");
}

function buildWhatsAppUrl(product) {
  const message = encodeURIComponent(
    `Olá, quero orçamento do produto ${product.name} (${product.code}).`,
  );

  return `https://wa.me/5500000000000?text=${message}`;
}

function renderProducts() {
  const filteredProducts = getFilteredProducts();
  const countText =
    filteredProducts.length === 1
      ? "1 produto encontrado"
      : `${filteredProducts.length} produtos encontrados`;

  completeResultCount.textContent = countText;
  completeResultHint.textContent = state.query
    ? `Resultados para “${state.query}”. Você pode combinar com filtros ao lado.`
    : "Dica: pesquise também por aplicação, como oficina, obra ou limpeza.";

  completeProductGrid.classList.toggle("is-list", state.view === "list");

  if (filteredProducts.length === 0) {
    completeProductGrid.innerHTML = `
      <div class="empty-state empty-state--large">
        <strong>Nenhum produto encontrado</strong>
        <span>Remova algum filtro ou tente buscar por uma aplicação mais ampla.</span>
      </div>
    `;
    return;
  }

  completeProductGrid.innerHTML = filteredProducts
    .map(
      (product) => `
        <article class="complete-product-card">
          <div class="complete-product-card__visual" aria-hidden="true">
            <span>${escapeHtml(product.category.slice(0, 3).toUpperCase())}</span>
          </div>
          <div class="complete-product-card__content">
            <div class="complete-product-card__top">
              <div>
                <span class="tag tag--accent">${escapeHtml(product.highlight)}</span>
                <h3>${escapeHtml(product.name)}</h3>
              </div>
              <span class="availability ${product.availability === "Pronta entrega" ? "is-ready" : "is-consult"}">
                ${escapeHtml(product.availability)}
              </span>
            </div>
            <p>${escapeHtml(product.description)}</p>
            <dl class="product-meta">
              <div>
                <dt>Código</dt>
                <dd>${escapeHtml(product.code)}</dd>
              </div>
              <div>
                <dt>Categoria</dt>
                <dd>${escapeHtml(product.category)}</dd>
              </div>
              <div>
                <dt>Aplicação</dt>
                <dd>${escapeHtml(product.application)}</dd>
              </div>
              <div>
                <dt>Faixa</dt>
                <dd>${escapeHtml(product.budget)}</dd>
              </div>
            </dl>
            <div class="product-card__tags">
              ${product.specs.map((spec) => `<span class="tag">${escapeHtml(spec)}</span>`).join("")}
            </div>
            <div class="complete-product-card__actions">
              <a class="button button--primary button--compact" href="${buildWhatsAppUrl(product)}" target="_blank" rel="noreferrer">
                Pedir orçamento
              </a>
              <button class="ghost-action" type="button" data-copy-code="${escapeHtml(product.code)}">
                Copiar código
              </button>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderStats() {
  totalProducts.textContent = String(completeProducts.length);
  totalCategories.textContent = String(getUniqueValues("category").length);
}

function renderAll() {
  renderFilterOptions();
  renderActiveFilters();
  renderProducts();
}

function clearFilters() {
  state.query = "";
  completeSearch.value = "";

  Object.values(state.filters).forEach((selectedValues) => {
    selectedValues.clear();
  });

  renderAll();
}

document.addEventListener("change", (event) => {
  const input = event.target.closest("[data-filter-key]");

  if (!input) {
    return;
  }

  const selectedValues = state.filters[input.dataset.filterKey];

  if (input.checked) {
    selectedValues.add(input.value);
  } else {
    selectedValues.delete(input.value);
  }

  renderAll();
});

completeSearch.addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  renderAll();
});

sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderProducts();
});

viewToggle.addEventListener("click", (event) => {
  const button = event.target.closest("[data-view]");

  if (!button) {
    return;
  }

  state.view = button.dataset.view;
  viewToggle.querySelectorAll("button").forEach((toggleButton) => {
    toggleButton.classList.toggle("is-active", toggleButton === button);
  });
  renderProducts();
});

activeFilters.addEventListener("click", (event) => {
  const searchButton = event.target.closest("[data-clear-search]");
  const filterButton = event.target.closest("[data-remove-filter]");

  if (searchButton) {
    state.query = "";
    completeSearch.value = "";
    renderAll();
    return;
  }

  if (filterButton) {
    state.filters[filterButton.dataset.removeFilter].delete(filterButton.dataset.value);
    renderAll();
  }
});

document.addEventListener("click", async (event) => {
  const copyButton = event.target.closest("[data-copy-code]");
  const filterTitle = event.target.closest("[data-toggle-filter]");

  if (filterTitle) {
    filterTitle.closest(".filter-group").classList.toggle("is-collapsed");
    return;
  }

  if (!copyButton) {
    return;
  }

  try {
    await navigator.clipboard.writeText(copyButton.dataset.copyCode);
    copyButton.textContent = "Código copiado";
    setTimeout(() => {
      copyButton.textContent = "Copiar código";
    }, 1600);
  } catch {
    copyButton.textContent = copyButton.dataset.copyCode;
  }
});

clearAllFilters.addEventListener("click", clearFilters);

renderStats();
renderAll();
