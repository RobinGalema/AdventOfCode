const fs = require('fs');

fs.readFile('./input.txt', 'utf-8', (err, data) => {
    if (err){
        console.error(err);
        return;
    }
    depthMeasurement(data);
})

const depthMeasurement = (data) =>{
    let steps = data.split(/\r?\n/);
    let depth = 0;
    
    let lastSum = parseInt(steps[0]) + parseInt(steps[1]) + parseInt(steps[2]);
    console.log(lastSum);

    for (let i = 0; i < steps.length; i++) {
        let currentSum = parseInt(steps[i]) + parseInt(steps[i + 1]) + parseInt(steps[i + 2]);
        
        if (currentSum > lastSum) depth++;
        lastSum = currentSum;
    }

    console.log("Depth:", depth);
}