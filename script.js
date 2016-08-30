  


  console.log("hello");
  //var sign = "";
  //sign = document.getElementById('horoscope-input').value;


  //var sign = "welcome";
  //console.log(sign);
  var debug = true;
  if(debug) {
    // $("#horoscope-input").keyup(function() {
    //   var value = $( this ).val();
    //   $( "p" ).text( value );
    //   var debug_sign = value;
    //   console.log("inital input is equal to "+debug_sign);
    // });
  }


  //console.log("now it is set to value of input : "+sign);
var availableTags = [
  "aries",
  "taurus",
  "gemini",
  "cancer",
  "leo",
  "virgo",
  "libra",
  "scorpio",
  "sagittarius",
  "capricorn",
  "aquarius",
  "pisces",
];

$(document).ready(function() {
  init();
});
  
function init() {
  $("#horoscope-form").submit(function(e) {

    var sign = $('#horoscope-input').val();
    //e.preventDefault;
    if(debug) {
      console.log("sign is equal to "+sign);
    }
    runAjax(sign);
    e.preventDefault();
  });

  $("#horoscope-input").autocomplete({
    source: availableTags
  });


}
  


function runAjax(sign) {
  var url = "http://crossorigin.me/https://theastrologer-api.herokuapp.com/api/horoscope/"+sign+"/today";
  var result = "";
  $.ajax({
    url: url,
    cache: false,
  })
  .error(function() {
    
    alert("Was not able to look up the sign you entered in the text field.");
    
  })
  .done(function(result) {
    if(debug) {
      console.log(result);
    }
    renderResults(result);
  });
}

function renderResults(result) {
  $( "#horoscope-intensity" ).text( result.meta.intensity );
  $( "#horoscope-keywords" ).text( result.meta.keywords );
  $( "#horoscope-text" ).text( result.horoscope );
  $("#horoscope-mood").text("your mood is " + result.meta.mood)
  if (debug) {
    console.log(result.meta);
  }
}






