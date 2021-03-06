
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
for(let i=1;i<4;i++)
setTimeout(()=> {
    $('.right.carousel-control').click();
},i*3000);

// RENDER WORKS
const slider = $("#myCarousel .carousel-inner");
let works = [
    {
        name: "Pea Clock",
        desc: "",
        img: "https://drive.google.com/uc?id=18u6XDISidqm4AVMEeiMkUV4RCAgL2OJ0",
        link: "./SP3-ClockClone/"
    },
    {
        name: "Fashion Store",
        desc: "",
        img: "https://drive.google.com/uc?id=1Fmj0OdxYojhlIRFVeTbyiTr-2SYj3qNU",
        link: "./SP12-GOYAStoreTemplateClone/"
    },
    {
        name: "Pea Calculator",
        desc: "",
        img: "https://drive.google.com/uc?id=1iCwXUGd7So_FJ2Mg-ylnom2bluYkBSeO",
        link: "./SP13-CalculatorwithVanillaJS/"
    },
    {
        name: "Pea Pomodoro",
        desc: "",
        img: "https://drive.google.com/uc?id=10ohFOfq261giBJdbEMbUp3mGCf2GQmwy",
        link: "./SP8-MyPomodoro/"
    },
    {
        name: "Task-list",
        desc: "",
        img: "https://drive.google.com/uc?id=1VDQMkGlwHlvE0tZRRZezEwNr2OX4aF-r",
        link: "SP14-TodoListwithVanillaJs"
    },
    {
        name: "Caro Game",
        desc: "",
        img: "https://drive.google.com/uc?id=1HcN07tyFCdgUE9liS5nvtsKieqiNkt9O",
        link: "./SP4-CaroGamewithVanillaJS/"
    },
    {
        name: "Snake game",
        desc: "",
        img: "https://drive.google.com/uc?id=1zvEozVLonJ_ZI_pPbxjVf-UWqM4HmNPe",
        link: "./SP7-SnakeGameClone/"
    },
    {
        name: "Music Radio",
        desc: "",
        img: "https://drive.google.com/uc?id=1qH7r7z6AXWawgyojAyBSomaswyzwpVWo",
        link: "./SP10-DuskMusicPlayer/"
    },
    {
        name: "Fin Media",
        desc: "",
        img: "https://drive.google.com/uc?id=1ddRM6rHr4oqphB9VXZ-0wENsfb2ycDx6",
        link: "./SP1-FinSocialMediaProfile/"
    },
    {
        name: "Work manager",
        desc: "",
        img: "https://drive.google.com/uc?id=1UB_-vqkYW1TMCPFrRBPkroI3x7aAvK7_",
        link: "./SP9-WorkspaceUI/"
    },
    {
        name: "Peacoin Graph",
        desc: "",
        img: "https://drive.google.com/uc?id=1zTtVai4ezfZA4CO-FyLkOnVsnCKE3M2H",
        link: "./SP6-CoinGraph/"
    },
    {
        name: "Drag Drop Tour",
        desc: "",
        img: "https://drive.google.com/uc?id=1fhPx2VzgYXNVEjfS4OAJgesaBmJvn8mk",
        link: "./SP2-GoDragwithVanillaJS/"
    },
    // {
    //    name: "Shopee UI",
    //    desc: "",
    //    img: "https://drive.google.com/uc?id=1fJ6DpAuqBN0jwhbdyMO_Z_7n4dEsqqvq",
    //    link: "https://peakodev.github.io/ShopeeUI/"
    // },
    // {
    //     name: "Bedao contest",
    //     desc: "A well-known monthly programming contest in Vietnam.",
    //     img: "https://drive.google.com/uc?id=1EqDGWE5WPMKOvyth4GmrfcWkqyfly1Bt",
    //     link: "https://peakodev.github.io/PeaGoDrag/"
    // },
    // {
    //     name: "Mogo template",
    //     desc: "",
    //     img: "https://drive.google.com/uc?id=1EqDGWE5WPMKOvyth4GmrfcWkqyfly1Bt",
    //     link: "https://peakodev.github.io/mogo/"
    // }
];

let str = (i) => {
    let s = i.toString();
    while(s.length<3) s='0'+s;
    return s;
}

let html = (i,n) => {
    a = works[i];
    b = works[i+1];
    c = works[i+2];
    
    a = `<div class="col-sm-4">

    <a target="_blank" href="${a.link}" title="${a.title}" class="black-image-project-hover">
      <img src="${a.img}" alt="" class="img-responsive">
    </a>
    <div class="card-container card-container-lg">
      <h4>${str(i+1)}/${str(n)}</h4>
      <h3>${a.name}</h3>
      <p>${a.desc}</p>
      <a target="_blank" href="${a.link}" title="" class="btn btn-default">Discover</a>
    </div>
  </div>`

    b = `<div class="col-sm-4">

    <a target="_blank" href="${b.link}" title="${b.title}" class="black-image-project-hover">
      <img src="${b.img}" alt="" class="img-responsive">
    </a>
    <div class="card-container card-container-lg">
      <h4>${str(i+2)}/${str(n)}</h4>
      <h3>${b.name}</h3>
      <p>${b.desc}</p>
      <a target="_blank" href="${b.link}" title="" class="btn btn-default">Discover</a>
    </div>
  </div>`

    c = `<div class="col-sm-4">

    <a target="_blank" href="${c.link}" title="${c.title}" class="black-image-project-hover">
      <img src="${c.img}" alt="" class="img-responsive">
    </a>
    <div class="card-container card-container-lg">
      <h4>${str(i+3)}/${str(n)}</h4>
      <h3>${c.name}</h3>
      <p>${c.desc}</p>
      <a target="_blank" href="${c.link}" title="" class="btn btn-default">Discover</a>
    </div>
  </div>`

  return `<div class="row">
    ${a+b+c}
    </div>`
}

let render = () => {
    let n = works.length;
    n-=n%3;

    for(let i=0;i<n;i+=3) {
        let item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = html(i,n);
        slider.appendChild(item);
    }
    let item = slider.querySelector('.item');
    if(item) item.classList.add('active');
}

render();

// FIXED HEIGH ITEMS OF SLIDER
let max = (x,y) => {
    if(x>y) return x;
    return y;
}

let slides = $$(".card-container")

let beautifySlides = () => {
    console.log(window.innerWidth);
    if(window.innerWidth<768) return;

    let h = 0;
    let hp = 0;
    for(let slide of slides) {
        h = max(h,slide.querySelector('h3').offsetHeight);
        hp = max(hp,slide.querySelector('p').offsetHeight);
    }

    console.log(h);
    console.log(hp);
    for(let slide of slides) {
        // slide.querySelector('h3').style.height = h + 'px';
        // slide.querySelector('p').style.height = hp + 'px';
    }
}

beautifySlides();
