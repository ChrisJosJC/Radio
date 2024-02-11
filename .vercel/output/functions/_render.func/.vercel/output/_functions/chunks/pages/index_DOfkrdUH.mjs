/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderHead, k as renderSlot, m as maybeRenderHead, s as spreadAttributes, l as renderComponent } from '../astro_BDIt-Joj.mjs';
import { jsx } from 'preact/jsx-runtime';
import { useState } from 'preact/hooks';

const $$Astro$5 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description" content="Una emisora ubicada en Republica Dominicana que lleva su palabra a todas partes."><meta name="keywords" content="Radio,Estilo,Dios,Palabra,Gloria"><meta name="author" content="Cristian Jean"><meta name="robots" content="index, follow"><meta name="theme-color" content="#f30"><meta http-equiv="X-UA-Compatible" content="IE=edge"><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url" content="https://www.alestilodedios.com/"><meta property="og:title" content="Radio Al Estilo de Dios"><meta property="og:description" content="Una emisora ubicada en Republica Dominicana que lleva su palabra a todas partes."><meta property="og:image" content="https://lh5.googleusercontent.com/D6hCt58NDixpFLBZInS_mlGzvbg-nBeLl1q-7GopIhSE4di6CZYA64CYxdSWvlhj3K-h9s2Iy1ypClmgMaUXCrs=w16383"><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:url" content="https://www.alestilodedios.com/"><meta name="twitter:title" content="Radio Al Estilo De Dios"><meta name="twitter:description" content="Una emisora ubicada en Republica Dominicana que lleva su palabra a todas partes."><meta name="twitter:image" content="https://lh5.googleusercontent.com/D6hCt58NDixpFLBZInS_mlGzvbg-nBeLl1q-7GopIhSE4di6CZYA64CYxdSWvlhj3K-h9s2Iy1ypClmgMaUXCrs=w16383"><!-- Favicon --><link rel="icon" href="/favicon.png" type="image/x-icon"><link rel="apple-touch-icon" href="apple-touch-icon.png"><title>${title}</title>${renderHead()}</head> <body class="relative h-full min-h-screen w-full bg-black"> ${renderSlot($$result, $$slots["default"])} <div id="bg-points" class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div> <div id="bg-overlay" class="hidden z-[-2] absolute inset-0 bg-black opacity-50"></div>  </body></html>`;
}, "C:/Users/PC/Dev/radio/src/layout/Layout.astro", void 0);

const $$Astro$4 = createAstro();
const $$Adjust = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Adjust;
  return renderTemplate`${maybeRenderHead()}<svg width="29" height="29" viewBox="0 0 29 29" fill="none"${spreadAttributes(Astro2.props)}> <path d="M14.5 5C12.6211 5 10.7844 5.55717 9.22209 6.60104C7.65982 7.64491 6.44218 9.12861 5.72315 10.8645C5.00412 12.6004 4.81598 14.5105 5.18254 16.3534C5.5491 18.1962 6.45389 19.8889 7.78249 21.2175C9.11109 22.5461 10.8038 23.4509 12.6466 23.8175C14.4895 24.184 16.3996 23.9959 18.1355 23.2769C19.8714 22.5578 21.3551 21.3402 22.399 19.7779C23.4428 18.2157 24 16.3789 24 14.5C23.9974 11.9813 22.9956 9.56643 21.2146 7.78541C19.4336 6.00439 17.0187 5.00265 14.5 5ZM6 14.5C6.00358 12.3343 6.83333 10.2515 8.31996 8.67661C9.80659 7.10171 11.8381 6.15335 14 6.025V22.975C11.8381 22.8466 9.80659 21.8983 8.31996 20.3234C6.83333 18.7485 6.00358 16.6657 6 14.5Z" fill="currentColor"></path> </svg>`;
}, "C:/Users/PC/Dev/radio/src/icons/Adjust.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<header class="flex py-4 px-6 justify-between items-center w-full"> <span class="block text-white font-medium">Radio Estilo de Dios</span> ', ' </header> <script>\n  let bgSet;\n\n  document.querySelector("#change-bg").addEventListener("click", () => {\n    if (bgSet != title) {\n      document.body.style.backgroundImage = `url(\'${this.cover}\')`;\n      document.body.style.backgroundSize = "cover";\n      document.body.style.backgroundRepeat = "no-repeat";\n      bgSet = title;\n    }\n    document.getElementById("bg-points").classList.toggle("hidden");\n    document.getElementById("bg-overlay").classList.toggle("hidden");\n    document.getElementById("change-bg").classList.toggle("rotate-180");\n  });\n<\/script>'], ["", '<header class="flex py-4 px-6 justify-between items-center w-full"> <span class="block text-white font-medium">Radio Estilo de Dios</span> ', ' </header> <script>\n  let bgSet;\n\n  document.querySelector("#change-bg").addEventListener("click", () => {\n    if (bgSet != title) {\n      document.body.style.backgroundImage = \\`url(\'\\${this.cover}\')\\`;\n      document.body.style.backgroundSize = "cover";\n      document.body.style.backgroundRepeat = "no-repeat";\n      bgSet = title;\n    }\n    document.getElementById("bg-points").classList.toggle("hidden");\n    document.getElementById("bg-overlay").classList.toggle("hidden");\n    document.getElementById("change-bg").classList.toggle("rotate-180");\n  });\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Adjust", $$Adjust, { "id": "change-bg", "class": "dark:text-white hover:animate-rotate-180 hover:opacity-90 cursor-pointer", "title": "Change background" }));
}, "C:/Users/PC/Dev/radio/src/components/Header.astro", void 0);

