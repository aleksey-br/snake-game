const template = document.createElement("template");

import html from "./template.html?raw";

template.innerHTML = html;

module.exports = template;
