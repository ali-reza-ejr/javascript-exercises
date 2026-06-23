const repeatString = function(word, number) {

let finalResult = "";

if (number < 0) return "ERROR";

for (let i = 0; i < number; i++){
finalResult += word;
}

return finalResult;
};

// Do not edit below this line
module.exports = repeatString;
