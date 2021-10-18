{
    'use strict';

    const titleClickHandler = document.addEventListener('click', function(event) {
        event.preventDefault();
        const clickedElement = this;
        console.log('Link was clicked!', event);
    
        /* [DONE] remove class 'active' from all article links  */
        
        const activeLinks = document.querySelectorAll('.titles a.active');

        for(let activeLink of activeLinks) {
            activeLink.classList.remove('active');
        }

        /* [DONE yet error]  add class 'active' to the clicked link */

        clickedElement.classList.add('active');
        console.log('clickedElement:', clickedElement);

        /* [DONE] remove class 'active' from all articles */
        const activeArticles = document.querySelectorAll('.posts .active');

        for(let activeArticle of activeArticles) {
            activeArticle.classList.remove('active');
        } 

        /* [DONE yet error] get 'href' attribute from the clicked link */

        const articleSelector = clickedElement.getAttribute('href');
        console.log(articleSelector);

        /* find the correct article using the selector (value of 'href' attribute) */

        const targetArticle = document.querySelector(articleSelector);
        console.log(targetArticle);

        /* add class 'active' to the correct article */

        const clickedArticle = document.querySelector(targetArticle);
        clickedArticle.classList.add('active');

    });

}




















// document.getElementById('test-button').addEventListener('click', function(){
//     const links = document.querySelectorAll('.titles a');
//     console.log('links:', links);
//   });
