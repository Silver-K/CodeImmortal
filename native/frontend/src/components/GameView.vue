<script lang="ts" setup>
import type { Point, Direction } from "@types";
import { ref } from "vue";
import { Sprite, Assets, Rectangle } from "pixi.js";
import type { Texture } from "pixi.js";
import { useTicker } from "@composables/useTicker";
import { usePixi } from "@composables/usePixi";
import Img from "../assets/walk.jpg";

const pixi = usePixi({
  resizeTo: window,
  background: "#040205",
});
const app = pixi.ctx;
const ticker = useTicker(pixi);
const tickCount = ticker.tickCount;
const mainRef = ref();
pixi.mount(mainRef);
init();

const spriteRec = [
  {
    x: 0,
    y: 0,
    width: 237,
    height: 237,
  },
  {
    x: 237,
    y: 0,
    width: 237,
    height: 237,
  },
  {
    x: 0,
    y: 237,
    width: 237,
    height: 237,
  },
  {
    x: 237,
    y: 237,
    width: 237,
    height: 237,
  },
];
const recs = spriteRec.map((r) => new Rectangle(r.x, r.y, r.width, r.height));
const MoveDirection: {
  left: Point;
  right: Point;
  up: Point;
  down: Point;
  stay: Point;
} = {
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  stay: { x: 0, y: 0 },
};
const routes: { direction: Direction; tick: number }[] = [
  {
    direction: "right",
    tick: 2,
  },
  {
    direction: "stay",
    tick: 1,
  },
];
console.log(window.innerWidth);
function getWalkFrames(texture: Texture) {
  return recs.map((r) => {
    const newText = texture.clone();
    newText.frame = r;
    return newText;
  });
}

async function init() {
  // Add the bunny to the scene we are building
  const texture = await Assets.load(Img);
  const walks = getWalkFrames(texture);
  let initIndex = 0;
  const frame = new Sprite(walks[initIndex]);
  frame.x = 0;
  frame.y = app.renderer.height / 2;

  // Rotate around the center
  frame.anchor.x = 0.5;
  frame.anchor.y = 0.5;
  app.stage.addChild(frame);
  // Listen for frame updates
  let behavior = 0;
  ticker.add({
    id: "walk",
    callback: () => {
      if (tickCount.value % 10 === 0) {
        behavior = (behavior + 1) % walks.length;
        frame.texture = walks[behavior];
      }
    },
  });
  let goRoute = 0;
  let currentTick = 0;
  ticker.add({
    id: "go",
    callback: () => {
      frame.x += MoveDirection[routes[goRoute].direction].x;
      currentTick -= 1;
      if (currentTick === 0) {
        goRoute = (goRoute + 1) % routes.length;
        currentTick = routes[goRoute].tick;
      }
      if (frame.x >= window.innerWidth) {
        ticker.resetTick();
        frame.x = 0;
      }
    },
  });
}
</script>

<template>
  <div ref="mainRef" id="main-screen"></div>
</template>

<style scoped></style>
