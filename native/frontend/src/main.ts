//@ts-nocheck
import {createApp} from 'vue';
import App from './App.vue';
import { Application } from 'pixi.js';

const pixi = new Application();

document.body.appendChild(pixi.view);
const app = createApp(App)
app.mount('#app');
app.provide('pixi', pixi);
