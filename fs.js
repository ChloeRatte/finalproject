function getData() {
  document.getElementById("yourRecipe").innerHTML = "";
  document.getElementById("recipeName").innerHTML = "";
  document.getElementById("yourNutrition").innerHTML = "";
  document.getElementById("recipeImage").innerHTML = "";


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
      var num = 0;

      var x = Math.floor(Math.random()*yieldOptions.length);
      num = x; 

    if(diet=="None"){
      console.log("if");
      var recipeDiv = document.getElementById("recipeName");
      var recipeName = document.createTextNode(yieldOptions[num].label);
      var recipeImage = document.createElement("img")
      recipeImage.setAttribute("src", yieldOptions[num].image);
      document.getElementById("recipeImage").appendChild(recipeImage);
      recipeDiv.appendChild(recipeName);
      for (var y=0; y<yieldOptions[num].ingredients.length; y++){
        var theDiv = document.getElementById("yourRecipe");
        var content = document.createTextNode(yieldOptions[num].ingredients[y].text);
        linebreak = document.createElement("br");
        theDiv.appendChild(linebreak);
        theDiv.appendChild(content);
      }
      for (var k=0; k<yieldOptions[num].digest.length; k++) {
        var nutriAmount = yieldOptions[num].digest[k].total.toFixed(0);
        var nutritionDiv = document.getElementById("yourNutrition");
        var nutritionContent = document.createTextNode(yieldOptions[num].digest[k].label);
        var nutritionAmount = document.createTextNode(nutriAmount);
        var nutritionUnit = document.createTextNode(yieldOptions[num].digest[k].unit);
        linebreak = document.createElement("br");
        nutritionDiv.appendChild(linebreak);
        nutritionDiv.appendChild(nutritionContent);
        nutritionDiv.appendChild (document.createTextNode (" "));
        nutritionDiv.appendChild(nutritionAmount);
        nutritionDiv.appendChild (document.createTextNode (" "));
        nutritionDiv.appendChild(nutritionUnit);
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
            var num = 0;
            var x = Math.floor(Math.random()*yieldOptions.length);
            num = x; 

            var recipeDiv = document.getElementById("recipeName");
            var recipeName = document.createTextNode(dietOptions[num].label);
            var recipeImage = document.createElement("img")
            recipeImage.setAttribute("src", dietOptions[num].image);
            document.getElementById("recipeImage").appendChild(recipeImage);
            recipeDiv.appendChild(recipeName);

//================================          
            for (var i=0; i<dietOptions[num].ingredients.length; i++) {
                // console.log(i);

                var theDiv = document.getElementById("yourRecipe"); 
                var content = document.createTextNode(dietOptions[num].ingredients[i].text);
                linebreak = document.createElement("br");
                theDiv.appendChild(linebreak);
                theDiv.appendChild(content);

                // var btn = document.createElement("BUTTON")        

                // document.getElementById("yourRecipe").innerHTML = dietOptions[0].ingredients[i].text;
              }
            for (var j=0; j<dietOptions[num].digest.length; j++) {
              var nutriAmount = dietOptions[num].digest[j].total.toFixed(0);

              var nutritionDiv = document.getElementById("yourNutrition");
              var nutritionContent = document.createTextNode(dietOptions[num].digest[j].label);
              var nutritionAmount = document.createTextNode(nutriAmount);
              var nutritionUnit = document.createTextNode(dietOptions[num].digest[j].unit);
              linebreak = document.createElement("br");
              nutritionDiv.appendChild(linebreak);
              nutritionDiv.appendChild(nutritionContent);
              nutritionDiv.appendChild (document.createTextNode (" "));
              nutritionDiv.appendChild(nutritionAmount);
              nutritionDiv.appendChild (document.createTextNode (" "));
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