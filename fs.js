function getData() {
  document.getElementById("yourRecipe").innerHTML = "";
  document.getElementById("recipeName").innerHTML = "";
  document.getElementById("yourNutrition").innerHTML = "";

  var diet = document.getElementById("diet").value;

  var peopleValue = document.getElementById("numPeople").value;

  var mealType = document.getElementById("meal").value;

  var foundRecipe=false;

  $.ajax({
    url: "https://api.edamam.com/search",
    data: {
      q: mealType,
      app_id:"0af4c33f",
      app_key:"95be53f1e879fb340befc460bf37611b",
      from: 1,
      to: 500,
    },

    success: function(data) {

      console.log(data);
      var yieldOptions = [];

      for (var r=0; r<data.hits.length; r++) {
        if (data.hits[r].recipe.yield = peopleValue) {
          yieldOptions.push(data.hits[r].recipe)

        }
      }

      console.log(yieldOptions);


    if(diet=="None"){
      console.log("if");
      var recipeDiv = document.getElementById("recipeName");
      var recipeName = document.createTextNode(yieldOptions[0].label);
      recipeDiv.appendChild(recipeName);
      for (var y=0; y<yieldOptions[0].ingredients.length; y++){
        var theDiv = document.getElementById("yourRecipe");
        var content = document.createTextNode(yieldOptions[0].ingredients[y].text);
        linebreak = document.createElement("br");
        theDiv.appendChild(linebreak);
        theDiv.appendChild(content);

      }
    }else{
//----------------------------------------------------------------
        console.log("else");

        var dietOptions = [];
        for (var d=0; d<yieldOptions.length; d++){
          if (yieldOptions[d].healthLabels.indexOf(diet) != -1) {
            dietOptions.push(yieldOptions[d]);
            foundRecipe=true;
              // console.log("adding: " + d);
              // delete yieldOptions[d];
          }
        }
        if (foundRecipe==false){
          document.getElementById("yourRecipe").innerHTML = "There are no recipes that match your search"
        }

        else{
            var recipeDiv = document.getElementById("recipeName");
            var recipeName = document.createTextNode(dietOptions[0].label);
            recipeDiv.appendChild(recipeName);
//================================          
            for (var i=0; i<dietOptions[0].ingredients.length; i++) {
                // console.log(i);

                var theDiv = document.getElementById("yourRecipe"); 
                var content = document.createTextNode(dietOptions[0].ingredients[i].text);
                linebreak = document.createElement("br");
                theDiv.appendChild(linebreak);
                theDiv.appendChild(content);

                // var btn = document.createElement("BUTTON")        

                // document.getElementById("yourRecipe").innerHTML = dietOptions[0].ingredients[i].text;
              }
            for (var j=0; j<dietOptions[0].digest.length; j++) {
              var nutritionDiv = document.getElementById("yourNutrition");
              var nutritionContent = document.createTextNode(dietOptions[0].digest[j].label)
              var nutritionAmount = document.createTextNode(dietOptions[0].digest[j].total)
              var nutritionUnit = document.createTextNode(dietOptions[0].digest[j].unit)
              linebreak = document.createElement("br");
              nutritionDiv.appendChild(linebreak);
              nutritionDiv.appendChild(nutritionContent);
              nutritionDiv.appendChild(nutritionAmount);
              nutritionDiv.appendChild(nutritionUnit);
            }
//===========================================
            }
     
//----------------------------------------------------------------------------  
      }



      alert("success");
    },
    error: function(err) {
      console.log(err);
      alert("error");
    }
  })  
};