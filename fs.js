

function getData() {
  var diet = document.getElementById("diet").value;

  var peopleValue = document.getElementById("numPeople").value;

  var mealType = document.getElementById("meal").value;

  $.ajax({
    url: "https://api.edamam.com/search",
    data: {
      q: mealType,
      app_id:"0af4c33f",
      app_key:"95be53f1e879fb340befc460bf37611b",
      from: 1,
      to: 100,
    },

    success: function(data) {
      console.log(data);
      var options = [];

      for (var r=0; r<data.hits.length; r++) {
        if (data.hits[r].recipe.yield = peopleValue) {
          options.push(data.hits[r].recipe)
        }
      }



      console.log(options)
      // console.log(data.hits[0].recipe.ingredients)
      // const stuff = data.hits[0].recipe.ingredients
      // for (var i = 0; i < stuff.length; i++){
      //   console.log(stuff[i])
      // }
      alert("success");
    },
    error: function(err) {
      console.log(err);
      alert("error");
    }
  })  
};