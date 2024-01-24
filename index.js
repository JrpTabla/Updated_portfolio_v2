
// Function to add or remove the translate-Floating class based on scroll position
function toggleFloatingNavbarClass() {
    const floatingNavbar = document.getElementById("floating-navbar");
    const scrollPosition = window.scrollY;
    const scrollThreshold = window.innerHeight * 0.05; // 25% of the viewport height
  
    if (scrollPosition >= scrollThreshold) {
      floatingNavbar.classList.add("translateDown-Floating");
      floatingNavbar.classList.remove("translateUP-Floating");
    } else {
      floatingNavbar.classList.remove("translateDown-Floating");
      floatingNavbar.classList.add("translateUP-Floating");
    }
  }
  
  // Add an event listener for the scroll event
  window.addEventListener("scroll", toggleFloatingNavbarClass);
  
  // Initial call to toggleFloatingNavbarClass to handle the initial state
  toggleFloatingNavbarClass();



   // Get references to your category buttons
   const categoryButtons = document.querySelectorAll('.Category-items');

    function changeCategory(category) {


    // Remove the 'selected' class from all buttons
    categoryButtons.forEach(button => {
        button.classList.remove('selected');
    });

    // Add the 'selected' class to the clicked button
    const clickedButton = document.getElementById(`${category}-category`);
    clickedButton.classList.add('selected');




    // Get references to your content elements
    const categoryImage = document.querySelector('.Category-img');
    const categoryTitle = document.querySelector('.Category-title');
    const categoryRate = document.querySelector('.Category-Star');
    const categoryContent = document.querySelector('.Category-Content');
    const categoryPrice = document.querySelector('.Category-price');

    const categoryImage_2 = document.querySelector('.Category-img-2');
    const categoryTitle_2 = document.querySelector('.Category-title-2');
    const categoryRate_2 = document.querySelector('.Category-Star-2');
    const categoryContent_2 = document.querySelector('.Category-Content-2');
    const categoryPrice_2 = document.querySelector('.Category-price-2');

    const categoryImage_3 = document.querySelector('.Category-img-3');
    const categoryTitle_3 = document.querySelector('.Category-title-3');
    const categoryRate_3 = document.querySelector('.Category-Star-3');
        const categoryContent_3 = document.querySelector('.Category-Content-3');
        const categoryPrice_3 = document.querySelector('.Category-price-3');




        // Update content based on the selected category
        if (category === 'comets') {
            categoryImage.src = './images/phone_img/comet-1.png';
            categoryTitle.textContent = 'Genius';
            categoryRate.textContent = '★ 5.0';
            categoryContent.textContent = 'Diagram Galaxy';
            categoryPrice.textContent = '$40,000'; // Change to the actual price

            categoryImage_2.src = './images/phone_img/comet-2.png';
            categoryTitle_2.textContent = 'Kinro';
            categoryRate_2.textContent = '★ 4.8';
            categoryContent_2.textContent = 'Core Galaxy';
            categoryPrice_2.textContent = '$32,000'; // Change to the actual price

            categoryImage_3.src = './images/phone_img/comet-3.png';
            categoryTitle_3.textContent = 'Lucky Charm';
            categoryRate_3.textContent = '★ 4.6';
            categoryContent_3.textContent = 'Marshmallow Galaxy';
            categoryPrice_3.textContent = '$24,000'; // Change to the actual price




        } else if (category === 'stars') {
            categoryImage.src = './images/phone_img/star-1.png';
            categoryTitle.textContent = 'Carinae';
            categoryRate.textContent = '★ 4.8';
            categoryContent.textContent = 'Expander Galaxy';
            categoryPrice.textContent = '$700,000'; // Change to the actual price

            categoryImage_2.src = './images/phone_img/star-2.png';
            categoryTitle_2.textContent = 'Radiance';
            categoryRate_2.textContent = '★ 4.8';
            categoryContent_2.textContent = 'Flight Galaxy';
            categoryPrice_2.textContent = '$800,000'; // Change to the actual price

            categoryImage_3.src = './images/phone_img/star-3.png';
            categoryTitle_3.textContent = 'Stellar';
            categoryRate_3.textContent = '★ 4.7';
            categoryContent_3.textContent = 'Ocula Galaxy';
            categoryPrice_3.textContent = '$500,000'; // Change to the actual price

        } else if (category === 'planets') {
            categoryImage.src = './images/phone_img/planet-1.png';
            categoryTitle.textContent = 'Embera';
            categoryRate.textContent = '★ 4.7';
            categoryContent.textContent = 'Crest Galaxy';
            categoryPrice.textContent = '$1.2m'; // Change to the actual price

            categoryImage_2.src = './images/phone_img/planet-2.png';
            categoryTitle_2.textContent = 'Lunar-X';
            categoryRate_2.textContent = '★ 4.8';
            categoryContent_2.textContent = 'Flight Galaxy';
            categoryPrice_2.textContent = '$800,000'; // Change to the actual price

            categoryImage_3.src = './images/phone_img/planet-3.png';
            categoryTitle_3.textContent = 'Moss';
            categoryRate_3.textContent = '★ 4.5';
            categoryContent_3.textContent = 'Marshmallow Galaxy';
            categoryPrice_3.textContent = '$1.1m'; // Change to the actual price



        } else if (category === 'galaxy') {
            categoryImage.src = './images/phone_img/galaxy-1.png';
            categoryTitle.textContent = 'Galactor';
            categoryRate.textContent = '★ 5.0';
            categoryContent.textContent = 'Ace Region';
            categoryPrice.textContent = '$4.2b'; // Change to the actual price

            categoryImage_2.src = './images/phone_img/galaxy-2.png';
            categoryTitle_2.textContent = 'Nexus';
            categoryRate_2.textContent = '★ 4.8';
            categoryContent_2.textContent = 'Bloom Region';
            categoryPrice_2.textContent = '$3.3b'; // Change to the actual price

            categoryImage_3.src = './images/phone_img/galaxy-3.png';
            categoryTitle_3.textContent = 'Galore';
            categoryRate_3.textContent = '★ 4.7';
            categoryContent_3.textContent = 'Expansive Region';
            categoryPrice_3.textContent = '$1.1b'; // Change to the actual price
        }
        // Add more conditions for other categories as needed
    }



