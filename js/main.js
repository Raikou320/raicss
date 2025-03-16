const ok = Object.keys;
const colors = ["red", "blue", "green", "yellow", "gray"];
const absColors = ["white", "black"]
const intensities = [100, 300, 500, 700, 900];
const borderStyles = ["dashed", "dotted", "double", "groove", "hidden", "inherit", "initial", "inset", "none", "outset", "ridge", "solid", "unset"];
const radius = { none: 0, sm: 4, md: 8, lg: 16, xl: 32, full: 9999 }
const borderWidths = { none: 0, sm: 2, md: 4, lg: 8, xl: 12, "2xl": 16, "3xl": 20 }
const padding = { 0: 0, 1: 3, 2: 6, 3: 9, 4: 12, 5: 15, 6: 18, 7: 21, 8: 24 }
const margin  = { 0: 0, 1: 3, 2: 6, 3: 9, 4: 12, 5: 15, 6: 18, 7: 21, 8: 24 }
const txtAligns = ["center", "end", "justify", "left", "right", "start", "inherit", "initial", "unset"]
const txtSizes = { sm: 0.75, md: 1, lg: 1.125, xl: 1.25, "2xl": 1.5, "3xl": 2.5 }
const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900, "bold", "bolder", "light", "normal", "inherit", "initial", "unset"]
const heights = {100: 100, 200: 200, 300: 300, 400: 400, 500: 500, 600: 600, 700: 700, 800: 800, 900: 900, 1000: 1000, full: "100%", total: "100vh"}
const widths = {100: 100, 200: 200, 300: 300, 400: 400, 500: 500, 600: 600, 700: 700, 800: 800, 900: 900, 1000: 1000, full: "100%", total: "100vw"}
const cursors = ["auto", "default", "none", "context-menu", "help", "pointer", "progress", "wait", "cell", "crosshair", "text", "vertical-text", "alias", "copy", "move", "no-drop", "not-allowed", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out"];
const flexes = {"item-center": "align-items: center", "justify-center": "justify-content: center"}
const rootColors = { "red-100": "#f00", "red-300": "#c40000", "red-500": "#9e0000", "red-700": "#810000", "red-900": "#6a0000", "blue-100": "#0ff", "blue-300": "#00b0c7", "blue-500": "#0084ff", "blue-700": "#0051ff", "blue-900": "#00f", "green-100": "#2bff00", "green-300": "#28ad00", "green-500": "#229100", "green-700": "#1e7000", "green-900": "#0a5700", "yellow-100": "#fe0", "yellow-300": "#ee0", "yellow-500": "#c7ba00", "yellow-700": "#b3b001", "yellow-900": "#918e00", "gray-100": "#f0f0f0", "gray-300": "#c0c0c0", "gray-500": "#6b6b6b", "gray-700": "#2e2e2e", "gray-900": "#0f0f0f", "white": "#fff", "black": "#000", }
const root = document.documentElement.style;
const style = document.createElement("style");
style.innerHTML += `.flex { display: flex; }\n .grid { display: grid; }\n .hidden { display: none; }\n * { border: none; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif; }\n .flex { display: flex; }\n .grid { display: grid; }\n`
colors.forEach(color => {
  intensities.forEach(intensity => {
    style.innerHTML += `.bg-${color}-${intensity} { background-color: var(--${color}-${intensity}); }\n .text-${color}-${intensity} { color: var(--${color}-${intensity}); }\n .border-${color}-${intensity} { border-color: var(--${color}-${intensity}); } \n .hover\\:bg-${color}-${intensity}:hover { background-color: var(--${color}-${intensity}); }\n .hover\\:text-${color}-${intensity}:hover { color: var(--${color}-${intensity}); }\n .hover\\:border-${color}-${intensity}:hover { border-color: var(--${color}-${intensity}); }\n`;
  });
});
absColors.forEach(color => {
  style.innerHTML += `.bg-${color} { background-color: ${color}; }\n .text-${color} { color: ${color}; }\n .hover\\:bg-${color}:hover { background-color: ${color}; }\n .hover\\:color-${color}:hover { color: ${color}; }\n`
})
borderStyles.forEach(bs => {
  style.innerHTML += `.border-${bs} { border-style: ${bs}; }\n .hover\\:border-${bs}:hover { border-style: ${bs}; }\n`
})
ok(radius).forEach(r => {
  style.innerHTML += `.rounded-${r} { border-radius: ${radius[r]}px; }\n .hover\\:rounded-${r}:hover { border-radius: ${radius[r]}px; }\n`
})
ok(margin).forEach(m => {
  style.innerHTML += `.m-${m} { margin:${margin[m]}px; }\n .mt-${m} { margin-top:${margin[m]}px; }\n .ml-${m} { margin-left:${margin[m]}px; }\n .mr-${m} { margin-right:${margin[m]}px; }\n .mb-${m} { margin-bottom:${margin[m]}px; }\n  .hover\\:m-${m}:hover { margin: ${margin[m]}px; }\n .hover\\:mt-${m}:hover { margin-top: ${margin[m]}px; }\n .hover\\:ml-${m}:hover { margin-left: ${margin[m]}px; }\n .hover\\:mb-${m}:hover { margin-bottom: ${margin[m]}px; }\n .hover\\:mr-${m}:hover { margin-right: ${margin[m]}px; }\n`
})
ok(padding).forEach(p => {
  style.innerHTML += `.p-${p} { padding:${padding[p]}px; }\n .pt-${p} { padding-top:${padding[p]}px; }\n .pl-${p} { padding-left:${padding[p]}px; }\n .pr-${p} { padding-right:${padding[p]}px; }\n .pb-${p} { padding-bottom:${padding[p]}px; }\n  .hover\\:p-${p}:hover { padding: ${padding[p]}px; }\n .hover\\:pt-${p}:hover { padding-top: ${padding[p]}px; }\n .hover\\:pl-${p}:hover { padding-left: ${padding[p]}px; }\n .hover\\:pb-${p}:hover { padding-bottom: ${padding[p]}px; }\n .hover\\:pr-${p}:hover { padding-right: ${padding[p]}px; }\n`
})
txtAligns.forEach(align => {
  style.innerHTML += `.text-${align} { text-align: ${align}; }\n .hover\\:text-${align}:hover { text-align: ${align}; }\n`
})
ok(txtSizes).forEach(size => {
  style.innerHTML += `.text-${size} { font-size: ${txtSizes[size]}rem; }\n .hover\\:text-${size}:hover { font-size: ${txtSizes[size]}rem; }\n`
})
fontWeights.forEach(weight => {
  style.innerHTML += `.font-${weight} { font-weight: ${weight}; }\n .hover\\:font-${weight}:hover { font-weight: ${weight}; }`
})
ok(borderWidths).forEach(bw => {
  style.innerHTML += `.border-${bw} { border-width: ${bw}px; }\n .hover\\:border-${bw}:hover { border-width: ${bw}px; }\n`
})
ok(heights).forEach(h => {
  style.innerHTML += `.h-${h} { height: ${heights[h]}; }\n .hover\\:h-${h}:hover { height: ${heights[h]}; }\n`
})
ok(widths).forEach(w => {
  style.innerHTML += `.w-${w} { width: ${widths[w]}; }\n .hover\\:w-${w}:hover { width: ${widths[w]}; }\n`
})
ok(flexes).forEach(f => {
  style.innerHTML += `.${f} { ${f}: ${flexes[f]}; }\n .hover\\:${f}:hover { ${f}: ${flexes[f]}; }\n`
})
cursors.forEach(c => {
  style.innerHTML += `.cursor-${c} { cursor: ${c}; }\n .hover\\:cursor-${c}:hover { cursor: ${c}; }\n`
})
ok(rootColors).forEach(rc => {
  root.setProperty(`--${rc}`, rootColors[rc])
})
document.head.appendChild(style);