import { h as head, d as slot } from "../../chunks/index.js";
function _layout($$payload, $$props) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Testing Game</title>`;
  });
  $$payload.out += `<!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
