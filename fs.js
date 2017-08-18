function getData() {
  document.getElementById("yourRecipe").innerHTML = "";

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
//===========================================
            }

         
//----------------------------------------------------------------------------  
      }

    

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