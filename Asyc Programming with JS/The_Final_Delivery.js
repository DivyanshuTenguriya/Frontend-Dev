function delay(message) {
    return new Promise((resolve, reject) => {
        const time = 1000 + Math.random() * 1000;
        const fail = Math.random() < 0.3;
        setTimeout(() => {
            fail ? reject(message + " FAILED") : resolve(message);
        }, time);
    });
}
function takeOrder() {
    return delay("Step 1: Order taken");
}

function prepare() {
    return delay("Step 2: Food prepared");
}

function pack() {
    return delay("Step 3: Package ready");
}

function dispatch() {
    return delay("Step 4: Out for delivery");
}

function deliver() {
    return delay("Delivery completed!");
}
async function runPipeline() {
    console.log("Start Pipeline");

    try {
        console.log(await takeOrder());
        console.log(await prepare());
        console.log(await pack());
        console.log(await dispatch());
        console.log(await deliver());

        console.log("Pipeline finished successfully!");

    } catch (error) {
        console.log("Pipeline failed!");
        console.log("Reason:", error);
    }
}
runPipeline();