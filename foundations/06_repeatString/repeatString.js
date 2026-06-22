const repeatString = function(word, times) {

// 1. Create your "holding container" variable here
let finalResult = "";

// 2. Write your loop here to repeat the action
for (let i = 0; i < times; i++){
finalResult += word;
}

// 3. Return your final result here
return finalResult;
};

// Do not edit below this line
module.exports = repeatString;
