
// - printDate() : prints the current date
// - printMonth() : prints the current month
// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Radon, W3D3, the topic for today is Nodejs module system’

// 	Call all these functions in route.js inside the test-me route handler


const today = new Date();

 let date = function () {
    const date = today.getDate();
    console.log("day - " + date);
}

 let month = function () {
    const month = today.getMonth();
    console.log("Month - " + (month + 1));
}


let batchInfo = function () {
    console.log("Batch - Plutonium, Third Week Fifth Day, the topic for today is Nodejs module system.")
}

module.exports.printDate = date;
module.exports.printMonth = month;
module.exports.getBachInfo = batchInfo;



