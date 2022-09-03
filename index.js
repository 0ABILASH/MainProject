var hamburger = document.getElementById("burger");
let hamburgerNavigation = document.getElementById("burgerNav");
function burger() {
  hamburgerNavigation.classList.toggle("display-property"),
  hamburger.classList.toggle("active");

  let body = document.querySelector("body");
  if (hamburgerNavigation.classList.contains("display-property")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
}

// validation

document.querySelector(".buttonsubmit").addEventListener("click", (event) => {
  event.preventDefault();
});

function validateName() {
  let userName = document.getElementById('contact-name').value;
  if (userName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    document.getElementById('contact-name').style.borderColor = "black";
    return true;
  }
  document.getElementById('contact-name').style.borderColor = "red";
  return false;
}

function validateEmail() {
  let userEmail = document.getElementById('contact-email').value;
  if (!userEmail.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    document.getElementById('contact-email').style.borderColor = "red";
    return false;
  }
  document.getElementById('contact-email').style.borderColor = "black";
  return true;
}
function validateConfirmEmail() {
  let userConfirmEmail = document.getElementById('contact-confirm-email').value;
  if (!userConfirmEmail.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    document.getElementById('contact-confirm-email').style.borderColor = "red";
    return false;
  }
  document.getElementById('contact-confirm-email').style.borderColor = "black";
  return true;
}

function freeSubscription() {
  popup.classList.add("open-popup");
  document.getElementById('popuptext').innerHTML = "congratulations!!";
}
function prosubscription() {
  popup.classList.add("open-popup");
  document.getElementById('popuptext').innerHTML = "oops!! You need to Pay for pro";
}
function Bussinesssubscription() {
  popup.classList.add("open-popup");
  document.getElementById('popuptext').innerHTML = "oops!! You need to Verify |ERROR|";
}

// localStorage


function submitted() {

  var uname = document.getElementById('contact-name');
  var uemail = document.getElementById('contact-email');
  let popup = document.getElementById('popup');
  localStorage.setItem("UserName", uname.value);
  localStorage.setItem("UserMailid", uemail.value);

  if (validateName() == true && validateEmail() == true) {
    popup.classList.add("open-popup");
    document.getElementById('popuptext').innerHTML = "Subscribed";
    document.getElementById('notes').innerHTML = "(Note:- Subscribe using the same mailid at the bottom subscrition to fetch data!!)";
  }
  else {
    popup.classList.add("open-popup");
    document.getElementById('notes').innerHTML = "Something Went Wrong";
  }
}
function closepopup() {
  popup.classList.remove("open-popup", "blur");
}

function confirmEmail() {
  var uemail = document.getElementById('contact-email');
  var confirmGmail = document.getElementById('contact-confirm-email');

  localStorage.setItem("confirmemail", confirmGmail.value);
  if (validateName() == true && validateEmail() == true && uemail.value == confirmGmail.value) {
    document.getElementById('outputname').innerHTML = "Hello !!" + " " + localStorage.getItem('UserName');
    document.getElementById('outputemail').innerHTML = localStorage.getItem('UserMailid');
    popup.classList.add("open-popup");
    document.getElementById('popuptext').innerHTML = "";
    document.getElementById('notes').innerHTML = "";
  }
  else {
    popup.classList.add("open-popup");
    document.getElementById('notes').innerHTML = "Something Went Wrong";
  }
}

// FromAPI

fetch('https://fakestoreapi.com/products').then((data) => {
  return data.json();
}).then((completedata) => {
  let short = "";

  short = `<section class=" padding">
    <div class="short-heading-container">
      <div class="desktop-view-short-paragraph">
        <h1 class="header-font-style">Short heading</h1>
        <div class="short-heading-paragraph ">
          <p class="short-heading-font-style">${completedata[4].description}</p>
        </div>
      </div>
      <div class="mobile-view-short-paragraph">
        <h1 class="header-font-style">Heading</h1>
        <p class="short-heading-font-style">${completedata[1].description}</p>
      </div>
      <div class="short-heading-icons ">
        <div class="star-image">
          <div><img src="./assets/images/svg/small_circle.svg" alt="starimage" /></div>
          <p>${completedata[13].category}</p>
        </div>
        <div>
          <div class="star-image"><img src="./assets/images/svg/small_circle.svg" alt="starimage" /></div>
          <p>${completedata[1].category}</p>
        </div>
        <div>
          <div class="star-image"><img src="./assets/images/svg/small_circle.svg" alt="starimage" /></div>
          <p>${completedata[5].category}</p>
        </div>
        <div>
          <div class="star-image"><img src="./assets/images/svg/small_circle.svg" alt="starimage" /></div>
          <p>${completedata[1].category}</p>
        </div>
      </div>

      <div class="short-images">
        <img src="./assets/images/svg/Vectorshort heding.svg" alt="bigscreen" />
      </div>
    </div>
  </section>`
  document.getElementById('short').innerHTML = short;
})

fetch('https://fakestoreapi.com/products?desc=sort').then((secondaryData) => {
  return secondaryData.json();
}).then((scompletedata) => {
  let headingdata = "";
  let about = "";
  let features = "";
  let piechart = "";

  headingdata = `<section class="header-content  max-width">
        <div class="heading">
          <h1 class="header-font-style">${scompletedata[11].category}</h1>
          <p class="heading-normal-content heading-font-style">${scompletedata[5].description}</p>
          <p class="mobile-view-heading heading-font-style">${scompletedata[6].description}</p>
          <input type="text" placeholder="Name" autofocus required id="contact-name" onkeyup="validateName()"/><br>
          <input type="email" placeholder="Email" id="contact-email"
          required onkeyup="validateEmail()" /> <br>
          <button type="submit" onclick="submitted()" class="primary-button"><a href="#">Subscribe</a></button>
          <p class="dull-heading-font-style dull-font"></p>
        </div>
        <div class="screen-image">
          <img src="./assets/images/svg/Vectorscreen.svg" alt="screenimage" />
        </div>
      </section>`;
  document.getElementById('heading').innerHTML = headingdata;
  about = ` <section class="about-content padding">
        <div class="about">
          <img src="./assets/images/svg/star_bg.svg" alt="starimage" />
          <div class="desktop-about-pragraph padding">
            <p class="about-font-style">${scompletedata[1].description}</p>
          </div>
          <div class="mobile-view-about-pragraph">
            <p class="about-font-style">${scompletedata[1].description}</p>
          </div>
        </div>
      </section>`;
  document.getElementById('about').innerHTML = about;
  features = `<section class="one-line-container padding">
      <div>
        <div class="one-line-content-top">
          <div class="one-line-content">
            <img src="./assets/images/svg/small-bg-logo.svg" alt="starimage" />
            <h2>One line header</h2>
          </div>
          <div class="desktop-view-one-line-paragraph">
            <p>
            ${scompletedata[3].description}
            </p>
          </div>
          <div class="mobile-view-one-line-paragraph">
            <p>${scompletedata[4].description}</p>
          </div>
        </div>
        <div class="one-line-content-top">
          <div class="one-line-content">
            <img src="./assets/images/svg/small-bg-logo.svg" alt="starimage" />
            <h2>One line header</h2>
          </div>
          <div class="desktop-view-one-line-paragraph">
            <p>
            ${scompletedata[5].description}
            </p>
          </div>
          <div class="mobile-view-one-line-paragraph">
            <p>${scompletedata[6].description}</p>
          </div>
        </div>
        <div class="one-line-content-top">
          <div class="one-line-content">
            <img src="./assets/images/svg/small-bg-logo.svg" alt="starimage" />
            <h2>One line header</h2>
          </div>
          <div class="desktop-view-one-line-paragraph">
            <p>
            ${scompletedata[7].description}
            </p>
          </div>
          <div class="mobile-view-one-line-paragraph">
            <p>${scompletedata[8].description}</p>
          </div>
        </div>
      </div>

      <div class="second-screen-image">
        <img src="./assets/images/svg/Imagebg.svg" alt="ImageScreen" />
      </div>
    </section>`;
  document.getElementById('features').innerHTML = features;
  piechart = `<section class="chart-container padding">
      <div class="big-chart">
        <img src="./assets/images/svg/Bigchart.svg" alt="piechart" />
      </div>
      <div class="precentage">
        <div class="sub-precentage">
          <div class="dot-precentage">
            <img src="./assets/images/Indicator1.png" alt="piechart-indication">
          </div>
          <div class="dot-precentage1">
            <div class="bold-data presentage-font-style">
              <h1>${scompletedata[1].id}%</h1>
            </div>
            <div class="lightData">Downloads</div>
          </div>
        </div>
        <div class="sub-precentage">
          <div class="dot-precentage">
            <img src="./assets/images/Indicator2.png" alt="piechart-indication">
          </div>
          <div class="dot-precentage1">
            <div class="bold-data presentage-font-style">
              <h1>${scompletedata[2].id}%</h1>
            </div>
            <div class="light-data">User</div>
          </div>
        </div>
        <div class="sub-precentage">
          <div class="dot-precentage">
            <img src="./assets/images/Indicator3.png" alt="piechart-indication">
          </div>
          <div class="dot-precentage1">
            <div class="bold-data presentage-font-style">
              <h1>${scompletedata[8].id}%</h1>
            </div>
            <div class="light-data">Subscribers</div>
          </div>
        </div>
        <div class="sub-precentage">
          <div class="dot-precentage">
            <img src="./assets/images/Indicator4.png" alt="piechart-indication">
          </div>
          <div class="dot-precentage1">
            <div class="bold-data presentage-font-style">
              <h1>${scompletedata[6].id}%</h1>
            </div>
            <div class="light-data">Products</div>
          </div>
        </div>
      </div>
      <div class="dot-content chart-font-style">
        <p>${scompletedata[4].description}</p>

        <p class="dull-font ">
        ${scompletedata[11].description}
        </p>
      </div>
    </section>`;
  document.getElementById('piechart').innerHTML = piechart;
})

// FromJs

let gmail = "the path to the resource you want to fetch — and does not directly return the JSON response body but instead returns a promise that resolves with a Response object."
let mail = "";
mail = `<section class="gmail-button" id="gmail">
<div>
  <h2>Heading</h2>
  <p class="gmail-button-font-style">${gmail}</p>
</div>

<div class="gmail-and-button">
  <input type="email" placeholder="Gmail" id="contact-confirm-email" onkeyup="validateConfirmEmail()"/>

<button type="submit" onclick="confirmEmail()" class="primary-button"><a
  href="#">Subscribe</a></button>
  </div>
</section>`;

document.getElementById("gmail").innerHTML = mail;
