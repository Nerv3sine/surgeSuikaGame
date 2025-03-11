import { f as ensure_array_like, i as attr_class, j as attr, e as escape_html, c as pop, p as push } from "../../chunks/index.js";
import Matter from "matter-js";
const tiers = [
  {
    label: "monka",
    points: 2,
    size: 0.17,
    icon: "https://cdn.discordapp.com/emojis/902991373555355688.webp?size=64"
  },
  {
    label: "shocc",
    points: 4,
    size: 0.24,
    icon: "https://cdn.discordapp.com/emojis/1250288453732798464.webp?size=64"
  },
  {
    label: "sobb",
    points: 6,
    size: 0.31,
    icon: "https://cdn.discordapp.com/emojis/1250288456274542623.webp?size=64"
  },
  {
    label: "angy",
    points: 8,
    size: 0.38,
    icon: "https://cdn.discordapp.com/emojis/1250397376019959881.webp?size=64"
  },
  {
    label: "pleadin",
    points: 10,
    size: 0.45,
    icon: "https://cdn.discordapp.com/emojis/1250287956388872294.webp?size=64"
  },
  {
    label: "wtf",
    points: 12,
    size: 0.59,
    icon: "https://cdn.discordapp.com/emojis/1250291086841348227.webp?size=64"
  },
  {
    label: "heart eyes",
    points: 14,
    size: 0.8,
    icon: "https://cdn.discordapp.com/emojis/1250288454659608608.webp?size=64"
  },
  {
    label: "love",
    points: 16,
    size: 0.94,
    icon: "https://cdn.discordapp.com/emojis/1303060049714876527.webp?size=64"
  },
  {
    label: "kool",
    points: 18,
    size: 1.08,
    icon: "https://cdn.discordapp.com/emojis/1194890988989206549.webp?size=64"
  },
  {
    label: "SURGE",
    points: 20,
    size: 1.24,
    icon: "https://cdn.discordapp.com/emojis/773415528411693057.webp?size=64"
  }
];
function _page($$payload, $$props) {
  push();
  var Engine = Matter.Engine;
  Matter.Render;
  Matter.Runner;
  Matter.Bodies;
  Matter.Body;
  Matter.Composite;
  var Events = Matter.Events;
  Matter.World;
  var points = 0;
  var engine = Engine.create();
  var gameMode = "startMenu";
  var leaderboard = generateLeaderboard();
  Events.on(engine, "collisionStart", (event) => {
    {
      return;
    }
  });
  function generateLeaderboard() {
    let scores = /* @__PURE__ */ new Set();
    while (scores.size < 10) {
      const randVal = Math.floor(Math.random() * 1e3);
      scores.add(randVal);
    }
    return [...scores].sort(function(a, b) {
      return b - a;
    });
  }
  function isCanvasVisible() {
    return gameMode == "losing";
  }
  const each_array = ensure_array_like(tiers);
  const each_array_1 = ensure_array_like(tiers);
  $$payload.out += `<table${attr_class("leaderBoard", void 0, { "hoverClose": true })}><thead><tr><th></th><th><h2>Top Scores</h2></th></tr></thead><tbody><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let tier = each_array[$$index];
    $$payload.out += `<tr><td class="icon"><img${attr("src", tier.icon)}></td><td class="label" width="200"><p>${escape_html(tier.label)}</p></td><td><p>${escape_html(leaderboard[tiers.findIndex((t) => t.label === tier.label)])}</p></td></tr>`;
  }
  $$payload.out += `<!--]--></tbody></table> <table${attr_class("pointsTable", void 0, { "invisible": true })}><thead><tr><th></th><th><h2>Surgemotes</h2></th></tr></thead><tbody><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let tier = each_array_1[$$index_1];
    $$payload.out += `<tr><td class="icon"><img${attr("src", tier.icon)}></td><td class="label" width="200"><p>${escape_html(tier.label)}</p></td><td><p>${escape_html(tier.points)}</p></td></tr>`;
  }
  $$payload.out += `<!--]--></tbody></table> `;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h1>Surge Suika</h1> <button>Start</button>`;
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->  <div${attr_class("canvas", void 0, {
    "playActive": isCanvasVisible(),
    "invisible": true
  })}><h3 id="pts" class="UI">Points: ${escape_html(points)}</h3></div>`;
  pop();
}
export {
  _page as default
};
