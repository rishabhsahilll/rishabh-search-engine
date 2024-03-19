function wikipediasearch(){
    query = document.getElementById('textSearch').value;
    query = query.replace('/<g',"&lt;").replace('/>/g',"&gt;");
    if(query==false){
        
        console.log("please enter your query");
        window.location = 'https://wikipedia.org'
        return false;
    }
    else{
        window.location = 'https://en.wikipedia.org/wiki/' + query
        return false;

    }


}    

function wikipediasearchq(){
    query = document.getElementById('gsc-i-id1').value;
    query = query.replace('/<g',"&lt;").replace('/>/g',"&gt;");
    if(query==false){
        
        console.log("please enter your query");
        window.location = 'https://wikipedia.org'
        return false;
    }
    else{
        window.location = 'https://en.wikipedia.org/wiki/' + query
        return false;

    }
}    

function record() {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";

    recognition.onresult = function(event) {
        // console.log(event);
        query = document.getElementById('textSearch').value = event.results[0][0].transcript;
        window.location = 'https://rishabhsahil.github.io/rishabh-search-engine/search?q=' + query
        return false;
    }
    recognition.start();

}

function mapsearch(){
    query = document.getElementById('textSearch').value;
    query = query.replace('/<g',"&lt;").replace('/>/g',"&gt;");
    if(query==false){
        
        console.log("please enter your query");
        window.location = 'https://www.google.com/maps'
        return false;
    }
    else{
        window.location = 'https://www.google.com/maps/place/' + query
        return false;

    }
} 

function youtubesearch(){
    query = document.getElementById('textSearch').value;
    query = query.replace('/<g',"&lt;").replace('/>/g',"&gt;");
    if(query==false){
        console.log("please enter your query");
        window.location = 'https://www.youtube.com'
        return false;
    }
    else{
        window.location = 'https://www.youtube.com/results?search_query=' + query
        return false;

    }
} 

function songm(){
    query = document.getElementById('textSearch').value;
    query = query.replace('/<g',"&lt;").replace('/>/g',"&gt;");
    if(query==false){
            
        console.log("please enter your query");
        window.location = 'https://gaana.com/'
        return false;
    }
    else{
        window.location = 'https://gaana.com/search/' + query
        return false;

    }
} 


function mapsearchq(){
    query = document.getElementById('gsc-i-id1').value;
    query = query.replace('/<g',"&lt;").replace('/>/g',"&gt;");
    if(query==false){
        
        console.log("please enter your query");
        window.location = 'https://www.google.com/maps'
        return false;
    }
    else{
        window.location = 'https://www.google.com/maps/place/' + query
        return false;

    }
} 

function youtubesearchq(){
    query = document.getElementById('gsc-i-id1').value;
    query = query.replace('/<g',"&lt;").replace('/>/g',"&gt;");
    if(query==false){
        
        console.log("please enter your query");
        window.location = 'https://www.youtube.com'
        return false;
    }
    else{
        window.location = 'https://www.youtube.com/results?search_query=' + query
        return false;

    }
} 

function songmq(){
    query = document.getElementById('gsc-i-id1').value;
    query = query.replace('/<g',"&lt;").replace('/>/g',"&gt;");
    if(query==false){
            
        console.log("please enter your query");
        window.location = 'https://gaana.com/'
        return false;
    }
    else{
        window.location = 'https://gaana.com/search/' + query
        return false;

    }
} 

document.getElementById('frmsearch').onsubmit = function() {
    query = document.getElementById('textSearch').value;
    query = query.replace('/<g',"&lt;").replace('/>/g',"&gt;");
    if(query==false){
        
        console.log("please enter your query");
        return false
    }
    
    else{
        window.location = 'search?q=' + query
        return false;

    }

}

