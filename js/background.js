document.addEventListener('DOMContentLoaded', function () {
    let title = document.getElementsByTagName('title');
    let body = document.getElementsByTagName('body');
    if(title[0].text == 'AIS Work' || title[0].text == 'Resume') {
        body[0].style.cssText = " background: url('./images/ais.jpg') no-repeat; background-size: cover;";
    } else if(title[0].text == 'Saving Bees') {
        body[0].style.cssText = "background: url('./images/beecity.jpg') no-repeat; background-size: cover;";
    } else {
        body[0].style.cssText = "background: url('./images/prairieburn.jpg') no-repeat; background-size: cover;";
    }
});