// document.addEventListener("DOMContentLoaded", function () {
//   // your code here



//   const toggleSwitch = document.querySelector("#radiobtn1");
//   const body = document.querySelector("body");
//   const navbar = document.querySelector("#navbar");

//   const thedesign = document.getElementById("thedesignic");
//   const subscribe = document.getElementById("subscribe");
//   const faqhead = document.getElementById("faqhead");
//   const faq1 = document.getElementById("faq1");
//   const faq1body = document.getElementById("faq1body");
//   const faq2 = document.getElementById("faq2");
//   const faq2body = document.getElementById("faq2body");
//   const faq3 = document.getElementById("faq3");
//   const faq3body = document.getElementById("faq3body");
//   const tel = document.getElementById("tel");
//   const contacthead = document.getElementById("contact-us");
//   const tellus = document.getElementById("tellus");
//   const tellusbody = document.getElementById("tellusbody");
//   const thedesignic = document.getElementById("thedesignicc");
//   const thedesignicbody = document.getElementById("thedesignicbody");

//   toggleSwitch.addEventListener("change", switchTheme);

//   // navbar.style.backgroundColor="black"

//   // navbar.style.backgroundColor = "rgb(200, 200, 200)";

//   function switchTheme(e) {
//     if (e.target.checked) {
//       body.style.backgroundColor = "#fbfbff";
//       toggleSwitch.style.backgroundColor = "#ff331f";
  
//       faqhead.style.color = "black";
//       faq1.style.backgroundColor = "white";
//       faq1.style.color = "black";
//       faq1body.style.backgroundColor = "white";
//       faq1body.style.color = "rgb(119,119,119)";

//       faq2.style.backgroundColor = "white";
//       faq2.style.color = "black";
//       faq2body.style.backgroundColor = "white";
//       faq2body.style.color = "rgb(119,119,119)";

//       faq3.style.backgroundColor = "white";
//       faq3.style.color = "black";
//       faq3body.style.backgroundColor = "white";
//       faq3body.style.color = "rgb(119,119,119)";
//       tel.style.color = "rgba(255,235,238,1.0)";
//       contacthead.style.color = "black";
//       tellus.style.color = "black";
//       tellusbody.style.color = "black";
//       thedesignic.style.color = "black";
//       thedesignicbody.style.color = "black";
//     } else {

//       body.style.backgroundColor = "black";
//       toggleSwitch.style.backgroundColor = "#1976d2";
//       subscribe.style.color = "white";
//       faqhead.style.color = "white";

    
//       // thedesign.style.color = "white";
//       faq1.style.backgroundColor = "black";
//       faq1.style.color = "rgba(255,235,238,1.0)";
//       faq1body.style.backgroundColor = "black";
//       faq1body.style.color = "rgb(119,119,119)";

//       faq2.style.backgroundColor = "black";
//       faq2.style.color = "rgba(255,235,238,1.0)";
//       faq2body.style.backgroundColor = "black";
//       faq2body.style.color = "rgb(119,119,119)";

//       faq3.style.backgroundColor = "black";
//       faq3.style.color = "rgba(255,235,238,1.0)";
//       faq3body.style.backgroundColor = "black";
//       faq3body.style.color = "rgb(119,119,119)";
//       tel.style.color = "rgba(255,235,238,1.0)";
//       contacthead.style.color = "white";
//       tellus.style.color = "white";
//       tellusbody.style.color = "rgb(119,119,119)";
//       thedesignic.style.color = "white";
//       thedesignicbody.style.color = "rgb(119,119,119)";
//     }
//   }
// });
const texts = ['Feel free to contact us.', 'We will try our best to answer every single query', 'Fill the following details, We will reach out to you soon.']; // Array of texts to display
let index = 0; // Current index in the texts array
let letterIndex = 0; // Current index of the letter being displayed
let isDeleting = false; // Flag to indicate if text is being deleted
let typingSpeed = 50; // Speed of typing in milliseconds
const initialDelay = 2000; // Initial delay before starting the typewriter effect
const speedIncreaseDelay = 3000; // Delay before increasing typing speed

function typeText() {
  const currentText = texts[index];
  if (isDeleting) {
    // Deleting text
    document.getElementById('typewriter').textContent = currentText.substring(0, letterIndex - 1);
    letterIndex--;

    if (letterIndex === 0) {
      isDeleting = false;
      index = (index + 1) % texts.length; // Move to the next text
      typingSpeed = 100; // Reset the typing speed
    }
  } else {
    // Typing text
    document.getElementById('typewriter').textContent = currentText.substring(0, letterIndex + 1);
    letterIndex++;

    if (letterIndex === currentText.length) {
      isDeleting = true;

      if (index === texts.length - 1) {
        // Last text has been typed
        setTimeout(restartTyping, initialDelay);
        return;
      }

      setTimeout(typeText, initialDelay);
      return;
    }
  }

  // Recursive call for typing/deleting effect
  setTimeout(typeText, typingSpeed);
}

function restartTyping() {
  // Reset indexes and start typing again with increased speed
  index = 0;
  letterIndex = 0;
  isDeleting = false;
  typingSpeed = 50; // Faster typing speed

  typeText();
}

// Start the typewriter effect after initial delay
setTimeout(typeText, initialDelay);

       // Hide the loader and overlay after 3.5 seconds
       setTimeout(function() {
        document.querySelector('.overlay').style.display = 'none';
        document.querySelector('.loader').style.display = 'none';
      }, 5000);




