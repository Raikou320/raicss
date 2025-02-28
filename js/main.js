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
const style = document.createElement("style");
style.innerHTML += `* { border: none; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif; }\n`
colors.forEach(color => {
  intensities.forEach((intensity) => {
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
document.head.appendChild(style);
