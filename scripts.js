/**
 * Data Catalog Project Starter Code - SEA Stage 2
 * Created by Phoenix Afschar 
**/
const skills = [
  {
    id: "fire_1",
    name: "Pyroball",
    element: "Fire",
    tier: 1,
    damage: 30,
    cooldown: 0,
    stamina: 14,
    range: 20,
    impact: 1,
    casttime: 0.5,
    desc: "Conjure fire out of your fist",
    prereqs: [],
    icon: "assets/Pyroball.PNG",
    x: 1800,
    y: 1433
  },
  {
    id: "SearingStrikes",
    name: "Searing Strikes",
    element: "Fire",
    tier: 1,
    damage: 60,
    cooldown: 0,
    stamina: 12,
    range: 3,
    impact: 1,
    casttime: "Instant",
    desc: "Produce a combination of short range fire strikes",
    prereqs: [],
    icon: "assets/searingstrikes.PNG",
    x: 2100,
    y: 1433
  },
  {
    id: "incinerate",
    name: "Incinerate",
    element: "Fire",
    tier: 2,
    damage: 50,
    cooldown: 15,
    stamina: 30,
    range: 30,
    impact: 2,
    casttime: 1,
    desc: "Conjure a slash of fire piercing enemies and dealing 50 damage",
    prereqs: ["fire_1"],
    icon: "assets/Incinerate.PNG",
    x: 1650,
    y: 1250
  },
  {
    id: "Firecracker",
    name: "Firecracker",
    element: "Fire",
    tier: 1,
    damage: 10,
    cooldown: 0,
    stamina: 5,
    range: 5,
    impact: 0,
    casttime: 0,
    desc: "Send out a octal of firecrackers",
    prereqs: [],
    icon: "assets/Spitfire.PNG",
    x: 1945,
    y: 1360
  },
  {
    id: "Combust",
    name: "Combust",
    element: "Fire",
    tier: 2,
    damage: 50,
    cooldown: 8,
    stamina: 45,
    range: 10,
    impact: 0,
    casttime: 0,
    desc: "Create an explosion propelling yourself forward 10 meters and stopping on the first enemy hit",
    prereqs: ["SearingStrikes", "Firecracker"],
    icon: "assets/fire-dash.PNG",
    x: 2100,
    y: 1250
  },
  {
    id: "Kindle",
    name: "Kindle",
    element: "Fire",
    tier: 2,
    damage: 0,
    cooldown: 5,
    stamina: 10,
    range: 10,
    impact: 0,
    casttime: 0,
    desc: "Produce soft embers stopping on the first ally hit, healing them",
    prereqs: ["fire_1"],
    icon: "assets/kindlenice.PNG",
    x: 1850,
    y: 1150
  },
  {
    id: "Wildfire",
    name: "Wildfire",
    element: "Fire",
    tier: 2,
    damage: 25,
    cooldown: 15,
    stamina: 10,
    range: 3,
    impact: 0,
    casttime: 0,
    desc: "Spin and conjure flames around your feet, burning enemies",
    prereqs: ["SearingStrikes"],
    icon: "assets/fire_icon.PNG",
    x: 2300,
    y: 1250
  },
  {
    id: "Igneous Shell",
    name: "Igneous Shell",
    element: "Fire",
    tier: 3,
    damage: 10,
    cooldown: 20,
    stamina: 15,
    range: 5,
    impact: 0,
    casttime: 0,
    desc: "Conjure a barrier, blocking damage for 5 seconds. Can be recast to deal damage around you equal to blocked damage",
    prereqs: ["Wildfire"],
    icon: "assets/IgneousShell.PNG",
    x: 2500,
    y: 1250
  },
  {
    id: "Zephyr",
    name: "Zephyr",
    element: "Air",
    tier: 1,
    damage: 10,
    cooldown: 0,
    stamina: 15,
    range: 20,
    impact: 0,
    casttime: 0,
    desc: "Shoot small bursts of air dealing 10 damage",
    prereqs: [],
    icon: "assets/aerobursts.PNG",
    x: 1450,
    y: 1850
  },
  {
    id: "Air Burst",
    name: "Air Burst",
    element: "Air",
    tier: 1,
    damage: 15,
    cooldown: 0,
    stamina: 15,
    range: 25,
    impact: 0,
    casttime: 0.5,
    desc: "Harness the winds between your palms and push the breeze forward dealing 15 damage",
    prereqs: [],
    icon: "assets/air_icon.PNG",
    x: 1400,
    y: 2025
  },
  {
    id: "Cyclone Kick",
    name: "Cyclone Kick",
    element: "Air",
    tier: 1,
    damage: 10,
    cooldown: 0,
    stamina: 15,
    range: 3,
    impact: 0,
    casttime: 0,
    desc: "Kick in the direction last pressed dealing 10 damage",
    prereqs: [],
    icon: "assets/Wind_Shear_Kicks.PNG",
    x: 1450,
    y: 2200
  },
  {
    id: "Updraft",
    name: "Updraft",
    element: "Air",
    tier: 2,
    damage: 10,
    cooldown: 10,
    stamina: 25,
    range: 5,
    impact: 0,
    casttime: 0,
    desc: "Pull air around you to create an updraft, knocking up foes",
    prereqs: ["Cyclone Kick"],
    icon: "assets/updraft.PNG",
    x: 1250,
    y: 2250
  },
  {
    id: "Crosswind",
    name: "Crosswind",
    element: "Air",
    tier: 3,
    damage: 40,
    cooldown: 10,
    stamina: 25,
    range: 2,
    impact: 2,
    casttime: 0,
    desc: "Kick downwards with your heel",
    prereqs: ["Updraft"],
    icon: "assets/axel-kick.png",
    x: 1050,
    y: 2250
  },
  {
    id: "Deep Breath",
    name: "Deep Breath",
    element: "Air",
    tier: 2,
    damage: 25,
    cooldown: 15,
    stamina: 15,
    range: 20,
    impact: 1,
    casttime: 1,
    desc: "Blow a gust of chilly wind",
    prereqs: ["Air Burst"],
    icon: "assets/Deep_Breathe.PNG",
    x: 1150,
    y: 2025
  },
  {
    id: "Current Slash",
    name: "Current Slash",
    element: "Water",
    tier: 1,
    damage: 5,
    cooldown: 0,
    stamina: 5,
    range: 15,
    impact: 1,
    casttime: 1,
    desc: "Use the currents to direct a slash at your attack",
    prereqs: [],
    icon: "assets/Aqua_Lash.PNG",
    x: 1850,
    y: 2500
  },
  {
    id: "Riptide",
    name: "Riptide",
    element: "Water",
    tier: 1,
    damage: 10,
    cooldown: 0,
    stamina: 5,
    range: 15,
    impact: 1,
    casttime: 0,
    desc: "Channel a bolt of hydromancy, aimed with your mouse",
    prereqs: [],
    icon: "assets/Splash.PNG",
    x: 2000,
    y: 2550
  },
  {
    id: "Undertow",
    name: "Undertow",
    element: "Water",
    tier: 2,
    damage: 10,
    cooldown: 30,
    stamina: 25,
    range: 15,
    impact: 2,
    casttime: 1,
    desc: "Throw an anchor at mouse location, if collides with another player pulls them. Otherwise pulls you.",
    prereqs: ["Current Slash"],
    icon: "assets/undertow.PNG",
    x: 1825,
    y: 2700
  },
  {
    id: "Tidal Wave",
    name: "Tidal Wave",
    element: "Water",
    tier: 2,
    damage: 15,
    cooldown: 10,
    stamina: 25,
    range: 25,
    impact: 2,
    casttime: 1,
    desc: "Casts a tidal wave, hitting enemies in front of you",
    prereqs: ["Riptide"],
    icon: "assets/WaveIcon.PNG",
    x: 2000,
    y: 2700
  },
  {
    id: "Icicle Barrage",
    name: "Icicle Barrage",
    element: "Water",
    tier: 3,
    damage: 50,
    cooldown: 10,
    stamina: 25,
    range: 15,
    impact: 2,
    casttime: 1,
    desc: "Casts a tidal wave, hitting enemies in front of you",
    prereqs: ["Tidal Wave"],
    icon: "assets/Icicle.PNG",
    x: 2100,
    y: 2900
  },
  {
    id: "Shatter Fists",
    name: "Shatter Fists",
    element: "Earth",
    tier: 1,
    damage: 10,
    cooldown: 0,
    stamina: 5,
    range: 1,
    impact: 2,
    casttime: 0,
    desc: "Coat your fists with boulders, destroying any projectiles you hit",
    prereqs: [],
    icon: "assets/Fists.PNG",
    x: 2500,
    y: 1850
  },
  {
    id: "Kings Spire",
    name: "Kings Spire",
    element: "Earth",
    tier: 2,
    damage: 0,
    cooldown: 30,
    stamina: 50,
    range: 1,
    impact: 2,
    casttime: 1,
    desc: "Conjure a pillar of earth from the ground, elevating yourself.",
    prereqs: ["Shatter Fists"],
    icon: "assets/KingsSpire.PNG",
    x: 2700,
    y: 1840
  },
  {
    id: "Quake",
    name: "Quake",
    element: "Earth",
    tier: 2,
    damage: 50,
    cooldown: 10,
    stamina: 30,
    range: 5,
    impact: 3,
    casttime: 1,
    desc: "Slam your fist into the ground, shattering the earth around you",
    prereqs: ["Shatter Fists"],
    icon: "assets/Quake.PNG",
    x: 2700,
    y: 2000
  },
  {
    id: "Geoblast",
    name: "Geoblast",
    element: "Earth",
    tier: 1,
    damage: 20,
    cooldown: 15,
    stamina: 20,
    range: 15,
    impact: 3,
    casttime: 1,
    desc: "Kick up a boulder from the ground, then punch it towards enemies.",
    prereqs: [],
    icon: "assets/KraggIcon.PNG",
    x: 2500,
    y: 2100
  },
  {
    id: "Lithify",
    name: "Lithify",
    element: "Earth",
    tier: 2,
    damage: 0,
    cooldown: 15,
    stamina: 20,
    range: 1,
    impact: 0,
    casttime: 0,
    desc: "Create a rock shield, healing yourself at the end of the cast",
    prereqs: ["Geoblast"],
    icon: "assets/Lithify.PNG",
    x: 2800,
    y: 2200
  },
]