function ics(){
    query = document.getElementById('textSearch').value;
    query = query.replace('/<g',"&lt;").replace('/>/g',"&gt;");
    if(query==false){
        
        console.log("please enter your query");
        window.location = 'https://www.google.com/'
        return false;
    }
    else{
        window.location = 'https://www.google.com/search?q=' + query
        return false;

    }
} 

function ics_s(){
    query = document.getElementById('gsc-i-id1').value;
    query = query.replace('/<g',"&lt;").replace('/>/g',"&gt;");
    if(query==false){
        
        console.log("please enter your query");
        window.location = 'https://www.google.com/'
        return false;
    }
    else{
        window.location = 'https://www.google.com/search?q=' + query
        return false;

    }
} 

function imageSearch() {
    query = document.getElementById('textSearch').value;
    query = query.replace('/<g',"&lt;").replace('/>/g',"&gt;");
    if(query==false){
        console.log("please enter your query");
        window.location = 'https://lexica.art/'
        return false;
    }
    else{
        window.location = 'https://lexica.art/?q=' + query
        return false;

    }
} 


function imageSearch_2() {
    query = document.getElementById('gsc-i-id1').value;
    query = query.replace('/<g',"&lt;").replace('/>/g',"&gt;");
    if(query==false){
        console.log("please enter your query");
        window.location = 'https://lexica.art/'
        return false;
    }
    else{
        window.location = 'https://lexica.art/?q=' + query
        return false;

    }
} 

function onlinegamesearch() {
    query = document.getElementById('textSearch').value;
    query = query.replace('/<g',"&lt;").replace('/>/g',"&gt;");
    if(query==false){
        console.log("please enter your query");
        window.location = 'https://www.crazygames.com'
        return false;
    }
    else{
        window.location = 'https://www.crazygames.com/search?q=' + query
        return false;

    }
} 

// ------------------------------ Type Animation -----------------------------------------

// // Get the current visitor's timezone offset in minutes
// var timezoneOffset = new Date().getTimezoneOffset();

// // Convert timezone offset to milliseconds
// var timezoneOffsetMillis = timezoneOffset * 60 * 1000;

// // Get current date and time in visitor's timezone
// var currentDate = new Date(Date.now() + timezoneOffsetMillis);
// var currentMonth = visitorDate.getMonth() + 1; // JavaScript months are 0-based


// // January 01
// if (currentMonth === 1 && currentDate.getDate() === 17) {
//     textArray = ["EARCH","-ENGINE","AHIL",".Y",".E"," :- Happy Birthday RISHABH-SAHIL"];
// }

// if (currentMonth === 1 && currentDate.getDate() === 26) {
//     textArray = ["EARCH","-ENGINE","AHIL",".Y",".E"," :- Happy Republic"];
// }

// // March 03
// if (currentMonth === 3 && currentDate.getDate() === 25) {
//     textArray = ["EARCH","-ENGINE","AHIL",".Y",".E"," :- Happy Holi To All Of You"];
// }

// // August 08
// if (currentMonth === 8 && currentDate.getDate() === 15) {
//     textArray = ["EARCH","-ENGINE","AHIL",".Y",".E"," :- Happy Independence Day"];
// }

// if (currentMonth === 8 && currentDate.getDate() === 16) {
//     textArray = ["EARCH","-ENGINE","AHIL",".Y",".E"," :- Happy Birthday Sagar"];
// }

// if (currentMonth === 8 && currentDate.getDate() === 30) {
//     textArray = ["EARCH","-ENGINE","AHIL",".Y",".E"," :- Happy Raksha Bandhan"];
// }

