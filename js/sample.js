
// $(document).ready(function(){
// $("#hide").click(function(){
// $("p").hide("1000");
// });
// $("#show").click(function(){
// $("p").show("1000");
// });
// });
// <body>
// <p>If you click on the "Hide" button, I will disappear.</p>
// <button id="hide">Hide</button>
// <button id="show">Show</button>
// </body>
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  function openSearch() {
      document.getElementById("mylayout").style.display = "block";
  }
  function closeSearch() {
      document.getElementById("mylayout").style.display = "none";
  }