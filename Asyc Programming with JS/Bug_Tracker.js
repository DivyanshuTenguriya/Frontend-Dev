function getBugs() {
    return new Promise((resolve, reject) => {
        const failed = Math.random() < 0.3;
        setTimeout(() => {
            if (failed) reject("API failed to fetch bugs");
            else resolve(["UI glitch", "API timeout", "Login failure"]);
        }, 1000);
    });
}
getBugs()
    .then(bugs => console.table(bugs))
    .catch(err => console.log("Error:", err));