// // // October 10
// // if (currentMonth === 10 && currentDate.getDate() === 20) {
// //     textArray = ["EARCH","-ENGINE","AHIL",".Y",".E"," :- Happy Durga Puja"];
// // }
// // if (currentMonth === 10 && currentDate.getDate() === 24) {
// //     textArray = ["EARCH","-ENGINE","AHIL",".Y",".E"," :- Happy Vijayadashami"];
// // }
// // if (currentMonth === 10 && currentDate.getDate() === 20) {
// //     textArray = ["EARCH","-ENGINE","AHIL",".Y",".E"," :- Happy Durga Puja"];
// // }
// // if (currentMonth === 10 && currentDate.getDate() === 20) {
// //     textArray = ["EARCH","-ENGINE","AHIL",".Y",".E"," :- Happy Durga Puja"];
// // }
// // if (currentMonth === 10 && currentDate.getDate() === 20) {
// //     textArray = ["EARCH","-ENGINE","AHIL",".Y",".E"," :- Happy Durga Puja"];
// // }
// // if (currentMonth === 10 && currentDate.getDate() === 20) {
// //     textArray = ["EARCH","-ENGINE","AHIL",".Y",".E"," :- Happy Durga Puja"];
// // }
// // if (currentMonth === 10 && currentDate.getDate() === 20) {
// //     textArray = ["EARCH","-ENGINE","AHIL",".Y",".E"," :- Happy Durga Puja"];
// // }
// // if (currentMonth === 10 && currentDate.getDate() === 20) {
// //     textArray = ["EARCH","-ENGINE","AHIL",".Y",".E"," :- Happy Durga Puja"];
// // }

// // November 11
// if (currentMonth === 11 && currentDate.getDate() === 12) {
//     textArray = ["EARCH","-ENGINE","AHIL",".Y",".E"," :- Happy Diwali", " :- Wishing you a bright and joyful Diwali!"];
// }

// if (currentMonth === 11 && currentDate.getDate() === 19) {
//     textArray = ["EARCH","-ENGINE","AHIL",".Y",".E"," :- Happy Chhath Puja"];
// }

// // Testing...!!
// if (currentMonth === 8 && currentDate.getDate() === 10) {
//     textArray = ["EARCH Engine"];
// }

// else {
//     textArray = ["EARCH","-ENGINE","AHIL",".Y",".E",currentDate+"-"+"-"+currentMonth];
// }

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = ["EARCH","-ENGINE","AHIL",".Y",".E"]

const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

// -------------------------- Decoration My App --------------------------


// List of image URLs
const images = [
    // 'https://raw.githubusercontent.com/RishabhSahil/rs.dev/788a0c78da8b1431674157f5d2a7cb6aa50f22eb/static/animated-img/gif-0.gif',
    // 'https://raw.githubusercontent.com/RishabhSahil/rs.dev/788a0c78da8b1431674157f5d2a7cb6aa50f22eb/static/animated-img/gif-1.gif',
    // 'https://raw.githubusercontent.com/RishabhSahil/rs.dev/788a0c78da8b1431674157f5d2a7cb6aa50f22eb/static/animated-img/gif-2.gif',
    // 'https://raw.githubusercontent.com/RishabhSahil/rs.dev/788a0c78da8b1431674157f5d2a7cb6aa50f22eb/static/animated-img/gif-3.gif',
    // 'https://raw.githubusercontent.com/RishabhSahil/rs.dev/788a0c78da8b1431674157f5d2a7cb6aa50f22eb/static/animated-img/gif-4.gif',
    // 'https://raw.githubusercontent.com/RishabhSahil/rs.dev/788a0c78da8b1431674157f5d2a7cb6aa50f22eb/static/animated-img/gif-5.gif'
//     "static/rishabh-logos/ics.png",
    "static/rishabh-logos/rishabh1.png",
//     "static/rishabh-logos/rse2.png",
//     "static/rishabh-logos/rsy.png",
//     "static/rishabh-logos/shivam2.png",
//     "static/rishabh-logos/yash2.png",
    "static/img/R-HABH2.gif"
];

// Function to get a random item from an array
function getRandomItem(array) {
return array[Math.floor(Math.random() * array.length)];
}

// // Set the src attribute of the img tag to a random image
// const randomImage = document.getElementById('random-image');
// randomImage.src = getRandomItem(images);
