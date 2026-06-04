const agents = {
    jett: {
        name: "Jett 捷风",
        role: "Duelist",
        image: "jett.png",
        description: "Jett is fast, slippery, and great for players who like taking the first fight. She can dash into space, reach high angles, and escape danger before enemies can trade her.",
        strengths: [
            "Entering sites quickly",
            "Taking aggressive aim duels",
            "Using high ground and off-angles",
            "Escaping after getting a pick"
        ]
    },
    phoenix: {
        name: "Phoenix 不死鸟",
        role: "Duelist",
        image: "不.webp",
        description: "Phoenix is a self-sufficient fighter who can flash around corners, heal himself with fire, and use his ultimate to safely scout or attack.",
        strengths: [
            "Flashing into close fights",
            "Healing after damage",
            "Clearing corners with fire",
            "Starting fights with Run It Back"
        ]
    },
    yoru: {
        name: "Yoru 夜露",
        role: "Duelist",
        image: "夜.webp",
        description: "Yoru wins by confusing enemies. His fake footsteps, teleport, flashes, and ultimate help him trick defenders and appear where they do not expect him.",
        strengths: [
            "Tricking enemies with fakes",
            "Teleporting behind defenses",
            "Creating surprise attacks",
            "Gathering information with his ultimate"
        ]
    },
    cypher: {
        name: "Cypher 零",
        role: "Sentinel",
        image: "零.webp",
        description: "Cypher protects areas with traps, cages, and cameras. He is strongest when he slows enemies down and gives his team information before a fight starts.",
        strengths: [
            "Watching flanks",
            "Gathering information",
            "Stopping fast pushes",
            "Defending sites with traps"
        ]
    }
};

const cards = document.querySelectorAll(".agent-card");
const detailPanel = document.querySelector(".agent-details");
const closeButton = document.querySelector(".close-details");
const detailImage = document.querySelector(".details-image img");
const detailRole = document.querySelector(".details-role");
const detailName = document.querySelector(".details-name");
const detailDescription = document.querySelector(".details-description");
const detailStrengths = document.querySelector(".details-strengths");

function showAgent(agentId) {
    const agent = agents[agentId];

    detailImage.src = agent.image;
    detailImage.alt = agent.name;
    detailRole.textContent = agent.role;
    detailName.textContent = agent.name;
    detailDescription.textContent = agent.description;
    detailStrengths.innerHTML = "";

    agent.strengths.forEach((strength) => {
        const item = document.createElement("li");
        item.textContent = strength;
        detailStrengths.appendChild(item);
    });

    detailPanel.hidden = false;
    detailPanel.scrollIntoView({ behavior: "smooth", block: "center" });
    closeButton.focus();
}

function closeDetails() {
    detailPanel.hidden = true;
}

cards.forEach((card) => {
    card.addEventListener("click", () => {
        showAgent(card.dataset.agent);
    });

    card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            showAgent(card.dataset.agent);
        }
    });
});

closeButton.addEventListener("click", closeDetails);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeDetails();
    }
});
