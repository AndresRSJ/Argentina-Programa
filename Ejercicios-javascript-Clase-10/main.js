//Ejercicio 1

const containerItems = document.getElementById("container-items");
const buttonList = document.getElementById("button-list");

buttonList.addEventListener("click", (ev)=>{
    ev.preventDefault()
    createListArray()
})

function createArrayRandom(){
    const arrRandom=[];

    for(let i=0; i<=10; i++){
        arrRandom[i] = generateNumRandom();
    }
    
    return arrRandom;
}

function createListArray(){
    const numbers = createArrayRandom().sort((a, b)=> a - b);

    let fragment = new DocumentFragment();

    numbers.forEach( number => {
        const li = document.createElement("li");
        li.textContent = number;
        fragment.appendChild(li);
    });

    containerItems.appendChild(fragment);
}

function generateNumRandom(){
   const numRandom = Math.floor((Math.random()*10000))
   return numRandom;
}




//Ejercicio 2
/*
const simpleArray = [1,2,3,4,5,6];
//a
function iterateWhile(arr){
    let i = 0;
    while(i < arr.length){
        console.log(arr[i])
        i++
    }
}
//iterateWhile(simpleArray)

//b
function iterateFor(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
//iterateFor(simpleArray)

//c
function iterateForEach(arr){
    arr.forEach(element => {
        console.log(element)
    });
}
//iterateForEach(simpleArray)

//d
function iterateMoreOne(arr){
    arr.forEach(element => {
        console.log(element + 1)
    });
}
//iterateMoreOne(simpleArray)

//e 
//const copyArrMoreOne = iterateMoreOne(simpleArray).slice()
//console.log(copyArrMoreOne);

//f
function promArr(arr){
    let sum = 0;
    let numItems = arr.length;
    arr.forEach(element => {
        sum+=element; 
    });

    const prom = sum / numItems;
    console.log(prom)
}

promArr(simpleArray);
*/

//Ejercicio 3
const arrNum = [1,2,3,4,5,6];

const arrSquare = (arr)=>{
    
    let arrSquare = [];

    arr.forEach((element, i) => {
        arrSquare[i] = Math.pow(element, 2);
    });

    return arrSquare;
}

console.log(arrSquare(arrNum))

//Ejercicio 4
const arr = [ 1, -4, 12, 0, -3, 29, -150];

function sumPositives(arr){
    
    let sumPositives = arr.filter(num => num > 0).reduce((a, b)=> a+b, 0);

    return sumPositives;
 
}

console.log(sumPositives(arr))

//Ejercicio 5
const arrNames = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"];

const arrOperations={
    "higherSix": (names)=>{ 
        return names.filter(name => name.length >= 6)
    },
    "firstLetterEm":(names)=>{ 
        return names.filter(name => name[0].toLowerCase() === "m")
    },
    "orderNames":(names)=>{ 
        return names.sort();
    },
    "showInitials": (names)=> {
        return names.map(name => name[0])
    },
    "showUpperCase": (names)=> {
        return names.map(name => name.toUpperCase())
    }, 
    "firstLetterJ": (names)=>{
        return names.some(name => name[0].toLowerCase() === "j");
    }

}
console.log(arrOperations.higherSix(arrNames));
console.log(arrOperations.orderNames(arrNames));
console.log(arrOperations.showInitials(arrNames));
console.log(arrOperations.showUpperCase(arrNames));
console.log(arrOperations.firstLetterJ(arrNames));

//Ejercicio 6
/*
const arrColors = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];

function colorInColors(){
    let colorUser = prompt("Introduce un color").toLowerCase();

    return arrColors.some(color => color === colorUser);
}
console.log(colorInColors());
*/

//Ejercicio 7
let arrNums = [1, 3, 7, 20, 32, 15, 14, 25, 4];

function evenNumber(nums){
    return nums.filter(num => num%2 === 0);
}
console.log(evenNumber(arrNums))

//Ejercicio 8
const arrWords = ["autentic", "phon", "car", "developer", "sky", "change", "over", "study", "unit"];

let reGex = /^[aeiou]{1}/i;

function wordFirstVocal(words){
    return words.filter(word => reGex.test(word));
}
console.log(wordFirstVocal(arrWords))

