$(document).ready(function(){
  console.log('jQuery sourced!');
  var x;
  var y;
  var type;
  var objectToSend = {};

  //button event listeners
  $('#addButton').on("click", function(){
    console.log('Add button clicked');
    type = 'add';
    objectToSendCreator(type);
    console.log(objectToSend);
  });

  $('#subtractButton').on("click", function(){
    console.log('Subtract button clicked');
    type = 'subtract';
    objectToSendCreator(type);
    console.log(objectToSend);
  });

  $('#multiplyButton').on("click", function(){
    console.log('Multiply button clicked');
    type = 'multiply';
    objectToSendCreator(type);
    console.log(objectToSend);
  });

  $('#divideButton').on("click", function(){
    console.log('Divide button clicked');
    type = 'divide';
    objectToSendCreator(type);
    console.log(objectToSend);
  });

  $('#computeButton').on("click", function(){
    console.log('Compute button clicked');
    //ajax post to server request
    $.ajax({
      type: 'POST',
      url: '/calculate/compute',
      data: objectToSend,
      success: function ( response ) {
        console.log('Back from server with: ', response);
      }
    });
      $('#value1').val('');
      $('#value2').val('');
    console.log("sending from client.js: ", objectToSend);
  });

  $('#clearButton').on("click", function(){
    console.log('Clear button clicked');
    $('#value1').val('');
    $('#value2').val('');
    console.log(objectToSend);
  });

  function objectToSendCreator(type){
    x = $('#value1').val();
    y = $('#value2').val();
    objectToSend.x = x;
    objectToSend.y = y;
    objectToSend.type = type;
  }


}); //end document.ready()
