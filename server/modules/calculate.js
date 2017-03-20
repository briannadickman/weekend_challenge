var express = require('express');
var router = express.Router();

var answerArray = [];
var type = '';
var returnValue = '';
var x;
var y;

router.post('/compute', function( req, res ){
    answerArray = [];
    var valueInFunc = convertString(req.body);
    valueInFunc = routeObject(type);
    answerArray.push(returnValue);
    // console.log(answerArray);
    // res.send(answerArray);
    res.sendStatus(200);
  });

router.get('/value', function (req, res){
  console.log("grabbing from calculate");
  res.send(answerArray);
});

function convertString(data) {
  console.log(data);
  x = (data).x;
  y = (data).y;
  x = parseInt(x);
  y = parseInt(y);
  type = (data).type;
  console.log("X value is: ", x);
  console.log("Y value is: ", y);
  console.log("Type value is: ", type);
}

function routeObject(type){
    if(type == 'add'){
      returnValue = addObject(x, y);
      console.log(returnValue);
    } else if (type == 'subtract'){
      returnValue = subtractObject(x, y);
      console.log(returnValue);
    } else if (type == 'multiply'){
      returnValue = multiplyObject(x, y);
      console.log(returnValue);
    } else if (type == 'divide'){
      returnValue = divideObject(x, y);
      console.log(returnValue);
    } else {
      return "error";
      }
    }

// mathematic functions

function addObject(x, y){
  parseInt(x);
  parseInt(y);
  returnValue = x + y;
  return returnValue;
}

function subtractObject(x, y){
  returnValue =  x - y;
  return returnValue;
}

function multiplyObject(x, y){
  returnValue =  x * y;
  return returnValue;
}

function divideObject(x, y){
  returnValue =  x / y;
  return returnValue;
}

module.exports = router;
