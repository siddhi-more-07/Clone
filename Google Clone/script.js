// show, hide google apps
const googleAppsBtn = document.getElementById('google-apps');
const googleApps = document.querySelector('.google-apps');

googleAppsBtn.addEventListener('click', function(event) {
    if (googleApps.style.display === 'flex') {
        googleApps.style.display = 'none';
    } else {
        googleApps.style.display = 'flex';
    }
    event.stopPropagation(); 
});


// show, hide google account settings
const googleAccount = document.querySelector('.google-account');
const googleAcountBtn = document.querySelector('.user');

googleAcountBtn.addEventListener('click', function(event){
    if(googleAccount.style.display === 'flex'){
        googleAccount.style.display = 'none';
    }
    else{
        googleAccount.style.display = 'flex';
    }
    event.stopPropagation();
});


window.addEventListener('click', function() {
    googleApps.style.display = 'none';
    googleAccount.style.display = 'none';
});