// Get references to your category buttons
const IconButtons = document.querySelectorAll('.color-icon');

    function changeColorIcon(Icon) {

        // / Remove the 'selected' class from all buttons
        IconButtons.forEach(button => {
            button.classList.remove('selected');
        });

        // Add the 'selected' class to the clicked button
        const clickedButton = document.getElementById(`${Icon}`);
        clickedButton.classList.add('selected');

        const IconHex        = document.querySelector('#hex');
        const IconStructure  = document.querySelector('#structure');
        const IconStyle      = document.querySelector('#style');
        const IconLayout     = document.querySelector('#layout');

        // Change the background color based on the Icon
        const circle_1 = document.querySelector('.circle-1'); // Assuming you want to change circle-1's color
        const circle_2 = document.querySelector('.circle-2');
        const circle_3 = document.querySelector('.circle-3');
        const circle_4 = document.querySelector('.circle-4');


        if (Icon === 'twitter') {

            IconHex.textContent = 'Replace with tweet';
            IconStructure.textContent = 'Set to Lights Out mode';
            IconStyle.textContent = 'Increase font size';
            IconLayout.textContent = 'Convert to retweet';

            circle_1.style.backgroundColor = '#1d9bf0'; // Replace with the color code you want
            circle_2.style.backgroundColor = '#72b1f0'; // Replace with the color code you want
            circle_3.style.backgroundColor = '#9ccaf8'; // Replace with the color code you want
            circle_4.style.backgroundColor = '#bedbf8'; // Replace with the color code you want

        } else if(Icon === 'netflix') {

            IconHex.textContent = 'Set to queue';
            IconStructure.textContent = 'Add controls overlay';
            IconStyle.textContent = 'Randomize suggestions';
            IconLayout.textContent = 'Move to library';

            circle_1.style.backgroundColor = '#d22f27'; // Replace with the color code you want
            circle_2.style.backgroundColor = '#e14a42'; // Replace with the color code you want
            circle_3.style.backgroundColor = '#f0655e'; // Replace with the color code you want
            circle_4.style.backgroundColor = '#ff8079'; // Replace with the color code you want

        } else if(Icon === 'reddit') {

            IconHex.textContent = 'View as reply';
            IconStructure.textContent = 'Add 100 upvotes';
            IconStyle.textContent = 'Randomize comments';
            IconLayout.textContent = 'Set as top voted reply';

            circle_1.style.backgroundColor = '#ff4500'; // Replace with the color code you want
            circle_2.style.backgroundColor = '#fe6027'; // Replace with the color code you want
            circle_3.style.backgroundColor = '#fe7b4f'; // Replace with the color code you want
            circle_4.style.backgroundColor = '#ff9c7d'; // Replace with the color code you want

        } else if(Icon === 'snapchat') {

            IconHex.textContent = 'Show camera view';
            IconStructure.textContent = 'Swap to front-facing camera';
            IconStyle.textContent = 'Convert to Android camera';
            IconLayout.textContent = 'Add random AR glasses';

            circle_1.style.backgroundColor = '#fffc01'; // Replace with the color code you want
            circle_2.style.backgroundColor = '#fdfb61'; // Replace with the color code you want
            circle_3.style.backgroundColor = '#fffd9b'; // Replace with the color code you want
            circle_4.style.backgroundColor = '#fffebe'; // Replace with the color code you want

        } else if(Icon === 'meta') {
            
            IconHex.textContent = 'Convert card to mobile';
            IconStructure.textContent = 'Show focused states';
            IconStyle.textContent = 'Conver to component';
            IconLayout.textContent = 'Overwrite with parent name';

            circle_1.style.backgroundColor = '#2862d8'; // Replace with the color code you want
            circle_2.style.backgroundColor = '#3b7ce2'; // Replace with the color code you want
            circle_3.style.backgroundColor = '#4f96eb'; // Replace with the color code you want
            circle_4.style.backgroundColor = '#62b0f5'; // Replace with the color code you want

        } else if(Icon === 'cashapp') {

            IconHex.textContent = 'Add delivery address';
            IconStructure.textContent = 'Set to a new store';
            IconStyle.textContent = 'Import shopping list';
            IconLayout.textContent = 'Batch resize product images';

            circle_1.style.backgroundColor = '#003e29'; // Replace with the color code you want
            circle_2.style.backgroundColor = '#234a37'; // Replace with the color code you want
            circle_3.style.backgroundColor = '#48725d'; // Replace with the color code you want
            circle_4.style.backgroundColor = '#608c76'; // Replace with the color code you want

        }

    }

