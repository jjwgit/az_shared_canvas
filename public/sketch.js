let socket;

function setup() {
    createCanvas(640, 640);
    background(51);

    socket = io.connect("https://shared-canvas-12047.herokuapp.com/");
    socket.on('mouse', newDrawing);
}

function newDrawing(data) {
    noStroke();
    fill(255, 0, 100);
    ellipse(data.x, data.y, 24, 24);
}

function mouseDragged() {
    console.log(`${mouseX} , ${mouseY}`);
    let data = {
        x: mouseX,
        y: mouseY
    };

    socket.emit('mouse', data);

    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 24, 24);
}

function draw() {

}