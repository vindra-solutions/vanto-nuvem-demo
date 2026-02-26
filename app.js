const DASHBOARDS = [
  {
    id: "ejecutivo",
    label: "Informe Ejecutivo",
    objective:
      "Salud del negocio en una sola vista: ventas, margen, inventario, servicio al cliente y conversión de efectivo.",
  },
  {
    id: "comercial",
    label: "Informe Comercial",
    objective:
      "Performance comercial por canal: conversión, promociones, pricing, margen y productos clave.",
  },
  {
    id: "logistica",
    label: "Informe Logística",
    objective:
      "Disponibilidad, rotación, quiebres, lead times, entregas a tiempo y costos logísticos.",
  },
  {
    id: "rh",
    label: "Informe Recursos Humanos",
    objective:
      "Dotación, rotación, ausentismo, productividad, capacitación y costo laboral.",
  },
];

const CLIENT_BRANDS = {
  default: {
    slug: "default",
    companyName: "Vanto Nuvem",
    sidebarTitle: "Centro de Control",
    topbarKicker: "Inteligencia de Negocio",
    logo: {
      kind: "image",
      src: "/logos/vanto-nuvem.png",
      alt: "Vanto Nuvem",
      shape: "square",
    },
  },
  ryse: {
    slug: "ryse",
    companyName: "RYSE",
    sidebarTitle: "Centro de Control",
    topbarKicker: "Inteligencia de Negocio",
    logo: {
      kind: "image",
      src: "/logos/ryse.avif",
      alt: "RYSE",
      shape: "wide",
    },
  },
};

const COLOR_SCHEME_STORAGE_KEY = "vn-demo-color-scheme";
const COLOR_MODE_STORAGE_KEY = "vn-demo-color-mode";
const COLOR_SCHEMES = [
  {
    key: "ocean",
    label: "Ocean Blue",
    description: "Limpio y corporativo",
    swatches: ["#0b6fae", "#2f86c8", "#e9f4fc", "#0f2f4d"],
  },
  {
    key: "forest",
    label: "Forest Sage",
    description: "Calmo y analítico",
    swatches: ["#2f7d6b", "#68a08b", "#eef7f3", "#163f37"],
  },
  {
    key: "amber",
    label: "Sand & Amber",
    description: "Cálido y elegante",
    swatches: ["#b8742b", "#d59a54", "#fbf5ea", "#49331d"],
  },
  {
    key: "slate",
    label: "Slate Cyan",
    description: "Tech y sobrio",
    swatches: ["#0c7f88", "#4ea9b0", "#edf7f8", "#14353a"],
  },
  {
    key: "plum",
    label: "Plum Ink",
    description: "Premium discreto",
    swatches: ["#7f3f72", "#b06aa0", "#f8eef6", "#391e34"],
  },
];

const defaultFilters = {
  canal: ["Todos"],
  region: ["Todas"],
  tienda: ["Todas"],
  categoria: ["Todas"],
  entrega: ["Todos"],
  segmento: ["Todos"],
  promo: ["Todas"],
  pago: ["Todos"],
  transportista: ["Todos"],
  sla: ["Todos"],
  area: ["Todas"],
  turno: ["Todos"],
  puesto: ["Todos"],
  contrato: ["Todos"],
  antiguedad: ["Todos"],
  supervisor: ["Todos"],
};

const KPI_HELP_TEXT = {
  Comercial:
    "Tarjeta compuesta: Facturación = suma de ventas netas; Órdenes e-comm = suma de órdenes del canal e-commerce; Ticket Promedio = Facturación / órdenes totales.",
  Facturación: "Suma de ventas netas.",
  "Órdenes e-comm": "Suma de órdenes del canal e-commerce.",
  "Ticket Promedio": "Facturación total dividida entre órdenes totales.",
  "Margen Bruto % · $":
    "Margen bruto $ = Facturación - costo de venta (COGS). Margen bruto % = Margen bruto $ / Facturación.",
  Finanzas:
    "Tarjeta compuesta de resultado financiero: Facturación = suma de ventas netas; Cumplimiento a Objetivo = Facturación / presupuesto de ventas; EBITDA % · $ = EBITDA y su porcentaje sobre facturación.",
  "Cumplimiento a Objetivo": "Porcentaje de cumplimiento contra presupuesto de ventas: Facturación / presupuesto.",
  "Eficiencia Comercial":
    "Tarjeta compuesta: Conversión e-comm = órdenes e-commerce / sesiones e-commerce; Descuento Promedio = promedio ponderado por facturación; Devoluciones = promedio ponderado por órdenes del porcentaje de devoluciones.",
  Logística:
    "Tarjeta compuesta: % Pedidos a Tiempo = promedio ponderado por órdenes de OTD; OTIF = promedio ponderado por órdenes de entregas a tiempo y completas; Fill Rate = promedio ponderado por órdenes del surtido.",
  Inventario:
    "Tarjeta compuesta: Días de Inventario = (Inventario / costo de venta anualizado) x 365; Stockout Rate = promedio ponderado por órdenes de quiebre; Backorder % = unidades en backorder / órdenes.",
  "Recursos Humanos":
    "Tarjeta compuesta: Ausentismo y Rotación son promedios ponderados por headcount; Costo laboral / ventas = costo laboral total / facturación.",
  "EBITDA % · $": "EBITDA $ = utilidad operativa antes de intereses, impuestos, depreciación y amortización. EBITDA % = EBITDA $ / Facturación.",
  EBITDA: "EBITDA $ = utilidad operativa antes de intereses, impuestos, depreciación y amortización. EBITDA % = EBITDA $ / Facturación.",
  "Fill Rate": "Promedio ponderado por órdenes del porcentaje surtido completo.",
  "Días de Inventario":
    "Días estimados de cobertura: (Inventario / costo de venta anualizado) x 365.",
  "% Entregas a Tiempo":
    "Promedio ponderado por órdenes del porcentaje de entregas dentro del SLA.",
  "Órdenes / Tickets": "Suma total de órdenes (tickets).",
  "Utilidades por Transacción": "Unidades vendidas divididas entre órdenes totales.",
  "Margen Bruto": "Margen bruto % = (Facturación - costo de venta) / Facturación.",
  "Descuento Promedio": "Promedio ponderado por facturación del descuento aplicado.",
  "Conversión e-comm": "Órdenes e-commerce divididas entre sesiones e-commerce.",
  Devoluciones: "Promedio ponderado por órdenes del porcentaje de devoluciones.",
  "% Pedidos a Tiempo":
    "Promedio ponderado por órdenes del porcentaje de pedidos entregados a tiempo.",
  OTIF: "Promedio ponderado por órdenes del porcentaje de pedidos entregados a tiempo y completos.",
  "OTIF (On Time In Full)":
    "Promedio ponderado por órdenes del porcentaje de pedidos entregados a tiempo y completos.",
  "Backorder %":
    "Porcentaje de órdenes con unidades pendientes por falta de inventario.",
  Backorder:
    "Muestra dos medidas: volumen de unidades en backorder y Backorder % (unidades en backorder / órdenes).",
  "Stockout Rate": "Promedio ponderado por órdenes del porcentaje de quiebres de inventario.",
  "Inventario Total": "Suma del valor de inventario.",
  "Costo logístico/orden": "Costo logístico total dividido entre órdenes totales.",
  "Headcount actual": "Suma de colaboradores activos en la semana más reciente.",
  "Vacantes abiertas": "Suma de vacantes abiertas en la semana más reciente.",
  Rotación: "Promedio ponderado por headcount del porcentaje de rotación.",
  "Tiempo de cobertura":
    "Promedio ponderado por vacantes de los días que tarda en cubrirse una posición.",
  Ausentismo: "Promedio ponderado por headcount del porcentaje de ausentismo.",
  "Horas extra":
    "Horas extra = suma de horas extra. Costo = horas extra x tarifa por hora.",
  "Costo laboral total": "Suma del costo laboral.",
  "Costo laboral / ventas": "Costo laboral total dividido entre Facturación.",
};

const model = generateModel();
const DAY_MS = 24 * 60 * 60 * 1000;
const datasetDateBounds = getDatasetDateBounds(model.weeks);
const state = {
  activeDashboard: "ejecutivo",
  filtersVisible: false,
  filters: cloneDefaultFilters(),
  openFilterKeys: [],
  colorScheme: getInitialColorScheme(),
  colorMode: getInitialColorMode(),
  themePopoverOpen: false,
  dateRange: getInitialDateRange(datasetDateBounds),
};
const chartInstances = [];
let layoutPassTimeout = null;
let layoutPassRaf = null;
const chartColors = {
  primary: "#006DA8",
  navy: "#005888",
  sky: "#2A86BE",
  orange: "#F36F21",
  yellow: "#F7B625",
  red: "#E30613",
  green: "#0D9A6C",
  neutral: "#94A3B8",
};
const palette = [chartColors.primary, chartColors.navy, chartColors.sky, chartColors.orange, chartColors.red, chartColors.yellow, chartColors.green];
const MEXICO_MAP_NAME = "mexico-states";
const MEXICO_GEOJSON_URLS = [
  "https://code.highcharts.com/mapdata/countries/mx/mx-all.geo.json",
  "https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/mexico.geojson",
];
const MEXICO_MAP_SCRIPT_URLS = [
  "https://cdn.jsdelivr.net/npm/echarts-countries-js@1.0.5/echarts-countries-js/Mexico.js",
  "https://unpkg.com/echarts-countries-js@1.0.5/echarts-countries-js/Mexico.js",
];
const MEXICO_MAP_CANDIDATE_NAMES = ["Mexico", "mexico", "MX", "mx", "México", "MEXICO"];
let mexicoMapPromise = null;
let dateRangePicker = null;
const activeClientBrand = resolveClientBrand(window.location.pathname);

const menuEl = document.getElementById("menu");
const titleEl = document.getElementById("page-title");
const brandRowEl = document.querySelector(".brand-row");
const sidebarBrandKickerEl = document.getElementById("sidebar-brand-kicker");
const sidebarBrandTitleEl = document.getElementById("sidebar-brand-title");
const topbarBrandKickerEl = document.getElementById("topbar-brand-kicker");
const brandLogoWrapEl = document.getElementById("brand-logo-wrap");
const brandLogoEl = document.getElementById("brand-logo");
const filterRowEl = document.getElementById("filter-row");
const viewEl = document.getElementById("view");
const topDateRangeInput = document.getElementById("top-date-range");
const filterToggleBtn = document.getElementById("filter-toggle-btn");
const exportBtn = document.getElementById("export-btn");
const sidebarOverlayEl = document.getElementById("sidebar-overlay");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const sidebarCloseBtn = document.getElementById("sidebar-close-btn");
const settingsBtnEl = document.getElementById("settings-btn");
const themePopoverEl = document.getElementById("theme-popover");
const themeOptionsEl = document.getElementById("theme-options");
const modeToggleEl = document.getElementById("mode-toggle");
const mobileQuery = window.matchMedia("(max-width: 1024px)");
let lockedScrollY = 0;

if (!window.echarts) {
  viewEl.innerHTML =
    '<div class="card span-12"><h4>No se pudo cargar ECharts</h4><p class="sub">Verifica conexión a internet para usar la librería de gráficos.</p></div>';
} else {
  init();
}

function init() {
  applyColorMode(state.colorMode);
  applyColorScheme(state.colorScheme);
  applyClientBranding(activeClientBrand);
  initToolbar();
  initSidebar();
  initKpiTooltipInteractions();
  renderMenu();
  render();
  window.addEventListener("resize", () => {
    scheduleLayoutPass();
    chartInstances.forEach((chart) => chart.resize());
    if (!isMobileViewport()) closeSidebar();
  });
  if (mobileQuery.addEventListener) {
    mobileQuery.addEventListener("change", () => {
      if (!mobileQuery.matches) closeSidebar();
    });
  } else if (mobileQuery.addListener) {
    mobileQuery.addListener((query) => {
      if (!query.matches) closeSidebar();
    });
  }
}

function resolveClientBrand(pathname) {
  const rawSegment = String(pathname || "/")
    .split("/")
    .filter(Boolean)[0] || "default";
  const slug = rawSegment.toLowerCase();
  return CLIENT_BRANDS[slug] || CLIENT_BRANDS.default;
}

function applyClientBranding(client) {
  if (!client) return;
  const brand = client.logo || {};

  if (sidebarBrandKickerEl) sidebarBrandKickerEl.textContent = client.companyName;
  if (sidebarBrandTitleEl) sidebarBrandTitleEl.textContent = client.sidebarTitle || "Centro de Control";
  if (topbarBrandKickerEl) topbarBrandKickerEl.textContent = client.topbarKicker || client.companyName;
  if (document?.title) document.title = `Demo BI | ${client.companyName}`;

  if (brandLogoWrapEl) {
    brandLogoWrapEl.classList.toggle("is-placeholder", brand.kind !== "image");
    brandLogoWrapEl.classList.toggle("is-square-logo", brand.shape === "square");
  }
  if (brandRowEl) {
    brandRowEl.classList.toggle("is-square-logo", brand.shape === "square");
  }

  if (!brandLogoEl) return;

  if (brand.kind === "image" && brand.src) {
    brandLogoEl.src = brand.src;
    brandLogoEl.alt = brand.alt || client.companyName;
  } else {
    brandLogoEl.src = buildPlaceholderLogoDataUri({
      companyName: client.companyName,
      letters: brand.letters || initialsFromName(client.companyName),
      bg: brand.bg || "#0F5F93",
      fg: brand.fg || "#FFFFFF",
      accent: brand.accent || "#8FD1FF",
    });
    brandLogoEl.alt = `${client.companyName} (Demo)`;
  }
}

function initialsFromName(name) {
  const parts = String(name || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (!parts.length) return "DE";
  return parts.slice(0, 2).map((p) => p[0]?.toUpperCase() || "").join("") || "DE";
}

function buildPlaceholderLogoDataUri({ companyName, letters, bg, fg, accent }) {
  const label = escapeHtml(companyName || "Demo");
  const mark = escapeHtml((letters || "DE").slice(0, 3));
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="180" viewBox="0 0 600 180">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${bg}"/>
          <stop offset="100%" stop-color="${accent}"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="600" height="180" rx="18" fill="url(#g)"/>
      <rect x="22" y="22" width="136" height="136" rx="20" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.28)"/>
      <text x="90" y="105" text-anchor="middle" fill="${fg}" font-family="Manrope, Arial, sans-serif" font-size="56" font-weight="800">${mark}</text>
      <text x="182" y="82" fill="${fg}" font-family="Manrope, Arial, sans-serif" font-size="22" opacity="0.9" letter-spacing="2">DEMO CLIENTE</text>
      <text x="182" y="118" fill="${fg}" font-family="Sora, Arial, sans-serif" font-size="38" font-weight="700">${label}</text>
    </svg>
  `.trim();
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function initKpiTooltipInteractions() {
  const onEnter = (event) => {
    const wrap = event.target.closest(".kpi-help-wrap");
    if (!wrap || !viewEl.contains(wrap)) return;
    requestAnimationFrame(() => {
      positionKpiTooltip(wrap);
    });
  };

  viewEl.addEventListener("mouseover", onEnter);
  viewEl.addEventListener("focusin", onEnter);
  window.addEventListener("scroll", () => {
    const active = document.querySelector(".kpi-help-wrap:hover, .kpi-help-wrap:focus-within");
    if (!active) return;
    positionKpiTooltip(active);
  }, true);
}

function positionKpiTooltip(wrap) {
  const tooltip = wrap.querySelector(".kpi-help-tooltip");
  if (!tooltip) return;

  const margin = 8;
  const offset = 10;
  const wrapRect = wrap.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();

  let top = wrapRect.top - tooltipRect.height - offset;
  if (top < margin) top = wrapRect.bottom + offset;

  if (top + tooltipRect.height > window.innerHeight - margin) {
    top = Math.max(margin, window.innerHeight - tooltipRect.height - margin);
  }

  let left = wrapRect.left + wrapRect.width / 2 - tooltipRect.width / 2;
  left = Math.max(margin, Math.min(left, window.innerWidth - tooltipRect.width - margin));

  tooltip.style.top = `${Math.round(top)}px`;
  tooltip.style.left = `${Math.round(left)}px`;
}

function initToolbar() {
  initDateRangePicker();
  syncToolbarState();

  filterToggleBtn.addEventListener("click", () => {
    state.filtersVisible = !state.filtersVisible;
    renderFilterRow();
  });

  topDateRangeInput?.addEventListener("change", () => {
    if (dateRangePicker) return;
    const inputValue = topDateRangeInput.value || "";
    const [fromPart, toPart] = inputValue.split(" to ").map((v) => v.trim());
    if (!fromPart) return;
    state.dateRange = normalizeCustomRange({ from: fromPart, to: toPart || fromPart });
    render();
  });

  exportBtn.addEventListener("click", () => {
    exportFilteredData();
  });
}

function initDateRangePicker() {
  if (!topDateRangeInput || !window.flatpickr) return;
  const spanishLocale = window.flatpickr?.l10ns?.es || "default";
  dateRangePicker = window.flatpickr(topDateRangeInput, {
    mode: "range",
    dateFormat: "Y-m-d",
    altInput: true,
    altFormat: "d M Y",
    altInputClass: "ghost ghost-date-range",
    locale: spanishLocale,
    showMonths: 1,
    minDate: datasetDateBounds.min,
    maxDate: datasetDateBounds.max,
    disableMobile: true,
    onClose: (selectedDates) => {
      if (!selectedDates.length) return;
      const from = dateToIso(selectedDates[0]);
      const to = selectedDates[1] ? dateToIso(selectedDates[1]) : from;
      state.dateRange = normalizeCustomRange({ from, to });
      render();
    },
  });
}

function initSidebar() {
  initThemePopover();

  mobileMenuBtn?.addEventListener("click", () => {
    if (!isMobileViewport()) return;
    toggleSidebar();
  });

  sidebarCloseBtn?.addEventListener("click", () => {
    closeSidebar();
  });

  sidebarOverlayEl?.addEventListener("click", () => {
    closeThemePopover();
    closeSidebar();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (state.themePopoverOpen) {
      closeThemePopover();
      return;
    }
    closeSidebar();
  });

  document.addEventListener("click", (event) => {
    if (!state.themePopoverOpen) return;
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (themePopoverEl?.contains(target) || settingsBtnEl?.contains(target)) return;
    closeThemePopover();
  });
}

function isMobileViewport() {
  return mobileQuery.matches;
}

function openSidebar() {
  if (!isMobileViewport() || document.body.classList.contains("sidebar-open")) return;
  lockedScrollY = window.scrollY || window.pageYOffset || 0;
  document.body.classList.add("sidebar-open");
  if (mobileMenuBtn) mobileMenuBtn.setAttribute("aria-expanded", "true");
  document.body.style.position = "fixed";
  document.body.style.top = `-${lockedScrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
  requestAnimationFrame(() => {
    sidebarCloseBtn?.focus();
  });
}

function toggleSidebar() {
  if (document.body.classList.contains("sidebar-open")) {
    closeSidebar();
  } else {
    openSidebar();
  }
}

function closeSidebar() {
  const wasOpen = document.body.classList.contains("sidebar-open");
  closeThemePopover();
  document.body.classList.remove("sidebar-open");
  if (mobileMenuBtn) mobileMenuBtn.setAttribute("aria-expanded", "false");
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  if (wasOpen) {
    window.scrollTo(0, lockedScrollY);
    if (isMobileViewport()) {
      requestAnimationFrame(() => {
        mobileMenuBtn?.focus();
      });
    }
  }
}

function initThemePopover() {
  renderModeToggle();
  renderThemeOptions();

  settingsBtnEl?.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleThemePopover();
  });

  themeOptionsEl?.addEventListener("click", (event) => {
    const button = event.target instanceof Element ? event.target.closest("[data-theme-key]") : null;
    if (!button) return;
    applyColorScheme(button.dataset.themeKey);
    closeThemePopover();
  });

  modeToggleEl?.addEventListener("click", (event) => {
    const button = event.target instanceof Element ? event.target.closest("[data-color-mode]") : null;
    if (!button) return;
    applyColorMode(button.dataset.colorMode);
    renderModeToggle();
  });
}

function renderThemeOptions() {
  if (!themeOptionsEl) return;
  themeOptionsEl.innerHTML = COLOR_SCHEMES.map((scheme) => {
    const isActive = scheme.key === state.colorScheme;
    return `
      <button
        type="button"
        class="theme-option ${isActive ? "is-active" : ""}"
        data-theme-key="${scheme.key}"
        aria-pressed="${isActive ? "true" : "false"}"
      >
        <span class="theme-option-preview" aria-hidden="true">
          ${scheme.swatches.map((color) => `<span class="theme-swatch" style="--swatch:${color}"></span>`).join("")}
        </span>
        <span class="theme-option-copy">
          <span class="theme-option-name">${escapeHtml(scheme.label)}</span>
          <span class="theme-option-desc">${escapeHtml(scheme.description)}</span>
        </span>
        <span class="theme-option-check" aria-hidden="true">${isActive ? "●" : ""}</span>
      </button>
    `;
  }).join("");
}

