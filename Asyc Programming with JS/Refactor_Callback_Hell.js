function delay(msg) {
    return new Promise(resolve =>
        setTimeout(() => {
            console.log(msg);
            resolve();
        }, 1000)
    );
}

async function pipeline() {
    await delay("Design completed");
    await delay("Build completed");
    await delay("Testing completed");
    await delay("Deploy completed");
    await delay("Celebrate!");
    console.log("Pipeline finished!");
}

pipeline();
