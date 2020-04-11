document.addEventListener('DOMContentLoaded', function () {
    let listItems = document.getElementsByClassName('resume-heading');
    let listDot = document.getElementsByClassName('resume-heading-dot');
    let resumeContent = document.getElementsByClassName('resume-content');

    listDot[0].style.cssText = 'visibility: visible;';
    resumeContent[0].style.cssText = 'display: flex;';

    for (let i=0; i < listDot.length; i++) {
        listItems[i].addEventListener('click', function () {
            for(let i=0; i < listDot.length; i++) {
                listDot[i].style.cssText = 'visibilty: hidden;';
            }
            this.nextElementSibling.style.cssText = 'visibility: visible;';
            
            let contentToShow = 'content' + i;
            for(let i=0; i < resumeContent.length; i++) {
                if(resumeContent[i].id != contentToShow) {
                    resumeContent[i].style.cssText = 'display: none;';
                } else {
                    resumeContent[i].style.cssText = 'display: flex;';
                }
            }
        });
    }
});