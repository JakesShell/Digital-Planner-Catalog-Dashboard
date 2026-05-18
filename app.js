const products = [
  {
    id: "PA-001",
    name: "Soft Reset Weekly Planner",
    category: "Digital Planners",
    status: "Listed",
    price: 17,
    expectedSales: 42,
    launchDate: "2026-06-07",
    primaryKeyword: "weekly reset planner",
    secondaryKeywords: ["self care planner", "digital weekly planner", "reset routine"],
    tags: 13,
    titleScore: 94,
    descriptionScore: 91,
    mockupsReady: 8,
    mockupsNeeded: 8,
    pinterestPins: 6,
    adReady: true,
    bundleEligible: true,
    notes: "Strong evergreen product with emotional positioning and clear buyer intent."
  },
  {
    id: "PA-002",
    name: "31-Day Emotional Journal",
    category: "Journals",
    status: "Ready To List",
    price: 15,
    expectedSales: 35,
    launchDate: "2026-06-14",
    primaryKeyword: "emotional wellness journal",
    secondaryKeywords: ["guided journal", "self discovery journal", "mental reset prompts"],
    tags: 13,
    titleScore: 88,
    descriptionScore: 84,
    mockupsReady: 7,
    mockupsNeeded: 8,
    pinterestPins: 4,
    adReady: true,
    bundleEligible: true,
    notes: "Ready for launch after one final mockup and Pinterest pin batch."
  },
  {
    id: "PA-003",
    name: "Teacher Observation Binder",
    category: "Teacher Resources",
    status: "Needs Mockups",
    price: 22,
    expectedSales: 21,
    launchDate: "2026-06-21",
    primaryKeyword: "teacher observation binder",
    secondaryKeywords: ["classroom observation forms", "early years teacher planner", "teacher binder"],
    tags: 11,
    titleScore: 79,
    descriptionScore: 73,
    mockupsReady: 3,
    mockupsNeeded: 9,
    pinterestPins: 2,
    adReady: false,
    bundleEligible: true,
    notes: "High utility product, but presentation assets need stronger classroom-use visuals."
  },
  {
    id: "PA-004",
    name: "Luxury Wedding Client Welcome Guide",
    category: "Wedding Products",
    status: "Needs SEO",
    price: 29,
    expectedSales: 18,
    launchDate: "2026-07-05",
    primaryKeyword: "wedding client welcome guide",
    secondaryKeywords: ["photographer welcome guide", "wedding template", "client experience guide"],
    tags: 8,
    titleScore: 64,
    descriptionScore: 58,
    mockupsReady: 8,
    mockupsNeeded: 8,
    pinterestPins: 1,
    adReady: false,
    bundleEligible: true,
    notes: "Premium pricing is justified, but SEO and listing copy are underbuilt."
  },
  {
    id: "PA-005",
    name: "Digital Product Launch Planner",
    category: "Business Tools",
    status: "In Design",
    price: 24,
    expectedSales: 26,
    launchDate: "2026-07-12",
    primaryKeyword: "digital product launch planner",
    secondaryKeywords: ["etsy seller planner", "product launch checklist", "business planner"],
    tags: 10,
    titleScore: 78,
    descriptionScore: 69,
    mockupsReady: 4,
    mockupsNeeded: 8,
    pinterestPins: 2,
    adReady: false,
    bundleEligible: true,
    notes: "Strategic product that can support a business-tools product family."
  },
  {
    id: "PA-006",
    name: "Minimal Client Proposal Template",
    category: "Templates",
    status: "Listed",
    price: 37,
    expectedSales: 16,
    launchDate: "2026-05-31",
    primaryKeyword: "client proposal template",
    secondaryKeywords: ["service proposal", "freelance proposal", "canva proposal template"],
    tags: 13,
    titleScore: 92,
    descriptionScore: 90,
    mockupsReady: 10,
    mockupsNeeded: 10,
    pinterestPins: 5,
    adReady: true,
    bundleEligible: true,
    notes: "Premium product with strong business buyer fit."
  },
  {
    id: "PA-007",
    name: "Faith Reflection Planner",
    category: "Faith / Reflection Products",
    status: "Idea",
    price: 14,
    expectedSales: 19,
    launchDate: "2026-08-02",
    primaryKeyword: "faith reflection planner",
    secondaryKeywords: ["prayer journal", "christian planner", "gratitude planner"],
    tags: 5,
    titleScore: 44,
    descriptionScore: 38,
    mockupsReady: 0,
    mockupsNeeded: 8,
    pinterestPins: 0,
    adReady: false,
    bundleEligible: false,
    notes: "Emotionally strong idea, but it needs product structure, copy, and visuals."
  },
  {
    id: "PA-008",
    name: "Ultimate Soft Reset Bundle",
    category: "Bundles",
    status: "Ready To List",
    price: 47,
    expectedSales: 24,
    launchDate: "2026-06-28",
    primaryKeyword: "self care planner bundle",
    secondaryKeywords: ["reset planner bundle", "wellness journal bundle", "digital planner bundle"],
    tags: 13,
    titleScore: 90,
    descriptionScore: 86,
    mockupsReady: 9,
    mockupsNeeded: 10,
    pinterestPins: 7,
    adReady: true,
    bundleEligible: false,
    notes: "Strong value-stack product that should anchor the wellness catalog."
  }
];

