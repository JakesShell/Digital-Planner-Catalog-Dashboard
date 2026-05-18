const planners = [
    {
        title: "Budget Planner Template",
        category: "Finance",
        file: "Budget Planner Template (PDF).pdf",
        useCase: "Budgeting, savings tracking, and finance planning workflows."
    },
    {
        title: "Fitness Planner Bundle",
        category: "Wellness",
        file: "Fitness Planner Bundle.pdf",
        useCase: "Workout planning, progress tracking, and personal wellness routines."
    },
    {
        title: "Goal Planner",
        category: "Productivity",
        file: "GOAL PLANNER.pdf",
        useCase: "Short-term and long-term goal planning with action-oriented structure."
    },
    {
        title: "Household Planner",
        category: "Home Management",
        file: "Household Planner.pdf",
        useCase: "Task planning, household coordination, and schedule management."
    },
    {
        title: "Mental Health Planner",
        category: "Wellness",
        file: "MENTAL HEALTH PLANNER.pdf",
        useCase: "Reflection, self-care planning, and mood or wellness tracking."
    },
    {
        title: "Social Media Planner",
        category: "Marketing",
        file: "SOCIAL MEDIA PLANNER.pdf",
        useCase: "Content scheduling, campaign planning, and engagement tracking."
    },
    {
        title: "Student Planner",
        category: "Education",
        file: "Student Planner US Letter.pdf",
        useCase: "Assignment planning, study management, and deadline tracking."
    },
    {
        title: "Travel Planner",
        category: "Travel",
        file: "Travel Planner All Template 34 Pages.pdf",
        useCase: "Trip preparation, itinerary planning, and travel organization."
    },
    {
        title: "Wedding Planner",
        category: "Events",
        file: "2024 wedding planner.pdf",
        useCase: "Event coordination, budget planning, and wedding preparation workflows."
    }
];

const summaryItems = [
    { title: "Template Count", text: `${planners.length} Planner Products` },
    { title: "Catalog Focus", text: "Digital Planning Templates" },
    { title: "Primary Value", text: "Organized Access And Product Presentation" },
    { title: "Business Angle", text: "Template Catalog And Product Showcase" }
];

const useCases = [
    { title: "Digital Product Showcase", text: "Present planner assets in a cleaner and more structured way for customers or stakeholders." },
    { title: "Internal Catalog Review", text: "Quickly review template categories, intended use cases, and available assets." },
    { title: "Product Portfolio Presentation", text: "Show digital planning products as a coherent and professional collection." },
    { title: "Storefront Planning Support", text: "Use the catalog as a lightweight base for future ecommerce or listing workflows." }
];

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function renderCards(containerId, items) {
    const container = document.getElementById(containerId);
    container.innerHTML = items.map(item => `
        <article class="card">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
        </article>
    `).join("");
}

function buildCategories() {
    const grouped = {};
    planners.forEach(item => {
        grouped[item.category] = (grouped[item.category] || 0) + 1;
    });

    const items = Object.entries(grouped).map(([title, count]) => ({
        title,
        text: `${count} template${count > 1 ? "s" : ""} available`
    }));

    renderCards("categoryGrid", items);

    const filter = document.getElementById("categoryFilter");
    Object.keys(grouped).sort().forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        filter.appendChild(option);
    });
}

function renderCatalog(selectedCategory = "All") {
    const container = document.getElementById("catalogGrid");
    const visible = selectedCategory === "All"
        ? planners
        : planners.filter(item => item.category === selectedCategory);

    container.innerHTML = visible.map(item => `
        <article class="catalog-card">
            <div class="tag">${item.category}</div>
            <h3>${item.title}</h3>
            <p>${item.useCase}</p>
            <button onclick="window.open(encodeURI('${item.file}'), '_blank')">Open PDF</button>
        </article>
    `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
    renderCards("summaryGrid", summaryItems);
    renderCards("useCaseGrid", useCases);
    buildCategories();
    renderCatalog();

    document.getElementById("categoryFilter").addEventListener("change", event => {
        renderCatalog(event.target.value);
    });
});
