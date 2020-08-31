const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },

  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


// TOP NAV LINKS
const nav = document.querySelector('nav');
const allNavLinks = nav.querySelectorAll('a');

const firstLink = document.createElement("a");
firstLink.innerText = "Happy"
firstLink.style.color = "green"
nav.prepend(firstLink);

const secondLink = document.createElement("a");
secondLink.innerText = "Days"
secondLink.style.color = "green"
nav.appendChild(secondLink);

console.log(allNavLinks);

for (let i = 0; i < allNavLinks.length; i++){
  allNavLinks[i].textContent=siteContent.nav["nav-item-"+(i+1)];
  allNavLinks[i].style.color = "green";
}

// allNavLinks.forEach(curLink => curLink.style.color="green");

// allNavLinks.forEach((link,index)=>{
//   link.textContent = nav["nav-i"];
//   // console.log(nav[`nav-item=${index}`]);
// });

// 

// CTA
const ctaH1 = document.querySelector(".cta-text h1");
// const ctaH1 = ctaText.firstChild;
// console.log(ctaH1);
// const brTag = document.createElement('br');
// console.log(ctaH1.innerText);

// ctaH1.textContent = siteContent["cta"]["h1"];
ctaH1.innerHTML = "DOM<br>IS<br>AWESOME"

// ctaH1.textContent = "DOM"+brTag+"Is"+brTag+"Awesome";
// ctaH1.textContent = siteContent.cta.h1.replace(" ", "<br />");
// console.log(ctaH1.innerText);

const ctaButton = document.querySelector(".cta-text button")
ctaButton.innerText = siteContent.cta.button;

const ctaImg = document.querySelector("#cta-img");
// console.log(siteContent.cta["img-src"]);

ctaImg.src=siteContent.cta["img-src"];

// console.log(siteContent);

// TOP CONTENT
// const feature = document.querySelector(".top-content .text-content");
// console.log(siteContent["main-content"]["features-h4"]);

const topList = ["features", "about"];
const bottomList = ["services", "product", "vision"];

modifyItem(".top-content", topList);
modifyItem(".bottom-content", bottomList);

// feature.querySelector("h4").innerText = siteContent["main-content"]["features-h4"];
// feature.querySelector("p").innerText = siteContent["main-content"]["features-content"];

// const about = document.querySelector(".top-content .text-content:nth-child(2)");
// about.querySelector("h4").innerText = siteContent["main-content"]["about-h4"];
// about.querySelector("p").innerText = siteContent["main-content"]["about-content"];

const middleImg = document.querySelector("#middle-img");
middleImg.src=siteContent["main-content"]["middle-img-src"];

// const services = document.querySelector(".bottom-content .text-content");
// services.querySelector("h4").innerText = siteContent["main-content"]["services-h4"];
// services.querySelector("p").innerText = siteContent["main-content"]["services-content"];

function modifyItem (topOrBottom, itemList){
  console.log(topOrBottom);
  const curParent = document.querySelector(topOrBottom);
  const numChildren = curParent.querySelectorAll("div");

  // console.log(numChildren.length);

  for (let i = 0; i < numChildren.length; i++){
    // const text = topOrBottom + ".text-content:nth-child("+(i+1)+")";
    // console.log(text);
    const curItem = document.querySelector(topOrBottom +" .text-content:nth-child("+(i+1)+")");
    console.log(curItem);
    curItem.querySelector("h4").innerText = siteContent["main-content"][itemList[i]+"-h4"];
    curItem.querySelector("p").innerText = siteContent["main-content"][itemList[i]+"-content"];
  }

}

const contactArray = Object.values(siteContent["contact"]);
console.log(contactArray);
const contactChildren = document.querySelector(".contact").children;
console.log(contactChildren);

for (let i = 0; i < contactChildren.length; i ++){
  contactChildren[i].innerText = contactArray[i];
}

// for (const curItem in contactArray){
//   contactChildren[i].innerText = curItem;
// }

// const contact = document.querySelector("contact");
// contact.querySelector("h4").innerText = 

const footer = document.querySelector("footer p");
footer.innerText = siteContent.footer.copyright;

// function modifySection(name){

// }