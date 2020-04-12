document.addEventListener('DOMContentLoaded', function () {
    let listItems = document.getElementsByClassName('report-heading');
    let listDot = document.getElementsByClassName('report-heading-dot');
    let reportContent = document.getElementsByClassName('report-content');

    listDot[0].style.cssText = 'visibility: visible;';
    reportContent[0].style.cssText = 'display: flex;';
    for (let i=0; i < listDot.length; i++) {
        listItems[i].addEventListener('click', function () {
            for(let i=0; i < listDot.length; i++) {
                listDot[i].style.cssText = 'visibilty: hidden;';
            }
            this.nextElementSibling.style.cssText = 'visibility: visible;';
            
            let contentToShow = 'report-content' + i;
            for(let i=0; i < reportContent.length; i++) {
                if(reportContent[i].id != contentToShow) {
                    reportContent[i].style.cssText = 'display: none;';
                } else {
                    reportContent[i].style.cssText = 'display: flex;';
                }
            }
        });
    }
});