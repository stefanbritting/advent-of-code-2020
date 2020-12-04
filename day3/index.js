/*
Starting at the top-left corner of your map and following a slope of right 3 and down 1, how many trees would you encounter?
*/
const input = require("./input");

let treemap = input
  .split("\n")
  .map(x =>x.split(""))
let mover_right     = 3
let mover_down      = 1

function slope(mover_right, mover_down) {

    let move_right    = mover_right
    let move_down     = mover_down
    let tree_counter  = 0

    painted_map = JSON.parse(JSON.stringify(treemap))

    while(move_down <= treemap.length - 1) {

    if (treemap[move_down][move_right] == "#") {
        tree_counter ++;
        painted_map[move_down][move_right] = "X"
    } else {
        painted_map[move_down][move_right] = "O"
    }

    if (treemap[0].length -1 < move_right + mover_right) {
        move_right = move_right - treemap[0].length 
    } 
    move_right = move_right + mover_right
    move_down = move_down + mover_down
    }
    return tree_counter
}

total = slope(1,1) * slope(3,1) * slope(5,1)*slope(7,1)*slope(1,2)
console.log(total)