function Pause(Props) {
  return jsx("svg", {
    width: "104",
    height: "139",
    viewBox: "0 0 448 512",
    ...Props,
    children: jsx("path", {
      d: "M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z",
      fill: "currentColor"
    })
  });
}

function Play$1(Props) {
  return jsx("svg", {
    width: "104",
    height: "139",
    viewBox: "0 0 104 139",
    fill: "none",
    ...Props,
    children: jsx("path", {
      d: "M19.7708 10.5625C15.7625 8.09793 10.725 8.01668 6.63542 10.3188C2.54583 12.6209 0 16.9542 0 21.6667V117C0 121.713 2.54583 126.046 6.63542 128.348C10.725 130.65 15.7625 130.542 19.7708 128.104L97.7708 80.4376C101.644 78.0813 104 73.8834 104 69.3334C104 64.7834 101.644 60.6126 97.7708 58.2292L19.7708 10.5625Z",
      fill: "currentColor"
    })
  });
}

function Play({
  ...Props
}) {
  const [paused, setPaused] = useState(false);
  const togglePlay = (e) => {
    if (!paused)
      document.querySelector("#player").play();
    if (paused)
      document.querySelector("#player").pause();
    setPaused(!paused);
  };
  if (!paused) {
    return jsx(Play$1, {
      ...Props,
      onClick: togglePlay
    });
  } else {
    return jsx(Pause, {
      ...Props,
      onClick: togglePlay
    });
  }
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$Player = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Player;
  return renderTemplate(_a || (_a = __template(["", '<main class="grid place-items-center mt-20"> ', ' <h2 class="text-white mt-3 text-5xl text-center" id="currentTrack"></h2> <h3 class="mt-2 text-white/70 font-light" id="currentArtist"></h3> </main>   <script>\n  var artist = document.getElementById("currentArtist"),\n    title = document.getElementById("currentTrack"),\n    cover,\n    url = "https://c11.radioboss.fm/w/nowplayinginfo?u=314",\n    cover_url = "https://c11.radioboss.fm/w/artwork/314.jpg",\n    type = 0;\n\n  function updateInfo() {\n    fetch(url + "&_=" + new Date().getTime())\n      .then((response) => {\n        if (response.ok) {\n          return response.json();\n        } else {\n          throw new Error("Network response was not ok.");\n        }\n      })\n      .then((data) => {\n        artist.textContent = data.currenttrack_artist;\n\n        title.textContent = data.currenttrack_title;\n\n        cover = cover_url + "?" + new Date().getTime();\n      })\n      .catch((error) => {\n        console.error("Fetch error:", error);\n      });\n  }\n\n  updateInfo();\n  setInterval(updateInfo, 5000);\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Play", Play, { "client:load": true, "id": "playButton", "class": "dark:text-red-600 animate-tada animate-fill-mode-backwards cursor-pointer hover:animate-pop hover:animate-iteration-count-infinite", "client:component-hydration": "load", "client:component-path": "@comp/PlayBtn", "client:component-export": "default" }));
}, "C:/Users/PC/Dev/radio/src/components/Player.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate``;
}, "C:/Users/PC/Dev/radio/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Radio Al Estilo De Dios" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Player", $$Player, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ${maybeRenderHead()}<canvas class="max-sm:absolute max-sm:bottom-0 max-sm:w-full max-sm:z-50 sm:mx-auto" id="waves"></canvas> ` })}`;
}, "C:/Users/PC/Dev/radio/src/pages/index.astro", void 0);

const $$file = "C:/Users/PC/Dev/radio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