const marketingTasks = [
  { title: "Refresh Etsy SEO For Underperforming Listings", owner: "Marketing", status: "In Progress", priority: "High" },
  { title: "Create 6 Pinterest Pins For Ready-To-List Products", owner: "Content", status: "Open", priority: "Medium" },
  { title: "Build Mockup Set For Teacher Observation Binder", owner: "Design", status: "Open", priority: "High" },
  { title: "Write Bundle Description For Ultimate Soft Reset Bundle", owner: "Product", status: "In Review", priority: "Medium" },
  { title: "Export Catalog Performance Report", owner: "Operations", status: "Ready", priority: "Low" }
];

const elements = {
  catalogReadiness: document.getElementById("catalogReadiness"),
  catalogSummary: document.getElementById("catalogSummary"),
  totalProducts: document.getElementById("totalProducts"),
  readyProducts: document.getElementById("readyProducts"),
  needsSeo: document.getElementById("needsSeo"),
  monthlyRevenue: document.getElementById("monthlyRevenue"),
  searchInput: document.getElementById("searchInput"),
  statusFilter: document.getElementById("statusFilter"),
  categoryFilter: document.getElementById("categoryFilter"),
  sortFilter: document.getElementById("sortFilter"),
  resetFiltersBtn: document.getElementById("resetFiltersBtn"),
  productGrid: document.getElementById("productGrid"),
  resultCount: document.getElementById("resultCount"),
  pipelineList: document.getElementById("pipelineList"),
  seoGaps: document.getElementById("seoGaps"),
  revenueCards: document.getElementById("revenueCards"),
  bundleList: document.getElementById("bundleList"),
  taskBoard: document.getElementById("taskBoard"),
  exportReportBtn: document.getElementById("exportReportBtn"),
  showReadyBtn: document.getElementById("showReadyBtn"),
  scrollTopBtn: document.getElementById("scrollTopBtn"),
  productDialog: document.getElementById("productDialog"),
  dialogContent: document.getElementById("dialogContent"),
  closeDialogBtn: document.getElementById("closeDialogBtn")
};

function calculateSeoScore(product) {
  const tagScore = Math.min(100, Math.round((product.tags / 13) * 100));
  return Math.round((product.titleScore * 0.35) + (product.descriptionScore * 0.35) + (tagScore * 0.3));
}

function calculateMockupScore(product) {
  return Math.min(100, Math.round((product.mockupsReady / product.mockupsNeeded) * 100));
}

function calculateMarketingScore(product) {
  const pinScore = Math.min(100, product.pinterestPins * 14);
  const adScore = product.adReady ? 100 : 35;
  return Math.round((pinScore * 0.55) + (adScore * 0.45));
}

