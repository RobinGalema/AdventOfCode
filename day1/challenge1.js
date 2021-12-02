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
    
    let lastStep = steps[0];

    steps.forEach(step => {
        if (step > lastStep) depth++;
        lastStep = step;
    });

    console.log("Depth:", depth, lastStep);
}