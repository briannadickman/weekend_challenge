## TO DO:


### Client Side:
[x ] create 2 inputs on html (x: 1, y: 2)
[x ] create buttons for operator on DOM (type: +, -, x, /)
  [x ] capture value of operator clicked
[x ] create compute button
[x ] create clear button
[x ] add output div
[x ] add event listeners to buttons
  [x ] operator buttons (4 total)
  [x ] clear button
  [x ] compute button
[x ] bundle value and operator as an object
[x ] send object to server
[ ] receive output from server
[ ] display output on DOM

#### HARD MODE:
[ ] create buttons for digits 0-9
[ ] user inputs one number -> chooses operator -> inputs other number
[ ] = button sends object to server
#### PRO MODE:
~~ [ ] add 3 second delay from when sent to displayed on DOM
[ ] print 'computing' on DOM when = button is clicked
[ ] replace 'computing' with output from server

### Server Side:
[x ] set up server
[x ] receive object from client-side
[ ] convert values from strings
[ ] route to correct function in receiving using switch(?)
[x ] create function to handle math
  [x ] addition function - called when + clicked
  [x ] subtraction function -  called when - clicked
  [x ] multiplication function - called when * clicked
  [x ] division function - called when / clicked
[ ] route result back to client-side

#### HARD MODE:

#### PRO MODE:
[ ] delay send by 3 seconds
