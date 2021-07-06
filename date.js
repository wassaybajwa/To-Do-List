
module.exports = getDate;

function getDate(){
    var today = new Date();
    
    var options = {
        weekday: "Long",
        day: "Numeric",
        month: "Long" 
    };

    var day = today.toDateString("en-US", options);

    return day;

}