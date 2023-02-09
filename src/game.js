import Point from "classes/Point";
  
class WorldObject {
    constructor(coord = {x: 0, y: 0}, type = "#") {
      this.coord = new Point(coord.x, coord.y);
      this.type = type;
    }
}
  
class WorldSquare {
    constructor(topLeftPoint, bottomRightPoint) {
      this.topLeftPoint = topLeftPoint;
      this.bottomRightPoint = bottomRightPoint;
    }
}
  
class World {
    constructor(dx = 6, dy = 6) {
      this.dx = dx;
      this.dy = dy
      this.objects = [];
      this.map = [];
      this.constructMap(dx, dy);
    }
    printToConsole(dx, dy) {
      let consoleOutput = "";
      for (let y = 0; y < dy; y++) {
        for (let x = 0; x < dx; x++) {
          consoleOutput += this.map[x][y]
        }
        consoleOutput += "\n";
      }
      console.log(consoleOutput);
      // console.log(this.map);      
    }
    
    printToMap(x, y, char) {
      this.map[x][y] = char;
    }
    
    constructMap(dx, dy) {
      this.map = [];
      
      for (let y = 0; y < dy; y++) {
        let row = [];
        for (let x = 0; x < dx; x++) {
          let sign = ".";
          // empty
          if (y == 0 && x == 0) {
            sign = "0";
          }
          row.push(sign)
          // console.log("row", row);
        }
        this.map.push(row);
      }
      // console.log("map", this.map)
    }
  }
  
  const world = new World();
  const player = new WorldObject({x: 0, y: 0});
  world.objects.push(player);
  world.printToMap(3, 1, "x");
  console.log('output start')
  world.printToConsole(6, 6);
  console.table(world.objects);
  // worldLocationToConsole(world, {topLeftPoint: {x:-10, y: -10}}, {bootomRightPoint: {x: 10, y: 10}});
  //console.log(world)