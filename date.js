
exports.getDate = function getDate(){
    var today = new Date();
    
    var options = {
        weekday: "Long",
        day: "Numeric",
        month: "Long" 
    };

    return day = today.toDateString("en-US", options);

    

}

exports.getDay = function getDay(){
    var today = new Date();
    
    var options = {
        weekday: "short" 
    };

    return day = today.toDateString("en-US", options);

    

}

exports.getWeek = function getWeek() {
    var today = new Date();

    var options = {
        shortDate: "short"

    }

    return day = today.toLocaleDateString("en-US", options);

}

console.log(module.exports);


console.log(module.exports);