var hamburger = document.getElementById("burger");
let hamburgerNavigation = document.getElementById("burgerNav");
function burger() {
  hamburgerNavigation.classList.toggle("display-property"),
    hamburger.classList.toggle("active");
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

// localStorage

var uname = document.getElementById('contact-name');
var uemail = document.getElementById('contact-email');

let popup = document.getElementById('popup');

  

function submitted() {
  localStorage.setItem("UserName", uname.value);
  localStorage.setItem("UserMailid", uemail.value);

  if (validateName() == true && validateEmail() == true) {
    popup.classList.add("open-popup");
  }
}
function closepopup() {
  popup.classList.remove("open-popup","blur");
  document.getElementById('fetchname').innerHTML=localStorage.getItem("UserName");
}

// FromAPI

fetch('https://fakestoreapi.com/products?limit=5').then((data) => {
  return data.json();
}).then((completedata) => {
  let headingdata = "";
  let piechart = "";
  completedata.map((value) => {
    headingdata = `<section class="header-content  max-width">
        <div class="heading">
          <h1 class="header-font-style">${value.category}</h1>
          <p class="heading-normal-content heading-font-style">${value.description}</p>
          <p class="mobile-view-heading heading-font-style">${value.description}</p>
          <input type="text" placeholder="Name" autofocus required id="contact-name" onkeyup="validateName()"/><span id="name-error"></span><br>
          <input type="email" placeholder="Email" id="contact-email"
          required onkeyup="validateEmail()" /> <br>
          <button type="submit" onclick="submitted()" class="primary-button"><a href="#">Subscribe</a></button>
          <p class="dull-heading-font-style dull-font"></p>
        </div>
        <div class="screen-image">
          <img src="./assets/images/svg/Vectorscreen.svg" alt="screenimage" />
        </div>
      </section>`;

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
              <h1>${value.id}%</h1>
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
              <h1>${value.id}%</h1>
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
              <h1>${value.id}%</h1>
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
              <h1>${value.id}%</h1>
            </div>
            <div class="light-data">Products</div>
          </div>
        </div>
      </div>

      <div class="dot-content chart-font-style">
        <p>${value.description}</p>

        <p class="dull-font ">
        ${value.description}
        </p>
      </div>
    </section>`;

  })
  document.getElementById('heading').innerHTML = headingdata;
  document.getElementById('piechart').innerHTML = piechart;
}).catch((error) => {
  error = alert("Error Occured");
})

fetch('https://fakestoreapi.com/products?sort=desc').then((secondaryData) => {
  return secondaryData.json();
}).then((secondarycompletedata) => {
  let about = "";
  let features = "";
  let short = "";
  secondarycompletedata.map((secondaryvalue) => {
    about = ` <section class="about-content padding">
        <div class="about">
          <img src="./assets/images/svg/star_bg.svg" alt="starimage" />
          <div class="desktop-about-pragraph padding">
            <p class="about-font-style">
              Over 92% of computers are infected with Adware and spyware. Such software is
              rarely accompanied by uninstall utility and even when it is it
              almost always leaves broken Windows Registry keys behind it. Even if you have an
              anti-spyware tool your Windows Registry might be broken.
            </p>
          </div>
          <div class="mobile-view-about-pragraph">
            <p class="about-font-style">${secondaryvalue.description}</p>
          </div>
        </div>
      </section>`;
    features = `<section class="one-line-container padding">
      <div>
        <div class="one-line-content-top">
          <div class="one-line-content">
            <img src="./assets/images/svg/small-bg-logo.svg" alt="starimage" />
            <h2>One line header</h2>
          </div>
          <div class="desktop-view-one-line-paragraph">
            <p>
            ${secondaryvalue.description}
            </p>
          </div>
          <div class="mobile-view-one-line-paragraph">
            <p>${secondaryvalue.description}</p>
          </div>
        </div>
        <div class="one-line-content-top">
          <div class="one-line-content">
            <img src="./assets/images/svg/small-bg-logo.svg" alt="starimage" />
            <h2>One line header</h2>
          </div>
          <div class="desktop-view-one-line-paragraph">
            <p>
            ${secondaryvalue.description}
            </p>
          </div>
          <div class="mobile-view-one-line-paragraph">
            <p>${secondaryvalue.description}</p>
          </div>
        </div>
        <div class="one-line-content-top">
          <div class="one-line-content">
            <img src="./assets/images/svg/small-bg-logo.svg" alt="starimage" />
            <h2>One line header</h2>
          </div>
          <div class="desktop-view-one-line-paragraph">
            <p>
            ${secondaryvalue.description}
            </p>
          </div>
          <div class="mobile-view-one-line-paragraph">
            <p>${secondaryvalue.description}</p>
          </div>
        </div>
      </div>

      <div class="second-screen-image">
        <img src="./assets/images/svg/Imagebg.svg" alt="ImageScreen" />
      </div>
    </section>`;
    short = `<section class=" padding">
    <div class="short-heading-container">
      <div class="desktop-view-short-paragraph">
        <h1 class="header-font-style">Short heading</h1>
        <div class="short-heading-paragraph ">
          <p class="short-heading-font-style">${secondaryvalue.description}</p>
        </div>
      </div>
      <div class="mobile-view-short-paragraph">
        <h1 class="header-font-style">Heading</h1>
        <p class="short-heading-font-style">${secondaryvalue.description}</p>
      </div>
      <div class="short-heading-icons ">
        <div class="star-image">
          <div><img src="./assets/images/svg/small_circle.svg" alt="starimage" /></div>
          <p>${secondaryvalue.category}</p>
        </div>
        <div>
          <div class="star-image"><img src="./assets/images/svg/small_circle.svg" alt="starimage" /></div>
          <p>${secondaryvalue.category}</p>
        </div>
        <div>
          <div class="star-image"><img src="./assets/images/svg/small_circle.svg" alt="starimage" /></div>
          <p>${secondaryvalue.category}</p>
        </div>
        <div>
          <div class="star-image"><img src="./assets/images/svg/small_circle.svg" alt="starimage" /></div>
          <p>${secondaryvalue.category}</p>
        </div>
      </div>

      <div class="short-images">
        <img src="./assets/images/svg/Vectorshort heding.svg" alt="bigscreen" />
      </div>
    </div>
  </section>`;
  })
  document.getElementById('about').innerHTML = about;
  document.getElementById('features').innerHTML = features;
  document.getElementById('short').innerHTML = short;

}).catch((secondaryerror) => {
  secondaryerror = alert("Error")
})

// FromJs

let gmail = "the path to the resource you want to fetch — and does not directly return the JSON response body but instead returns a promise that resolves with a Response object."
let mail = "";
mail = `<section class="gmail-button padding">
<div>
  <h2>Heading</h2>
  <p class="gmail-button-font-style">${gmail}</p>
</div>

<div class="gmail-and-button">
  <input type="email" placeholder="Gmail" />
  <button class="primary-button"><a href="#">Subscribe</a></button>
</div>
</section>`;

document.getElementById("gmail").innerHTML = mail;
