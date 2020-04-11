document.addEventListener('DOMContentLoaded', function () {
    let title = document.getElementsByTagName('title');
    let body = document.getElementsByTagName('body');
    if(title[0].text == 'Home') {
        body[0].style.cssText = "background: url('./images/prairieBurn.jpg') no-repeat; background-size: cover;";
    } else if(title[0].text == 'AIS Work') {
        body[0].style.cssText = " background: url('./images/ais.jpg') no-repeat; background-size: cover;";
    } else if(title[0].text == 'Prairie Burn') {
        body[0].style.cssText = " background: url('./images/prairieBurn.jpg') no-repeat; background-size: cover;";
    } else if(title[0].text == 'Save the Bees') {
        body[0].style.cssText = "background: url('./images/beeCity.jpg') no-repeat; background-size: cover;";
    } else if(title[0].text == 'Resume') {
        body[0].style.cssText = "background: url('./images/prairieBurn.jpg') no-repeat; background-size: cover;";
    }
});