
// document.addEventListener("DOMContentLoaded", function () {
//   const toggleSwitch = document.querySelector("#radiobtn1");
//   const body = document.querySelector("body");
//   const navbar = document.querySelector("#navbar");
//   const box = document.querySelector("#grid");
//   const card1 = document.querySelector("#card1");
//   const card2 = document.querySelector("#card2");
//   const card3 = document.querySelector("#card3");
//   const card4 = document.querySelector("#card4");
//   const card5 = document.querySelector("#card5");

//   const gcard1 = document.querySelector("#gcard1");
//   const gcard2 = document.querySelector("#gcard2");
//   const gcard3 = document.querySelector("#gcard3");
//   const gcard4 = document.querySelector("#gcard4");
//   const gcard5 = document.querySelector("#gcard5");
//   const gcard6 = document.querySelector("#gcard6");
//   const gcard7 = document.querySelector("#gcard7");

//   const wcard1 = document.querySelector("#wcard1");
//   const wcard2 = document.querySelector("#wcard2");
//   const wcard3 = document.querySelector("#wcard3");
//   const market = document.querySelector("#market");
//   const graphic = document.querySelector("#graphic");
//   const web = document.querySelector("#web");
//   const port = document.querySelector("#port");
//   const sucli = document.querySelector("#sucli");

//   const memon = document.querySelector("#memon");
//   const memonh3 = document.querySelector("#memon h3");
//   const memonp = document.querySelector("#memon p");

//   const japane = document.querySelector("#japane");
//   const japaneh3 = document.querySelector("#japane h3");
//   const japanep = document.querySelector("#japane p");

//   const alpha = document.querySelector("#alpha");
//   const alphah3 = document.querySelector("#alpha h3");
//   const alphap = document.querySelector("#alpha p");

//   const itsoul = document.querySelector("#itsoul");
//   const itsoulh3 = document.querySelector("#itsoul h3");
//   const itsoulp = document.querySelector("#itsoul p");

//   const shopable = document.querySelector("#shopable");
//   const shopableh3 = document.querySelector("#shopable h3");
//   const shopablep = document.querySelector("#shopable p");

//   const falaknaz = document.querySelector("#falaknaz");
//   const falaknazh3 = document.querySelector("#falaknaz h3");
//   const falaknazp = document.querySelector("#falaknaz p");








//   toggleSwitch.addEventListener("change", switchTheme);

//   function switchTheme(e) {
//     if (e.target.checked) {
//       // Light mode
//       body.style.backgroundColor = "#fbfbff";
//       toggleSwitch.style.backgroundColor = "#ff331f";
//       navbar.style.backgroundColor = "#fbfbff";
//       navbar.style.color = "black";
//       market.style.color="black"
//       web.style.color="black"
//       graphic.style.color="black"
//       port.style.color="black"
//       sucli.style.color="black"
//       //for marketing starts
//       box.style.backgroundColor = "#fff";
//       box.style.color = "#000";
//       card1.style.backgroundColor = "#fff";
//       card1.style.color = "#000";
//       card2.style.backgroundColor = "#fff";
//       card2.style.color = "#000";
//       card3.style.backgroundColor = "#fff";
//       card3.style.color = "#000";
//       card4.style.backgroundColor = "#fff";
//       card4.style.color = "#000";
//       card5.style.backgroundColor = "#fff";
//       card5.style.color = "#000";
//       card5.style.border = "none";
//       card4.style.border = "none";
//       card3.style.border = "none";
//       card2.style.border = "none";
//       card1.style.border = "none";
//       //marketing ends

//       // graphic starts

//       gcard1.style.backgroundColor = "#fff";
//       gcard1.style.color = "#000";
//       gcard2.style.backgroundColor = "#fff";
//       gcard2.style.color = "#000";
//       gcard3.style.backgroundColor = "#fff";
//       gcard3.style.color = "#000";
//       gcard4.style.backgroundColor = "#fff";
//       gcard4.style.color = "#000";
//       gcard5.style.backgroundColor = "#fff";
//       gcard5.style.color = "#000";
//       gcard6.style.backgroundColor = "#fff";
//       gcard6.style.color = "#000";
//       gcard7.style.backgroundColor = "#fff";
//       gcard7.style.color = "#000";

//       gcard7.style.border = "none";
//       gcard6.style.border = "none";
//       gcard5.style.border = "none";
//       gcard4.style.border = "none";
//       gcard3.style.border = "none";
//       gcard2.style.border = "none";
//       gcard1.style.border = "none";

//       //graphic ends

//       //web starts

//       wcard1.style.backgroundColor = "white";
//       wcard1.style.color = "black";
//       wcard2.style.backgroundColor = "white";
//       wcard2.style.color = "black";
//       wcard3.style.backgroundColor = "white";
//       wcard3.style.color = "black";

//       wcard3.style.border = "none";
//       wcard2.style.border = "none";
//       wcard1.style.border = "none";

