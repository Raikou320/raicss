document.addEventListener("DOMContentLoaded", function () {
  const lefts = document.querySelectorAll(".left");
  lefts.forEach((left) => {
    const instances = Array.from(left.classList);
    const regex = /left\[(.*?)\]/;
    instances.forEach((instance) => {
      const match = instance.match(regex);
      if (match) {
        left.style.left = match[1];
      }
    });
  });
  const right = document.querySelectorAll(".right");
  right.forEach((right) => {
    const instances = Array.from(right.classList);
    const regex = /right\[(.*?)\]/;
    instances.forEach((instance) => {
      const match = instance.match(regex);
      if (match) {
        right.style.right = match[1];
      }
    });
  });
  const tops = document.querySelectorAll(".top");
  tops.forEach((top) => {
    const instances = Array.from(top.classList);
    const regex = /top\[(.*?)\]/;
    instances.forEach((instance) => {
      const match = instance.match(regex);
      if (match) {
        top.style.top = match[1];
      }
    });
  });
  const bottoms = document.querySelectorAll(".bottom");
  bottoms.forEach((bottom) => {
    const instances = Array.from(bottom.classList);
    const regex = /bottom\[(.*?)\]/;
    instances.forEach((instance) => {
      const match = instance.match(regex);
      if (match) {
        bottom.style.bottom = match[1];
      }
    });
  });
  const boxShadows = document.querySelectorAll(".box-shadow");
  boxShadows.forEach((boxShadow) => {
    const instances = Array.from(boxShadow.classList);
    const regex = /box-shadow\[(.*?)\]/;
    instances.forEach((instance) => {
      const match = instance.match(regex);
      if (match) {
        boxShadow.style.boxShadow = match[1].replaceAll(/:/g, " ");
      }
    });
  });
  const hovers = document.querySelectorAll(".hover");
  hovers.forEach((hover) => {
    const instances = Array.from(hover.classList);
    const regex = /hover\{(.*?)\}/;
    instances.forEach((instance) => {
      const match = instance.match(regex);
      if (match) {
        const originalStyle = hover.style.cssText;
        hover.addEventListener("mouseover", () => {
          hover.style.cssText += match[1];
        });
        hover.addEventListener("mouseout", () => {
          hover.style.cssText = originalStyle;
        });
      }
    });
  });
  const transitions = document.querySelectorAll(".transition");
  transitions.forEach((transition) => {
    const instances = Array.from(transition.classList);
    const regex = /transition\[(.*?)\]/;
    instances.forEach((instance) => {
      const match = instance.match(regex);
      if (match) {
        transition.style.transition = match[1].replace(/:/g, " ");
        const transitionStyle = transition.style.transition;
        const originalStyle = transition.style.cssText;
        transition.addEventListener(
          "mouseover",
          () => (transition.style.cssText += transitionStyle)
        );
        transition.addEventListener(
          "mouseout",
          () => (transition.style.cssText = originalStyle)
        );
      }
    });
  });
});