const container = document.getElementById("tree-container");
const canvas = document.getElementById("tree-canvas");
let skillPoints = 0;
const unlockedSkills = new Set();
let scale = 0.5;
let isDragging = false;
let offsetX = (window.innerWidth / 2) - (canvas.offsetWidth / 2);
let offsetY = (window.innerHeight / 2) - (canvas.offsetHeight / 2);
let buildMode = false;
canvas.style.left = offsetX + "px";
canvas.style.top = offsetY + "px";
canvas.style.transform = "scale(" + scale + ")";
canvas.style.transformOrigin = "center center";
container.addEventListener("mousedown", function (event) {
  startX = event.clientX - offsetX;
  startY = event.clientY - offsetY;

  isDragging = true;
  event.stopPropagation();
}); 
document.getElementById("start-build").addEventListener("click", function () {
  document.getElementById("level-modal").style.display = "flex";

});
document.getElementById("modal-submit").addEventListener("click", function () {
  const level = Number(document.getElementById("level-input").value);
  skillPoints = level;
  document.getElementById("skill-points").textContent = "Skill Points: " + skillPoints;
  document.getElementById("skill-points").style.display = "block";
  document.getElementById("reset-build").style.display = "block";
  document.getElementById("level-modal").style.display = "none";
  buildMode = true;
  canvas.classList.add("build-mode");

});
document.getElementById("reset-build").addEventListener("click", function () {
  unlockedSkills.clear();
  skillPoints = 0;
  document.getElementById("skill-points").textContent = "Skill Points: " + skillPoints;
  document.querySelectorAll(".skill-node").forEach(function (node) {
    node.classList.remove("unlocked");

  });
  document.querySelectorAll("#skill-lines line").forEach(function(line) {
  line.classList.remove("unlocked");
});
  canvas.classList.remove("build-mode");
  buildMode = false;
})
container.addEventListener("mousemove", function (event) {
  if (isDragging == true) {
    offsetX = event.clientX - startX;
    offsetY = event.clientY - startY;
    canvas.style.left = offsetX + "px";
    canvas.style.top = offsetY + "px";

  }

});
container.addEventListener("mouseup", function (event) {
  isDragging = false;
});
container.addEventListener("wheel", function (event) {
  if (event.deltaY < 0) {
    scale = scale + 0.1;
  }
  else {
    scale = scale - 0.1;
  }
  canvas.style.transform = "scale(" + scale + ")";
  if (scale < 0.3) scale = 0.3;
  if (scale > 2) scale = 2;
});
function renderSkills() {
  skills.forEach(function (skill) {
    const node = document.createElement("div");
    node.className = "skill-node";
    const image = document.createElement("img");
    node.setAttribute("data-element", skill.element);
    image.src = skill.icon;
    image.style.width = "64px";
    image.style.height = "64px";

    node.style.position = "absolute";
    node.style.left = skill.x + "px";
    node.style.top = skill.y + "px";
    node.appendChild(image);
    node.addEventListener("mouseenter", function (event) {
      document.getElementById("skill-icon").src = skill.icon;
      document.getElementById("skill-name").textContent = skill.name;
      document.getElementById("skill-element").textContent = skill.element;
      document.getElementById("skill-desc").textContent = skill.desc;
      document.getElementById("skill-damage").textContent = "Damage: " + skill.damage;
      document.getElementById("skill-cooldown").textContent = "Cooldown: " + skill.cooldown;
      document.getElementById("skill-stamina").textContent = "Stamina: " + skill.stamina;
      document.getElementById("skill-range").textContent = "Range: " + skill.range;
      document.getElementById("skill-impact").textContent = "Impact: " + skill.impact;
      document.getElementById("skill-casttime").textContent = "Cast Time: " + skill.casttime;

      const panel = document.getElementById("side-panel");
      panel.style.display = "block";
      panel.style.left = event.clientX + 15 + "px";
      panel.style.top = event.clientY + 15 + "px";

    });
    node.addEventListener("mouseleave", function () {
      document.getElementById("side-panel").style.display = "none";
    });
    node.addEventListener("click", function () {
      if (!buildMode || skillPoints <= 0) return;
      if (unlockedSkills.has(skill.id)) return;
      const prereqsMet = skill.prereqs.every(function (prereqId) {
        return unlockedSkills.has(prereqId);
      });
      if (!prereqsMet) return;
      unlockedSkills.add(skill.id)
      skillPoints--;
      document.getElementById("skill-points").textContent = "Skill Points: " + skillPoints;
      node.classList.add("unlocked");
      document.querySelectorAll("#skill-lines line").forEach(function(line) {
      const element = line.getAttribute("data-element");
      const x1 = Number(line.getAttribute("x1"));
      const y1 = Number(line.getAttribute("y1"));
      const x2 = Number(line.getAttribute("x2"));
      const y2 = Number(line.getAttribute("y2"));
      
      const fromSkill = skills.find(function(s) {
        return s.x + 32 === x1 && s.y + 32 === y1;
      });
      const toSkill = skills.find(function(s) {
        return s.x + 32 === x2 && s.y + 32 === y2;
      });
      
      if (fromSkill && toSkill && unlockedSkills.has(fromSkill.id) && unlockedSkills.has(toSkill.id)) {
        line.classList.add("unlocked");
      }
  });
    });


    canvas.appendChild(node);
  });
}


