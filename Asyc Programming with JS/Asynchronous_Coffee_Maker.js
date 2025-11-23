const wait = () => new Promise(resolve => 
    setTimeout(resolve, 1000 + Math.random() * 1000)
);
function boilWater() {
    return wait().then(() => {
        if (Math.random() < 0.2) throw "Water didn't boil!";
        console.log("1. Water boiled");
    });
}
function brewCoffee() {
    return wait().then(() => {
        if (Math.random() < 0.2) throw "Coffee machine error!";
        console.log("2. Coffee brewed");
    });
}
function pourCoffee() {
    return wait().then(() => {
        if (Math.random() < 0.2) throw "Cup fell down!";
        console.log("3. Coffee poured into cup");
    });
}
boilWater()
    .then(brewCoffee)
    .then(pourCoffee)
    .then(() => {
        console.log("Coffee ready for the team!");
    })
    .catch(err => {
        console.log("❌ Process failed:", err);
    });