//       //web ends


//       memon.style.backgroundColor="white";
//       memonh3.style.backgroundColor="white";
//       memonp.style.backgroundColor="white";
//       memonh3.style.color="black"
      

//       japane.style.backgroundColor="#fff";
//       japaneh3.style.backgroundColor="#fff";
//       japanep.style.backgroundColor="#fff";
//       japaneh3.style.color="#000"


//       itsoul.style.backgroundColor="#fff";
//       itsoulh3.style.backgroundColor="#fff";
//       itsoulp.style.backgroundColor="#fff";
//       itsoulh3.style.color="#000"

//       falaknaz.style.backgroundColor="#fff";
//       falaknazh3.style.backgroundColor="#fff";
//       falaknazp.style.backgroundColor="#fff";
//       falaknazh3.style.color="#000"


//       shopable.style.backgroundColor="#fff";
//       shopableh3.style.backgroundColor="#fff";
//       shopablep.style.backgroundColor="#fff";
//       shopableh3.style.color="#000"


//       alpha.style.backgroundColor="#fff";
//       alphah3.style.backgroundColor="#fff";
//       alphap.style.backgroundColor="#fff";
//       alphah3.style.color="#000"



//     } else {
//       // Dark mode
//       body.style.backgroundColor = "black";
//       toggleSwitch.style.backgroundColor = "#1976d2";
//       navbar.style.backgroundColor = "rgb(20, 20, 20)";
//       navbar.style.color = "black";
//       market.style.color="white"
//       web.style.color="white"
//       port.style.color="white"
//       sucli.style.color="white"
//       graphic.style.color="white"
//       box.style.backgroundColor = "black";
//       box.style.color = "white";
//       card1.style.backgroundColor = "black";
//       card1.style.color = "white";
//       card2.style.backgroundColor = "black";
//       card2.style.color = "white";
//       card3.style.backgroundColor = "black";
//       card3.style.color = "white";
//       card4.style.backgroundColor = "black";
//       card4.style.color = "white";
//       card5.style.backgroundColor = "black";
//       card5.style.color = "white";
//       card5.style.border = "solid 2px grey";
//       card4.style.border = "solid 2px grey";
//       card3.style.border = "solid 2px grey";
//       card2.style.border = "solid 2px grey";
//       card1.style.border = "solid 2px grey";

//       // graphic starts
//       gcard1.style.backgroundColor = "black";
//       gcard1.style.color = "white";
//       gcard2.style.backgroundColor = "black";
//       gcard2.style.color = "white";
//       gcard3.style.backgroundColor = "black";
//       gcard3.style.color = "white";
//       gcard4.style.backgroundColor = "black";
//       gcard4.style.color = "white";
//       gcard5.style.backgroundColor = "black";
//       gcard5.style.color = "white";
//       gcard6.style.backgroundColor = "black";
//       gcard6.style.color = "white";
//       gcard7.style.backgroundColor = "black";
//       gcard7.style.color = "white";

//       gcard7.style.border = "solid 2px grey";
//       gcard6.style.border = "solid 2px grey";
//       gcard5.style.border = "solid 2px grey";
//       gcard4.style.border = "solid 2px grey";
//       gcard3.style.border = "solid 2px grey";
//       gcard2.style.border = "solid 2px grey";
//       gcard1.style.border = "solid 2px grey";

//       //graphic ends

//       //web starts

//       wcard1.style.backgroundColor = "black";
//       wcard1.style.color = "white";
//       wcard2.style.backgroundColor = "black";
//       wcard2.style.color = "white";
//       wcard3.style.backgroundColor = "black";
//       wcard3.style.color = "white";

//       wcard3.style.border = "solid 2px grey";
//       wcard2.style.border = "solid 2px grey";
//       wcard1.style.border = "solid 2px grey";

//       //web ends


//       memon.style.backgroundColor="black";
//       memonh3.style.backgroundColor="black";
//       memonp.style.backgroundColor="black";
//       memonh3.style.color="white"





//       japane.style.backgroundColor="black";
//       japaneh3.style.backgroundColor="black";
//       japanep.style.backgroundColor="black";
//       japaneh3.style.color="white"


//       itsoul.style.backgroundColor="black";
//       itsoulh3.style.backgroundColor="black";
//       itsoulp.style.backgroundColor="black";
//       itsoulh3.style.color="white"

//       falaknaz.style.backgroundColor="black";
//       falaknazh3.style.backgroundColor="black";
//       falaknazp.style.backgroundColor="black";
//       falaknazh3.style.color="white"


//       shopable.style.backgroundColor="black";
//       shopableh3.style.backgroundColor="black";
//       shopablep.style.backgroundColor="black";
//       shopableh3.style.color="white"


//       alpha.style.backgroundColor="black";
//       alphah3.style.backgroundColor="black";
//       alphap.style.backgroundColor="black";
//       alphah3.style.color="white"




//     }
//   }
// }); 
