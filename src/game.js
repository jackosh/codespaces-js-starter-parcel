import Point from "classes/Point";

  
  const world = new World();
  const player = new WorldObject({x: 0, y: 0});
  world.objects.push(player);
  world.printToMap(3, 1, "x");
  console.log('output start')
  world.printToConsole(6, 6);
  console.table(world.objects);
  // worldLocationToConsole(world, {topLeftPoint: {x:-10, y: -10}}, {bootomRightPoint: {x: 10, y: 10}});
  //console.log(world)