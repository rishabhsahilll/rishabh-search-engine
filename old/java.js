document.getElementById('frmsearch').onsubmit = function() {
    window.location = 'https://www.bing.com/search?q='+  document.getElementById('textSearch').value;
    return false;		
}
