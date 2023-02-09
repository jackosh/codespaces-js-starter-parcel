console.info('<--- index.js started')

import { GameToSvg } from './classes/GameToSvg';
import * as gp from './classes/World';


const world = new gp.World();
const svgContainer = new GameToSvg('game');
world.addObject(gp.Point.create(70, 10));
world.addObject(gp.Point.create(60, 400));
world.addObject(gp.Point.create(30, 10));
// const player = new WorldObject({x: 0, y: 0});
// const coin = new WorldObject({x: 20, y: 60});
// world.objects.push(player);
// world.objects.push(coin);
// world.printToMap(3, 1, "x");
svgContainer.drawObjectsToCanvas(world.objects);

// world.printToConsole(6, 6);
console.table(world.objects);

