// var q = document.getElementById


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