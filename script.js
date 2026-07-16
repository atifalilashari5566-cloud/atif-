// =====================================
// HAPPY BIRTHDAY ATIF ❤️
// PREMIUM VERSION
// =====================================

const pages = document.querySelectorAll(".page");
const startBtn = document.getElementById("startBtn");
const music = document.getElementById("music");

let currentPage = 0;

function showPage(index){

    pages.forEach(page=>page.classList.remove("active"));

    pages[index].classList.add("active");

}

// ======================
// STARS
// ======================

const stars=document.getElementById("stars");

for(let i=0;i<250;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*3+"s";

    stars.appendChild(star);

}

// ======================
// HEARTS
// ======================

const hearts=document.getElementById("hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(5+Math.random()*4)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>heart.remove(),9000);

}

setInterval(createHeart,450);

// ======================
// FLOWERS
// ======================

const flowers=document.getElementById("flowers");

function createFlower(){

    const flower=document.createElement("div");

    flower.className="flower";

    flower.innerHTML="🌹";

    flower.style.left=Math.random()*100+"vw";

    flower.style.animationDuration=(6+Math.random()*5)+"s";

    flowers.appendChild(flower);

    setTimeout(()=>flower.remove(),11000);

}

setInterval(createFlower,650);
