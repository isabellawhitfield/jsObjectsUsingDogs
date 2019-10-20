document.getElementById('dog1').addEventListener('click', function(){


var dog1 = {name: "John", age: 7, height: 70, photo: "john.jpeg"};

$('#result2').hide();
$('#result1').show();


document.getElementById('result1').innerHTML = "<br><br>Name of the dog is " + dog1.name;

document.getElementById('result1').innerHTML += '<br><img class="img-thumbnail" src="'+ dog1.photo + '"alt=John the dog"/>'

document.getElementById('result1').innerHTML += "<br>The height of the dog is " + dog1.height + " cm";

document.getElementById('result1').innerHTML += "<br>The age of the dog is " + dog1.age + " years";




});

document.getElementById('dog2').addEventListener('click', function(){

var dog2 = {name: "Sam", age: 10, height: 70, breed: "labrador", male: "true", photo: "Sam.jpeg"};

$('#result1').hide();
$('#result2').show();

document.getElementById('result2').innerHTML = "<br><br>Name of the dog is " + dog2.name;

document.getElementById('result2').innerHTML += '<br><img class="img-thumbnail" src="'+ dog2.photo + '"alt=Sam the dog"/>'

document.getElementById('result2').innerHTML += "<br>The height of the dog is " + dog2.height + " cm";

document.getElementById('result2').innerHTML += "<br>The age of the dog is " + dog2.age + " years";

document.getElementById('result2').innerHTML += "<br>The breed of the dog is " + dog2.breed;

if (dog2.male === "true"){

document.getElementById('result2').innerHTML += "<br>The sex of the dog is Male";
} else {
  document.getElementById('result2').innerHTML += "<br>The sex of the dog is Female";
}
});

document.getElementById('change').addEventListener('click'), function(){
  var changedName = document.getElementById('dogName').value;

  var newObject = dog1();
}
