$(document).ready(function(){
  console.log('jQuery sourced!');
  var x;
  var y;
  var type;
  var objectToSend = {};

  //button event listeners
  $('#addButton').on("click", function(){
    type = 'add';
    objectToSendCreator(type);
    getValue();
    console.log(objectToSend);
  });

  $('#subtractButton').on("click", function(){
    type = 'subtract';
    objectToSendCreator(type);
    getValue();
    console.log(objectToSend);
  });

  $('#multiplyButton').on("click", function(){
    type = 'multiply';
    objectToSendCreator(type);
    getValue();
    console.log(objectToSend);
  });

  $('#divideButton').on("click", function(){
    type = 'divide';
    objectToSendCreator(type);
    getValue();
    console.log(objectToSend);
  });

  $('#clearButton').on("click", function(){
    // $('#value1').val('');
    // $('#value2').val('');
    $('.output').text('--');
  });

  function objectToSendCreator(type){
    x = $('#value1').val();
    y = $('#value2').val();
    objectToSend.x = x;
    objectToSend.y = y;
    objectToSend.type = type;
  }

  function returnValue(){
    console.log("displaying value from calculate.js");
          $.ajax({
            type: 'GET',
            url: '/calculate/value',
            success: function (response){
              console.log('Back with return value: ', response);
              $(".output").text(response);
            }
          });
      $('.output').text('');
    }

    function getValue() {
     $.ajax({
          type: 'POST',
          url: '/calculate/compute',
          data: objectToSend,
          success: function (response) {
            if(response === "OK"){
            console.log('Back from server with: ', response);
            }
          returnValue();
          }
        });
          $('#value1').val('');
          $('#value2').val('');
        console.log("sending from client.js: ", objectToSend);
      }

}); //end document.ready()
