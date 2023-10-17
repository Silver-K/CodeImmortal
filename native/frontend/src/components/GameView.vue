<script lang="ts" setup>
import { ref } from "vue";
import { Sprite, Assets } from "pixi.js";
import { useTicker } from "@composables/useTicker";
import { usePixi } from "@composables/usePixi";
import Img from "../assets/bg.jpg";

const pixi = usePixi({});
const app = pixi.ctx;
const ticker = useTicker(pixi);
const mainRef = ref();
pixi.mount(mainRef);
init();

async function init() {
  // Add the bunny to the scene we are building
  const texture = await Assets.load(Img);
  const bunny = new Sprite(texture);
  bunny.x = app.renderer.width / 2;
  bunny.y = app.renderer.height / 2;

  // Rotate around the center
  bunny.anchor.x = 0.5;
  bunny.anchor.y = 0.5;
  app.stage.addChild(bunny);
  // Listen for frame updates
  ticker.add({
    id: "rotate",
    callback: () => {
      // each frame we spin the bunny around a bit
      bunny.rotation += 0.01;
    },
  });
}
</script>

<template>
  <div ref="mainRef" id="main-screen"></div>
</template>

<style scoped></style>