function renderModeToggle() {
  if (!modeToggleEl) return;
  modeToggleEl.querySelectorAll("[data-color-mode]").forEach((button) => {
    const isActive = button.dataset.colorMode === state.colorMode;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

function toggleThemePopover() {
  if (state.themePopoverOpen) {
    closeThemePopover();
  } else {
    openThemePopover();
  }
}

function openThemePopover() {
  if (!themePopoverEl || !settingsBtnEl) return;
  state.themePopoverOpen = true;
  renderThemeOptions();
  themePopoverEl.hidden = false;
  themePopoverEl.classList.add("is-open");
  settingsBtnEl.setAttribute("aria-expanded", "true");
}

function closeThemePopover() {
  if (!themePopoverEl || !settingsBtnEl) return;
  state.themePopoverOpen = false;
  themePopoverEl.classList.remove("is-open");
  themePopoverEl.hidden = true;
  settingsBtnEl.setAttribute("aria-expanded", "false");
}

function getInitialColorScheme() {
  try {
    const stored = window.localStorage.getItem(COLOR_SCHEME_STORAGE_KEY);
    if (COLOR_SCHEMES.some((scheme) => scheme.key === stored)) return stored;
  } catch {}
  return "ocean";
}

function applyColorScheme(key) {
  const scheme = COLOR_SCHEMES.find((item) => item.key === key) || COLOR_SCHEMES[0];
  state.colorScheme = scheme.key;
  document.documentElement.dataset.colorScheme = scheme.key;
  try {
    window.localStorage.setItem(COLOR_SCHEME_STORAGE_KEY, scheme.key);
  } catch {}
  renderThemeOptions();
}

function getInitialColorMode() {
  try {
    const stored = window.localStorage.getItem(COLOR_MODE_STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {}
  return "light";
}

function applyColorMode(mode) {
  const resolved = mode === "dark" ? "dark" : "light";
  state.colorMode = resolved;
  document.documentElement.dataset.colorMode = resolved;
  try {
    window.localStorage.setItem(COLOR_MODE_STORAGE_KEY, resolved);
  } catch {}
  renderModeToggle();
}

function getDatasetDateBounds(weeks) {
  const min = weeks?.[0]?.isoDate || new Date().toISOString().slice(0, 10);
  const max = weeks?.at(-1)?.isoDate || min;
  return { min, max };
}

function getInitialDateRange(bounds) {
  return clampRangeToDataset({ from: "2025-01-01", to: "2025-12-31" });
}

function isoToDate(iso) {
  const [year, month, day] = String(iso || "").split("-").map(Number);
  return new Date(Date.UTC(year || 1970, (month || 1) - 1, day || 1));
}

function dateToIso(date) {
  return date.toISOString().slice(0, 10);
}

function shiftIsoDate(iso, days) {
  const date = isoToDate(iso);
  date.setUTCDate(date.getUTCDate() + days);
  return dateToIso(date);
}

function shiftIsoYear(iso, years) {
  const date = isoToDate(iso);
  date.setUTCFullYear(date.getUTCFullYear() + years);
  return dateToIso(date);
}

function isoMonthKey(iso) {
  const [year, month] = String(iso || "").split("-");
  return `${year}-${month}`;
}

function shiftMonthKeyYear(monthKey, years) {
  const [yearPart, monthPart] = String(monthKey || "").split("-");
  const year = Number(yearPart) || 1970;
  const month = Number(monthPart) || 1;
  return `${year + years}-${String(month).padStart(2, "0")}`;
}

function monthKeyLabel(monthKey) {
  const [yearPart, monthPart] = String(monthKey || "").split("-");
  const year = Number(yearPart) || 1970;
  const month = Number(monthPart) || 1;
  const date = new Date(Date.UTC(year, month - 1, 1));
  const shortMonth = date.toLocaleDateString("es-MX", { month: "short", timeZone: "UTC" }).replace(".", "");
  return `${shortMonth} ${year}`;
}

function diffDaysInclusive(from, to) {
  return Math.max(1, Math.round((isoToDate(to) - isoToDate(from)) / DAY_MS) + 1);
}

function clampRangeToDataset(range) {
  let from = range?.from || datasetDateBounds.min;
  let to = range?.to || datasetDateBounds.max;
  if (from > to) [from, to] = [to, from];
  from = clampIsoToBounds(from);
  to = clampIsoToBounds(to);
  if (from > to) [from, to] = [to, from];
  return { from, to };
}

function clampIsoToBounds(isoDate) {
  if (isoDate < datasetDateBounds.min) return datasetDateBounds.min;
  if (isoDate > datasetDateBounds.max) return datasetDateBounds.max;
  return isoDate;
}

function normalizeCustomRange(range) {
  const fromCandidate = range?.from || state.dateRange.from || datasetDateBounds.min;
  const toCandidate = range?.to || state.dateRange.to || datasetDateBounds.max;
  return clampRangeToDataset({ from: fromCandidate, to: toCandidate });
}

function renderMenu() {
  menuEl.innerHTML = DASHBOARDS.map(
    (d) =>
      `<button type="button" class="menu-item ${d.id === state.activeDashboard ? "active" : ""}" data-dashboard="${d.id}">${d.label}</button>`,
  ).join("");

  menuEl.querySelectorAll(".menu-item").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeDashboard = button.dataset.dashboard;
      renderMenu();
      render();
      if (isMobileViewport()) closeSidebar();
    });
  });
}

function render() {
  disposeCharts();
  titleEl.textContent = DASHBOARDS.find((d) => d.id === state.activeDashboard).label;
  syncToolbarState();
  renderFilterRow();

  if (state.activeDashboard === "ejecutivo") {
    renderExecutive();
  }
  if (state.activeDashboard === "comercial") {
    renderCommercial();
  }
  if (state.activeDashboard === "logistica") {
    renderLogistics();
  }
  if (state.activeDashboard === "rh") {
    renderHR();
  }

  scheduleLayoutPass();
}

function renderFilterRow() {
  if (!state.filtersVisible) {
    filterRowEl.classList.add("hidden");
    filterToggleBtn.classList.remove("active");
    return;
  }

  const defs = getFilterDefinitions();
  const activeFilterChips = getActiveFilterChips(defs);
  filterToggleBtn.classList.add("active");
  filterRowEl.classList.remove("hidden");
  filterRowEl.innerHTML = `
    <div class="filter-row-inner">
      ${defs
        .map(
          (f) => `
        <div class="filter-group">
          <label>${f.label}</label>
          <details class="filter-multi" data-key="${f.key}" ${state.openFilterKeys.includes(f.key) ? "open" : ""}>
            <summary>${escapeHtml(getFilterSelectionSummary(f.key, f.options))}</summary>
            <div class="filter-multi-menu">
              ${f.options.map((opt, idx) => {
                const checked = getFilterSelection(f.key).includes(opt);
                const inputId = `f-${f.key}-${idx}`;
                return `
                  <label class="filter-multi-option" for="${inputId}">
                    <input type="checkbox" id="${inputId}" data-key="${f.key}" value="${escapeHtml(opt)}" ${checked ? "checked" : ""} />
                    <span>${escapeHtml(opt)}</span>
                  </label>
                `;
              }).join("")}
            </div>
          </details>
        </div>
      `,
        )
        .join("")}
      <button type="button" class="clear-filter" id="clear-filters-btn">Limpiar</button>
    </div>
    ${
      activeFilterChips.length
        ? `
      <div class="filter-chip-row" aria-label="Filtros activos">
        ${activeFilterChips
          .map(
            (chip) => `
          <button type="button" class="filter-chip" data-filter-chip-remove="${chip.key}" title="Quitar filtro ${escapeHtml(chip.label)}">
            <span class="filter-chip-label">${escapeHtml(chip.label)}:</span>
            <span class="filter-chip-value">${escapeHtml(chip.value)}</span>
            <span class="filter-chip-x" aria-hidden="true">✕</span>
          </button>
        `,
          )
          .join("")}
      </div>
    `
        : ""
    }
  `;

  filterRowEl.querySelectorAll(".filter-multi").forEach((detailsEl) => {
    detailsEl.addEventListener("toggle", () => {
      syncOpenFilterKeysFromDom();
    });
  });

  filterRowEl.querySelectorAll('.filter-multi-option input[type="checkbox"]').forEach((input) => {
    input.addEventListener("change", () => {
      updateFilterSelectionFromCheckbox(input.dataset.key, input.value, input.checked);
      if (input.dataset.key === "region") {
        state.filters.tienda = getStoresSelectionForRegions(state.filters.tienda, state.filters.region);
      }
      syncOpenFilterKeysFromDom();
      render();
    });
  });

  filterRowEl.querySelector("#clear-filters-btn")?.addEventListener("click", () => {
    state.filters = cloneDefaultFilters();
    syncOpenFilterKeysFromDom();
    render();
  });

  filterRowEl.querySelectorAll("[data-filter-chip-remove]").forEach((btn) => {
    btn.addEventListener("click", () => {
      resetFilterSelection(btn.dataset.filterChipRemove);
      if (btn.dataset.filterChipRemove === "region") {
        state.filters.tienda = getStoresSelectionForRegions(state.filters.tienda, state.filters.region);
      }
      syncOpenFilterKeysFromDom();
      render();
    });
  });
}

function syncOpenFilterKeysFromDom() {
  if (!filterRowEl) return;
  state.openFilterKeys = Array.from(filterRowEl.querySelectorAll(".filter-multi[open]"))
    .map((el) => el.dataset.key)
    .filter(Boolean);
}

function syncToolbarState() {
  if (dateRangePicker) {
    dateRangePicker.set("minDate", datasetDateBounds.min);
    dateRangePicker.set("maxDate", datasetDateBounds.max);
    const selected = dateRangePicker.selectedDates.map((date) => dateToIso(date));
    if (selected[0] !== state.dateRange.from || selected[1] !== state.dateRange.to) {
      dateRangePicker.setDate([state.dateRange.from, state.dateRange.to], false, "Y-m-d");
    }
  } else if (topDateRangeInput) {
    const fallbackValue = `${state.dateRange.from} to ${state.dateRange.to}`;
    if (topDateRangeInput.value !== fallbackValue) topDateRangeInput.value = fallbackValue;
  }
}

function getDateScopeLabel() {
  return `${formatScopeDate(state.dateRange.from)} - ${formatScopeDate(state.dateRange.to)}`;
}

function formatScopeDate(isoDate) {
  return isoToDate(isoDate)
    .toLocaleDateString("es-MX", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" })
    .replace(".", "");
}

function getRangeFilenameSuffix() {
  return `${state.dateRange.from.replaceAll("-", "")}_${state.dateRange.to.replaceAll("-", "")}`;
}

function exportFilteredData() {
  const rangeSuffix = getRangeFilenameSuffix();

  if (state.activeDashboard === "rh") {
    const rows = getFilteredHR().map((r) => ({
      semana: r.weekLabel,
      mes: r.monthLabel,
      region: r.region,
      tienda: r.store,
      area: r.area,
      headcount: r.actualHeadcount,
      vacantes: r.vacancies,
      ausentismo_pct: round(r.absenteeismPct, 2),
      rotacion_pct: round(r.turnoverPct, 2),
      costo_laboral: round(r.laborCost, 0),
    }));
    downloadCsv(rows, `ryse-rh-${rangeSuffix}.csv`);
    return;
  }

  const rows = getFilteredRecords(model.records).map((r) => ({
    semana: r.weekLabel,
    mes: r.monthLabel,
    canal: r.channel,
    region: r.region,
    tienda: r.store,
    categoria: r.category,
    item: r.itemCategory,
    ordenes: round(r.orders, 0),
    ventas_netas: round(r.netSales, 0),
    margen_bruto: round(r.grossMargin, 0),
    fill_rate_pct: round(r.fillRate, 2),
    otd_pct: round(r.otd, 2),
  }));

  downloadCsv(rows, `ryse-${state.activeDashboard}-${rangeSuffix}.csv`);
}

function downloadCsv(rows, filename) {
  if (!rows.length) return;
  const headers = Object.keys(rows[0]);
  const lines = [headers.join(",")];
  rows.forEach((row) => {
    const values = headers.map((key) => {
      const cell = row[key] ?? "";
      const clean = String(cell).replaceAll("\"", "\"\"");
      return `"${clean}"`;
    });
    lines.push(values.join(","));
  });
  const blob = new Blob([`\uFEFF${lines.join("\n")}`], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

function getFilterDefinitions() {
  const options = getOptionSets();

  const common = [
    { key: "canal", label: "Canal", options: ["Todos", "Tienda", "E-commerce"] },
    { key: "region", label: "Región", options: ["Todas", ...options.regiones] },
    { key: "tienda", label: "Tienda", options: ["Todas", ...options.tiendas] },
    { key: "categoria", label: "Categoría", options: ["Todas", ...options.categorias] },
  ];

  if (state.activeDashboard === "ejecutivo") {
    return [
      ...common,
      { key: "entrega", label: "Tipo de entrega", options: ["Todos", "Pickup", "Delivery"] },
      { key: "segmento", label: "Segmento cliente", options: ["Todos", "Premium", "Frecuente", "Mayorista"] },
    ];
  }

  if (state.activeDashboard === "comercial") {
    return [
      ...common,
      { key: "promo", label: "Campaña/Promo", options: ["Todas", ...options.promos] },
      { key: "pago", label: "Método de pago", options: ["Todos", ...options.pagos] },
      { key: "entrega", label: "Tipo de entrega", options: ["Todos", "Pickup", "Delivery"] },
    ];
  }

  if (state.activeDashboard === "logistica") {
    return [
      ...common,
      { key: "transportista", label: "Transportista", options: ["Todos", ...options.transportistas] },
      { key: "entrega", label: "Tipo de entrega", options: ["Todos", "Pickup", "Delivery"] },
      { key: "sla", label: "SLA", options: ["Todos", "24h", "48h", "72h"] },
    ];
  }

  return [
    { key: "region", label: "Región", options: ["Todas", ...options.regiones] },
    { key: "tienda", label: "Tienda", options: ["Todas", ...options.tiendas] },
    { key: "area", label: "Área", options: ["Todas", "Ventas", "Almacén", "Administración"] },
    { key: "turno", label: "Turno", options: ["Todos", "Mañana", "Tarde", "Nocturno"] },
    { key: "puesto", label: "Puesto", options: ["Todos", "Asesor", "Operador", "Supervisor", "Analista"] },
    { key: "contrato", label: "Tipo de contrato", options: ["Todos", "Base", "Temporal"] },
    { key: "antiguedad", label: "Antigüedad", options: ["Todos", "0-1", "1-3", "3-5", "5+"] },
    { key: "supervisor", label: "Supervisor", options: ["Todos", ...options.supervisores] },
  ];
}

function getOptionSets() {
  const regionSelection = getFilterSelection("region");
  const allRegion = getAllFilterValue("region");
  const useAllRegions = regionSelection.includes(allRegion);
  const selectedRegions = new Set(regionSelection);
  const stores = model.stores
    .filter((s) => useAllRegions || selectedRegions.has(s.region))
    .map((s) => s.name)
    .sort((a, b) => a.localeCompare(b));

  return {
    regiones: unique(model.records.map((r) => r.region)).sort((a, b) => a.localeCompare(b)),
    tiendas: stores,
    categorias: unique(model.records.map((r) => r.category)).sort((a, b) => a.localeCompare(b)),
    promos: unique(model.records.map((r) => r.campaign)).filter((c) => c !== "Sin campaña").sort((a, b) => a.localeCompare(b)),
    pagos: unique(model.records.map((r) => r.paymentMethod)).sort((a, b) => a.localeCompare(b)),
    transportistas: unique(model.records.map((r) => r.carrier)).filter((c) => c !== "N/A").sort((a, b) => a.localeCompare(b)),
    supervisores: unique(model.hrRecords.map((h) => h.supervisor)).sort((a, b) => a.localeCompare(b)),
  };
}

function storeMatchesRegion(storeName, region) {
  const stores = normalizeFilterSelection("tienda", storeName);
  const regions = normalizeFilterSelection("region", region);
  const allStore = getAllFilterValue("tienda");
  const allRegion = getAllFilterValue("region");
  if (stores.includes(allStore) || regions.includes(allRegion)) return true;
  const allowedRegions = new Set(regions);
  return stores.every((storeLabel) => {
    const store = model.stores.find((s) => s.name === storeLabel);
    return store && allowedRegions.has(store.region);
  });
}

function matchesRecordFilters(record, options = {}) {
  const includeDate = options.includeDate !== false;
  const dateRange = options.dateRange || state.dateRange;
  if (includeDate && (record.isoDate < dateRange.from || record.isoDate > dateRange.to)) return false;
  if (!filterIncludesValue("canal", record.channel)) return false;
  if (!filterIncludesValue("region", record.region)) return false;
  if (!filterIncludesValue("tienda", record.store)) return false;
  if (!filterIncludesValue("categoria", record.category)) return false;
  if (!filterIncludesValue("entrega", record.deliveryType)) return false;
  if (!filterIncludesValue("segmento", record.segment)) return false;
  if (!filterIncludesValue("promo", record.campaign)) return false;
  if (!filterIncludesValue("pago", record.paymentMethod)) return false;
  if (!filterIncludesValue("transportista", record.carrier)) return false;
  return true;
}

function matchesHRFilters(record, options = {}) {
  const includeDate = options.includeDate !== false;
  const dateRange = options.dateRange || state.dateRange;
  if (includeDate && (record.isoDate < dateRange.from || record.isoDate > dateRange.to)) return false;
  if (!filterIncludesValue("region", record.region)) return false;
  if (!filterIncludesValue("tienda", record.store)) return false;
  if (!filterIncludesValue("area", record.area)) return false;
  if (!filterIncludesValue("turno", record.shift)) return false;
  if (!filterIncludesValue("puesto", record.role)) return false;
  if (!filterIncludesValue("contrato", record.contract)) return false;
  if (!filterIncludesValue("antiguedad", record.tenure)) return false;
  if (!filterIncludesValue("supervisor", record.supervisor)) return false;
  return true;
}

function cloneDefaultFilters() {
  return Object.fromEntries(
    Object.entries(defaultFilters).map(([key, value]) => [key, Array.isArray(value) ? [...value] : value]),
  );
}

function getAllFilterValue(key) {
  const fallback = defaultFilters[key];
  if (Array.isArray(fallback) && fallback.length) return fallback[0];
  return "Todos";
}

function normalizeFilterSelection(key, value) {
  const allValue = getAllFilterValue(key);
  if (Array.isArray(value)) {
    const valid = unique(value.filter(Boolean));
    return valid.length ? valid : [allValue];
  }
  if (typeof value === "string" && value) return [value];
  return [allValue];
}

function getFilterSelection(key) {
  return normalizeFilterSelection(key, state.filters[key]);
}

function filterIncludesValue(key, candidate) {
  const selected = getFilterSelection(key);
  const allValue = getAllFilterValue(key);
  if (selected.includes(allValue)) return true;
  return selected.includes(candidate);
}

function getFilterSelectionSummary(key, options = []) {
  const allValue = getAllFilterValue(key);
  const selected = getFilterSelection(key).filter((item) => options.includes(item));
  if (!selected.length || selected.includes(allValue)) return allValue;
  if (selected.length === 1) return selected[0];
  return `${selected.length} seleccionados`;
}

function getActiveFilterChips(defs = []) {
  return defs
    .map((def) => {
      const allValue = getAllFilterValue(def.key);
      const selected = getFilterSelection(def.key).filter((item) => def.options.includes(item) && item !== allValue);
      if (!selected.length) return null;
      return {
        key: def.key,
        label: def.label,
        value: selected.length === 1 ? selected[0] : `${selected.length} seleccionados`,
      };
    })
    .filter(Boolean);
}

function resetFilterSelection(key) {
  if (!key || !(key in state.filters)) return;
  state.filters[key] = [getAllFilterValue(key)];
}

function updateFilterSelectionFromCheckbox(key, option, checked) {
  const allValue = getAllFilterValue(key);
  let current = getFilterSelection(key);

  if (option === allValue) {
    state.filters[key] = checked ? [allValue] : [allValue];
    return;
  }

  current = current.filter((value) => value !== allValue);

  if (checked) {
    if (!current.includes(option)) current.push(option);
  } else {
    current = current.filter((value) => value !== option);
  }

  state.filters[key] = current.length ? current : [allValue];
}

function getStoresSelectionForRegions(storeSelection, regionSelection) {
  const stores = normalizeFilterSelection("tienda", storeSelection);
  const allStore = getAllFilterValue("tienda");
  if (stores.includes(allStore)) return [allStore];

  const allowedStores = new Set(getOptionSets().tiendas);
  const validStores = stores.filter((store) => allowedStores.has(store));
  return validStores.length ? validStores : [allStore];
}

function getFilteredRecords(source, dateRange = state.dateRange) {
  return source.filter((record) => matchesRecordFilters(record, { includeDate: true, dateRange }));
}

function getFilteredHR(dateRange = state.dateRange) {
  return model.hrRecords.filter((record) => matchesHRFilters(record, { includeDate: true, dateRange }));
}

function getLyDateRange(currentRange = state.dateRange) {
  return {
    from: shiftIsoYear(currentRange.from, -1),
    to: shiftIsoYear(currentRange.to, -1),
  };
}

function getLyPeriodRecords(source, currentRows, currentRange = state.dateRange) {
  if (!currentRows.length) return [];
  const lyRange = getLyDateRange(currentRange);
  return source.filter((record) =>
    matchesRecordFilters(record, { includeDate: true, dateRange: lyRange }),
  );
}

function getLyPeriodHR(currentRows, currentRange = state.dateRange) {
  if (!currentRows.length) return [];
  const lyRange = getLyDateRange(currentRange);
  return model.hrRecords.filter((record) =>
    matchesHRFilters(record, { includeDate: true, dateRange: lyRange }),
  );
}

function renderExecutive() {
  const records = getFilteredRecords(model.records);
  if (!records.length) {
    renderNoDataState();
    return;
  }
  const lyRecords = getLyPeriodRecords(model.records, records);
  const hrRecords = getFilteredHR();
  const lyHR = getLyPeriodHR(hrRecords);
  const data = executiveData(records, lyRecords, hrRecords, lyHR);

  viewEl.innerHTML = `
    ${scorecardsHTML(data.scorecards)}
    <section class="grid">
      <article class="card span-12">
        <h4>Ventas por mes</h4>
        <p class="sub">Actual vs AA vs objetivo</p>
        <div id="exec-monthly-sales" class="chart tall"></div>
        ${monthlySalesTable(data.monthLabels, data.monthSales, data.monthSalesLY, data.monthTarget)}
      </article>

      <article class="card span-6">
        <h4>Margen % por Categoría</h4>
        <p class="sub">Top 10 categorías</p>
        <div id="exec-margin-category" class="chart tall"></div>
      </article>
      <article class="card span-6">
        <h4>Mix de Ventas por Canal</h4>
        <p class="sub">Tienda vs e-commerce</p>
        <div id="exec-mix-channel" class="chart tall"></div>
      </article>

      <article class="card span-5">
        <h4>Top 10 tiendas por ventas y margen</h4>
        <p class="sub">Semáforo integral: margen, servicio y crecimiento</p>
        ${topStoresTable(data.topStores)}
      </article>
      <article class="card span-7">
        <h4>Mapa Comercial por Estado</h4>
        <p class="sub">Ventas acumuladas</p>
        <div id="exec-map" class="chart map-chart"></div>
        <div class="chart-legend legend-map">
          <span>Bajo</span>
          <span class="legend-gradient legend-gradient-map" aria-hidden="true"></span>
          <span>Alto</span>
        </div>
      </article>
    </section>
  `;

  monthlySalesChart(
    "exec-monthly-sales",
    data.monthLabels,
    data.monthSales,
    data.monthSalesLY,
    data.monthTarget,
  );

  horizontalBar(
    "exec-margin-category",
    data.marginByCategory.map((d) => d.name),
    data.marginByCategory.map((d) => d.value),
    "% margen",
    { fitToDataMax: true, valueType: "percent" },
  );

  stackedBar("exec-mix-channel", data.weekLabels, [
    { name: "Tienda", data: data.mixStore, color: chartColors.navy },
    { name: "E-commerce", data: data.mixEcom, color: chartColors.primary },
  ], { valueType: "currency", fitToDataRange: true });

  renderMexicoMap("exec-map", data.stateMap);
}

function renderCommercial() {
  const records = getFilteredRecords(model.records);
  if (!records.length) {
    renderNoDataState();
    return;
  }
  const lyRecords = getLyPeriodRecords(model.records, records);
  const data = commercialData(records, lyRecords);

  viewEl.innerHTML = `
    ${scorecardsHTML(data.scorecards)}
    <section class="grid">
      <article class="card span-5">
        <h4>Embudo e-commerce</h4>
        <p class="sub">Sesiones a compra</p>
        <div id="com-funnel" class="chart"></div>
      </article>
      <article class="card span-7 chart-fill-card">
        <h4>Ventas por categoría / marca</h4>
        <p class="sub">Top 15 y participación</p>
        <div id="com-category-share" class="chart"></div>
      </article>

      <article class="card span-6">
        <h4>Crecimiento vs AA por tienda/categoría</h4>
        <p class="sub">Heatmap de variación %</p>
        <div id="com-heatmap" class="chart tall"></div>
        <div class="chart-legend legend-heat">
          <span>-25%</span>
          <span class="legend-gradient legend-gradient-heat" aria-hidden="true"></span>
          <span>+25%</span>
        </div>
      </article>
      <article class="card span-6">
        <h4>Efectividad de promociones</h4>
        <p class="sub">Descuento % vs uplift ventas</p>
        <div id="com-promo-scatter" class="chart tall"></div>
      </article>

      <article class="card span-7">
        <h4>Campañas</h4>
        <p class="sub">Ventas incremental, margen, descuento y ROI</p>
        ${promoTable(data.promoTable)}
      </article>
      <article class="card span-5">
        <h4>Precio vs competencia</h4>
        <p class="sub">Alertas por banda de precio</p>
        ${priceAlertsTable(data.priceAlerts)}
      </article>

      <article class="card span-12">
        <h4>Productos estrella y productos problema</h4>
        <p class="sub">Semáforos de ventas, margen, rotación y devoluciones</p>
        ${productsTable(data.products)}
      </article>
    </section>
  `;

  funnelChart("com-funnel", data.funnel);
  horizontalBar(
    "com-category-share",
    data.categoryTop.map((d) => d.name),
    data.categoryTop.map((d) => d.value),
    "Ventas",
    { valueType: "currency" },
  );
  heatmapChart("com-heatmap", data.heatmapStores, data.heatmapCategories, data.heatmapValues);
  promoScatter("com-promo-scatter", data.promoScatter);
}

function renderLogistics() {
  const records = getFilteredRecords(model.records);
  if (!records.length) {
    renderNoDataState();
    return;
  }
  const lyRecords = getLyPeriodRecords(model.records, records);
  const data = logisticsData(records, lyRecords);

  viewEl.innerHTML = `
    ${scorecardsHTML(data.scorecards)}
    <section class="grid">
      <article class="card span-8">
        <h4>OTD / OTIF trend</h4>
        <p class="sub">Con meta SLA 95%</p>
        <div id="log-otd-otif" class="chart"></div>
      </article>
      <article class="card span-4">
        <h4>Atrasos por transportista</h4>
        <p class="sub">Órdenes atrasadas</p>
        <div id="log-delays-carrier" class="chart"></div>
      </article>

      <article class="card span-6">
        <h4>Lead Time distribución</h4>
        <p class="sub">Pedido a entrega (días)</p>
        <div id="log-lead-hist" class="chart"></div>
      </article>
      <article class="card span-6">
        <h4>Inventario por categoría</h4>
        <p class="sub">Disponible / comprometido / tránsito</p>
        <div id="log-inventory-cat" class="chart"></div>
      </article>

      <article class="card span-4">
        <h4>Aging de inventario</h4>
        <p class="sub">Rangos de días</p>
        ${agingTable(data.aging)}
      </article>
      <article class="card span-8">
        <h4>ABC de inventario (Pareto)</h4>
        <p class="sub">SKUs vs % valor inventario</p>
        <div id="log-pareto" class="chart"></div>
      </article>

      <article class="card span-7">
        <h4>Top SKUs con quiebre / riesgo</h4>
        <p class="sub">Días sin stock y ventas perdidas</p>
        ${skuRiskTable(data.skuRisk)}
      </article>
      <article class="card span-5 chart-fill-card">
        <h4>Pedidos por estatus</h4>
        <p class="sub">Creado, surtido, embarcado, entregado, devuelto</p>
        <div id="log-status" class="chart"></div>
      </article>
    </section>
  `;

  lineChart("log-otd-otif", data.weekLabels, [
    { name: "OTD", data: data.weekOTD, color: palette[0] },
    { name: "OTIF", data: data.weekOTIF, color: palette[1] },
    { name: "Meta SLA", data: data.weekSLA, color: chartColors.yellow },
  ], { valueType: "percent", axisMin: 90, axisMax: 100, axisInterval: 2 });

  verticalBar("log-delays-carrier", data.carrierDelay.map((d) => d.name), data.carrierDelay.map((d) => d.value), { valueType: "count" });
  verticalBar("log-lead-hist", data.leadBins.map((d) => d.bin), data.leadBins.map((d) => d.count), { valueType: "count" });
  stackedBar("log-inventory-cat", data.inventoryByCategory.map((d) => d.category), [
    { name: "Disponible", data: data.inventoryByCategory.map((d) => d.available), color: chartColors.green },
    { name: "Comprometido", data: data.inventoryByCategory.map((d) => d.committed), color: chartColors.yellow },
    { name: "Tránsito", data: data.inventoryByCategory.map((d) => d.transit), color: chartColors.navy },
  ], { valueType: "count" });

  paretoChart("log-pareto", data.paretoSkus);
  stackedBar("log-status", data.statusByWeek.map((d) => d.week), [
    { name: "Creado", data: data.statusByWeek.map((d) => d.created), color: chartColors.neutral },
    { name: "Surtido", data: data.statusByWeek.map((d) => d.picked), color: chartColors.primary },
    { name: "Embarcado", data: data.statusByWeek.map((d) => d.shipped), color: chartColors.navy },
    { name: "Entregado", data: data.statusByWeek.map((d) => d.delivered), color: chartColors.green },
    { name: "Devuelto", data: data.statusByWeek.map((d) => d.returned), color: chartColors.red },
  ], { valueType: "count" });
}

function renderHR() {
  const records = getFilteredRecords(model.records);
  const hrRecords = getFilteredHR();
  if (!hrRecords.length) {
    renderNoDataState();
    return;
  }
  const lyRecords = getLyPeriodRecords(model.records, records);
  const lyHR = getLyPeriodHR(hrRecords);
  const data = hrData(records, hrRecords, lyRecords, lyHR);

  viewEl.innerHTML = `
    ${scorecardsHTML(data.scorecards)}
    <section class="grid">
      <article class="card span-6">
        <h4>Rotación por tienda / área</h4>
        <p class="sub">Top 10 con semáforo</p>
        <div id="hr-turnover-store" class="chart"></div>
      </article>
      <article class="card span-6">
        <h4>Tendencia de Ausentismo</h4>
        <p class="sub">Semanal</p>
        <div id="hr-absent-trend" class="chart"></div>
      </article>

      <article class="card span-7 chart-fill-card">
        <h4>Plantilla vs plan</h4>
        <p class="sub">Headcount actual vs requerido</p>
        <div id="hr-plan-vs-current" class="chart"></div>
      </article>
      <article class="card span-5">
        <h4>Vacantes pipeline</h4>
        <p class="sub">Requisiciones a ingresos</p>
        <div id="hr-vacancy-funnel" class="chart"></div>
      </article>

      <article class="card span-4 chart-fill-card">
        <h4>Horas extra por área</h4>
        <p class="sub">Horas acumuladas</p>
        <div id="hr-overtime-area" class="chart"></div>
      </article>
      <article class="card span-8 chart-fill-card">
        <h4>Productividad</h4>
        <p class="sub">Ventas por empleado</p>
        <div id="hr-productivity" class="chart"></div>
      </article>

      <article class="card span-12">
        <h4>Capacitación y cumplimiento</h4>
        <p class="sub">Cursos obligatorios</p>
        ${trainingTable(data.training)}
      </article>
    </section>
  `;

  horizontalBar("hr-turnover-store", data.turnoverByStore.map((d) => d.name), data.turnoverByStore.map((d) => d.value), "% rotación", { valueType: "percent" });
  lineChart("hr-absent-trend", data.weekLabels, [{ name: "Ausentismo", data: data.absentTrend, color: palette[0] }], { valueType: "percent", smooth: false });
  groupedBar("hr-plan-vs-current", data.planVsCurrent.map((d) => d.week), [
    { name: "Plan", data: data.planVsCurrent.map((d) => d.plan), color: chartColors.neutral },
    { name: "Actual", data: data.planVsCurrent.map((d) => d.current), color: chartColors.navy },
  ], { valueType: "count" });
  funnelChart("hr-vacancy-funnel", data.vacancyFunnel);
  verticalBar("hr-overtime-area", data.overtimeByArea.map((d) => d.area), data.overtimeByArea.map((d) => d.hours), { valueType: "count" });
  verticalBar(
    "hr-productivity",
    data.productivity.map((d) => d.store),
    data.productivity.map((d) => d.value),
    {
      valueType: "currency",
      mobileRotate: 30,
      mobileBottom: 78,
      xLabelFormatter: (label) => (isMobileViewport() ? truncateWithEllipsis(label, 14) : label),
    },
  );
}

function executiveData(records, lyRecords = [], hrRecords = [], lyHR = []) {
  const sales = sum(records, "netSales");
  const lySales = sum(lyRecords, "netSales");
  const margin = sum(records, "grossMargin");
  const marginPct = pct(margin, sales);
  const ebitda = sales * 0.145;
  const ebitdaPct = pct(ebitda, sales);
  const budgetTotal = sum(records, "budgetSales");
  const lyBudgetTotal = sum(lyRecords, "budgetSales");
  const budgetAttainment = pct(sales, budgetTotal);
  const lyBudgetAttainment = pct(lySales, lyBudgetTotal);
  const ordersEcom = sum(records.filter((r) => r.channel === "E-commerce"), "orders");
  const ticketsStore = sum(records.filter((r) => r.channel === "Tienda"), "orders");
  const aov = sales / Math.max(ordersEcom + ticketsStore, 1);
  const fill = weightedAvg(records, "fillRate", "orders");
  const inventory = sum(records, "inventoryValue");
  const cogs = sum(records, "cogs");
  const doh = (inventory / Math.max(cogs * 52, 1)) * 365;
  const otd = weightedAvg(records, "otd", "orders");
  const lyMargin = sum(lyRecords, "grossMargin");
  const lyMarginPct = pct(lyMargin, lySales);
  const lyOrdersTotal = sum(lyRecords, "orders");
  const lyAov = lySales / Math.max(lyOrdersTotal, 1);
  const lyFill = weightedAvg(lyRecords, "fillRate", "orders");
  const discount = weightedAvg(records, "discountPct", "netSales");
  const lyDiscount = weightedAvg(lyRecords, "discountPct", "netSales");
  const ecom = records.filter((r) => r.channel === "E-commerce");
  const lyEcom = lyRecords.filter((r) => r.channel === "E-commerce");
  const conv = pct(sum(ecom, "orders"), sum(ecom, "sessions"));
  const lyConv = pct(sum(lyEcom, "orders"), sum(lyEcom, "sessions"));
  const returns = weightedAvg(records, "returnsPct", "orders");
  const lyReturns = weightedAvg(lyRecords, "returnsPct", "orders");
  const lyInventory = sum(lyRecords, "inventoryValue");
  const lyCogs = sum(lyRecords, "cogs");
  const lyDoh = (lyInventory / Math.max(lyCogs * 52, 1)) * 365;
  const lyOtd = weightedAvg(lyRecords, "otd", "orders");
  const lyOrdersEcom = sum(lyRecords.filter((r) => r.channel === "E-commerce"), "orders");
  const otif = weightedAvg(records, "otif", "orders");
  const lyOtif = weightedAvg(lyRecords, "otif", "orders");
  const stockout = weightedAvg(records, "stockoutRate", "orders");
  const lyStockout = weightedAvg(lyRecords, "stockoutRate", "orders");
  const ordersTotal = sum(records, "orders");
  const backorders = sum(records, "backorderUnits");
  const backorderPct = pct(backorders, ordersTotal);
  const lyBackorders = sum(lyRecords, "backorderUnits");
  const lyBackorderPct = pct(lyBackorders, lyOrdersTotal);
  const absenteeism = weightedAvg(hrRecords, "absenteeismPct", "actualHeadcount");
  const lyAbsenteeism = weightedAvg(lyHR, "absenteeismPct", "actualHeadcount");
  const turnover = weightedAvg(hrRecords, "turnoverPct", "actualHeadcount");
  const lyTurnover = weightedAvg(lyHR, "turnoverPct", "actualHeadcount");
  const laborCost = sum(hrRecords, "laborCost");
  const lyLaborCost = sum(lyHR, "laborCost");
  const laborVsSales = pct(laborCost, sales);
  const lyLaborVsSales = pct(lyLaborCost, lySales);

  const weekMap = aggregateBy(records, "weekLabel", (acc, rec) => {
    acc.sales += rec.netSales;
    acc.target += rec.budgetSales;
    if (rec.channel === "Tienda") acc.store += rec.netSales;
    if (rec.channel === "E-commerce") acc.ecom += rec.netSales;
    return acc;
  }, () => ({ sales: 0, target: 0, store: 0, ecom: 0 }));

  const monthMap = aggregateBy(records, (rec) => isoMonthKey(rec.isoDate), (acc, rec) => {
    acc.sales += rec.netSales;
    acc.target += rec.budgetSales;
    return acc;
  }, () => ({ sales: 0, target: 0 }));
  const lyMonthMap = aggregateBy(lyRecords, (rec) => isoMonthKey(rec.isoDate), (acc, rec) => {
    acc.sales += rec.netSales;
    return acc;
  }, () => ({ sales: 0 }));

  const monthKeys = Object.keys(monthMap).sort((a, b) => a.localeCompare(b));
  const monthLabels = monthKeys.map((key) => monthKeyLabel(key));
  const monthSales = monthKeys.map((key) => monthMap[key].sales);
  const monthTarget = monthKeys.map((key) => monthMap[key].target);
  const monthSalesLY = monthKeys.map((key) => lyMonthMap[shiftMonthKeyYear(key, -1)]?.sales || 0);

  const weekLabels = Object.keys(weekMap);
  const weekSales = weekLabels.map((w) => weekMap[w].sales);
  const weekTarget = weekLabels.map((w) => weekMap[w].target);
  const mixStore = weekLabels.map((w) => weekMap[w].store);
  const mixEcom = weekLabels.map((w) => weekMap[w].ecom);

  const marginByCategory = Object.entries(
    aggregateBy(records, "itemCategory", (acc, rec) => {
      acc.sales += rec.netSales;
      acc.margin += rec.grossMargin;
      return acc;
    }, () => ({ sales: 0, margin: 0 })),
  )
    .map(([name, values]) => ({ name, value: pct(values.margin, values.sales) }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 10)
    .reverse();

  const topStoresBase = Object.entries(
    aggregateBy(records, "store", (acc, rec) => {
      acc.sales += rec.netSales;
      acc.margin += rec.grossMargin;
      acc.orders += rec.orders;
      acc.otdSum += rec.otd * rec.orders;
      return acc;
    }, () => ({ sales: 0, margin: 0, orders: 0, otdSum: 0 })),
  )
    .map(([name, value]) => ({
      name,
      sales: value.sales,
      marginPct: pct(value.margin, value.sales),
      otd: value.otdSum / Math.max(value.orders, 1),
      growthPct: trendPct(
        value.sales,
        sum(lyRecords.filter((record) => record.store === name), "netSales"),
      ),
    }))
    .sort((a, b) => b.sales - a.sales)
    .slice(0, 10);

  const marginRange = range(topStoresBase.map((store) => store.marginPct));
  const otdRange = range(topStoresBase.map((store) => store.otd));
  const growthRange = range(topStoresBase.map((store) => store.growthPct));
  const scoredStores = topStoresBase.map((row) => {
    const marginNorm = normalize(row.marginPct, marginRange.min, marginRange.max);
    const otdNorm = normalize(row.otd, otdRange.min, otdRange.max);
    const growthNorm = normalize(row.growthPct, growthRange.min, growthRange.max);
    const healthScore = marginNorm * 0.45 + otdNorm * 0.2 + growthNorm * 0.35;
    return { ...row, healthScore };
  });

  const storeStatusMap = rankStatuses(scoredStores, "healthScore");
  const topStores = scoredStores.map((store) => ({
    ...store,
    status: storeStatusMap[store.name] || { label: "Amarillo", className: "kpi-mid" },
  }));

  const stateMap = Object.entries(
    aggregateBy(records, "state", (acc, rec) => {
      acc.sales += rec.netSales;
      return acc;
    }, () => ({ sales: 0 })),
  ).map(([stateName, value]) => {
    const coords = model.stateCoords[stateName] || [0, 0];
    return { state: stateName, sales: value.sales, coords };
  });

  return {
    objective: DASHBOARDS[0].objective,
    scorecards: [
      scoreBundle("Comercial", "Facturación = Órdenes e-comm x Ticket Promedio", [
        { label: "Facturación", value: formatCompactMXN(sales), trend: trendPct(sales, lySales), note: "vs AA" },
        { label: "Órdenes e-comm", value: formatInt(ordersEcom), trend: trendPct(ordersEcom, lyOrdersEcom), note: "vs AA" },
        { label: "Ticket Promedio", value: formatMXN(aov), trend: trendPct(aov, lyAov), note: "vs AA" },
      ]),
      scoreBundle("Eficiencia Comercial", "Conversión, descuento y devoluciones", [
        { label: "Conversión e-comm", value: formatPct(conv), trend: trendPct(conv, lyConv), note: "vs AA" },
        { label: "Descuento Promedio", value: formatPct(discount), trend: trendLowerBetter(discount, lyDiscount), note: "vs AA" },
        { label: "Devoluciones", value: formatPct(returns), trend: trendLowerBetter(returns, lyReturns), note: "vs AA" },
      ]),
      scoreBundle("Finanzas", "Ingresos y rentabilidad", [
        { label: "Facturación", value: formatCompactMXN(sales), trend: trendPct(sales, lySales), note: "vs AA" },
        { label: "Margen Bruto % · $", value: `${formatPct(marginPct)} · ${formatCompactMXN(margin)}`, trend: trendPct(marginPct, lyMarginPct), note: "vs AA" },
        { label: "EBITDA % · $", value: `${formatPct(ebitdaPct)} · ${formatCompactMXN(ebitda)}`, trend: trendPct(ebitda, lySales * 0.145), note: "vs AA" },
      ]),
      scoreBundle("Logística", "Entrega a tiempo y surtido", [
        { label: "% Pedidos a Tiempo", value: formatPct(otd), trend: trendPct(otd, lyOtd), note: "vs AA" },
        { label: "OTIF", value: formatPct(otif), trend: trendPct(otif, lyOtif), note: "vs AA" },
        { label: "Fill Rate", value: formatPct(fill), trend: trendPct(fill, lyFill), note: "vs AA" },
      ]),
      scoreBundle("Inventario", "Cobertura y riesgo de quiebre", [
        { label: "Días de Inventario", value: `${formatDecimal(doh, 1)} días`, trend: trendLowerBetter(doh, lyDoh), note: "vs AA" },
        { label: "Stockout Rate", value: formatPct(stockout), trend: trendLowerBetter(stockout, lyStockout), note: "vs AA" },
        { label: "Backorder %", value: formatPct(backorderPct), trend: trendLowerBetter(backorderPct, lyBackorderPct), note: "vs AA" },
      ]),
      scoreBundle("Recursos Humanos", "Estabilidad y costo laboral", [
        { label: "Ausentismo", value: formatPct(absenteeism), trend: trendLowerBetter(absenteeism, lyAbsenteeism), note: "vs AA" },
        { label: "Rotación", value: formatPct(turnover), trend: trendLowerBetter(turnover, lyTurnover), note: "vs AA" },
        { label: "Costo laboral / ventas", value: formatPct(laborVsSales), trend: trendLowerBetter(laborVsSales, lyLaborVsSales), note: "vs AA" },
      ]),
    ],
    monthLabels,
    monthSales,
    monthSalesLY,
    monthTarget,
    weekLabels,
    weekSales,
    weekTarget,
    marginByCategory,
    mixStore,
    mixEcom,
    topStores,
    stateMap,
  };
}

function commercialData(records, lyRecords = []) {
  const sales = sum(records, "netSales");
  const lySales = sum(lyRecords, "netSales");
  const orders = sum(records, "orders");
  const aov = sales / Math.max(orders, 1);
  const units = sum(records, "units");
  const upt = units / Math.max(orders, 1);
  const marginPct = pct(sum(records, "grossMargin"), sales);
  const discount = weightedAvg(records, "discountPct", "netSales");
  const ecom = records.filter((r) => r.channel === "E-commerce");
  const conv = pct(sum(ecom, "orders"), sum(ecom, "sessions"));
  const returns = weightedAvg(records, "returnsPct", "orders");
  const lyOrders = sum(lyRecords, "orders");
  const lyAov = lySales / Math.max(lyOrders, 1);
  const lyUnits = sum(lyRecords, "units");
  const lyUpt = lyUnits / Math.max(lyOrders, 1);
  const lyMarginPct = pct(sum(lyRecords, "grossMargin"), lySales);
  const lyDiscount = weightedAvg(lyRecords, "discountPct", "netSales");
  const lyEcom = lyRecords.filter((r) => r.channel === "E-commerce");
  const lyConv = pct(sum(lyEcom, "orders"), sum(lyEcom, "sessions"));
  const lyReturns = weightedAvg(lyRecords, "returnsPct", "orders");

  const funnel = [
    { name: "Sesiones", value: Math.round(sum(ecom, "sessions")) },
    { name: "PDP Views", value: Math.round(sum(ecom, "pdpViews")) },
    { name: "Add to Cart", value: Math.round(sum(ecom, "addToCart")) },
    { name: "Checkout", value: Math.round(sum(ecom, "checkout")) },
    { name: "Compra", value: Math.round(sum(ecom, "orders")) },
  ];

  const categoryTop = Object.entries(
    aggregateBy(records, "itemCategory", (acc, rec) => {
      acc.sales += rec.netSales;
      return acc;
    }, () => ({ sales: 0 })),
  )
    .map(([name, value]) => ({ name, value: value.sales }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 15)
    .reverse();

  const heatmapStores = Object.entries(
    aggregateBy(records, "store", (acc, rec) => {
      acc.sales += rec.netSales;
      return acc;
    }, () => ({ sales: 0 })),
  )
    .sort((a, b) => b[1].sales - a[1].sales)
    .slice(0, 6)
    .map(([name]) => name);

  const heatmapCategories = Object.entries(
    aggregateBy(records, "itemCategory", (acc, rec) => {
      acc.sales += rec.netSales;
      return acc;
    }, () => ({ sales: 0 })),
  )
    .sort((a, b) => b[1].sales - a[1].sales)
    .slice(0, 6)
    .map(([name]) => name);

  const currentMatrix = aggregateBy(records, (r) => `${r.store}|${r.itemCategory}`, (acc, rec) => {
    acc.sales += rec.netSales;
    return acc;
  }, () => ({ sales: 0 }));
  const lyMatrix = aggregateBy(lyRecords, (r) => `${r.store}|${r.itemCategory}`, (acc, rec) => {
    acc.sales += rec.netSales;
    return acc;
  }, () => ({ sales: 0 }));

  const heatmapValues = [];
  const hasLyComparable = lyRecords.length > 0;
  heatmapStores.forEach((store, x) => {
    heatmapCategories.forEach((cat, y) => {
      const key = `${store}|${cat}`;
      const cur = currentMatrix[key]?.sales || 0;
      const ly = lyMatrix[key]?.sales || 0;
      const rawVariation = hasLyComparable ? trendPct(cur, ly) : 0;
      const boundedVariation = clamp(rawVariation, -25, 25);
      heatmapValues.push([y, x, round(boundedVariation, 1)]);
    });
  });

  const promoTableRaw = Object.entries(
    aggregateBy(records.filter((r) => r.campaign !== "Sin campaña"), "campaign", (acc, rec) => {
      acc.sales += rec.netSales;
      acc.margin += rec.grossMargin;
      acc.discount += rec.discountPct * rec.netSales;
      acc.uplift += rec.promoUpliftPct * rec.netSales;
      acc.roi += rec.promoRoi * rec.netSales;
      acc.weight += rec.netSales;
      return acc;
    }, () => ({ sales: 0, margin: 0, discount: 0, uplift: 0, roi: 0, weight: 0 })),
  )
    .map(([name, v]) => ({
      campaign: name,
      incremental: (v.sales * (v.uplift / Math.max(v.weight, 1))) / 100,
      marginPct: pct(v.margin, v.sales),
      discountPct: v.discount / Math.max(v.weight, 1),
      upliftPct: v.uplift / Math.max(v.weight, 1),
      roi: round(v.roi / Math.max(v.weight, 1), 2),
    }))
    .sort((a, b) => b.roi - a.roi);

  const promoStatusMap = rankStatuses(promoTableRaw, "roi", (item) => item.campaign, { minSample: 3 });
  const promoTable = promoTableRaw.map((row) => ({
    ...row,
    status: promoStatusMap[row.campaign] || { label: "Amarillo", className: "kpi-mid" },
  }));

  const promoScatter = promoTable.map((p) => ({
    name: p.campaign,
    value: [round(p.discountPct, 1), round(p.upliftPct, 1), round(p.roi, 2), p.incremental],
  }));

  const priceAlerts = Object.entries(
    aggregateBy(records, "itemCategory", (acc, rec) => {
      acc.price += rec.itemPrice * rec.units;
      acc.low += rec.competitorLow * rec.units;
      acc.high += rec.competitorHigh * rec.units;
      acc.units += rec.units;
      return acc;
    }, () => ({ price: 0, low: 0, high: 0, units: 0 })),
  )
    .map(([category, v]) => {
      const own = v.price / Math.max(v.units, 1);
      const low = v.low / Math.max(v.units, 1);
      const high = v.high / Math.max(v.units, 1);
      let status = "OK";
      if (own > high * 1.03) status = "Sobre banda";
      if (own < low * 0.97) status = "Bajo banda";
      return { category, own, low, high, status };
    })
    .slice(0, 12);

  const productsRaw = Object.entries(
    aggregateBy(records, "sku", (acc, rec) => {
      acc.sales += rec.netSales;
      acc.margin += rec.grossMargin;
      acc.inventory += rec.inventoryValue;
      acc.returns += rec.returnsPct * rec.orders;
      acc.orders += rec.orders;
      return acc;
    }, () => ({ sales: 0, margin: 0, inventory: 0, returns: 0, orders: 0 })),
  )
    .map(([sku, v]) => {
      const marginP = pct(v.margin, v.sales);
      const rotation = v.sales / Math.max(v.inventory, 1);
      const returnsP = v.returns / Math.max(v.orders, 1);
      return { sku, sales: v.sales, marginP, rotation, returnsP };
    })
    .sort((a, b) => b.sales - a.sales);

  const marginScoreRange = range(productsRaw.map((item) => item.marginP));
  const rotationScoreRange = range(productsRaw.map((item) => item.rotation));
  const returnsScoreRange = range(productsRaw.map((item) => item.returnsP));
  const salesScoreRange = range(productsRaw.map((item) => item.sales));

  const productsScored = productsRaw.map((item) => {
    const marginScore = normalize(item.marginP, marginScoreRange.min, marginScoreRange.max);
    const rotationScore = normalize(item.rotation, rotationScoreRange.min, rotationScoreRange.max);
    const returnsScore = 1 - normalize(item.returnsP, returnsScoreRange.min, returnsScoreRange.max);
    const salesScore = normalize(item.sales, salesScoreRange.min, salesScoreRange.max);
    const healthScore = marginScore * 0.35 + rotationScore * 0.3 + returnsScore * 0.2 + salesScore * 0.15;
    return { ...item, healthScore };
  });

  const productStatusMap = rankStatuses(productsScored, "healthScore", (item) => item.sku);
  const productsClassified = productsScored.map((item) => {
    const ranked = productStatusMap[item.sku] || { label: "Amarillo", className: "kpi-mid" };
    const status = ranked.label === "Verde" ? "Estrella" : ranked.label === "Rojo" ? "Problema" : "Atención";
    return { ...item, status };
  });

  const estrellas = productsClassified.filter((item) => item.status === "Estrella").sort((a, b) => b.sales - a.sales);
  const problemas = productsClassified.filter((item) => item.status === "Problema").sort((a, b) => b.sales - a.sales);
  const atencion = productsClassified.filter((item) => item.status === "Atención").sort((a, b) => b.sales - a.sales);
  const products = [...estrellas.slice(0, 5), ...atencion.slice(0, 4), ...problemas.slice(0, 5)];
  if (products.length < 14) {
    const remaining = productsClassified.filter((item) => !products.some((shown) => shown.sku === item.sku));
    products.push(...remaining.slice(0, 14 - products.length));
  }

  return {
    objective: DASHBOARDS[1].objective,
    scorecards: [
      score("Facturación", formatCompactMXN(sales), trendPct(sales, lySales), "vs AA"),
      score("Órdenes / Tickets", formatInt(orders), trendPct(orders, sum(lyRecords, "orders")), "vs AA"),
      score("Ticket Promedio", formatMXN(aov), trendPct(aov, lyAov), "vs AA"),
      score("Utilidades por Transacción", formatDecimal(upt, 2), trendPct(upt, lyUpt), "vs AA"),
      score("Margen Bruto", formatPct(marginPct), trendPct(marginPct, lyMarginPct), "vs AA"),
      score("Descuento Promedio", formatPct(discount), trendLowerBetter(discount, lyDiscount), "vs AA"),
      score("Conversión e-comm", formatPct(conv), trendPct(conv, lyConv), "vs AA"),
      score("Devoluciones", formatPct(returns), trendLowerBetter(returns, lyReturns), "vs AA"),
    ],
    funnel,
    categoryTop,
    heatmapStores,
    heatmapCategories,
    heatmapValues,
    promoTable,
    promoScatter,
    priceAlerts,
    products,
  };
}

function logisticsData(records, lyRecords = []) {
  const orders = sum(records, "orders");
  const otd = weightedAvg(records, "otd", "orders");
  const otif = weightedAvg(records, "otif", "orders");
  const fill = weightedAvg(records, "fillRate", "orders");
  const backorders = sum(records, "backorders");
  const stockout = weightedAvg(records, "stockoutRate", "orders");
  const inventory = sum(records, "inventoryValue");
  const cogs = sum(records, "cogs");
  const doh = (inventory / Math.max(cogs * 52, 1)) * 365;
  const logCost = sum(records, "logisticCost");
  const costPerOrder = logCost / Math.max(orders, 1);
  const backorderPct = pct(backorders, orders);

  const lyOrders = sum(lyRecords, "orders");
  const lyOtd = weightedAvg(lyRecords, "otd", "orders");
  const lyOtif = weightedAvg(lyRecords, "otif", "orders");
  const lyFill = weightedAvg(lyRecords, "fillRate", "orders");
  const lyBackorders = sum(lyRecords, "backorders");
  const lyBackorderPct = pct(lyBackorders, lyOrders);
  const lyStockout = weightedAvg(lyRecords, "stockoutRate", "orders");
  const lyInventory = sum(lyRecords, "inventoryValue");
  const lyCogs = sum(lyRecords, "cogs");
  const lyDoh = (lyInventory / Math.max(lyCogs * 52, 1)) * 365;
  const lyLogCost = sum(lyRecords, "logisticCost");
  const lyCostPerOrder = lyLogCost / Math.max(lyOrders, 1);

  const weekMap = aggregateBy(records, "weekLabel", (acc, rec) => {
    acc.otd += rec.otd * rec.orders;
    acc.otif += rec.otif * rec.orders;
    acc.orders += rec.orders;
    acc.created += rec.orders;
    acc.picked += rec.orders * (rec.fillRate / 100);
    acc.shipped += rec.orders * (rec.fillRate / 100) * 0.97;
    acc.delivered += rec.orders * (rec.fillRate / 100) * 0.97 * (rec.otd / 100);
    acc.returned += rec.orders * (rec.returnsPct / 100);
    return acc;
  }, () => ({ otd: 0, otif: 0, orders: 0, created: 0, picked: 0, shipped: 0, delivered: 0, returned: 0 }));

  const weekLabels = Object.keys(weekMap);
  const activeWeeks = Math.max(unique(records.map((r) => r.weekIndex)).length, 1);
  const weekOTD = weekLabels.map((w) => weekMap[w].otd / Math.max(weekMap[w].orders, 1));
  const weekOTIF = weekLabels.map((w) => weekMap[w].otif / Math.max(weekMap[w].orders, 1));
  const weekSLA = weekLabels.map(() => 95);

  const carrierDelay = Object.entries(
    aggregateBy(
      records.filter((r) => r.carrier !== "N/A"),
      "carrier",
      (acc, rec) => {
        acc.delayed += rec.orders * (1 - rec.otd / 100);
        return acc;
      },
      () => ({ delayed: 0 }),
    ),
  )
    .map(([name, v]) => ({ name, value: v.delayed }))
    .sort((a, b) => b.value - a.value);

  const leadBinsRaw = [
    { bin: "0-1", min: 0, max: 1 },
    { bin: "1-2", min: 1, max: 2 },
    { bin: "2-3", min: 2, max: 3 },
    { bin: "3-4", min: 3, max: 4 },
    { bin: "4-5", min: 4, max: 5 },
    { bin: "5+", min: 5, max: 999 },
  ];
  const leadBins = leadBinsRaw.map((b) => ({ bin: b.bin, count: 0 }));
  records.forEach((r) => {
    const idx = leadBinsRaw.findIndex((b) => r.leadTimeDays >= b.min && r.leadTimeDays < b.max);
    if (idx >= 0) leadBins[idx].count += r.orders;
  });

  const inventoryByCategory = Object.entries(
    aggregateBy(records, "category", (acc, rec) => {
      acc.available += rec.inventoryAvailable;
      acc.committed += rec.inventoryCommitted;
      acc.transit += rec.inventoryTransit;
      return acc;
    }, () => ({ available: 0, committed: 0, transit: 0 })),
  )
    .map(([category, v]) => ({ category, ...v }))
    .sort((a, b) => b.available + b.committed + b.transit - (a.available + a.committed + a.transit))
    .slice(0, 8);

  const aging = [
    { range: "0-30", value: inventory * 0.46 },
    { range: "31-60", value: inventory * 0.29 },
    { range: "61-90", value: inventory * 0.16 },
    { range: "90+", value: inventory * 0.09 },
  ];

  const paretoSkus = Object.entries(
    aggregateBy(records, "sku", (acc, rec) => {
      acc.inventory += rec.inventoryValue;
      return acc;
    }, () => ({ inventory: 0 })),
  )
    .map(([sku, v]) => ({ sku, value: v.inventory }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 20);

  let cumulative = 0;
  const totalPareto = paretoSkus.reduce((acc, item) => acc + item.value, 0);
  paretoSkus.forEach((item) => {
    cumulative += item.value;
    item.cumulative = pct(cumulative, totalPareto);
  });

  const skuRisk = Object.entries(
    aggregateBy(records, "sku", (acc, rec) => {
      acc.days += rec.daysWithoutStock;
      acc.lost += rec.lostSales;
      acc.demand += rec.orders;
      return acc;
    }, () => ({ days: 0, lost: 0, demand: 0 })),
  )
    .map(([sku, v]) => ({ sku, days: v.days / Math.max(activeWeeks, 1), demand: v.demand / Math.max(activeWeeks, 1), lost: v.lost }))
    .sort((a, b) => b.days + b.lost / 10000 - (a.days + a.lost / 10000))
    .slice(0, 10);

  const statusByWeek = weekLabels.map((week) => ({
    week,
    created: weekMap[week].created,
    picked: weekMap[week].picked,
    shipped: weekMap[week].shipped,
    delivered: weekMap[week].delivered,
    returned: weekMap[week].returned,
  }));

  return {
    objective: DASHBOARDS[2].objective,
    scorecards: [
      score("% Pedidos a Tiempo", formatPct(otd), trendPct(otd, lyOtd), "vs AA"),
      score("OTIF (On Time In Full)", formatPct(otif), trendPct(otif, lyOtif), "vs AA"),
      score("Fill Rate", formatPct(fill), trendPct(fill, lyFill), "vs AA"),
      score("Backorder", `${formatInt(backorders)} (${formatPct(backorderPct)})`, trendLowerBetter(backorderPct, lyBackorderPct), "vs AA"),
      score("Stockout Rate", formatPct(stockout), trendLowerBetter(stockout, lyStockout), "vs AA"),
      score("Inventario Total", formatCompactMXN(inventory), trendPct(inventory, lyInventory), "vs AA"),
      score("Días de Inventario", `${formatDecimal(doh, 1)} días`, trendLowerBetter(doh, lyDoh), "vs AA"),
      score("Costo logístico/orden", formatMXN(costPerOrder), trendLowerBetter(costPerOrder, lyCostPerOrder), "vs AA"),
    ],
    weekLabels,
    weekOTD,
    weekOTIF,
    weekSLA,
    carrierDelay,
    leadBins,
    inventoryByCategory,
    aging,
    paretoSkus,
    skuRisk,
    statusByWeek,
  };
}

function hrData(records, hrRecords, lyRecords = [], lyHR = []) {
  const sales = sum(records, "netSales");
  const byWeek = aggregateBy(hrRecords, "weekLabel", (acc, rec) => {
    acc.plan += rec.planHeadcount;
    acc.current += rec.actualHeadcount;
    acc.absent += rec.absenteeismPct * rec.actualHeadcount;
    acc.people += rec.actualHeadcount;
    return acc;
  }, () => ({ plan: 0, current: 0, absent: 0, people: 0 }));

  const weekLabels = Object.keys(byWeek);
  const absentTrend = weekLabels.map((w) => byWeek[w].absent / Math.max(byWeek[w].people, 1));
  const planVsCurrent = weekLabels.map((w) => ({ week: w, plan: byWeek[w].plan, current: byWeek[w].current }));

  const latestWeek = hrRecords.length ? Math.max(...hrRecords.map((h) => h.weekIndex)) : -1;
  const latest = latestWeek >= 0 ? hrRecords.filter((h) => h.weekIndex === latestWeek) : [];

  const headcount = sum(latest, "actualHeadcount");
  const vacancies = sum(latest, "vacancies");
  const turnover = weightedAvg(hrRecords, "turnoverPct", "actualHeadcount");
  const daysToFill = weightedAvg(hrRecords, "daysToFill", "vacancies");
  const absenteeism = weightedAvg(hrRecords, "absenteeismPct", "actualHeadcount");
  const overtimeHours = sum(hrRecords, "overtimeHours");
  const overtimeCost = overtimeHours * 118;
  const laborCost = sum(hrRecords, "laborCost");
  const laborVsSales = pct(laborCost, sales);
  const trainingPerEmployee = sum(hrRecords, "trainingHours") / Math.max(avg(hrRecords, "actualHeadcount"), 1);
  const incidents = sum(hrRecords, "incidents");

  const lySales = sum(lyRecords, "netSales");
  const lyLatestWeek = lyHR.length ? Math.max(...lyHR.map((h) => h.weekIndex)) : -1;
  const lyLatest = lyLatestWeek >= 0 ? lyHR.filter((h) => h.weekIndex === lyLatestWeek) : [];
  const lyHeadcount = sum(lyLatest, "actualHeadcount");
  const lyVacancies = sum(lyLatest, "vacancies");
  const lyTurnover = weightedAvg(lyHR, "turnoverPct", "actualHeadcount");
  const lyDaysToFill = weightedAvg(lyHR, "daysToFill", "vacancies");
  const lyAbsenteeism = weightedAvg(lyHR, "absenteeismPct", "actualHeadcount");
  const lyOvertimeHours = sum(lyHR, "overtimeHours");
  const lyLaborCost = sum(lyHR, "laborCost");
  const lyLaborVsSales = pct(lyLaborCost, lySales);

  const turnoverByStore = Object.entries(
    aggregateBy(hrRecords, "store", (acc, rec) => {
      acc.turnover += rec.turnoverPct * rec.actualHeadcount;
      acc.people += rec.actualHeadcount;
      return acc;
    }, () => ({ turnover: 0, people: 0 })),
  )
    .map(([name, v]) => ({ name, value: v.turnover / Math.max(v.people, 1) }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 10)
    .reverse();

  const requisiciones = Math.max(Math.round(vacancies * 2.6), 10);
  const candidatos = Math.max(Math.round(requisiciones * 0.74), 7);
  const entrevistas = Math.max(Math.round(candidatos * 0.56), 5);
  const ofertas = Math.max(Math.round(entrevistas * 0.51), 3);
  const ingresos = Math.max(Math.round(ofertas * 0.71), 2);
  const vacancyFunnel = [
    { name: "Requisiciones", value: requisiciones },
    { name: "Candidatos", value: candidatos },
    { name: "Entrevistas", value: entrevistas },
    { name: "Ofertas", value: ofertas },
    { name: "Ingresos", value: ingresos },
  ];

  const overtimeByArea = Object.entries(
    aggregateBy(hrRecords, "area", (acc, rec) => {
      acc.hours += rec.overtimeHours;
      return acc;
    }, () => ({ hours: 0 })),
  ).map(([area, value]) => ({ area, hours: value.hours }));

  const productivity = Object.entries(
    aggregateBy(hrRecords, "store", (acc, rec) => {
      acc.people += rec.actualHeadcount;
      return acc;
    }, () => ({ people: 0 })),
  )
    .map(([store, v]) => {
      const storeSales = sum(records.filter((r) => r.store === store), "netSales");
      return { store, value: storeSales / Math.max(v.people, 1) };
    })
    .sort((a, b) => b.value - a.value)
    .slice(0, 10);

  const training = [
    {
      course: "Seguridad Operativa",
      target: "100%",
      completion: `${round(92 + (100 - incidents) * 0.03, 1)}%`,
      status: incidents < 30 ? "OK" : "Riesgo",
    },
    {
      course: "Atención al Cliente",
      target: "95%",
      completion: `${round(88 + trainingPerEmployee * 2.1, 1)}%`,
      status: trainingPerEmployee > 1.8 ? "OK" : "Atención",
    },
    {
      course: "Procesos de Almacén",
      target: "97%",
      completion: `${round(90 + trainingPerEmployee * 1.7, 1)}%`,
      status: trainingPerEmployee > 1.6 ? "OK" : "Atención",
    },
    {
      course: "Normativa Laboral",
      target: "100%",
      completion: `${round(93 + trainingPerEmployee * 1.5, 1)}%`,
      status: "OK",
    },
  ];

  return {
    objective: DASHBOARDS[3].objective,
    scorecards: [
      score("Headcount actual", formatInt(headcount), trendPct(headcount, lyHeadcount), "vs AA"),
      score("Vacantes abiertas", formatInt(vacancies), trendLowerBetter(vacancies, lyVacancies), "vs AA"),
      score("Rotación", formatPct(turnover), trendLowerBetter(turnover, lyTurnover), "vs AA"),
      score("Tiempo de cobertura", `${formatDecimal(daysToFill, 1)} días`, trendLowerBetter(daysToFill, lyDaysToFill), "vs AA"),
      score("Ausentismo", formatPct(absenteeism), trendLowerBetter(absenteeism, lyAbsenteeism), "vs AA"),
      score("Horas extra", `${formatInt(overtimeHours)} hrs / ${formatMXN(overtimeCost)}`, trendLowerBetter(overtimeHours, lyOvertimeHours), "vs AA"),
      score("Costo laboral total", formatCompactMXN(laborCost), trendPct(laborCost, lyLaborCost), "vs AA"),
      score("Costo laboral / ventas", formatPct(laborVsSales), trendLowerBetter(laborVsSales, lyLaborVsSales), "vs AA"),
    ],
    turnoverByStore,
    weekLabels,
    absentTrend,
    planVsCurrent,
    vacancyFunnel,
    overtimeByArea,
    productivity,
    training,
  };
}

function renderNoDataState() {
  viewEl.innerHTML = `
    <section class="grid">
      <article class="card span-12">
        <h4>Sin datos para el rango seleccionado</h4>
        <p class="sub">${getDateScopeLabel()}</p>
        <p>Prueba ajustar fechas o filtros para mostrar información.</p>
      </article>
    </section>
  `;
}

function scorecardsHTML(items) {
  return `<section class="score-grid">${items
    .map((s) => (s.type === "bundle" ? scoreBundleHTML(s) : scorecardHTML(s)))
    .join("")}</section>`;
}

function scorecardHTML(s) {
  return `
      <article class="score">
        <div class="score-main">
          ${kpiCaptionHTML(s.title, "title")}
          <p class="value">${s.value}</p>
          <p class="meta"><span class="pill ${trendClass(s.trend)}">${formatTrend(s.trend)}</span>${s.note}</p>
        </div>
      </article>
    `;
}

function scoreBundleHTML(bundle) {
  return `
      <article class="score score-bundle">
        <div class="score-main">
          ${kpiCaptionHTML(bundle.title, "title")}
          <p class="score-bundle-formula">${bundle.formula}</p>
          <div class="score-bundle-grid">
            ${bundle.items
              .map(
                (item) => `
              <div class="score-bundle-item">
                ${kpiCaptionHTML(item.label, "bundle-label")}
                <p class="bundle-value">${item.value}</p>
                <p class="bundle-meta"><span class="pill ${trendClass(item.trend)}">${formatTrend(item.trend)}</span>${item.note}</p>
              </div>
            `,
              )
              .join("")}
          </div>
        </div>
      </article>
    `;
}

function kpiCaptionHTML(label, className) {
  const helpText = KPI_HELP_TEXT[label];
  const safeLabel = escapeHtml(label);
  if (!helpText) return `<p class="${className}">${safeLabel}</p>`;
  const safeHelp = escapeHtml(helpText);
  return `
    <p class="${className} kpi-caption">
      <span class="kpi-help-wrap">
        <span class="kpi-help-label" tabindex="0" aria-label="Como se calcula ${safeLabel}">${safeLabel}</span>
        <span class="kpi-help-tooltip" role="tooltip">${safeHelp}</span>
      </span>
    </p>
  `;
}

function topStoresTable(rows) {
  return `
    <div class="table-wrap">
      <table class="table">
        <thead><tr><th>#</th><th>Tienda</th><th>Ventas</th><th>Margen %</th><th>OTD</th><th>Crec. AA</th><th>Semáforo</th></tr></thead>
        <tbody>
          ${rows
            .map((r, i) => `<tr><td>${i + 1}</td><td>${r.name}</td><td>${formatCompactMXN(r.sales)}</td><td>${formatPct(r.marginPct)}</td><td>${formatPct(r.otd)}</td><td>${formatTrend(r.growthPct)}</td><td class="${r.status.className}">${r.status.label}</td></tr>`)
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function promoTable(rows) {
  return `
    <div class="table-wrap">
      <table class="table">
        <thead><tr><th>Campaña</th><th>Venta incremental</th><th>Margen %</th><th>Descuento %</th><th>ROI</th></tr></thead>
        <tbody>
          ${rows
            .map((r) => `<tr><td>${r.campaign}</td><td>${formatCompactMXN(r.incremental)}</td><td>${formatPct(r.marginPct)}</td><td>${formatPct(r.discountPct)}</td><td class="${r.status.className}">${formatDecimal(r.roi, 2)}x</td></tr>`)
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function priceAlertsTable(rows) {
  return `
    <div class="table-wrap">
      <table class="table">
        <thead><tr><th>Categoría</th><th>Precio propio</th><th>Banda comp.</th><th>Estatus</th></tr></thead>
        <tbody>
          ${rows
            .map((r) => {
              const cls = r.status === "OK" ? "kpi-ok" : r.status === "Sobre banda" ? "kpi-mid" : "kpi-bad";
              return `<tr><td>${r.category}</td><td>${formatMXN(r.own)}</td><td>${formatMXN(r.low)} - ${formatMXN(r.high)}</td><td class="${cls}">${r.status}</td></tr>`;
            })
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function productsTable(rows) {
  return `
    <div class="table-wrap">
      <table class="table">
        <thead><tr><th>SKU</th><th>Ventas</th><th>Margen %</th><th>Rotación</th><th>Devoluciones %</th><th>Estado</th></tr></thead>
        <tbody>
          ${rows
            .map((r) => {
              const cls = r.status === "Estrella" ? "kpi-ok" : r.status === "Problema" ? "kpi-bad" : "kpi-mid";
              return `<tr><td>${r.sku}</td><td>${formatCompactMXN(r.sales)}</td><td>${formatPct(r.marginP)}</td><td>${formatDecimal(r.rotation, 1)}</td><td>${formatPct(r.returnsP)}</td><td class="${cls}">${r.status}</td></tr>`;
            })
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function agingTable(rows) {
  return `
    <div class="table-wrap">
      <table class="table">
        <thead><tr><th>Rango</th><th>Valor inventario</th><th>%</th></tr></thead>
        <tbody>
          ${rows
            .map((r) => `<tr><td>${r.range} días</td><td>${formatCompactMXN(r.value)}</td><td>${formatPct(pct(r.value, sum(rows, "value")))}</td></tr>`)
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function skuRiskTable(rows) {
  return `
    <div class="table-wrap">
      <table class="table">
        <thead><tr><th>SKU</th><th>Días sin stock</th><th>Demanda promedio</th><th>Venta perdida est.</th></tr></thead>
        <tbody>
          ${rows
            .map((r) => `<tr><td>${r.sku}</td><td>${formatDecimal(r.days, 1)}</td><td>${formatInt(r.demand)}</td><td>${formatCompactMXN(r.lost)}</td></tr>`)
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function trainingTable(rows) {
  return `
    <div class="table-wrap">
      <table class="table">
        <thead><tr><th>Curso</th><th>Meta</th><th>Cumplimiento</th><th>Estatus</th></tr></thead>
        <tbody>
          ${rows
            .map((r) => {
              const cls = r.status === "OK" ? "kpi-ok" : "kpi-mid";
              return `<tr><td>${r.course}</td><td>${r.target}</td><td>${r.completion}</td><td class="${cls}">${r.status}</td></tr>`;
            })
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function monthlySalesTable(labels, sales, salesLY, target) {
  const months = (labels || []).map((label, index) => {
    const actual = Number(sales?.[index]) || 0;
    const aa = Number(salesLY?.[index]) || 0;
    const goal = Number(target?.[index]) || 0;
    const vsGoal = goal > 0 ? (actual / goal) * 100 : 0;
    const vsAA = trendPct(actual, aa);
    return { label, actual, aa, goal, vsGoal, vsAA };
  });

  const totalActual = months.reduce((acc, m) => acc + m.actual, 0);
  const totalAA = months.reduce((acc, m) => acc + m.aa, 0);
  const totalGoal = months.reduce((acc, m) => acc + m.goal, 0);
  const totalVsGoal = totalGoal > 0 ? (totalActual / totalGoal) * 100 : 0;
  const totalVsAA = trendPct(totalActual, totalAA);
  const yearLabelMatch = String(months[0]?.label || "").match(/\b(20\d{2})\b/);
  const yearLabel = yearLabelMatch ? `Resultado ${yearLabelMatch[1]}` : "Resultado anual";

  const rowDefs = [
    {
      label: "Ventas",
      className: "is-ventas",
      cells: months.map((m) => formatCompactMXN(m.actual)),
      totalCell: formatCompactMXN(totalActual),
    },
    {
      label: "Ventas AA",
      className: "is-aa",
      cells: months.map((m) => formatCompactMXN(m.aa)),
      totalCell: formatCompactMXN(totalAA),
    },
    {
      label: "Objetivo",
      className: "is-objetivo",
      cells: months.map((m) => formatCompactMXN(m.goal)),
      totalCell: formatCompactMXN(totalGoal),
    },
    {
      label: "% vs Obj.",
      className: "is-pct",
      cells: months.map((m) => formatPct(m.vsGoal)),
      totalCell: formatPct(totalVsGoal),
    },
    {
      label: "% vs AA",
      className: "is-pct-aa",
      cells: months.map((m) => formatTrend(m.vsAA)),
      totalCell: formatTrend(totalVsAA),
    },
  ];

  return `
    <div class="table-wrap monthly-sales-table-wrap">
      <table class="table monthly-sales-table monthly-sales-matrix">
        <thead>
          <tr>
            <th class="row-label">Métrica</th>
            ${months.map((m) => `<th>${m.label}</th>`).join("")}
            <th class="year-total-col">${yearLabel}</th>
          </tr>
        </thead>
        <tbody>
          ${rowDefs
            .map(
              (row) =>
                `<tr class="${row.className}"><th class="row-label">${row.label}</th>${row.cells.map((cell) => `<td>${cell}</td>`).join("")}<td class="year-total-col">${row.totalCell || ""}</td></tr>`,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function computeFittedValueAxisBounds(values, options = {}) {
  const numericValues = (values || []).map(Number).filter((v) => Number.isFinite(v));
  if (!numericValues.length) return null;

  const minValue = Math.min(...numericValues);
  const maxValue = Math.max(...numericValues);
  const span = Math.max(maxValue - minValue, 1);
  const bottomPadPct = Number.isFinite(options.bottomPadPct) ? options.bottomPadPct : 0.18;
  const topPadPct = Number.isFinite(options.topPadPct) ? options.topPadPct : 0.08;
  const zeroFloor = options.zeroFloor !== false;

  const minRaw = (zeroFloor ? Math.max(0, minValue - span * bottomPadPct) : (minValue - span * bottomPadPct));
  const maxRaw = maxValue + span * topPadPct;

  const niceFloor = (value) => {
    if (!Number.isFinite(value)) return 0;
    if (Math.abs(value) < 1e-9) return 0;
    const abs = Math.abs(value);
    const magnitude = 10 ** Math.floor(Math.log10(abs));
    const step = magnitude / 2;
    const rounded = Math.floor(value / step) * step;
    return zeroFloor ? Math.max(0, rounded) : rounded;
  };

  const niceCeil = (value) => {
    if (!Number.isFinite(value)) return 1;
    if (Math.abs(value) < 1e-9) return 1;
    const abs = Math.abs(value);
    const magnitude = 10 ** Math.floor(Math.log10(abs));
    const step = magnitude / 2;
    return Math.ceil(value / step) * step;
  };

  const min = niceFloor(minRaw);
  const max = Math.max(niceCeil(maxRaw), min + 1);
  return { min, max };
}

function lineChart(id, labels, series, options = {}) {
  const valueType = options.valueType || "count";
  const labelInterval = axisLabelInterval(labels);
  const useVerticalLabels = shouldUseVerticalXAxisLabels(labels);
  const fittedBounds = options.fitToDataRange
    ? computeFittedValueAxisBounds(series.flatMap((s) => s.data || []), { zeroFloor: options.zeroFloor !== false })
    : null;
  mountChart(id, {
    color: series.map((s) => s.color),
    tooltip: { trigger: "axis", valueFormatter: (value) => formatMetricValue(value, valueType, "tooltip") },
    grid: { left: 52, right: 20, top: 20, bottom: 36, containLabel: true },
    xAxis: {
      type: "category",
      data: labels,
      axisLabel: useVerticalLabels
        ? { color: "#5f7895", rotate: 90, interval: 0, margin: 8, fontSize: 10, hideOverlap: true }
        : { color: "#5f7895", interval: labelInterval },
    },
    yAxis: {
      type: "value",
      ...(Number.isFinite(options.axisMin) ? { min: options.axisMin } : {}),
      ...(Number.isFinite(options.axisMax) ? { max: options.axisMax } : {}),
      ...(Number.isFinite(options.axisInterval) ? { interval: options.axisInterval } : {}),
      ...(fittedBounds ? { min: fittedBounds.min, max: fittedBounds.max, scale: true } : {}),
      axisLabel: { color: "#5f7895", formatter: (v) => formatMetricValue(v, valueType, "axis") },
      splitLine: { lineStyle: { color: "#e4edf6" } },
    },
    series: series.map((s, index) => ({
      name: s.name,
      type: "line",
      smooth: s.smooth ?? options.smooth ?? true,
      showSymbol: false,
      data: series[index].data,
      lineStyle: { width: 2.4 },
    })),
  });
}

function barLineChart(id, labels, bars, line, options = {}) {
  const valueType = options.valueType || "count";
  const labelInterval = axisLabelInterval(labels);
  const useVerticalLabels = shouldUseVerticalXAxisLabels(labels);
  const fittedBounds = options.fitToDataRange
    ? computeFittedValueAxisBounds([...(bars || []), ...(line || [])], { zeroFloor: options.zeroFloor !== false })
    : null;
  mountChart(id, {
    tooltip: { trigger: "axis", valueFormatter: (value) => formatMetricValue(value, valueType, "tooltip") },
    grid: { left: 52, right: 16, top: 20, bottom: 36, containLabel: true },
    xAxis: {
      type: "category",
      data: labels,
      axisLabel: useVerticalLabels
        ? { color: "#5f7895", rotate: 90, interval: 0, margin: 8, fontSize: 10, hideOverlap: true }
        : { color: "#5f7895", rotate: 24, interval: labelInterval },
    },
    yAxis: {
      type: "value",
      ...(fittedBounds ? { min: fittedBounds.min, max: fittedBounds.max, scale: true } : {}),
      axisLabel: { color: "#5f7895", formatter: (v) => formatMetricValue(v, valueType, "axis") },
      splitLine: { lineStyle: { color: "#e4edf6" } },
    },
    series: [
      { type: "bar", name: "Ventas", data: bars, itemStyle: { color: chartColors.primary, borderRadius: 8 } },
      { type: "line", name: "Meta", data: line, smooth: true, showSymbol: false, lineStyle: { width: 2.4, color: chartColors.yellow } },
    ],
  });
}

function monthlySalesChart(id, labels, sales, salesLY, target) {
  const labelInterval = axisLabelInterval(labels, 10);
  const useVerticalLabels = shouldUseVerticalXAxisLabels(labels, 14);
  const useMobileAngledLabels = !useVerticalLabels && isMobileViewport();
  const allValues = [...sales, ...salesLY, ...target].map(Number).filter((v) => Number.isFinite(v));
  const seriesMin = allValues.length ? Math.min(...allValues) : 0;
  const seriesMax = allValues.length ? Math.max(...allValues) : 0;
  const rawSpan = Math.max(seriesMax - seriesMin, 1);
  const bottomBuffer = Math.max(seriesMin * 0.22, rawSpan * 0.18, 1);
  const topBuffer = Math.max(seriesMax * 0.04, rawSpan * 0.08, 1);
  const axisMinRaw = Math.max(0, seriesMin - bottomBuffer);
  const axisMaxRaw = seriesMax + topBuffer;

  const niceFloor = (value) => {
    if (!Number.isFinite(value) || value <= 0) return 0;
    const magnitude = 10 ** Math.floor(Math.log10(value));
    const step = magnitude / 2;
    return Math.floor(value / step) * step;
  };
  const niceCeil = (value) => {
    if (!Number.isFinite(value) || value <= 0) return 1;
    const magnitude = 10 ** Math.floor(Math.log10(value));
    const step = magnitude / 2;
    return Math.ceil(value / step) * step;
  };
  const axisMin = niceFloor(axisMinRaw);
  const axisMax = Math.max(niceCeil(axisMaxRaw), axisMin + 1);

  mountChart(id, {
    tooltip: {
      trigger: "axis",
      formatter: (params) => {
        const rowsData = Array.isArray(params) ? params : [params];
        const title = rowsData[0]?.axisValueLabel || rowsData[0]?.name || "";
        const lines = [title];
        rowsData.forEach((entry) => {
          lines.push(`${entry.marker}${entry.seriesName}: ${formatMetricValue(entry.value, "currency", "tooltip")}`);
        });
        return lines.join("<br/>");
      },
    },
    legend: {
      top: 4,
      textStyle: { color: "#56718f", fontSize: 11 },
      itemWidth: 14,
      itemHeight: 8,
    },
    grid: { left: 54, right: 18, top: 40, bottom: useVerticalLabels ? 84 : (useMobileAngledLabels ? 62 : 42), containLabel: true },
    xAxis: {
      type: "category",
      data: labels,
      axisLine: { lineStyle: { color: "#c6d7e7" } },
      axisLabel: useVerticalLabels
        ? { color: "#5f7895", rotate: 90, interval: 0, margin: 8, fontSize: 10, hideOverlap: true }
        : (useMobileAngledLabels
          ? { color: "#5f7895", interval: Math.max(labelInterval, 1), rotate: 35, margin: 10, hideOverlap: true }
          : { color: "#5f7895", interval: labelInterval }),
    },
    yAxis: {
      type: "value",
      min: axisMin,
      max: axisMax,
      scale: true,
      axisLabel: { color: "#5f7895", formatter: (v) => formatMetricValue(v, "currency", "axis") },
      splitLine: { lineStyle: { color: "#e4edf6" } },
    },
    series: [
      {
        name: "Ventas",
        type: "bar",
        data: sales,
        barMaxWidth: 34,
        itemStyle: {
          borderRadius: [8, 8, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#0e7dbb" },
            { offset: 1, color: "#005888" },
          ]),
        },
      },
      {
        name: "Ventas AA",
        type: "line",
        data: salesLY,
        smooth: false,
        symbol: "circle",
        symbolSize: 7,
        lineStyle: { width: 2.4, type: "dashed", color: chartColors.red },
        itemStyle: { color: chartColors.red },
      },
      {
        name: "Objetivo",
        type: "line",
        data: target,
        smooth: false,
        symbol: "circle",
        symbolSize: 6,
        lineStyle: { width: 2.6, color: chartColors.green },
        itemStyle: { color: chartColors.green },
      },
    ],
  });
}

function horizontalBar(id, labels, values, name, options = {}) {
  const numericValues = values.map((value) => Number(value)).filter((value) => Number.isFinite(value));
  const dataMax = numericValues.length ? Math.max(...numericValues) : 0;
  const valueType = options.valueType || "count";

  mountChart(id, {
    tooltip: { trigger: "axis", valueFormatter: (value) => formatMetricValue(value, valueType, "tooltip") },
    grid: { left: 20, right: 26, top: 18, bottom: 24, containLabel: true },
    xAxis: {
      type: "value",
      ...(options.fitToDataMax && dataMax > 0 ? { max: dataMax } : {}),
      axisLabel: { color: "#5f7895", formatter: (v) => formatMetricValue(v, valueType, "axis") },
      splitLine: { lineStyle: { color: "#e4edf6" } },
    },
    yAxis: {
      type: "category",
      data: labels,
      axisLabel: {
        color: "#486683",
        fontSize: 11,
        formatter: (label) => truncateWithEllipsis(label, 28),
      },
    },
    series: [{ name, type: "bar", data: values, itemStyle: { color: chartColors.navy, borderRadius: [0, 7, 7, 0] } }],
  });
}

function verticalBar(id, labels, values, options = {}) {
  const labelInterval = axisLabelInterval(labels);
  const valueType = options.valueType || "count";
  const mobile = isMobileViewport();
  const rotate = mobile && Number.isFinite(options.mobileRotate) ? options.mobileRotate : 20;
  const bottom = mobile && Number.isFinite(options.mobileBottom) ? options.mobileBottom : 42;
  const labelFormatter = typeof options.xLabelFormatter === "function" ? options.xLabelFormatter : undefined;
  mountChart(id, {
    tooltip: { trigger: "axis", valueFormatter: (value) => formatMetricValue(value, valueType, "tooltip") },
    grid: { left: 16, right: 16, top: 16, bottom, containLabel: true },
    xAxis: {
      type: "category",
      data: labels,
      axisLabel: {
        color: "#5f7895",
        rotate,
        interval: labelInterval,
        ...(labelFormatter ? { formatter: labelFormatter } : {}),
        ...(mobile ? { hideOverlap: true, margin: 10 } : {}),
      },
    },
    yAxis: {
      type: "value",
      axisLabel: { color: "#5f7895", formatter: (v) => formatMetricValue(v, valueType, "axis") },
      splitLine: { lineStyle: { color: "#e4edf6" } },
    },
    series: [{ type: "bar", data: values, itemStyle: { color: chartColors.primary, borderRadius: [7, 7, 0, 0] } }],
  });
}

function stackedBar(id, labels, series, options = {}) {
  const valueType = options.valueType || "count";
  const labelInterval = axisLabelInterval(labels);
  const useVerticalLabels = shouldUseVerticalXAxisLabels(labels);
  const stackedTotals = (labels || []).map((_, index) =>
    (series || []).reduce((acc, s) => acc + (Number(s?.data?.[index]) || 0), 0),
  );
  const fittedBounds = options.fitToDataRange
    ? computeFittedValueAxisBounds(stackedTotals, { zeroFloor: options.zeroFloor !== false })
    : null;
  mountChart(id, {
    tooltip: { trigger: "axis", axisPointer: { type: "shadow" }, valueFormatter: (value) => formatMetricValue(value, valueType, "tooltip") },
    legend: { top: 2, textStyle: { color: "#56718f", fontSize: 11 } },
    grid: { left: 16, right: 16, top: 36, bottom: 36, containLabel: true },
    xAxis: {
      type: "category",
      data: labels,
      axisLabel: useVerticalLabels
        ? { color: "#5f7895", rotate: 90, interval: 0, margin: 8, fontSize: 10, hideOverlap: true }
        : { color: "#5f7895", rotate: 20, interval: labelInterval },
    },
    yAxis: {
      type: "value",
      ...(fittedBounds ? { min: fittedBounds.min, max: fittedBounds.max, scale: true } : {}),
      axisLabel: { color: "#5f7895", formatter: (v) => formatMetricValue(v, valueType, "axis") },
      splitLine: { lineStyle: { color: "#e4edf6" } },
    },
    series: series.map((s) => ({ name: s.name, type: "bar", stack: "total", data: s.data, itemStyle: { color: s.color } })),
  });
}

function groupedBar(id, labels, series, options = {}) {
  const valueType = options.valueType || "count";
  const labelInterval = axisLabelInterval(labels);
  const useVerticalLabels = shouldUseVerticalXAxisLabels(labels);
  mountChart(id, {
    tooltip: { trigger: "axis", valueFormatter: (value) => formatMetricValue(value, valueType, "tooltip") },
    legend: { top: 2, textStyle: { color: "#56718f", fontSize: 11 } },
    grid: { left: 16, right: 16, top: 36, bottom: 36, containLabel: true },
    xAxis: {
      type: "category",
      data: labels,
      axisLabel: useVerticalLabels
        ? { color: "#5f7895", rotate: 90, interval: 0, margin: 8, fontSize: 10, hideOverlap: true }
        : { color: "#5f7895", rotate: 20, interval: labelInterval },
    },
    yAxis: {
      type: "value",
      axisLabel: { color: "#5f7895", formatter: (v) => formatMetricValue(v, valueType, "axis") },
      splitLine: { lineStyle: { color: "#e4edf6" } },
    },
    series: series.map((s) => ({ name: s.name, type: "bar", data: s.data, itemStyle: { color: s.color, borderRadius: [6, 6, 0, 0] } })),
  });
}

function funnelChart(id, data) {
  const el = document.getElementById(id);
  if (!el) return;

  const stageData = data.map((item, index, list) => {
    const previous = index === 0 ? item.value : list[index - 1].value;
    const drop = Math.max(previous - item.value, 0);
    const stepConv = round((item.value / Math.max(previous, 1)) * 100, 1);
    const totalConv = round((item.value / Math.max(list[0].value, 1)) * 100, 1);
    return { ...item, stepConv, totalConv, drop };
  });

  const max = Math.max(...stageData.map((stage) => stage.value), 1);
  const colors = ["#005888", "#006DA8", "#2A86BE", "#4B97C9", "#F36F21", "#E30613"];

  el.classList.add("funnel-host");
  el.innerHTML = `
    <div class="funnel-modern" role="img" aria-label="Embudo de conversión por etapa">
      <div class="funnel-summary">
        <p class="funnel-summary-title">Conversión total</p>
        <p class="funnel-summary-value">${stageData.at(-1)?.totalConv ?? 0}%</p>
      </div>
      <div class="funnel-rows">
        ${stageData
          .map((stage, index) => {
            const width = clamp((stage.value / max) * 100, 8, 100);
            const dropPct = index === 0 ? 0 : round(100 - stage.stepConv, 1);
            const growthPct = round(stage.stepConv - 100, 1);
            const stepMeta =
              index === 0
                ? "Base inicial (100%)"
                : stage.stepConv >= 100
                  ? `${stage.stepConv}% vs paso previo | +${growthPct}% crece`
                  : `${stage.stepConv}% pasa | ${dropPct}% cae`;
            return `
              <article class="funnel-row">
                <div class="funnel-row-head">
                  <p class="funnel-row-stage">${stage.name}</p>
                  <p class="funnel-row-number">${formatInt(stage.value)}</p>
                </div>
                <div class="funnel-track">
                  <div class="funnel-fill" style="width:${round(width, 1)}%;background:${colors[index % colors.length]}"></div>
                </div>
                <p class="funnel-row-meta">
                  ${stepMeta}
                </p>
              </article>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
}

function heatmapChart(id, stores, categories, values) {
  const min = -25;
  const max = 25;
  const heatData = values.map((entry) => ({
    value: entry,
    itemStyle: { color: valueToColor(entry[2], min, max, ["#E30613", "#F8FAFC", "#0D9A6C"]) },
  }));

  mountChart(id, {
    tooltip: {
      position: "top",
      formatter: (params) => {
        const [categoryIndex, storeIndex, variation] = params.data.value;
        return `${stores[storeIndex]} / ${categories[categoryIndex]}<br/>Variación: ${formatMetricValue(variation, "percent", "tooltip")}`;
      },
    },
    grid: { left: 18, right: 18, top: 20, bottom: 44, containLabel: true },
    xAxis: { type: "category", data: categories, axisLabel: { color: "#5f7895", rotate: 20, margin: 16 } },
    yAxis: { type: "category", data: stores, axisLabel: { color: "#5f7895", margin: 10 } },
    series: [{ type: "heatmap", data: heatData, label: { show: true, formatter: (p) => formatMetricValue(p.data.value[2], "percent", "tooltip"), fontSize: 10 } }],
  });
}

function promoScatter(id, points) {
  mountChart(id, {
    tooltip: {
      formatter: (params) => {
        const [discount, uplift, roi, incremental] = params.value;
        return `${params.name}<br/>Descuento: ${formatMetricValue(discount, "percent", "tooltip")}<br/>Uplift: ${formatMetricValue(uplift, "percent", "tooltip")}<br/>ROI: ${formatMetricValue(roi, "ratio", "tooltip", 2)}x<br/>Venta incremental: ${formatCompactMXN(incremental)}`;
      },
    },
    grid: { left: 16, right: 16, top: 28, bottom: 44, containLabel: true },
    xAxis: {
      type: "value",
      axisLabel: { color: "#5f7895", formatter: (v) => formatMetricValue(v, "percent", "axis") },
      splitLine: { lineStyle: { color: "#e4edf6" } },
    },
    yAxis: {
      type: "value",
      axisLabel: { color: "#5f7895", formatter: (v) => formatMetricValue(v, "percent", "axis") },
      splitLine: { lineStyle: { color: "#e4edf6" } },
    },
    series: [
      {
        type: "scatter",
        data: points,
        symbolSize: (val) => Math.max(12, Math.min(36, val[3] / 5000)),
        itemStyle: { color: chartColors.navy, opacity: 0.8 },
      },
    ],
  });
}

function scatterMapProxy(id, points) {
  mountChart(id, {
    tooltip: {
      formatter: (params) => `${params.name}<br/>${formatCompactMXN(params.value[2])}`,
    },
    xAxis: {
      type: "value",
      min: -117,
      max: -86,
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      axisLine: { show: false },
    },
    yAxis: {
      type: "value",
      min: 14,
      max: 33,
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      axisLine: { show: false },
    },
    grid: { left: 10, right: 10, top: 10, bottom: 10 },
    series: [
      {
        type: "scatter",
        data: points.map((p) => ({ name: p.state, value: [...p.coords, p.sales] })),
        symbolSize: (v) => Math.max(8, Math.min(30, v[2] / 350000)),
        itemStyle: { color: chartColors.primary, opacity: 0.72 },
        label: {
          show: true,
          formatter: (params) => params.name,
          color: "#4f6f8e",
          position: "top",
          fontSize: 10,
        },
      },
    ],
  });
}

function renderMexicoMap(id, points) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = "";

  ensureMexicoMapRegistered()
    .then((loaded) => {
      if (!document.getElementById(id)) return;
      if (!loaded) {
        scatterMapProxy(id, points);
        return;
      }
      mexicoMapChart(id, points);
    })
    .catch(() => {
      scatterMapProxy(id, points);
    });
}

function ensureMexicoMapRegistered() {
  if (echarts.getMap(MEXICO_MAP_NAME)) return Promise.resolve(true);
  if (mexicoMapPromise) return mexicoMapPromise;

  mexicoMapPromise = tryRegisterMexicoMapFromGeojsonUrls()
    .then((loaded) => {
      if (loaded) return true;
      return tryRegisterMexicoMapFromScriptUrls();
    })
    .catch(() => false);

  return mexicoMapPromise;
}

async function tryRegisterMexicoMapFromGeojsonUrls() {
  for (const url of MEXICO_GEOJSON_URLS) {
    try {
      const response = await fetch(url);
      if (!response.ok) continue;
      const geojson = await response.json();
      echarts.registerMap(MEXICO_MAP_NAME, geojson);
      return true;
    } catch {
      // Try next source.
    }
  }
  return false;
}

async function tryRegisterMexicoMapFromScriptUrls() {
  for (const url of MEXICO_MAP_SCRIPT_URLS) {
    try {
      await loadExternalScript(url);
      const name = resolveExistingMexicoMapName();
      if (!name) continue;
      const mapData = echarts.getMap(name);
      if (!mapData) continue;
      echarts.registerMap(MEXICO_MAP_NAME, mapData.geoJSON || mapData);
      return true;
    } catch {
      // Try next source.
    }
  }
  return false;
}

function resolveExistingMexicoMapName() {
  for (const name of MEXICO_MAP_CANDIDATE_NAMES) {
    if (echarts.getMap(name)) return name;
  }
  return null;
}

function loadExternalScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-map-src="${src}"]`);
    if (existing?.dataset.loaded === "true") {
      resolve();
      return;
    }
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("script-error")), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.dataset.mapSrc = src;
    script.addEventListener("load", () => {
      script.dataset.loaded = "true";
      resolve();
    }, { once: true });
    script.addEventListener("error", () => reject(new Error("script-error")), { once: true });
    document.head.appendChild(script);
  });
}

function mexicoMapChart(id, points) {
  const minValue = 0;
  const maxValue = Math.max(...points.map((p) => p.sales), 1);
  const data = points.map((point) => ({
    name: point.state,
    value: Math.round(point.sales),
    itemStyle: { areaColor: valueToColor(point.sales, minValue, maxValue, ["#EAF1F7", "#7FB9DE", "#0A5E8F"]) },
  }));

  mountChart(id, {
    tooltip: {
      trigger: "item",
      formatter: (params) => `${params.name}<br/>${params.value ? formatCompactMXN(params.value) : "Sin datos"}`,
    },
    series: [
      {
        type: "map",
        map: MEXICO_MAP_NAME,
        roam: false,
        layoutCenter: ["51%", "53%"],
        layoutSize: "126%",
        selectedMode: false,
        nameMap: {
          "Ciudad de Mexico": "CDMX",
          "Ciudad de México": "CDMX",
          "Distrito Federal": "CDMX",
          "Estado de Mexico": "Estado de México",
          Queretaro: "Querétaro",
          "Michoacan de Ocampo": "Michoacán",
          "San Luis Potosi": "San Luis Potosí",
        },
        label: {
          show: false,
          color: "#365772",
          fontSize: 9,
        },
        emphasis: {
          label: { show: true, color: "#0f2f4f", fontSize: 10 },
          itemStyle: { areaColor: "#F5B841" },
        },
        itemStyle: {
          areaColor: "#EAF1F7",
          borderColor: "#9CB9D3",
          borderWidth: 0.8,
        },
        data,
      },
    ],
  });
}

function paretoChart(id, rows) {
  mountChart(id, {
    tooltip: {
      trigger: "axis",
      formatter: (params) => {
        const rowsData = Array.isArray(params) ? params : [params];
        const title = rowsData[0]?.axisValueLabel || rowsData[0]?.name || "";
        const lines = [title];
        rowsData.forEach((entry) => {
          if (entry.seriesName === "% acumulado") {
            lines.push(`${entry.marker}${entry.seriesName}: ${formatMetricValue(entry.value, "percent", "tooltip")}`);
            return;
          }
          lines.push(`${entry.marker}${entry.seriesName}: ${formatMetricValue(entry.value, "currency", "tooltip")}`);
        });
        return lines.join("<br/>");
      },
    },
    legend: { top: 2, textStyle: { color: "#56718f", fontSize: 11 } },
    grid: { left: 44, right: 42, top: 34, bottom: 50 },
    xAxis: {
      type: "category",
      data: rows.map((r) => r.sku),
      axisLabel: { color: "#5f7895", rotate: 35, fontSize: 10 },
    },
    yAxis: [
      {
        type: "value",
        name: "Inventario",
        axisLabel: { color: "#5f7895", formatter: (v) => formatMetricValue(v, "currency", "axis") },
        splitLine: { lineStyle: { color: "#e4edf6" } },
      },
      {
        type: "value",
        name: "% acum",
        min: 0,
        max: 100,
        axisLabel: { color: "#5f7895", formatter: (v) => formatMetricValue(v, "percent", "axis") },
      },
    ],
    series: [
      { name: "Valor inventario", type: "bar", data: rows.map((r) => r.value), itemStyle: { color: chartColors.navy, borderRadius: [6, 6, 0, 0] } },
      { name: "% acumulado", type: "line", yAxisIndex: 1, smooth: true, data: rows.map((r) => r.cumulative), lineStyle: { color: chartColors.red, width: 2.2 } },
    ],
  });
}

function mountChart(id, option) {
  const el = document.getElementById(id);
  if (!el) return;
  const existing = echarts.getInstanceByDom(el);
  if (existing && !existing.isDisposed()) existing.dispose();
  const chart = echarts.init(el, null, { renderer: "canvas" });
  chart.setOption(option, { notMerge: true, lazyUpdate: false });
  requestAnimationFrame(() => {
    if (!chart.isDisposed()) chart.resize();
  });
  chartInstances.push(chart);
}

function scheduleLayoutPass() {
  if (layoutPassRaf) cancelAnimationFrame(layoutPassRaf);
  if (layoutPassTimeout) clearTimeout(layoutPassTimeout);

  layoutPassRaf = requestAnimationFrame(() => {
    equalizeGridRowHeights();
    chartInstances.forEach((chart) => {
      if (!chart.isDisposed()) chart.resize();
    });
  });

  // Second pass after async chart mounts (e.g., mapa geojson).
  layoutPassTimeout = setTimeout(() => {
    equalizeGridRowHeights();
    chartInstances.forEach((chart) => {
      if (!chart.isDisposed()) chart.resize();
    });
  }, 120);
}

function equalizeGridRowHeights() {
  const grids = document.querySelectorAll(".grid");

  grids.forEach((grid) => {
    const cards = Array.from(grid.querySelectorAll(":scope > .card"));
    cards.forEach((card) => {
      card.style.minHeight = "";
      card.style.height = "";
    });

    if (window.innerWidth <= 1300) return;

    const rows = new Map();
    cards.forEach((card) => {
      const top = Math.round(card.offsetTop);
      if (!rows.has(top)) rows.set(top, []);
      rows.get(top).push(card);
    });

    rows.forEach((rowCards) => {
      const maxHeight = Math.max(...rowCards.map((card) => card.offsetHeight));
      rowCards.forEach((card) => {
        card.style.minHeight = `${maxHeight}px`;
        card.style.height = `${maxHeight}px`;
      });
    });
  });
}


function disposeCharts() {
  while (chartInstances.length) {
    const chart = chartInstances.pop();
    if (!chart.isDisposed()) chart.dispose();
  }
}

function score(title, value, trend, note) {
  return { title, value, trend, note };
}

function scoreBundle(title, formula, items) {
  return { type: "bundle", title, formula, items };
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function trendClass(value) {
  if (value >= 2) return "up";
  if (value <= -2) return "down";
  return "mid";
}

function formatTrend(value) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${round(value, 1)}%`;
}

function kpiStatus(value, good, mid) {
  if (value >= good) return { label: "Verde", className: "kpi-ok" };
  if (value >= mid) return { label: "Amarillo", className: "kpi-mid" };
  return { label: "Rojo", className: "kpi-bad" };
}

function trendPct(current, base) {
  if (!Number.isFinite(current) || !Number.isFinite(base) || base === 0) return 0;
  return ((current - base) / base) * 100;
}

function trendLowerBetter(current, base) {
  if (!Number.isFinite(current) || !Number.isFinite(base) || base <= 0) return 0;
  return ((base - current) / base) * 100;
}

function formatMXN(value) {
  return new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(value || 0);
}

function shouldExpandCurrency() {
  if (typeof window === "undefined") return false;
  return window.innerWidth >= 1200;
}

function formatCompactMXN(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return "$0";
  if (shouldExpandCurrency()) return formatMXN(numeric);
  const sign = numeric < 0 ? "-" : "";
  const abs = Math.abs(numeric);
  if (abs < 1000) return formatMXN(numeric);
  return `${sign}$${formatCompactNumber(abs, 2)}`;
}

function formatInt(value) {
  return new Intl.NumberFormat("es-MX", { maximumFractionDigits: 0 }).format(value || 0);
}

function formatDecimal(value, decimals = 1) {
  return new Intl.NumberFormat("es-MX", { maximumFractionDigits: decimals }).format(value || 0);
}

function formatCompactNumber(value, decimals = 2) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return "0";
  const abs = Math.abs(numeric);
  const sign = numeric < 0 ? "-" : "";

  if (abs >= 1_000_000_000) return `${sign}${formatDecimal(abs / 1_000_000_000, decimals)}B`;
  if (abs >= 1_000_000) return `${sign}${formatDecimal(abs / 1_000_000, decimals)}M`;
  if (abs >= 1_000) return `${sign}${formatDecimal(abs / 1_000, decimals)}k`;
  return `${sign}${formatDecimal(abs, abs >= 100 ? 0 : 1)}`;
}

function formatAxisValue(value) {
  return formatCompactNumber(value, 2);
}

function formatMetricValue(value, type = "count", scope = "default", decimalsOverride = null) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return String(value ?? "");
  const abs = Math.abs(numeric);
  const useDecimals = (fallback) => (Number.isFinite(decimalsOverride) ? decimalsOverride : fallback);

  if (type === "currency") {
    return scope === "axis" ? formatCompactNumber(numeric, useDecimals(2)) : formatCompactMXN(numeric);
  }
  if (type === "percent") return `${formatDecimal(numeric, useDecimals(1))}%`;
  if (type === "ratio") return formatDecimal(numeric, useDecimals(1));
  if (type === "days") return formatDecimal(numeric, useDecimals(1));
  if (type === "compact") return formatCompactNumber(numeric, useDecimals(2));
  if (type === "count") {
    if (abs < 1000) return formatInt(Math.round(numeric));
    return formatCompactNumber(numeric, scope === "axis" ? useDecimals(1) : useDecimals(2));
  }
  return scope === "axis" ? formatCompactNumber(numeric, useDecimals(1)) : formatCompactNumber(numeric, useDecimals(2));
}

function axisLabelInterval(labels, targetTicks = 12) {
  if (!Array.isArray(labels) || labels.length <= targetTicks) return 0;
  return Math.ceil(labels.length / targetTicks) - 1;
}

function truncateWithEllipsis(text, maxLength = 28) {
  const value = String(text ?? "");
  if (value.length <= maxLength) return value;
  return `${value.slice(0, Math.max(1, maxLength - 3)).trimEnd()}...`;
}

function shouldUseVerticalXAxisLabels(labels, denseThreshold = 24) {
  return Array.isArray(labels) && labels.length > denseThreshold;
}

function range(values) {
  if (!values.length) return { min: 0, max: 0 };
  return { min: Math.min(...values), max: Math.max(...values) };
}

function normalize(value, min, max) {
  if (!Number.isFinite(value)) return 0;
  if (!Number.isFinite(min) || !Number.isFinite(max) || Math.abs(max - min) < 0.000001) return 0.5;
  return clamp((value - min) / (max - min), 0, 1);
}

function rankStatuses(rows, scoreField, keyGetter = (row) => row.name, options = {}) {
  if (!rows.length) return {};
  const minSample = Number.isFinite(options.minSample) ? options.minSample : 3;
  if (rows.length < minSample) {
    const fallback = {};
    rows.forEach((row) => {
      fallback[keyGetter(row)] = { label: "Amarillo", className: "kpi-mid" };
    });
    return fallback;
  }
  const scores = rows.map((row) => row[scoreField] || 0);
  const p30 = percentile(scores, 0.3);
  const p70 = percentile(scores, 0.7);

  const map = {};
  rows.forEach((row) => {
    const score = row[scoreField] || 0;
    let status = { label: "Amarillo", className: "kpi-mid" };
    if (score >= p70) status = { label: "Verde", className: "kpi-ok" };
    else if (score <= p30) status = { label: "Rojo", className: "kpi-bad" };
    map[keyGetter(row)] = status;
  });

  return map;
}

function percentile(values, p) {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const pos = clamp(p, 0, 1) * (sorted.length - 1);
  const lower = Math.floor(pos);
  const upper = Math.ceil(pos);
  if (lower === upper) return sorted[lower];
  const weight = pos - lower;
  return sorted[lower] * (1 - weight) + sorted[upper] * weight;
}

function valueToColor(value, min, max, colors) {
  const normalized = clamp((value - min) / Math.max(max - min, 1), 0, 1);
  if (colors.length < 2) return colors[0] || "#cccccc";
  const segments = colors.length - 1;
  const rawIndex = normalized * segments;
  const index = Math.min(Math.floor(rawIndex), segments - 1);
  const t = rawIndex - index;
  return interpolateHex(colors[index], colors[index + 1], t);
}

function interpolateHex(hexA, hexB, t) {
  const a = hexToRgb(hexA);
  const b = hexToRgb(hexB);
  const r = Math.round(a.r + (b.r - a.r) * t);
  const g = Math.round(a.g + (b.g - a.g) * t);
  const bChannel = Math.round(a.b + (b.b - a.b) * t);
  return `rgb(${r}, ${g}, ${bChannel})`;
}

function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  const full = clean.length === 3 ? clean.split("").map((c) => `${c}${c}`).join("") : clean;
  const int = Number.parseInt(full, 16);
  return {
    r: (int >> 16) & 255,
    g: (int >> 8) & 255,
    b: int & 255,
  };
}

function formatPct(value) {
  return `${new Intl.NumberFormat("es-MX", { maximumFractionDigits: 1 }).format(value || 0)}%`;
}

function round(value, decimals = 2) {
  const p = 10 ** decimals;
  return Math.round((value || 0) * p) / p;
}

function pct(part, total) {
  return (part / Math.max(total, 1)) * 100;
}

function sum(rows, field) {
  return rows.reduce((acc, row) => acc + (row[field] || 0), 0);
}

function avg(rows, field) {
  return sum(rows, field) / Math.max(rows.length, 1);
}

function weightedAvg(rows, field, weight) {
  const totals = rows.reduce(
    (acc, row) => {
      const w = row[weight] || 0;
      acc.value += (row[field] || 0) * w;
      acc.weight += w;
      return acc;
    },
    { value: 0, weight: 0 },
  );
  return totals.value / Math.max(totals.weight, 1);
}

function aggregateBy(rows, keyOrGetter, reducer, init) {
  const map = {};
  rows.forEach((row) => {
    const key = typeof keyOrGetter === "function" ? keyOrGetter(row) : row[keyOrGetter];
    if (!map[key]) map[key] = init();
    map[key] = reducer(map[key], row);
  });
  return map;
}

function unique(arr) {
  return [...new Set(arr)];
}

function generateModel() {
  const rng = createRng(20260218);
  const weeks = createWeeksInRange("2024-01-01", "2026-02-15");

  const stores = [
    { name: "Irapuato Centro", city: "Irapuato", state: "Guanajuato", region: "Bajío", factor: 1.16, growth: 0.11, hrRisk: 0.15, income: 1.02 },
    { name: "Salamanca Centro", city: "Salamanca", state: "Guanajuato", region: "Bajío", factor: 0.96, growth: 0.09, hrRisk: 0.13, income: 0.95 },
    { name: "Celaya Centro", city: "Celaya", state: "Guanajuato", region: "Bajío", factor: 1.09, growth: 0.1, hrRisk: 0.14, income: 1.0 },
    { name: "Querétaro Centro", city: "Querétaro", state: "Querétaro", region: "Centro-Bajío", factor: 1.18, growth: 0.12, hrRisk: 0.16, income: 1.08 },
    {
      name: "San Miguel de Allende",
      city: "San Miguel de Allende",
      state: "Guanajuato",
      region: "Centro-Bajío",
      factor: 0.88,
      growth: 0.1,
      hrRisk: 0.12,
      income: 1.14,
    },
    { name: "Cortázar Plaza", city: "Cortázar", state: "Guanajuato", region: "Bajío", factor: 0.84, growth: 0.08, hrRisk: 0.11, income: 0.9 },
    { name: "Valle de Santiago", city: "Valle de Santiago", state: "Guanajuato", region: "Bajío", factor: 0.79, growth: 0.07, hrRisk: 0.1, income: 0.89 },
    { name: "Pénjamo", city: "Pénjamo", state: "Guanajuato", region: "Bajío", factor: 0.74, growth: 0.07, hrRisk: 0.1, income: 0.86 },
    { name: "La Piedad", city: "La Piedad", state: "Michoacán", region: "Occidente", factor: 0.86, growth: 0.08, hrRisk: 0.12, income: 0.91 },
    { name: "Zamora Centro", city: "Zamora", state: "Michoacán", region: "Occidente", factor: 0.92, growth: 0.09, hrRisk: 0.13, income: 0.93 },
  ];

  const lineConfigs = [
    {
      line: "Línea Blanca",
      ecomShare: 0.37,
      marginShift: -1.3,
      dohBase: 54,
      convBase: 1.7,
      items: [
        ["Aire Acondicionado", 1.08, 14900, 1.02, 24.3, 1.8, 1.25, "calor"],
        ["Congelador", 0.82, 12800, 1.01, 24.0, 1.6, 1.1, "fin_ano"],
        ["Estufas", 0.94, 7600, 1.03, 26.4, 1.5, 1.0, "hogar"],
        ["Estufón", 0.42, 4200, 1.08, 27.1, 1.3, 1.04, "hogar"],
        ["Lavadoras", 1.04, 12100, 1.01, 25.7, 1.9, 1.08, "fin_ano"],
        ["Refrigeradores", 1.23, 16800, 1.0, 23.8, 1.8, 1.12, "calor_fin_ano"],
        ["Planchas", 0.56, 860, 1.15, 31.2, 2.7, 0.92, "regreso"],
        ["Refacciones", 0.74, 390, 1.86, 42.5, 1.1, 0.82, "estable"],
        ["Secadoras", 0.61, 10700, 1.0, 24.8, 1.9, 1.07, "lluvias"],
      ],
    },
    {
      line: "Cocina y Electrodomesticos",
      ecomShare: 0.49,
      marginShift: 1.7,
      dohBase: 37,
      convBase: 2.4,
      items: [
        ["Bascula", 0.64, 560, 1.3, 34.0, 2.2, 0.9, "regreso"],
        ["Batidora", 0.83, 980, 1.18, 35.8, 2.5, 0.86, "fin_ano"],
        ["Crepera", 0.52, 1500, 1.06, 34.3, 2.0, 0.9, "fin_ano"],
        ["Cafetera", 1.02, 1650, 1.11, 36.8, 2.4, 0.88, "fin_ano"],
        ["Dispensador de Agua", 0.58, 2250, 1.03, 32.8, 1.8, 0.96, "calor"],
        ["Licuadoras", 1.06, 1290, 1.16, 35.1, 2.7, 0.86, "regreso"],
        ["Microondas", 1.14, 2690, 1.04, 33.2, 2.2, 0.95, "regreso"],
        ["Ollas y Vaporeras", 0.72, 1120, 1.22, 36.4, 1.7, 0.84, "fin_ano"],
        ["Planchas", 0.64, 810, 1.21, 34.4, 2.5, 0.92, "regreso"],
        ["Tostador", 0.56, 760, 1.18, 35.7, 2.1, 0.89, "fin_ano"],
        ["Utensilios", 0.92, 620, 1.34, 41.2, 1.6, 0.78, "estable"],
        ["Refacciones", 0.67, 330, 1.91, 43.8, 1.1, 0.8, "estable"],
      ],
    },
    {
      line: "Hogar",
      ecomShare: 0.43,
      marginShift: 0.8,
      dohBase: 44,
      convBase: 2.0,
      items: [
        ["Calentadores Gas", 0.66, 3850, 1.02, 30.8, 1.4, 0.98, "frio"],
        ["Calentadores Solar", 0.49, 7600, 1.0, 29.6, 1.3, 1.04, "frio"],
        ["Triturador", 0.44, 2850, 1.01, 31.7, 1.6, 0.97, "estable"],
        ["Aire Acondicionado", 0.52, 10900, 1.0, 26.9, 1.9, 1.16, "calor"],
        ["Campana", 0.56, 3100, 1.03, 32.4, 1.7, 0.92, "hogar"],
        ["Fabricación RYSE", 0.41, 5900, 1.01, 34.6, 1.2, 0.86, "estable"],
        ["Tanque de Gas", 0.53, 4100, 1.02, 28.7, 1.5, 0.94, "frio"],
      ],
    },
    {
      line: "Negocio",
      ecomShare: 0.22,
      marginShift: 2.4,
      dohBase: 49,
      convBase: 1.3,
      items: [
        ["Amasadora", 0.31, 18200, 1.0, 27.4, 1.0, 0.9, "negocio"],
        ["Campana", 0.48, 6200, 1.01, 31.3, 1.2, 0.94, "negocio"],
        ["Equipo de Empotrar", 0.28, 24300, 1.0, 26.5, 0.9, 0.88, "negocio"],
        ["Fabricación RYSE", 0.36, 13700, 1.0, 33.0, 1.0, 0.84, "negocio"],
        ["Congelador", 0.54, 16100, 1.0, 25.0, 1.1, 0.96, "negocio"],
        ["Parrilla Estructural", 0.34, 11300, 1.0, 30.5, 1.0, 0.89, "negocio"],
        ["Plancha", 0.52, 4600, 1.04, 32.1, 1.4, 0.9, "negocio"],
        ["Rosticero", 0.29, 21900, 1.0, 28.4, 1.0, 0.92, "negocio"],
        ["Triturador", 0.33, 5200, 1.01, 31.1, 1.2, 0.94, "negocio"],
        ["Tarja", 0.43, 2200, 1.09, 34.7, 1.3, 0.85, "negocio"],
        ["Mesa", 0.48, 3600, 1.07, 33.9, 1.2, 0.83, "negocio"],
        ["Mesa Fria / Caliente", 0.26, 23800, 1.0, 27.1, 0.9, 0.9, "negocio"],
        ["Refacciones", 0.71, 450, 2.05, 45.2, 0.9, 0.8, "estable"],
      ],
    },
  ];

  const itemNameCount = {};
  lineConfigs.forEach((lineConfig) => {
    lineConfig.items.forEach(([itemName]) => {
      itemNameCount[itemName] = (itemNameCount[itemName] || 0) + 1;
    });
  });

  const lineCodeMap = {
    "Línea Blanca": "LB",
    "Cocina y Electrodomesticos": "CE",
    Hogar: "HG",
    Negocio: "NG",
  };

  const catalog = [];
  lineConfigs.forEach((lineConfig) => {
    lineConfig.items.forEach(([itemName, demand, basePrice, upt, margin, returns, volatility, seasonTag], itemIndex) => {
      const cleanCode = itemName
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z0-9]/g, "")
        .slice(0, 4)
        .toUpperCase();

      catalog.push({
        line: lineConfig.line,
        category: lineConfig.line,
        itemName,
        itemCategory: itemNameCount[itemName] > 1 ? `${itemName} · ${lineConfig.line}` : itemName,
        sku: `${lineCodeMap[lineConfig.line]}-${cleanCode}-${String(itemIndex + 1).padStart(2, "0")}`,
        demand,
        basePrice,
        upt,
        margin,
        returns,
        volatility,
        seasonTag,
        ecomShare: lineConfig.ecomShare,
        marginShift: lineConfig.marginShift,
        dohBase: lineConfig.dohBase,
        convBase: lineConfig.convBase,
      });
    });
  });

  const categories = unique(catalog.map((item) => item.category));

  const campaigns = [
    {
      name: "Hot Sale",
      months: [5, 6],
      channels: ["E-commerce"],
      discount: 16,
      uplift: 24,
      lines: ["Línea Blanca", "Cocina y Electrodomesticos", "Hogar"],
    },
    {
      name: "Buen Fin",
      months: [11],
      channels: ["Tienda", "E-commerce"],
      discount: 22,
      uplift: 38,
      lines: ["Línea Blanca", "Cocina y Electrodomesticos", "Hogar", "Negocio"],
    },
    {
      name: "Navidad en Casa",
      months: [12],
      channels: ["Tienda", "E-commerce"],
      discount: 13,
      uplift: 18,
      lines: ["Línea Blanca", "Cocina y Electrodomesticos"],
    },
    {
      name: "Regreso a Clases",
      months: [8],
      channels: ["E-commerce"],
      discount: 11,
      uplift: 16,
      itemNames: ["Microondas", "Licuadoras", "Bascula", "Utensilios", "Planchas"],
    },
    {
      name: "Verano Fresco",
      months: [4, 5, 6],
      channels: ["Tienda", "E-commerce"],
      discount: 9,
      uplift: 14,
      itemNames: ["Aire Acondicionado", "Dispensador de Agua"],
    },
    {
      name: "Impulso Negocio",
      months: [2, 3, 9],
      channels: ["Tienda", "E-commerce"],
      discount: 10,
      uplift: 15,
      lines: ["Negocio"],
    },
  ];

  const paymentMethods = ["Tarjeta crédito", "Tarjeta débito", "Transferencia", "PayPal", "Efectivo"];
  const carriers = ["DHL", "Estafeta", "FedEx", "Paquetexpress", "99Minutos"];
  const carrierBaseCost = { DHL: 81, Estafeta: 74, FedEx: 86, Paquetexpress: 72, "99Minutos": 66 };
  const carrierLeadDays = { DHL: 2.4, Estafeta: 2.8, FedEx: 2.2, Paquetexpress: 2.9, "99Minutos": 1.5 };
  const segments = ["Premium", "Frecuente", "Mayorista"];

  const destinationStateMix = [
    { state: "Guanajuato", weight: 4.5 },
    { state: "Querétaro", weight: 2.4 },
    { state: "Michoacán", weight: 2.2 },
    { state: "Jalisco", weight: 1.8 },
    { state: "Estado de México", weight: 1.6 },
    { state: "CDMX", weight: 1.3 },
    { state: "San Luis Potosí", weight: 1.0 },
    { state: "Aguascalientes", weight: 0.8 },
    { state: "Hidalgo", weight: 0.7 },
    { state: "Puebla", weight: 0.5 },
  ];

  function pickWeighted(list, weightFn) {
    const total = list.reduce((acc, entry) => acc + Math.max(weightFn(entry), 0), 0);
    if (total <= 0) return list[0];
    let cursor = rng() * total;
    for (const entry of list) {
      cursor -= Math.max(weightFn(entry), 0);
      if (cursor <= 0) return entry;
    }
    return list[list.length - 1];
  }

  function monthlyDemandFactor(month) {
    const monthFactors = {
      1: 0.84,
      2: 0.91,
      3: 0.96,
      4: 1.02,
      5: 1.13,
      6: 1.06,
      7: 1.0,
      8: 1.05,
      9: 0.95,
      10: 1.01,
      11: 1.24,
      12: 1.36,
    };
    return monthFactors[month] || 1;
  }

  function seasonTagFactor(tag, month) {
    if (tag === "calor") {
      if (month >= 4 && month <= 7) return 1.3;
      if (month >= 11 || month <= 2) return 0.76;
      return 1.0;
    }
    if (tag === "frio") {
      if (month >= 11 || month <= 2) return 1.24;
      if (month >= 4 && month <= 6) return 0.83;
      return 1.0;
    }
    if (tag === "fin_ano") {
      if (month === 11 || month === 12) return 1.28;
      if (month === 1) return 0.76;
      return 1.0;
    }
    if (tag === "regreso") {
      if (month === 7 || month === 8) return 1.21;
      if (month === 1) return 0.9;
      return 1.0;
    }
    if (tag === "lluvias") {
      if (month >= 6 && month <= 9) return 1.14;
      return 0.98;
    }
    if (tag === "negocio") {
      if (month === 2 || month === 3 || month === 9 || month === 10) return 1.16;
      if (month === 1) return 0.86;
      return 1.0;
    }
    if (tag === "calor_fin_ano") {
      if (month >= 4 && month <= 7) return 1.14;
      if (month === 11 || month === 12) return 1.22;
      if (month === 1) return 0.82;
      return 1.0;
    }
    if (tag === "hogar") {
      if (month === 11 || month === 12) return 1.12;
      return 1.0;
    }
    return 1;
  }

  function eligibleCampaigns(month, channel, item) {
    return campaigns.filter((campaign) => {
      if (!campaign.months.includes(month)) return false;
      if (!campaign.channels.includes(channel)) return false;
      if (campaign.lines && !campaign.lines.includes(item.line)) return false;
      if (campaign.itemNames && !campaign.itemNames.includes(item.itemName)) return false;
      return true;
    });
  }

  const records = [];
  for (let w = 0; w < weeks.length; w += 1) {
    const week = weeks[w];
    const weekDate = isoToDate(week.isoDate);
    const month = weekDate.getUTCMonth() + 1;
    const monthSeason = monthlyDemandFactor(month);
    const yearProgress = w / Math.max(weeks.length - 1, 1);
    const weekOfMonth = Math.floor((weekDate.getUTCDate() - 1) / 7) + 1;

    for (const store of stores) {
      for (const channel of ["Tienda", "E-commerce"]) {
        for (const item of catalog) {
          const seasonFactor = seasonTagFactor(item.seasonTag, month);
          const channelDemand = channel === "E-commerce" ? 0.72 * (item.ecomShare / 0.35) : 0.98 * ((1 - item.ecomShare) / 0.55);
          const trendFactor = (1 + yearProgress * (0.14 + store.growth * 0.45)) * (channel === "E-commerce" ? 1 + yearProgress * 0.11 : 1 + yearProgress * 0.04);
          const noise = 1 + (rng() - 0.5) * (0.18 + item.volatility * 0.03);

          const matchingCampaigns = eligibleCampaigns(month, channel, item);
          const promoChance = month === 11 ? 0.42 : month === 12 ? 0.28 : month === 5 ? 0.27 : 0.14;
          const activeCampaign =
            matchingCampaigns.length && rng() < promoChance
              ? pickWeighted(matchingCampaigns, (campaign) => campaign.uplift + campaign.discount * 0.5)
              : null;
          const campaign = activeCampaign ? activeCampaign.name : "Sin campaña";

          let discountPct = (channel === "E-commerce" ? 8.4 : 6.2) + (rng() - 0.5) * 2.8;
          let promoUpliftPct = 0;
          let promoRoi = 1.0;
          if (activeCampaign) {
            discountPct = activeCampaign.discount + (rng() - 0.5) * 2.2;
            promoUpliftPct = activeCampaign.uplift + (rng() - 0.5) * 6;
            promoRoi = 1.08 + promoUpliftPct / Math.max(discountPct * 10.5, 1);
          }

          const demandWithPromo = 1 + promoUpliftPct / 100;
          const orders = Math.max(1, Math.round(13.5 * store.factor * item.demand * monthSeason * seasonFactor * channelDemand * trendFactor * noise * demandWithPromo));
          const deliveryType = channel === "Tienda" ? "Pickup" : rng() > 0.12 ? "Delivery" : "Pickup";
          const carrier = deliveryType === "Delivery" ? carriers[Math.floor(rng() * carriers.length)] : "N/A";
          const paymentMethod = paymentMethods[Math.floor(rng() * paymentMethods.length)];
          const segment = segments[Math.floor(rng() * segments.length)];
          const saleState =
            channel === "Tienda"
              ? store.state
              : pickWeighted(destinationStateMix, (entry) => entry.weight + (entry.state === store.state ? 1.7 : 0)).state;

          const listPrice = item.basePrice * store.income * (channel === "E-commerce" ? 0.98 : 1.03) * (1 + (rng() - 0.5) * 0.06);
          const effectiveAov = listPrice * (1 - discountPct / 100);
          const netSales = orders * Math.max(effectiveAov, item.basePrice * 0.55);

          const grossMarginPct = clamp(
            item.margin + item.marginShift - discountPct * 0.24 + (channel === "Tienda" ? 0.8 : -0.5) + (rng() - 0.5) * 2.6,
            13,
            49.5,
          );
          const grossMargin = netSales * (grossMarginPct / 100);
          const units = orders * Math.max(0.9, item.upt + (rng() - 0.5) * 0.16);

          const returnsPct = clamp(item.returns + (channel === "E-commerce" ? 1.05 : 0.32) + (rng() - 0.5) * 0.9, 0.5, 9.8);
          const peakPressure = monthSeason > 1.15 ? (monthSeason - 1.15) * 9 : 0;
          const fillRate = clamp(97.2 - item.volatility * 2.45 - peakPressure - (channel === "E-commerce" ? 0.9 : 0.4) + (rng() - 0.5) * 1.8, 83, 99.4);
          const otd = clamp(
            95.6 - (deliveryType === "Delivery" ? 1.5 : 0.2) - item.volatility - peakPressure * 0.32 - (month === 11 && weekOfMonth >= 2 ? 0.9 : 0) + (rng() - 0.5) * 2.2,
            79.5,
            99.2,
          );
          const otif = clamp(Math.min(otd, fillRate) - item.volatility * 0.52 + (rng() - 0.5) * 1.1, 77.5, 98.7);
          const backorders = Math.round(orders * (1 - fillRate / 100));
          const stockoutRate = clamp(100 - fillRate + (rng() - 0.5) * 1.3, 0.3, 16.2);

          const cogs = netSales - grossMargin;
          const doh = clamp(item.dohBase + (month === 1 ? 6 : 0) - (month === 11 || month === 12 ? 4 : 0) + (rng() - 0.5) * 5, 14, 108);
          const inventoryValue = (cogs * doh) / 7;
          const availableRatio = clamp(0.65 + (rng() - 0.5) * 0.1, 0.52, 0.82);
          const committedRatio = clamp(0.22 + (rng() - 0.5) * 0.06, 0.12, 0.31);
          const inventoryAvailable = inventoryValue * availableRatio;
          const inventoryCommitted = inventoryValue * committedRatio;
          const inventoryTransit = Math.max(inventoryValue - inventoryAvailable - inventoryCommitted, 0);

          const logisticCostPerOrder =
            deliveryType === "Pickup" ? 18 + rng() * 9 : (carrierBaseCost[carrier] || 72) * (0.88 + rng() * 0.24);
          const logisticCost = orders * logisticCostPerOrder;
          const leadTimeDays = deliveryType === "Pickup" ? 0.45 + rng() * 0.8 : (carrierLeadDays[carrier] || 2.7) * (0.82 + rng() * 0.38);

          const conversion = clamp(item.convBase + (activeCampaign ? 0.34 : 0) + (month === 11 ? 0.28 : 0) + (rng() - 0.5) * 0.42, 0.9, 5.2);
          const sessions = channel === "E-commerce" ? orders / (conversion / 100) : 0;
          const pdpViews = sessions * clamp(0.47 + (rng() - 0.5) * 0.06, 0.3, 0.65);
          const addToCart = pdpViews * clamp(0.32 + (rng() - 0.5) * 0.05, 0.21, 0.47);
          const checkout = addToCart * clamp(0.59 + (rng() - 0.5) * 0.07, 0.42, 0.8);

          const budgetSales = netSales * (0.97 + rng() * 0.1);

          const itemPrice = listPrice / Math.max(item.upt, 1);
          const competitorLow = itemPrice * (0.9 + (rng() - 0.5) * 0.05);
          const competitorHigh = itemPrice * (1.11 + (rng() - 0.5) * 0.06);

          const daysWithoutStock = clamp((backorders / Math.max(orders, 1)) * 17 + item.volatility * 1.4 + rng() * 2.3, 0, 19);
          const lostSales = daysWithoutStock * (netSales / 30) * 0.21;

          records.push({
            weekIndex: w,
            weekLabel: week.label,
            monthLabel: week.monthLabel,
            isoDate: week.isoDate,
            channel,
            region: store.region,
            state: saleState,
            store: store.name,
            category: item.category,
            itemCategory: item.itemCategory,
            sku: item.sku,
            paymentMethod,
            segment,
            deliveryType,
            carrier,
            campaign,
            promoUpliftPct,
            promoRoi,
            orders,
            units,
            netSales,
            grossMargin,
            grossMarginPct,
            discountPct,
            returnsPct,
            fillRate,
            otd,
            otif,
            backorders,
            stockoutRate,
            cogs,
            inventoryValue,
            inventoryAvailable,
            inventoryCommitted,
            inventoryTransit,
            logisticCost,
            leadTimeDays,
            sessions,
            pdpViews,
            addToCart,
            checkout,
            budgetSales,
            itemPrice,
            competitorLow,
            competitorHigh,
            daysWithoutStock,
            lostSales,
          });
        }
      }
    }
  }

  const storeByName = Object.fromEntries(stores.map((store) => [store.name, store]));
  const recordsByComparisonKey = new Map();
  records.forEach((record) => {
    recordsByComparisonKey.set(`${record.weekIndex}|${record.store}|${record.channel}|${record.sku}`, record);
  });

  const lyRecords = records.map((record) => {
    const priorYear = recordsByComparisonKey.get(`${record.weekIndex - 52}|${record.store}|${record.channel}|${record.sku}`);
    const store = storeByName[record.store];
    const fallbackGrowth = 1 + 0.08 + store.growth * 0.45 + (record.channel === "E-commerce" ? 0.04 : 0);

    const source = priorYear || null;
    const scaled = source ? 1 + (rng() - 0.5) * 0.035 : 1 / fallbackGrowth;

    const lyOrders = Math.max(1, (source ? source.orders : record.orders) * scaled);
    const lyUnits = Math.max(1, (source ? source.units : record.units) * scaled);
    const lySales = (source ? source.netSales : record.netSales) * scaled;
    const lyMarginPct = clamp((source ? source.grossMarginPct : record.grossMarginPct) - (rng() - 0.5) * 1.1 - 0.3, 12, 50);
    const lyMargin = lySales * (lyMarginPct / 100);
    const lyFill = clamp((source ? source.fillRate : record.fillRate) - 0.4 + (rng() - 0.5) * 0.6, 80, 99.3);
    const lyOtd = clamp((source ? source.otd : record.otd) - 0.45 + (rng() - 0.5) * 0.8, 78, 99.1);
    const lyOtif = clamp((source ? source.otif : record.otif) - 0.35 + (rng() - 0.5) * 0.8, 77, 98.4);
    const lyReturns = clamp((source ? source.returnsPct : record.returnsPct) + (rng() - 0.5) * 0.5, 0.4, 10.2);
    const lyDiscount = clamp((source ? source.discountPct : record.discountPct) - 0.5 + (rng() - 0.5) * 0.7, 1.8, 27);
    const lyBackorders = Math.round(lyOrders * (1 - lyFill / 100));
    const lyStockout = clamp(100 - lyFill + (rng() - 0.5) * 1.1, 0.2, 16.8);
    const lyCogs = lySales - lyMargin;
    const lyInventoryValue = Math.max((source ? source.inventoryValue : record.inventoryValue) * scaled, lyCogs * 1.4);
    const lyInventoryAvailable = lyInventoryValue * clamp((source ? source.inventoryAvailable / Math.max(source.inventoryValue, 1) : 0.64) + (rng() - 0.5) * 0.03, 0.5, 0.82);
    const lyInventoryCommitted = lyInventoryValue * clamp((source ? source.inventoryCommitted / Math.max(source.inventoryValue, 1) : 0.22) + (rng() - 0.5) * 0.03, 0.1, 0.32);
    const lyInventoryTransit = Math.max(lyInventoryValue - lyInventoryAvailable - lyInventoryCommitted, 0);
    const lyLogCost = (source ? source.logisticCost : record.logisticCost) * scaled;
    const lyLeadTime = clamp((source ? source.leadTimeDays : record.leadTimeDays) + (rng() - 0.5) * 0.2, 0.3, 6.9);
    const lySessions = (source ? source.sessions : record.sessions) * scaled;
    const lyPdpViews = (source ? source.pdpViews : record.pdpViews) * scaled;
    const lyAddToCart = (source ? source.addToCart : record.addToCart) * scaled;
    const lyCheckout = (source ? source.checkout : record.checkout) * scaled;
    const lyBudgetSales = lySales * (0.99 + rng() * 0.08);
    const lyDaysWithoutStock = clamp((source ? source.daysWithoutStock : record.daysWithoutStock) + (rng() - 0.5) * 0.6, 0, 21);
    const lyLostSales = lyDaysWithoutStock * (lySales / 30) * 0.2;

    return {
      weekIndex: record.weekIndex,
      weekLabel: record.weekLabel,
      monthLabel: record.monthLabel,
      isoDate: record.isoDate,
      channel: record.channel,
      region: record.region,
      state: record.state,
      store: record.store,
      category: record.category,
      itemCategory: record.itemCategory,
      sku: record.sku,
      paymentMethod: record.paymentMethod,
      segment: record.segment,
      deliveryType: record.deliveryType,
      carrier: record.carrier,
      campaign: record.campaign,
      orders: lyOrders,
      units: lyUnits,
      netSales: lySales,
      grossMargin: lyMargin,
      grossMarginPct: lyMarginPct,
      discountPct: lyDiscount,
      returnsPct: lyReturns,
      fillRate: lyFill,
      otd: lyOtd,
      otif: lyOtif,
      backorders: lyBackorders,
      stockoutRate: lyStockout,
      cogs: lyCogs,
      inventoryValue: lyInventoryValue,
      inventoryAvailable: lyInventoryAvailable,
      inventoryCommitted: lyInventoryCommitted,
      inventoryTransit: lyInventoryTransit,
      logisticCost: lyLogCost,
      leadTimeDays: lyLeadTime,
      sessions: lySessions,
      pdpViews: lyPdpViews,
      addToCart: lyAddToCart,
      checkout: lyCheckout,
      budgetSales: lyBudgetSales,
      itemPrice: record.itemPrice,
      competitorLow: record.competitorLow,
      competitorHigh: record.competitorHigh,
      daysWithoutStock: lyDaysWithoutStock,
      lostSales: lyLostSales,
    };
  });

  const hrRecords = [];
  const storeWeekSales = aggregateBy(
    records,
    (record) => `${record.weekIndex}|${record.store}`,
    (acc, record) => {
      acc.sales += record.netSales;
      return acc;
    },
    () => ({ sales: 0 }),
  );

  const areaConfig = [
    { area: "Ventas", share: 0.52, role: "Asesor" },
    { area: "Almacén", share: 0.32, role: "Operador" },
    { area: "Administración", share: 0.16, role: "Analista" },
  ];
  const shifts = ["Mañana", "Tarde", "Nocturno"];
  const contracts = ["Base", "Temporal"];
  const tenures = ["0-1", "1-3", "3-5", "5+"];

  for (let w = 0; w < weeks.length; w += 1) {
    const month = isoToDate(weeks[w].isoDate).getUTCMonth() + 1;
    for (const store of stores) {
      const key = `${w}|${store.name}`;
      const sales = storeWeekSales[key]?.sales || 0;
      const seasonalPressure = month === 11 || month === 12 ? 1.1 : month === 1 ? 0.95 : 1;
      const planTotal = Math.round((38 + store.factor * 16 + sales / 1_900_000) * seasonalPressure);
      const actualTotal = Math.max(16, Math.round(planTotal + (rng() - 0.5) * 7));
      const vacancyTotal = Math.max(0, planTotal - actualTotal + Math.round(rng() * 2));

      for (const areaItem of areaConfig) {
        const areaPlan = Math.round(planTotal * areaItem.share);
        const areaActual = Math.max(4, Math.round(actualTotal * areaItem.share));
        const areaVacancy = Math.max(0, Math.round(vacancyTotal * areaItem.share));

        const turnoverPct = clamp(2.1 + store.hrRisk * 2.7 + (areaItem.area === "Ventas" ? 0.45 : 0) + (rng() - 0.5) * 1.1, 1.0, 6.8);
        const daysToFill = clamp(22 + store.hrRisk * 13 + (areaItem.area === "Almacén" ? 3.6 : 0) + (rng() - 0.5) * 7, 10, 62);
        const absenteeismPct = clamp(3.0 + store.hrRisk * 4 + (areaItem.area === "Almacén" ? 0.6 : 0) + (rng() - 0.5) * 1.1, 1.1, 9.4);
        const overtimeHours = Math.max(6, Math.round((sales / 150000) * areaItem.share * 8 + (month === 11 || month === 12 ? 8 : 0) + (rng() - 0.5) * 16));
        const laborCost = sales * (0.109 + (rng() - 0.5) * 0.016) * areaItem.share;
        const trainingHours = Math.round(areaActual * (0.85 + rng() * 0.75));
        const incidents = Math.round(Math.max(0, areaActual * (0.006 + rng() * 0.008)));

        const shift = shifts[Math.floor(rng() * shifts.length)];
        const contract = rng() > 0.19 ? contracts[0] : contracts[1];
        const tenure = tenures[Math.floor(rng() * tenures.length)];
        const supervisor = `${store.city.split(" ")[0]}-${areaItem.area.slice(0, 3)}`;

        hrRecords.push({
          weekIndex: w,
          weekLabel: weeks[w].label,
          monthLabel: weeks[w].monthLabel,
          isoDate: weeks[w].isoDate,
          region: store.region,
          store: store.name,
          area: areaItem.area,
          shift,
          role: areaItem.role,
          contract,
          tenure,
          supervisor,
          planHeadcount: areaPlan,
          actualHeadcount: areaActual,
          vacancies: areaVacancy,
          turnoverPct,
          daysToFill,
          absenteeismPct,
          overtimeHours,
          laborCost,
          trainingHours,
          incidents,
        });
      }
    }
  }

  const stateCoords = {
    Guanajuato: [-101.257, 20.676],
    Querétaro: [-100.389, 20.588],
    Michoacán: [-101.194, 19.703],
    Jalisco: [-103.35, 20.67],
    "Estado de México": [-99.67, 19.35],
    CDMX: [-99.133, 19.433],
    "San Luis Potosí": [-100.985, 22.156],
    Aguascalientes: [-102.297, 21.882],
    Hidalgo: [-98.76, 20.123],
    Puebla: [-98.206, 19.043],
  };

  return { weeks, records, lyRecords, hrRecords, stores, categories, stateCoords };
}

function createWeeksInRange(startIso, endIso) {
  const start = isoToDate(startIso);
  const end = isoToDate(endIso);
  const labels = [];
  let cursor = new Date(start);
  let index = 1;

  while (cursor <= end) {
    labels.push(buildWeekPoint(cursor, index));
    index += 1;
    cursor = new Date(cursor);
    cursor.setUTCDate(cursor.getUTCDate() + 7);
  }

  if (labels.at(-1)?.isoDate !== endIso) {
    labels.push(buildWeekPoint(end, index));
  }

  return labels;
}

function buildWeekPoint(dateValue, index) {
  const isoDate = dateToIso(dateValue);
  const date = isoToDate(isoDate);
  const shortMonth = date.toLocaleDateString("es-MX", { month: "short", timeZone: "UTC" }).replace(".", "");
  const longMonth = date.toLocaleDateString("es-MX", { month: "long", timeZone: "UTC" });
  const monthLabel = `${longMonth.charAt(0).toUpperCase()}${longMonth.slice(1)} ${date.getUTCFullYear()}`;

  return {
    label: `S${String(index).padStart(2, "0")} ${shortMonth}`,
    monthLabel,
    monthKey: `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}`,
    isoDate,
  };
}

function createRng(seed) {
  let t = seed >>> 0;
  return () => {
    t += 0x6d2b79f5;
    let x = Math.imul(t ^ (t >>> 15), 1 | t);
    x ^= x + Math.imul(x ^ (x >>> 7), 61 | x);
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
