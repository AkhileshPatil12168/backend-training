// - trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// - changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// - changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]

// Call all these functions in route.js inside the test-me route handler

let trim=function(){
    const text = "       Akhilesh Patil       ";
    console.log(text.trim())
}


let low=function(){
    const text = "Akhilesh Patil";
    console.log(text.toLowerCase());
}

let high=function(){
    const text = "Akhilesh Patil";
    console.log(text.toUpperCase());
}

module.exports.printTrim = trim;
module.exports.printLow = low;
module.exports.printHigh = high;




