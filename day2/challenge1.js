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

const plotRoute = (data) => {
    let directions = data.split(/\r?\n/);

    directions.forEach(direction => {
        let side = (direction.split(" ")[0]);
        let amount = parseInt(direction.split(" ")[1]);

        switch (side) {
            case "forward":
                horizontalPosition += amount;
                break;

            case "up":
                depth -= amount;
                break;

            case "down":
                depth += amount;
                break;
        }
    });

    return (depth * horizontalPosition);
}