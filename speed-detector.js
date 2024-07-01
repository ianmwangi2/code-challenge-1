function calculateDemeritPoints () {
    let speed = 80;

    if (speed < 70) {
        console.log("OK");
    } else {
        let demeritPoints = Math.floor((speed -70) / 5);
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            return demeritPoints
        }
    }
}

console.log(calculateDemeritPoints());