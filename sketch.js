  // variables 
let cars = [];     
let trafficLight ='green';
let timmer = 0;

function setup() {
  createCanvas(800, 390); // invirenment or city.
  
  // define cars, car's location and car's speed.
  for(let i=0; i<6 ; i++){
    cars.push({
      x: random(-350, -100),
      y: 280,
      speed: random(1.5 , 3)
    })
  }
}
  
function draw() {
  background(180,220,250); 
  drawRoad();      // call method.
  trafficLightStatus();   // call method.
  
    // common for moving and drawing each car.
  for(let i=0; i<cars.length ;i++){
    moveCar(cars[i]);
    drawCar(cars[i]);
  }
}
  
function drawRoad(){    //drawing the road.
  fill(50);
  rect(0,270, width, 120);   
  stroke(255);
  strokeWeight(4);
  for(let i = 0 ; i < width ; i += 50){
    line(i, 320, i + 30 ,320)
  }
  noStroke();
}
function trafficLightStatus(){  // traffic light status.
  timmer++;
  if(timmer > 240){
    trafficLight = trafficLight === 'green' ? 'red' : 'green';
    timmer = 0;
  }
  fill(40);
  rect(595 ,140, 50,120, 5); // traffic light location.
  
  if(trafficLight === 'green'){
    fill(0, 200, 0);
    ellipse(620, 180, 30);
  }
  else{
    fill(200,0,0);
    ellipse(620, 220, 30);
  }
}
    // moving car if light is green.
function moveCar(car){
  if(trafficLight=== 'red' && car.x > 530 && car.x < 580){
      // if light is red stop here.
  }
  else{
    car.x += car.speed;
  }
  if(car.x > width+50){
    car.x= -100;
  }
}  
  // drawing cars.
function drawCar(car){
  fill(220,220,220);    // car's color.
  rect(car.x, car.y, 50,30,5);  // cars.
  
  fill(0);   
  ellipse(car.x+10, car.y+30, 10); // back tires.
  ellipse(car.x+40, car.y+30,12);  // rear tires.
}
