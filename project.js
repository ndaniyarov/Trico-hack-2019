var button;
function setup() {
    createCanvas(400, 100);
    textSize(20);
    textAlign(LEFT);
    text('Tri-co Event Board', 50, 30);
    button = createButton('Add event');
    button.position(300, 50);
    button.mousePressed(changeBG);
    someCheckedEvent();
    events();
    /*
  bmcCheckbox = createCheckbox('Bryn Mawr', false);
  bmcCheckbox.changed(myCheckedEvent);
  hcCheckbox = createCheckbox('Haverford', false);
  hcCheckbox.changed(myCheckedEvent);
  swatCheckbox = createCheckbox('Swarthmore', false);
  swatCheckbox.changed(myCheckedEvent);*/
}
function events(){
    textSize(20);
    textAlign(LEFT);
    text('Party 1', 150, 130);
}
function myCheckedEvent() {
    if (this.checked()) {
	console.log('Checking!');
    } else {
	console.log('Unchecking!');
    }
}
function someCheckedEvent(){
    bmcCheckbox = createCheckbox('Bryn Mawr', false);
    bmcCheckbox.changed(myCheckedEvent);
    hcCheckbox = createCheckbox('Haverford', false);
    hcCheckbox.changed(myCheckedEvent);
    swatCheckbox = createCheckbox('Swarthmore', false);
    swatCheckbox.changed(myCheckedEvent);
}

function draw() {
    //background(220);
    //rect(30, 20, 155, 20);
    //rect(30, 40, 155, 20);
    //rect(30, 60, 155, 20);
}
function changeBG() {
    var val = random(255);
    background(val);
}