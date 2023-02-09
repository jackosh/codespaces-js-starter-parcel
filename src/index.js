// import _ from 'lodash';

let svgns = "http://www.w3.org/2000/svg";
let container = document.getElementById('game');

function drawCircle(x, y, radius) {
    let circle = document.createElementNS(svgns, 'circle');
    circle.setAttributeNS(null, 'cx', x);
    circle.setAttributeNS(null, 'cy', y);
    circle.setAttributeNS(null, 'r', radius);
    circle.setAttributeNS(null, 'style', 'fill: none; stroke: blue; stroke-width: 2px;' );
    container.appendChild(circle);
}
console.log(container);
drawCircle(10, 10, 100);