function calculateReadiness(product) {
  const seo = calculateSeoScore(product);
  const mockups = calculateMockupScore(product);
  const marketing = calculateMarketingScore(product);
  const statusBoost = product.status === "Listed" ? 100 : product.status === "Ready To List" ? 88 : product.status === "Needs SEO" ? 55 : product.status === "Needs Mockups" ? 50 : product.status === "In Design" ? 45 : 20;
  return Math.round((seo * 0.32) + (mockups * 0.27) + (marketing * 0.21) + (statusBoost * 0.2));
}

function monthlyRevenue(product) {
  return product.price * product.expectedSales;
}

function currency(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

function uniqueValues(key) {
  return [...new Set(products.map(product => product[key]))].sort();
}

function initializeFilters() {
  uniqueValues("status").forEach(status => {
    elements.statusFilter.insertAdjacentHTML("beforeend", `<option value="${escapeHtml(status)}">${escapeHtml(status)}</option>`);
  });

  uniqueValues("category").forEach(category => {
    elements.categoryFilter.insertAdjacentHTML("beforeend", `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`);
  });
}

function getFilteredProducts() {
  const search = elements.searchInput.value.trim().toLowerCase();
  const status = elements.statusFilter.value;
  const category = elements.categoryFilter.value;
  const sort = elements.sortFilter.value;

  let filtered = products.filter(product => {
    const text = [
      product.name,
      product.category,
      product.status,
      product.primaryKeyword,
      product.secondaryKeywords.join(" "),
      product.notes
    ].join(" ").toLowerCase();

    return (!search || text.includes(search)) &&
      (status === "all" || product.status === status) &&
      (category === "all" || product.category === category);
  });

  return [...filtered].sort((a, b) => {
    if (sort === "readiness-desc") return calculateReadiness(b) - calculateReadiness(a);
    if (sort === "readiness-asc") return calculateReadiness(a) - calculateReadiness(b);
    if (sort === "revenue-desc") return monthlyRevenue(b) - monthlyRevenue(a);
    if (sort === "seo-asc") return calculateSeoScore(a) - calculateSeoScore(b);
    if (sort === "date-asc") return new Date(a.launchDate) - new Date(b.launchDate);
    return 0;
  });
}

function renderDashboard() {
  const readinessAverage = Math.round(products.reduce((sum, product) => sum + calculateReadiness(product), 0) / products.length);
  const readyCount = products.filter(product => product.status === "Ready To List" || product.status === "Listed").length;
  const needsSeoCount = products.filter(product => calculateSeoScore(product) < 75).length;
  const revenue = products.reduce((sum, product) => sum + monthlyRevenue(product), 0);

  elements.catalogReadiness.textContent = `${readinessAverage}%`;
  elements.catalogSummary.textContent = readinessAverage >= 80
    ? "Catalog is in strong launch shape. Prioritize scaling bundles and ads."
    : "Catalog has revenue potential, but SEO, mockups, or marketing tasks need attention.";

  elements.totalProducts.textContent = products.length;
  elements.readyProducts.textContent = readyCount;
  elements.needsSeo.textContent = needsSeoCount;
  elements.monthlyRevenue.textContent = currency(revenue);

  renderProducts();
  renderPipeline();
  renderSeoGaps();
  renderRevenue();
  renderBundles();
  renderTasks();
}

function renderProducts() {
  const filtered = getFilteredProducts();
  elements.resultCount.textContent = `${filtered.length} product${filtered.length === 1 ? "" : "s"}`;

  if (!filtered.length) {
    elements.productGrid.innerHTML = `<div class="empty-state">No products match the current filters.</div>`;
    return;
  }

  elements.productGrid.innerHTML = filtered.map(product => {
    const readiness = calculateReadiness(product);
    const seo = calculateSeoScore(product);
    const mockups = calculateMockupScore(product);
    const revenue = monthlyRevenue(product);

    return `
      <article class="product-card">
        <div class="product-top">
          <div>
            <span class="product-id">${escapeHtml(product.id)}</span>
            <h3>${escapeHtml(product.name)}</h3>
          </div>
          <span class="status-pill ${statusClass(product.status)}">${escapeHtml(product.status)}</span>
        </div>

        <p>${escapeHtml(product.notes)}</p>

        <div class="score-row">
          ${scoreBlock("Launch", readiness)}
          ${scoreBlock("SEO", seo)}
          ${scoreBlock("Mockups", mockups)}
        </div>

        <div class="product-meta">
          <span>${escapeHtml(product.category)}</span>
          <span>${currency(product.price)} product</span>
          <span>${currency(revenue)}/mo forecast</span>
          <span>Launch ${formatDate(product.launchDate)}</span>
        </div>

        <div class="keyword-box">
          <span>Primary keyword</span>
          <strong>${escapeHtml(product.primaryKeyword)}</strong>
        </div>

        <button class="card-button" data-product="${escapeHtml(product.id)}">Open Product Detail</button>
      </article>
    `;
  }).join("");

  document.querySelectorAll("[data-product]").forEach(button => {
    button.addEventListener("click", () => openProductDetail(button.dataset.product));
  });
}

function scoreBlock(label, value) {
  return `
    <div class="score-block">
      <span>${label}</span>
      <strong>${value}%</strong>
      <div class="meter">
        <i style="width:${value}%"></i>
      </div>
    </div>
  `;
}

function renderPipeline() {
  elements.pipelineList.innerHTML = uniqueValues("status").map(status => {
    const count = products.filter(product => product.status === status).length;
    const percent = Math.round((count / products.length) * 100);
    return `
      <article class="pipeline-item">
        <div>
          <strong>${escapeHtml(status)}</strong>
          <span>${count} product${count === 1 ? "" : "s"}</span>
        </div>
        <div class="meter">
          <i style="width:${percent}%"></i>
        </div>
      </article>
    `;
  }).join("");
}

function renderSeoGaps() {
  const gaps = products
    .map(product => ({ ...product, seoScore: calculateSeoScore(product) }))
    .filter(product => product.seoScore < 80 || product.tags < 13 || product.descriptionScore < 80)
    .sort((a, b) => a.seoScore - b.seoScore)
    .slice(0, 5);

  elements.seoGaps.innerHTML = gaps.map(product => `
    <article class="gap-card">
      <span class="status-pill ${product.seoScore < 60 ? "danger" : "warning"}">SEO ${product.seoScore}%</span>
      <strong>${escapeHtml(product.name)}</strong>
      <p>${product.tags}/13 tags • Title ${product.titleScore}% • Description ${product.descriptionScore}%</p>
      <small>Fix: strengthen keyword coverage, complete tags, and improve buyer-focused listing copy.</small>
    </article>
  `).join("");
}

function renderRevenue() {
  const categories = uniqueValues("category").map(category => {
    const categoryProducts = products.filter(product => product.category === category);
    const revenue = categoryProducts.reduce((sum, product) => sum + monthlyRevenue(product), 0);
    return { category, revenue, count: categoryProducts.length };
  }).sort((a, b) => b.revenue - a.revenue);

  elements.revenueCards.innerHTML = categories.map(item => `
    <article class="revenue-card">
      <span>${escapeHtml(item.category)}</span>
      <strong>${currency(item.revenue)}</strong>
      <p>${item.count} product${item.count === 1 ? "" : "s"}</p>
    </article>
  `).join("");
}

function renderBundles() {
  const eligible = products
    .filter(product => product.bundleEligible)
    .sort((a, b) => calculateReadiness(b) - calculateReadiness(a))
    .slice(0, 4);

  elements.bundleList.innerHTML = `
    <article class="bundle-card">
      <span class="status-pill strong">Recommended</span>
      <h3>Creator Launch Starter Bundle</h3>
      <p>Package high-readiness products into one premium bundle to increase average order value.</p>
      <div class="bundle-products">
        ${eligible.map(product => `<span>${escapeHtml(product.name)}</span>`).join("")}
      </div>
      <strong>Suggested bundle price: ${currency(Math.round(eligible.reduce((sum, product) => sum + product.price, 0) * 0.72))}</strong>
    </article>
  `;
}

function renderTasks() {
  elements.taskBoard.innerHTML = marketingTasks.map(task => `
    <article class="task-card">
      <span class="status-pill ${priorityClass(task.priority)}">${escapeHtml(task.priority)}</span>
      <h3>${escapeHtml(task.title)}</h3>
      <p>${escapeHtml(task.owner)} • ${escapeHtml(task.status)}</p>
    </article>
  `).join("");
}

function openProductDetail(productId) {
  const product = products.find(item => item.id === productId);
  if (!product) return;

  elements.dialogContent.innerHTML = `
    <p class="eyebrow">Product Detail</p>
    <h2>${escapeHtml(product.name)}</h2>
    <p>${escapeHtml(product.notes)}</p>

    <div class="dialog-grid">
      ${detailItem("Category", product.category)}
      ${detailItem("Status", product.status)}
      ${detailItem("Launch Readiness", `${calculateReadiness(product)}%`)}
      ${detailItem("SEO Score", `${calculateSeoScore(product)}%`)}
      ${detailItem("Mockups", `${product.mockupsReady}/${product.mockupsNeeded}`)}
      ${detailItem("Pinterest Pins", product.pinterestPins)}
      ${detailItem("Price", currency(product.price))}
      ${detailItem("Monthly Forecast", currency(monthlyRevenue(product)))}
    </div>

    <div class="keyword-box">
      <span>Listing Keywords</span>
      <strong>${escapeHtml(product.primaryKeyword)}</strong>
      <p>${product.secondaryKeywords.map(escapeHtml).join(" • ")}</p>
    </div>
  `;

  elements.productDialog.showModal();
}

function detailItem(label, value) {
  return `
    <article>
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </article>
  `;
}

function exportReport() {
  const report = {
    generatedAt: new Date().toISOString(),
    project: "ProductAtlas Digital Catalog & Launch Operations Dashboard",
    summary: {
      totalProducts: products.length,
      catalogReadiness: elements.catalogReadiness.textContent,
      monthlyRevenueForecast: products.reduce((sum, product) => sum + monthlyRevenue(product), 0),
      readyToList: products.filter(product => product.status === "Ready To List" || product.status === "Listed").length,
      needsSeo: products.filter(product => calculateSeoScore(product) < 75).length
    },
    products: products.map(product => ({
      ...product,
      launchReadiness: calculateReadiness(product),
      seoScore: calculateSeoScore(product),
      mockupScore: calculateMockupScore(product),
      monthlyRevenueForecast: monthlyRevenue(product)
    })),
    marketingTasks
  };

  const blob = new Blob([JSON.stringify(report, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `productatlas-report-${Date.now()}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function showReadyProducts() {
  elements.statusFilter.value = "Ready To List";
  elements.searchInput.value = "";
  renderProducts();
}

function statusClass(status) {
  if (status === "Listed" || status === "Ready To List") return "strong";
  if (status === "Needs SEO" || status === "Needs Mockups") return "warning";
  if (status === "Idea") return "danger";
  return "neutral";
}

function priorityClass(priority) {
  if (priority === "High") return "danger";
  if (priority === "Medium") return "warning";
  return "strong";
}

function formatDate(value) {
  return new Date(`${value}T00:00:00`).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

elements.searchInput.addEventListener("input", renderProducts);
elements.statusFilter.addEventListener("change", renderProducts);
elements.categoryFilter.addEventListener("change", renderProducts);
elements.sortFilter.addEventListener("change", renderProducts);
elements.resetFiltersBtn.addEventListener("click", () => {
  elements.searchInput.value = "";
  elements.statusFilter.value = "all";
  elements.categoryFilter.value = "all";
  elements.sortFilter.value = "readiness-desc";
  renderProducts();
});
elements.exportReportBtn.addEventListener("click", exportReport);
elements.showReadyBtn.addEventListener("click", showReadyProducts);
elements.scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
elements.closeDialogBtn.addEventListener("click", () => elements.productDialog.close());

initializeFilters();
renderDashboard();
