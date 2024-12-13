console.log("script.js loaded");


function navigateToUrl(event) {
    const row = event.currentTarget; 
    const url = row.getAttribute('data-url'); 

    if (url) {
       
        const openInNewTab = false; 
        if (openInNewTab) {
            window.open(url, '_blank'); 
        } else {
            window.location.href = url; 
        }
    } else {
        console.error("No URL found for this row."); 
    }
}


function attachNavigationListeners() {
    const rows = document.querySelectorAll('[data-url]'); 
    rows.forEach(row => {
        row.addEventListener('click', navigateToUrl); 
    });
}


document.addEventListener('DOMContentLoaded', attachNavigationListeners);
