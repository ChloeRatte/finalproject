function bigText(x) {
    document.getElementById(x).innerHTML = "hello";
}

function normalText(x) {
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


//explain to Kylie Later

function myFunction1(){
	
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

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function getData() {
  $.ajax({
    url: "https://api.edamam.com/search",
    data: {
      q: "breakfast",
      app_id:"0af4c33f",
      app_key:"95be53f1e879fb340befc460bf37611b",
      from: 1,
      to: 5,
    },
    success: function(data) {
      console.log(data);
      console.log("THE RECIPE")
      console.log(data.hits[0].recipe.ingredients)
      const stuff = data.hits[0].recipe.ingredients
      for (var i = 0; i < stuff.length; i++){
        console.log(stuff[i])
      }
      alert("success");
    },
    error: function(err) {
      console.log(err);
      alert("error");
    }
  })  
};