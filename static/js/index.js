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

function imageSearch() {
    query = document.getElementById('textSearch').value;
    query = query.replace('/<g',"&lt;").replace('/>/g',"&gt;");
    if(query==false){
        console.log("please enter your query");
        window.location = 'https://unsplash.com'
        return false;
    }
    else{
        window.location = 'https://unsplash.com/s/photos/' + query
        return false;

    }
} 

function imageSearch_2() {
    query = document.getElementById('gsc-i-id1').value;
    query = query.replace('/<g',"&lt;").replace('/>/g',"&gt;");
    if(query==false){
        console.log("please enter your query");
        window.location = 'https://unsplash.com'
        return false;
    }
    else{
        window.location = 'https://unsplash.com/s/photos/' + query
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
        window.location = 'search?q=' + query
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
        window.location = 'https://rishabhsahil.github.io/ics/'
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
        window.location = 'https://rishabhsahil.github.io/ics/'
        return false;
    }
    else{
        window.location = 'https://www.google.com/search?q=' + query
        return false;

    }
} 
