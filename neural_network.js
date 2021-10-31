function setShapeClassifier_NN(resX, resW)
{
    let options = {
        inputs : [resX, resW, 4],
        task: 'imageClassification',
        debug: true,
    };
    let NN = ml5.neuralNetwork(options);
    return NN;
}