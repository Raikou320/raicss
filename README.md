# Rai CSS is an simple CSS framework

## Simple examples
## Does `class-name class-name[data]` for the classes:
  - ### left, right, top, bottom, width, height
  - ### the data is like an number followed by: %, px, em, rem

```html
<body class="text-center bg-pink color-white">
  Text colored in white and aligned to the horizontal center
  <div class="relative left left[0] color-dark-red">
    Text center to the left and colored in darkred
  </div>
  <div class="bg-light-red">Div with a light red background color</div>
  <div class="flex flex-center">Text aligned to the center of the div</div>
  <div class="bg-pink color-red w w[100px] h h[50px]">
    Text in white with a pink bg
  </div>
</body>
```
