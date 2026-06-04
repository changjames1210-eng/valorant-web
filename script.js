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
    },
    sage: {
        name: "Sage 贤者",
        role: "Sentinel",
        image: "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/fullportrait.png",
        description: "Sage is a defensive support agent who keeps her team alive. She can heal teammates, slow enemies, block paths with a wall, and even bring an ally back with her ultimate.",
        strengths: [
            "Healing teammates",
            "Blocking enemy pushes",
            "Slowing fast attacks",
            "Saving rounds with Resurrection"
        ]
    },
    sova: {
        name: "Sova 猎枭",
        role: "Initiator",
        image: "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportrait.png",
        description: "Sova helps his team find enemies before a fight starts. His arrows and drone reveal hidden players, making him very useful for attacking sites safely.",
        strengths: [
            "Revealing enemy locations",
            "Checking corners from far away",
            "Starting team attacks",
            "Damaging enemies through walls"
        ]
    },
    raze: {
        name: "Raze 雷兹",
        role: "Duelist",
        image: "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/fullportrait.png",
        description: "Raze is an explosive duelist who clears space with grenades, robots, and blast packs. She is great at forcing enemies out of hiding spots.",
        strengths: [
            "Clearing tight corners",
            "Dealing area damage",
            "Moving quickly with Blast Packs",
            "Breaking defensive setups"
        ]
    },
    reyna: {
        name: "Reyna 芮娜",
        role: "Duelist",
        image: "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/fullportrait.png",
        description: "Reyna becomes stronger when she gets eliminations. She can heal, escape, and take over rounds if the player has confident aim.",
        strengths: [
            "Taking one-on-one fights",
            "Healing after eliminations",
            "Escaping danger with Dismiss",
            "Snowballing rounds with Empress"
        ]
    },
    killjoy: {
        name: "Killjoy 奇乐",
        role: "Sentinel",
        image: "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/fullportrait.png",
        description: "Killjoy uses gadgets to control important areas. Her turret, alarmbot, and nanoswarms make enemies slow down and think twice before pushing.",
        strengths: [
            "Holding bomb sites",
            "Watching flank routes",
            "Delaying enemy attacks",
            "Controlling space with Lockdown"
        ]
    },
    omen: {
        name: "Omen 幽影",
        role: "Controller",
        image: "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/fullportrait.png",
        description: "Omen controls vision with smokes and pressure. He can blind enemies, teleport to unexpected places, and create confusion during attacks.",
        strengths: [
            "Smoking key sightlines",
            "Blinding groups of enemies",
            "Teleporting for surprise plays",
            "Creating pressure across the map"
        ]
    },
    brimstone: {
        name: "Brimstone 炼狱",
        role: "Controller",
        image: "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/fullportrait.png",
        description: "Brimstone is a steady team leader who supports attacks with precise smokes, speed boosts, fire, and a huge orbital ultimate.",
        strengths: [
            "Placing simple, reliable smokes",
            "Helping teammates enter sites",
            "Stopping defuses with fire",
            "Clearing zones with Orbital Strike"
        ]
    },
    viper: {
        name: "Viper 蝰蛇",
        role: "Controller",
        image: "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/fullportrait.png",
        description: "Viper controls space with poison. Her wall and smoke can split sites, block vision, and make enemies weaker when they push through.",
        strengths: [
            "Cutting sites in half",
            "Defending planted spikes",
            "Weakening enemy pushes",
            "Controlling large map areas"
        ]
    },
    breach: {
        name: "Breach 铁臂",
        role: "Initiator",
        image: "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/fullportrait.png",
        description: "Breach starts fights by stunning, flashing, and shaking enemies through walls. He is excellent when teammates are ready to swing after his abilities.",
        strengths: [
            "Stunning enemies before fights",
            "Flashing through walls",
            "Clearing close corners",
            "Starting powerful team pushes"
        ]
    },
    skye: {
        name: "Skye 丝凯",
        role: "Initiator",
        image: "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/fullportrait.png",
        description: "Skye helps her team with flashes, scouting, healing, and tracking. She is useful on both attack and defense because she gives information and support.",
        strengths: [
            "Flashing for teammates",
            "Healing multiple allies",
            "Scouting with Trailblazer",
            "Finding enemies with Seekers"
        ]
    },
    chamber: {
        name: "Chamber 尚勃勒",
        role: "Sentinel",
        image: "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/fullportrait.png",
        description: "Chamber is a sharp-shooting sentinel who locks down areas with traps and punishes enemies with powerful custom weapons.",
        strengths: [
            "Holding long angles",
            "Taking precise first shots",
            "Watching flanks with Trademark",
            "Escaping with Rendezvous"
        ]
    },
    neon: {
        name: "Neon 霓虹",
        role: "Duelist",
        image: "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/fullportrait.png",
        description: "Neon uses speed and electricity to rush into fights. She can sprint, slide, stun enemies, and create fast attacks that overwhelm defenders.",
        strengths: [
            "Moving around the map quickly",
            "Entering sites at high speed",
            "Stunning enemies in tight spaces",
            "Taking fast close-range fights"
        ]
    },
    fade: {
        name: "Fade 黑梦",
        role: "Initiator",
        image: "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/fullportrait.png",
        description: "Fade hunts enemies with nightmare abilities. She reveals locations, traps players, and helps her team chase down hidden opponents.",
        strengths: [
            "Revealing hidden enemies",
            "Clearing areas with Prowlers",
            "Trapping players in place",
            "Starting site hits with Nightfall"
        ]
    },
    gekko: {
        name: "Gekko 盖可",
        role: "Initiator",
        image: "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/fullportrait.png",
        description: "Gekko fights with a crew of creatures that flash, clear space, plant or defuse the spike, and disrupt enemies during chaotic pushes.",
        strengths: [
            "Planting or defusing with Wingman",
            "Flashing enemies with Dizzy",
            "Clearing corners with Mosh Pit",
            "Detaining enemies with Thrash"
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
    if (!agent) {
        return;
    }

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
