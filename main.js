Webcam.set({
    width: 500,
    height: 400,
    image_format: "png",
    png_quality: 90

})

Photo_Taker = document.getElementById("Camera");

Webcam.attach("#Camera");

function Capture_Image() {
    Webcam.snap(function(data_uri){
        document.getElementById("Result").innerHTML = "<img id='Result__Img' src="+data_uri+">";
        
    }) 
}

console.log("ml5version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5imweShIj/model.json", modelLoaded);
function modelLoaded() {
    console.log ("Model is Loaded");

}

function Identify_Image() {
    img = document.getElementById("Result__Img");
    classifier.classify(img, gotResult);

}

function gotResult(error, results) {
    if (error){
        console.log(error);

    }
    else {
        console.log (results);
        variable = results[0].confidence.toFixed(2);
        variable2 = variable * 100;
        document.getElementById("Object").innerHTML = "Object: " + results[0].label;
        document.getElementById("Accuracy").innerHTML = "Accuracy: " + variable2 + "%";

        
    }

}