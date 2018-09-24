const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet'
];
let colorIndex = -1;
function getNextRainbowzColor() {
  if (++colorIndex >= colors.length)
    colorIndex = 0;
  return colors[colorIndex];
}

console.log(colorIndex);
