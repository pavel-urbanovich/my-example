const pets = [
    {
        "name": "Jennifer",
        "img": "../../assets/images/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Sophia",
        "img": "../../assets/images/sofia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "../../assets/images/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Scarlett",
        "img": "../../assets/images/pets-scarlet.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Katrine",
        "img": "../../assets/images/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Timmy",
        "img": "../../assets/images/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Freddie",
        "img": "../../assets/images/pets-katrine-2.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "../../assets/images/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
]

const burger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const opacity = document.querySelector('.opacity');
const zIndexArr = [
    document.querySelector('.intro-button'),
    document.querySelector('.pets-info'),
    document.querySelector('.right-slider'),
    document.querySelector('.left-slider'),
    document.querySelector('.friends-button'),
    document.querySelector('.card-info')
];

const zIndexArrFooter = [
    document.querySelectorAll('.footer-link'),
    document.querySelectorAll('.email-logo')
]


/* Burger-menu*/ 
function openMenu() {
    menu.classList.toggle('open');
    burger.classList.toggle('open');
    opacity.classList.toggle('active');
    zIndexArr.forEach(item => item.style.zIndex = '0');
    zIndexArrFooter.forEach (item => item.forEach(el => el.style.zIndex = '0'));
}

burger.addEventListener('click', openMenu);

function closeMenu(event) {
    if(event.target.classList.contains('navigation-list') || event.target.classList.contains('navigation')) {
        menu.classList.remove('open');
        opacity.classList.remove('active');
        burger.classList.remove('open');
        zIndexArr.forEach(item => item.style.zIndex = '100');
        zIndexArrFooter.forEach (item => item.forEach(el => el.style.zIndex = '110'));

    }
}

menu.addEventListener('click', closeMenu);

/*Slider*/

const rightSLD = document.querySelector('.right-slider');
const leftSLD = document.querySelector('.left-slider');
const sliderWrapper = document.querySelector('.content-information');
const petsALL = document.querySelectorAll('.pets-info')
const sl = document.querySelector('.slider-wrapper')

// let count = 1;
let ofset = 0




function showRightSlider() {
   
   ofset = sliderWrapper.offsetWidth + 90;
    const arr = [...sliderWrapper.children]

       sliderWrapper.style.transform = `translateX(-${ofset}px)`
        for(let i = 0; i < 3; i++) {
        let index = Math.abs(Math.floor(Math.random() * 10) - 2);
        getElemSlider(pets, index);

    } 
}


function showLefttSlider() {
    // ofset = ofset - sliderWrapper.offsetWidth + 90;
    console.log(ofset)
    console.log(ofset)
    ofset = ofset - (sliderWrapper.offsetWidth + 90)
    // sliderWrapper.style.transform = "translateX(0px)"
    // sliderWrapper.style.transform = "translateX(-1080px)"
    for(let i = 0; i < 3; i++) {
        let index = Math.abs(Math.floor(Math.random() * 10) - 2);
        getElemSlider(pets, index)
        sliderWrapper.style.transform = `translateX(+${ofset}px)`
        
        // console.log(`count ${count} ширина ${ofset}`)
        
    }
    // sliderWrapper.style.transform = "translateX(-${ofset})"
    
    //    sliderWrapper.lastElementChild.remove()
}


function getElemSlider(obj, i) {
        
        const petsElem = document.createElement('div');
        petsElem.classList.add('pets-info');
        
        sliderWrapper.append(petsElem)
        
        const petsIMG = document.createElement('img');
        petsIMG.alt = 'photo'
        petsIMG.src = `${obj[i].img}`;
        petsElem.append(petsIMG);

        const petsNAME = document.createElement('h4');
        petsNAME.classList.add('pets-name');
        petsNAME.innerHTML = `${obj[i].name}`;
        petsElem.append(petsNAME);

        const petsBTN = document.createElement('button');
        petsBTN.classList.add('pets-button');
        petsBTN.innerHTML = 'Learn more';
       
        
    }


rightSLD.addEventListener('click', showRightSlider)
leftSLD.addEventListener('click', showLefttSlider)
