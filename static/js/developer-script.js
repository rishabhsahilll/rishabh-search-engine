function wikipediasearch(){
    query = document.getElementById('search').value;
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

function onlinegamesearch() {
    query = document.getElementById('search').value;
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

function imageSearch() {
    query = document.getElementById('search').value;
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
        query = document.getElementById('search').value = event.results[0][0].transcript;
        window.location = 'search?q=' + query
        return false;
    }
    recognition.start();
    

}

function mapsearch(){
    query = document.getElementById('search').value;
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
    query = document.getElementById('search').value;
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
    query = document.getElementById('search').value;
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

function rishabhsearch(){
    query = document.getElementById('search').value;
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
 

function translateSearch() {
    query = document.getElementById('search').value;
    query = query.replace('/<g',"&lt;").replace('/>/g',"&gt;");
    if(query==false){
        window.location = 'https://translate.google.com/'
        return false;
    }
    else{
        window.location = 'https://translate.google.com/?sl=en&tl=hi&text=' + query + "&op=translate"
        return false;

    }
} 


function imageSearch() {
    query = document.getElementById('search').value;
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

function githubsearch() {
query = document.getElementById('search').value;
query = query.replace('/<g',"&lt;").replace('/>/g',"&gt;");
if(query==false){
    console.log("please enter your query");
    window.location = 'https://github.com'
    return false;
}
else{
    window.location = 'https://github.com/search?q=' + query
    return false;

}

} 

function facebooksearch() {
query = document.getElementById('search').value;
query = query.replace('/<g',"&lt;").replace('/>/g',"&gt;");
if(query==false){
    console.log("please enter your query");
    window.location = 'https://www.facebook.com'
    return false;
}
else{
    window.location = 'https://www.facebook.com/search/top/?q=' + query
    return false;

}
} 

function spotifysearch() {
query = document.getElementById('search').value;
query = query.replace('/<g',"&lt;").replace('/>/g',"&gt;");
if(query==false){
    console.log("please enter your query");
    window.location = 'https://open.spotify.com'
    return false;
}
else{
    window.location = 'https://open.spotify.com/search/' + query
    return false;

}
} 

function wikisearch() {
query = document.getElementById('search').value;
query = query.replace('/<g',"&lt;").replace('/>/g',"&gt;");
if(query==false){
    console.log("please enter your query");
    window.location = 'https://www.wikipedia.org/'
    return false;
}
else{
    window.location = 'hhttps://en.wikipedia.org/wiki/' + query
    return false;

}
} 

function linkdinsearch() {
query = document.getElementById('search').value;
query = query.replace('/<g',"&lt;").replace('/>/g',"&gt;");
if(query==false){
    console.log("please enter your query");
    window.location = 'https://www.linkedin.com'
    return false;
}
else{
    window.location = 'https://www.linkedin.com/search/results/all/?keywords=' + query
    return false;

}
} 