function drawLines() {
  const svg = document.getElementById("skill-lines");

  skills.forEach(function (skill) {
    if (skill.prereqs.length > 0) {
      skill.prereqs.forEach(function (prereqId) {
        const prereqSkill = skills.find(function (s) {
          return s.id === prereqId;
        });
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("data-element", skill.element);
        line.setAttribute("x1", prereqSkill.x + 32);
        line.setAttribute("y1", prereqSkill.y + 32);
        line.setAttribute("x2", skill.x + 32);
        line.setAttribute("y2", skill.y + 32);
        line.setAttribute("stroke", "white");
        line.setAttribute("stroke-width", "2");
        svg.appendChild(line);
      });
    }
  });
}



function filter() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const selectedElement = button.getAttribute("data-element");
      const nodes = document.querySelectorAll(".skill-node");
      const lines = document.querySelectorAll("#skill-lines line");

      nodes.forEach(function (node) {
        node.style.opacity = (selectedElement === "all" || node.getAttribute("data-element") === selectedElement) ? "1" : "0.1";
      });

      lines.forEach(function (line) {
        line.style.opacity = (selectedElement === "all" || line.getAttribute("data-element") === selectedElement) ? "1" : "0.1";
      });
    });
  });
}


renderSkills();
drawLines();
filter();
