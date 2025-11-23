function submitOrder() {
    return new Promise((resolve, reject) => {
        const fail = Math.random() < 0.5;
        setTimeout(() => {
            fail ? reject("Order failed") : resolve("Order submitted");
        }, 500);
    });
}

async function processOrder() {
    for (let i = 1; i <= 3; i++) {
        try {
            await submitOrder();
            console.log(`Attempt ${i}: Success`);
            return;
        } catch (err) {
            console.log(`Attempt ${i}: Failed`);
        }
    }
    throw "Order could not be processed";
}

(async () => {
    try {
        await processOrder();
    } catch (err) {
        console.log(err);
    }
})();
