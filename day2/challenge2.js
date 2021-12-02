const fs = require('fs');

fs.readFile('./input.txt', 'utf-8', (err, data) => {
    if (err){
        console.error(err);
        return;
    }
    console.log(plotRoute(data));
})

let depth = 0;
let horizontalPosition = 0;
let aim = 0;

const plotRoute = (data) => {
    let directions = data.split(/\r?\n/);

    directions.forEach(direction => {
        let side = (direction.split(" ")[0]);
        let amount = parseInt(direction.split(" ")[1]);

        switch (side) {
            case "forward":
                horizontalPosition += amount;
                depth += (aim * amount);
                break;

            case "up":
                aim -= amount;
                break;

            case "down":
                aim += amount;
                break;
        }
    });

    return (depth * horizontalPosition);
}