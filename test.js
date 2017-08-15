
function getData() {
  $.ajax({
    url: "https://api.edamam.com/search",
    data: {
      q: "chicken",
      app_id:"0af4c33f",
      app_key:"95be53f1e879fb340befc460bf37611b",
      from: 0,
      to: 3
    },
    success: function(data) {
      console.log(data);
      alert("success");
    },
    error: function(err) {
      console.log(err);
      alert("error");
    }
  })
};