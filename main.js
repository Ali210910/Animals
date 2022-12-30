function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nP-YSj-YA/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}
a
function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);

    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'Escucho:  '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Presición:  '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    img = document.getElementById('alien1') 
    img1 = document.getElementById('alien2')
    img2 = document.getElementById('alien3')
    
    if (results[0].label == "Gato") {
      img.src = 'descarga.jpg';
      img1.src = 'descarga.jpg';
      img2.src = 'descarga.jpg';
     
    } 
    else if (results[0].label == "Perico") {
      img.src = 'perico1.jpg';
      img1.src = 'perico1.jpg';
      img2.src = 'perico1.jpg';
      
    } 
    else if (results[0].label == "Ruido de fondo") {
      img.src = 'los-10-sonidos-principales-del-perro.jpg';
      img1.src = 'los-10-sonidos-principales-del-perro.jpg';
      img2.src = 'los-10-sonidos-principales-del-perro.jpg';
      
    }
    else{
      img.src = 'aliens-01.png';
      img1.src = 'aliens-02.png';
      img2.src = 'aliens-03.png';
      
    }
  }
}
