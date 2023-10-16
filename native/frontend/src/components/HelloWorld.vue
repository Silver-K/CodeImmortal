<script lang="ts" setup>
// @ts-nocheck
import { inject } from "vue";
import { Sprite, Assets, Application, ICanvas } from "pixi.js";
import Img from "../assets/bg.jpg";
const texture = await Assets.load(Img);

const bunny = new Sprite(texture);

const app = inject("pixi") as Application<ICanvas>;
bunny.x = app.renderer.width / 2;
bunny.y = app.renderer.height / 2;

// Rotate around the center
bunny.anchor.x = 0.5;
bunny.anchor.y = 0.5;

// Add the bunny to the scene we are building
app.stage.addChild(bunny);

// Listen for frame updates
app.ticker.add(() => {
  // each frame we spin the bunny around a bit
  bunny.rotation += 0.01;
});
</script>

<template></template>

<style scoped></style>
