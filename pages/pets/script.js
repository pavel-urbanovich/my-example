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

/* Burger-menu*/ 
const burger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const opacity = document.querySelector('.opacity');
const petsArr = document.querySelectorAll('.pets-info');
const pointEventsBurger = document.querySelectorAll('.logo-link');
const zIndexArr = [
    document.querySelector('.previos'),
    document.querySelector('.previos-end'),
    document.querySelector('.number'),
    document.querySelector('.next'),
    document.querySelector('.next-end'),
];

const zIndexArrFooter = [
    document.querySelectorAll('.footer-link'),
    document.querySelectorAll('.email-logo')
]


function openMenu() {
    menu.classList.toggle('open');
    burger.classList.toggle('open');
    opacity.classList.toggle('active');
    petsArr.forEach(item => item.style.position = 'static')
    pointEventsBurger.forEach(item => item.classList.toggle('add'));
    zIndexArr.forEach(item => item.style.zIndex = '-1');
    zIndexArrFooter.forEach (item => item.forEach(el => el.style.zIndex = '-1'));
}

burger.addEventListener('click', openMenu);

function closeMenu(event) {
    if(event.target.classList.contains('navigation-list') || event.target.classList.contains('navigation')) {
        menu.classList.remove('open');
        opacity.classList.remove('active');
        burger.classList.remove('open');
        petsArr.forEach(item => item.style.position = 'relative');
        zIndexArr.forEach(item => item.style.zIndex = '100');
        zIndexArrFooter.forEach (item => item.forEach(el => el.style.zIndex = '100'));
        pointEventsBurger.forEach(item => item.classList.remove('add'));
    }
}

menu.addEventListener('click', closeMenu);

const petsWrapper = document.querySelector('.content-information');
const body = document.querySelector('.body')

function showPopup(event) {
    const target = event.target.dataset.pets;
    
    for (let i = 0; i < pets.length; i++) {
        if (pets[i].name === target) {
            getPopup(pets[i])
        }
    }
}

/* Popup*/

function getPopup(obj) {
    const popup = document.createElement('div');
    const popupWrapper = document.createElement('div');
    const popupCloseElement = document.createElement('div');
    const popupCloseElementItem = document.createElement('img');
    const popupContent = document.createElement('div');
    const popupImage = document.createElement('img');
    const popupContentDescription = document.createElement('div');
    const popupTitleContainer = document.createElement('div');
    const popupTitle = document.createElement('h3');
    const popupSubTitle = document.createElement('h4');
    const popupInformation = document.createElement('h5');
    const popupSubInformation = document.createElement('ul');
    const SubInformationItem1 = document.createElement('li');
    const SubInformationItem2 = document.createElement('li');
    const SubInformationItem3 = document.createElement('li');
    const SubInformationItem4 = document.createElement('li');
    const SubInformationlist1 = document.createElement('span');
    const SubInformationlist2 = document.createElement('span');
    const SubInformationlist3 = document.createElement('span');
    const SubInformationlist4 = document.createElement('span');
    
    popupWrapper.classList.add('popupWrapper');
    popup.classList.add('popup');
    popupCloseElement.classList.add('popup-close');
    popupCloseElementItem.classList.add('close-item');
    popupCloseElementItem.src = '../../assets/icons/close-item.svg';
    popupCloseElementItem.alt = 'close element';
    popupContent.classList.add('popup-content');
    popupImage.classList.add('popup-img');
    popupImage.src = `${obj.img}`; 
    popupImage.alt = 'image pets';
    popupContentDescription.classList.add('popup-description');
    popupTitleContainer.classList.add('title-container');
    popupTitle.classList.add('popup-title');
    popupTitle.innerHTML = `${obj.name}`;
    popupSubTitle.classList.add('popup-subtitle');
    popupSubTitle.innerHTML = `${obj.type} - ${obj.breed}`;
    popupInformation.classList.add('popup-informaion');
    popupInformation.innerHTML = `${obj.description}`;
    popupSubInformation.classList.add('popup-subinformation');
    SubInformationItem1.classList.add('subinformation-item');
    SubInformationItem2.classList.add('subinformation-item');
    SubInformationItem3.classList.add('subinformation-item');
    SubInformationItem4.classList.add('subinformation-item');
    SubInformationlist1.classList.add('subinformation-list');
    SubInformationlist2.classList.add('subinformation-list');
    SubInformationlist3.classList.add('subinformation-list');
    SubInformationlist4.classList.add('subinformation-list');
    SubInformationItem1.innerHTML = `Age: `;
    SubInformationlist1.innerHTML = `${obj.age}`;
    SubInformationItem2.innerHTML = `Inoculations: `;
    SubInformationlist2.innerHTML = `${obj.inoculations}`;
    SubInformationItem3.innerHTML = `Idiseases: `;
    SubInformationlist3.innerHTML = `${obj.diseases}`;
    SubInformationItem4.innerHTML = `Parasites: `;
    SubInformationlist4.innerHTML = `${obj.parasites}`;

    body.append(popup);
    popup.append(popupWrapper);
    popupWrapper.append(popupCloseElement);
    popupCloseElement.append(popupCloseElementItem);
    popupWrapper.append(popupContent);
    popupContent.append(popupImage);
    popupContent.append(popupContentDescription);
    popupContentDescription.append(popupTitleContainer)
    popupTitleContainer.append(popupTitle);
    popupTitleContainer.append(popupSubTitle);
    popupContentDescription.append(popupInformation);
    popupContentDescription.append(popupSubInformation);
    popupSubInformation.append(SubInformationItem1);
    SubInformationItem1.append(SubInformationlist1);
    popupSubInformation.append(SubInformationItem2);
    SubInformationItem2.append(SubInformationlist2);
    popupSubInformation.append(SubInformationItem3);
    SubInformationItem3.append(SubInformationlist3);
    popupSubInformation.append(SubInformationItem4);
    SubInformationItem4.append(SubInformationlist4);
    
    zIndexArr.forEach(item => item.style.zIndex = '0');
    zIndexArrFooter.forEach (item => item.forEach(el => el.style.zIndex = '0'));
}

petsWrapper.addEventListener('click', showPopup);


/* Close popup */

function closePopup(event) {
    if(event.target.classList.contains('popup-close') || event.target.classList.contains('popup') || event.target.classList.contains('close-item')) {
        body.lastChild.remove();
        zIndexArr.forEach(item => item.style.zIndex = '100');
        zIndexArrFooter.forEach (item => item.forEach(el => el.style.zIndex = '100'));
    }
}

body.addEventListener('click', closePopup);