//Ejercicio 9
const arrElements = ["hola", "que", "tal"];

const orderMetods={
    "swap": (arr, elem1, elem2)=>{
        const copyArr = arr.slice();
        const index1 = copyArr.indexOf(elem1);
        const index2 = copyArr.indexOf(elem2);

        copyArr[index1] = elem2;
        copyArr[index2] = elem1;

        return copyArr;
    }
}

console.log(orderMetods.swap(arrElements, "hola", "tal"));


//Ejercicio 10

const newsDescription = document.querySelectorAll(".description");
const buttonDec = document.querySelector(".button-decrease");
const buttonReset = document.querySelector(".button-reset");
const buttonInc = document.querySelector(".button-increase")

const fontSizes = ["f1", "f2", "f3", "f4","f5"];
let classIndex = 2;


buttonInc.addEventListener("click", (ev)=>{
    ev.preventDefault();
        let previousClass = classIndex;
        classIndex++;
            if(classIndex == classIndex.length){
            classIndex--;
        }

    changeClass(previousClass, classIndex);     
})
buttonReset.addEventListener("click", (ev)=>{
    ev.preventDefault();
    let previousClass = classIndex;
        classIndex = 2;
 
    changeClass(previousClass, classIndex);     
})
buttonDec.addEventListener("click", (ev)=>{
    ev.preventDefault();
        let previousClass = classIndex;
        classIndex--;
            if(classIndex <= 0){
            classIndex = 0;
        }

    changeClass(previousClass, classIndex);     
})

function changeClass(previus, next){
    if(previus !== next){
        newsDescription.forEach(news => {
            news.classList.remove(fontSizes[previus]);
            news.classList.add(fontSizes[next]);   
        });
       
    }
}


//Ejercicio 11

const link = document.querySelector(".container__a");

const buttonIsta = document.querySelector(".container__btn--insta");
const buttonYt = document.querySelector(".container__btn--yt");
const buttonTwitch = document.querySelector(".container__btn--twitch");

const LINKS = {
    INSTAGRAM: "https://www.instagram.com/",  
    YOUTUBE: "https://www.youtube.com/",  
    TWITCH: "https://www.twitch.tv/",  
}
const TEXT = {
    INSTAGRAM: "instagram",
    YOUTUBE: "youtube",
    TWITCH: "twitch",
}

buttonIsta.addEventListener("click",()=> changeLink(LINKS['INSTAGRAM'], TEXT['INSTAGRAM']));

buttonYt.addEventListener("click",()=> changeLink(LINKS['YOUTUBE'], TEXT['YOUTUBE']));

buttonTwitch.addEventListener("click",()=> changeLink(LINKS['TWITCH'], TEXT['TWITCH']));

function changeLink(url, text){
    link.href = ""
    link.href = url;
    link.textContent = "";
    link.textContent = text;
}

//Ejercicio 12
const containerText = document.querySelector(".container__p");
const textStrong = document.querySelectorAll(".container__p--strong")

 textStrong.forEach(element => {
 
     element.addEventListener("click", ()=>{
        element.classList.toggle("ocultText")
     })
    
 });

//Ejercicio 13

const box = document.querySelector(".container__box");

box.addEventListener("dblclick", ()=>{
    box.classList.toggle("redimension");
})

//Ejercicio 14

const linkView = document.querySelector(".container__link--link");
const textLink = document.querySelector(".container__p--link")

linkView.addEventListener("click", (ev)=>{
    ev.preventDefault();

    textLink.textContent = `URL: ${linkView.href}`;
})

//Ejercicio 15

const form_btn = document.querySelector(".form-button");
const form_mensaje = document.querySelector(".form-mensaje");
const form_inputs = document.querySelectorAll(".form__input")



form_btn.addEventListener("click", (ev)=>{
    ev.preventDefault();
    
    if(checkInputs(form_inputs)){
        form_mensaje.textContent = "¡Completa todos los campos!"
    }else{
        form_mensaje.textContent = "¡Formulario enviado con exito!"
    }

})

function checkInputs(inputs){
   for(let i=0; i<inputs.length; i++){
    if(inputs[i].value === ""){
        return true
    }
   }
}