let isToggleOn = false;
let animationActive = false;

    function toggleAnimations() {

        const button = document.getElementById('animationButton');

        if (isToggleOn) {
        button.classList.add('active');
        button.textContent = 'Click Me';
        // Add your toggle-on logic here
        } else {
        button.classList.remove('active');
        button.textContent = 'Restart';
        // Add your toggle-off logic here
        }

        isToggleOn = !isToggleOn;
        if (animationActive) {
            // Remove animation classes
            document.getElementById('square-img').classList.remove('resize-translate-animation-only');
            document.getElementById('square-img-1').classList.remove('resize-translate-animation');
            document.getElementById('square-text-1').classList.remove('disappear-animation-1');
            document.getElementById('square-text-2').classList.remove('disappear-animation-2');
            document.getElementById('square-text-3').classList.remove('disappear-animation-3');
            document.getElementById('square1-2ndBody').classList.remove('translateY-animation-only');
            document.getElementById('square1-rdBody').classList.remove('translateY-animation-only');
            document.getElementById('square2').classList.remove('translateX-animation-square-2');
        } else {
            // Add animation classes
            document.getElementById('square-img').classList.add('resize-translate-animation-only');
            document.getElementById('square-img-1').classList.add('resize-translate-animation');
            document.getElementById('square-text-1').classList.add('disappear-animation-1');
            document.getElementById('square-text-2').classList.add('disappear-animation-2');
            document.getElementById('square-text-3').classList.add('disappear-animation-3');
            document.getElementById('square1-2ndBody').classList.add('translateY-animation-only');
            document.getElementById('square1-rdBody').classList.add('translateY-animation-only');
            document.getElementById('square2').classList.add('translateX-animation-square-2');
        }

        // Toggle the animation state
        animationActive = !animationActive;
    }


    

document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}


 // Function to check if the user is authenticated
 function isAuthenticated() {
    const token = localStorage.getItem("authToken");
    return token !== null; // Check if the token is present in localStorage
}

// Function to show/hide the login and logged-in sections based on authentication status
function updateUI() {
    const loginForm = document.getElementById("login-form");
    const loggedInSection = document.getElementById("logged-In");
    const none3d = document.getElementById("none-3d");
    const active3d = document.getElementById("content-container");

    if (isAuthenticated()) {
        loginForm.style.display = "none";
        none3d.style.display = "none";
        loggedInSection.style.display = "block";
        active3d.style.display = "block";
    } else {
        loginForm.style.display = "block";
        none3d.style.display = "block";
        loggedInSection.style.display = "none";
        active3d.style.display = "none";
    }
}

// Function to create a JWT and store it in localStorage
function createJWT(username) {
    const payload = {
        username
    };
    const secretKey = 'yourSecretKey';
    const token = btoa(JSON.stringify(payload));
    return token;
}

// Function to perform login
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "username" && password === "password") {
        const token = createJWT(username);
        localStorage.setItem("authToken", token);
        updateUI(); // Update the UI after successful login

        // Clear the input fields
    } else {
        alert("Authentication failed. (Username: username, Password: password)");
    }
}

// Function to log out and remove the token from localStorage
function logout() {
    localStorage.removeItem("authToken");
    updateUI(); // Update the UI after logging out
}

// Initialize the UI based on authentication status when the page loads
window.onload = function () {
    updateUI();
};


const lightSwitch = document.getElementById("light-switch");
const onIcon = lightSwitch.querySelector(".on");
const offIcon = lightSwitch.querySelector(".off");
const bodyBackground = document.querySelector(".body-background-image");

let isNight = false; // Initialize the night state

lightSwitch.addEventListener("click", () => {
    if (isNight) {
        onIcon.style.display = "block";
        offIcon.style.display = "none";
        bodyBackground.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    } else {
        onIcon.style.display = "none";
        offIcon.style.display = "block";
        bodyBackground.style.backgroundColor = "rgb(0, 0, 0, 0.4)";
    }
    isNight = !isNight; // Toggle the night state
});
