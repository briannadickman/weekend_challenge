var express = require('express');
var router = express.Router();

var answerArray = [];

router.post('/compute', function( req, res ){
  console.log((req.body).type);
  console.log("in calculate.js with: ", req.body);
  answerArray.push( req.body );
  res.send(200);
});

console.log(answerArray);
console.log(req.body);

function routeOperator(answer){
  console.log(answer);
  switch(answer.type) {
    case add:
      addObject();
      break;
    case subtract:
      subtractObject();
      break;
    case multiply:
      multiplyObject();
      break;
    case divide:
      divideObject();
      break;
    default:
      console.log("Cannot return value");
  }
}

function addObject(x, y){
  answer = x + y;
  return answer;
}

function subtractObject(x, y){
  answer = x - y;
  return answer;
}

function multiplyObject(x, y){
  answer = x * y;
  return answer;
}

function divideObject(x, y){
  answer = x / y;
  return answer;
}

console.log(addObject(3, 5));
console.log(subtractObject(3, 5));
console.log(multiplyObject(3, 5));
console.log(divideObject(3, 5));

module.exports = router;
