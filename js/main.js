 // Obtener una referencia a los elementos con la clase "rp" y "lp"
 let rpButtons = document.querySelectorAll(".rp");
 let lpButtons = document.querySelectorAll(".lp");
 let psbBtnButtons = document.querySelectorAll(".psbBtn");
 let screen = document.getElementById("screen"); // Obtener la referencia a la clase "screen"

 // Agregar un event listener a los elementos con la clase "rp"
 lpButtons.forEach(function(lpButton) {
   lpButton.addEventListener("click", function() {
     // Cambiar la imagen de fondo de la clase "screen" cuando se hace clic en "rp"
     screen.style.backgroundImage = "url('../img/newgame.jpeg')";
   });
 });

 // Agregar un event listener a los elementos con la clase "lp"
 rpButtons.forEach(function(rpButton) {
   rpButton.addEventListener("click", function() {
     // Cambiar la imagen de fondo de la clase "screen" cuando se hace clic en "lp"
     screen.style.backgroundImage = "url('../img/bossbattle.png')";
   });
 });
 psbBtnButtons.forEach(function(psbBtnButton) {
     psbBtnButton.addEventListener("click", function() {
     // APAGAR LA PANTALLA
     screen.style.backgroundImage = "";
   });
 });

//  const rpButtons = document.querySelectorAll(".rp");
//  const screen = document.getElementsByClassName(`screen`);

//  document.addEventListener(`click`, function () {

//   if (screen.style.backgroundImage === "url('../img/newgame.jpeg')") {
//      screen.style.backgroundImage = "url('../img/bossbattle.png')";
//    } else if (screen.style.backgroundImage === "url('../img/bossbattle.png')") {
//     screen.style.backgroundImage = "url('../img/youdied.jpeg')";
//   } else {
//      screen.style.backgroundImage = "url('../img/newgame.jpeg')";
//    }
//  });
