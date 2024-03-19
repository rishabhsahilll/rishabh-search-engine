// function rishabhSearch() {
//   var text = document.getElementById("search").value;
//   var cleanQuery = text.replace(" ", "+", text);
//   var url = 'https://www.rishabhsahil.ml/search?q=' + cleanQuery;
//   window.location.href = url;
// }

function rishabhSearch() {
    query = document.getElementById('search').value;
    query = query.replace('/<g',"&lt;").replace('/>/g',"&gt;");
    if(query==false){
        console.log("please enter your query");
        return false;
    }
    else{
        window.location = 'https://www.rishabhsahil.ml/search?q=' + query
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


function googleSearch() {
    query = document.getElementById('search').value;
    query = query.replace('/<g',"&lt;").replace('/>/g',"&gt;");
    if(query==false){
        console.log("please enter your query");
        window.location = 'https://www.google.com'
        return false;
    }
    else{
        window.location = 'https://www.google.com/search?q=' + query
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

function rishabhsearchvoice() {
var recognition = new webkitSpeechRecognition();
recognition.lang = "en-GB";

recognition.onresult = function(event) {
    // console.log(event);
    query = document.getElementById('search').value = event.results[0][0].transcript;
    window.location = 'https://www.rishabhsahil.ml/search?q=' + query
    return false;
}
recognition.start();

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

function instasearch() {
query = document.getElementById('search').value;
query = query.replace('/<g',"&lt;").replace('/>/g',"&gt;");
if(query==false){
    console.log("please enter your query");
    window.location = 'https://instagram.com'
    return false;
}
else{
    window.location = 'https://instagram.com/' + query
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

