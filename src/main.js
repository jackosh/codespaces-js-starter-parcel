console.info('<--- index.js started')

import { GameToSvg } from './classes/GameToSvg';
import * as gp from './classes/World';

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const world = new gp.World();
const svgContainer = new GameToSvg('game');

world.addObject(gp.Point.create(70, 10));
world.addObject(gp.Point.create(60, 400));
world.addObject(gp.Point.create(30, 10));


svgContainer.drawObjectsToCanvas(world.objects);

// world.printToConsole(6, 6);
// console.table(world.objects);

