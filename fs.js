function bigText(x) {
    document.getElementById(x).innerHTML = "hello";
}

function normalImg(x) {
    document.getElementById(x).style.fontSize = 30px;
}

function initMap() {
        var uluru = {lat: 40.7996, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }



function myFunction(){
	
}
function myFunction2(){
	if(tog){
		document.getElementById("demo").innerHTML = "";	
	}
	else{
		document.getElementById("demo").innerHTML = " ";
	}
	tog = !tog;
}
function myFunction3(){
	if(tog3){
		document.getElementById("demo").innerHTML = "email: chloeratte88@gmail.com";	
	}
	else{
		document.getElementById("demo").innerHTML = " ";
	}
	tog3 = !tog3;
}