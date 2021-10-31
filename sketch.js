let trainingSet = [[],[],[]];
let shapeClassifier;

function preload()
{
  for(let i = 0; i < 100; i++)
  {
    let index = nf(i + 1, 4, 0);
    trainingSet[0][i] = loadImage(`data/circle${index}.png`);
    trainingSet[1][i] = loadImage(`data/square${index}.png`);
    trainingSet[2][i] = loadImage(`data/triangle${index}.png`);
  }
}

function setup()
{
  createCanvas(400, 400);
  //background(0);
  shapeClassifier = setShapeClassifier_NN(64, 64);
  //Add data to the neural network
  for(let i = 0; i < trainingSet[0].length; i++)
  {
    let input = {image: trainingSet[0][i]};
    let target = {label: "circle"};
    shapeClassifier.addData(input, target);
    input = {image: trainingSet[1][i]};
    target = {label: "square"};
    shapeClassifier.addData(input, target);
    input = {image: trainingSet[2][i]};
    target = {label: "triangle"};
    shapeClassifier.addData(input, target);
  }
  shapeClassifier.normalizeData();
  shapeClassifier.train({epochs: 100}, trainMessage =>
  {
    console.log("training complete.");
    shapeClassifier.save();
  });

}

function draw() {
  
}