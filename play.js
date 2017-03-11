function makeCanvas(){
  PI_TWO = Math.PI * 2;
  //First canvas - text
  //Get object
  var canvas1 = document.getElementById('canvas1');
  var context1 = canvas1.getContext('2d');

  //Set params
  context1.font = '35pt Arial';
  context1.fillStyle = 'DeepSkyBlue';
  context1.strokeStyle = 'black';

  //Action
  context1.fillText('I love HTML5',45,150);
  context1.strokeText('I love HTML5',45,150);

  //Second canvas - squares
  //Get object
  var canvas1 = document.getElementById('canvas2');
  var context2 = canvas2.getContext('2d');

  //Set params
  context2.fillStyle = '#ff0000';
  context2.strokeStyle = '#000';
  context2.lineWidth = '10';

  //Action
  context2.fillRect(45,5,135,135);
  context2.strokeRect(45,5,135,135);

  context2.fillStyle = '#666';
  context2.fillRect(200,0,135,135);

  context2.fillStyle = '#666';
  context2.fillRect(45,150,135,135);

  context2.fillStyle = '#ff0000';
  context2.strokeStyle = '#000';
  context2.lineWidth = '10';

  context2.fillRect(200,150,135,135);
  context2.strokeRect(200,150,135,135);

  //Third canvas
  var canvas3 = document.getElementById('canvas3');
  var context3 = canvas3.getContext('2d');

  context3.strokeStyle = '#666';
  context3.fillStyle = '#ff0000';
  context3.lineWidth = 5;

  context3.beginPath();
  context3.moveTo(100,100);
  context3.lineTo(150,200);
  context3.lineTo(200,200);
  context3.lineTo(200,290);
  context3.lineTo(290,290);
  context3.lineTo(290,100);
  context3.lineTo(100,100);
  context3.stroke();
  context3.fill();
  context3.closePath();

  //Fourth canvas
  var canvas4 = document.getElementById('canvas4');
  var context4 = canvas4.getContext('2d');

  context4.fillStyle = "blue";

  context4.beginPath();
  context4.arc(200,30,25,0,PI_TWO);
  context4.fill();
  context4.closePath();

  context4.fillStyle = 'red';
  context4.beginPath();
  context4.arc(200,100,45,0,PI_TWO);
  context4.fill();
  context4.closePath();

  context4.fillStyle = 'black';
  context4.beginPath();
  context4.arc(200,220,75,0,PI_TWO);
  context4.fill();
  context4.closePath();

  //Fifth canvas
  var canvas5 = document.getElementById('canvas5');
  var context5 = canvas5.getContext('2d');

  var posX = 0;
  var posY = 0;
  setInterval(function(){
    posX++;
    posY++;
    context5.fillStyle = 'black';
    context5.fillRect(0,0,canvas5.width,canvas5.height);
    context5.fill();

    context5.fillStyle = 'white';
    context5.beginPath();
    context5.arc(posX,120,55,0,PI_TWO);
    context5.fill();
    context5.closePath();

    context5.fillStyle = 'red';
    context5.beginPath();
    context5.arc(150,posY,55,0,PI_TWO);
    context5.fill();
    context5.closePath();

    context5.fillStyle = 'blue';
    context5.beginPath();
    context5.arc(posX,posY,55,0,PI_TWO);
    context5.fill();
    context5.closePath();

  }, 30);
}
