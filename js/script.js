{'use strict';
    
    /* Article reflection after clicking */
    const titleClickHandler = function (event) {   
        event.preventDefault();
        const clickedElement = this;
        console.log('Link was clicked!', event);
  
        /* [DONE] remove class 'active' from all article links  */
        
        const activeLinks = document.querySelectorAll('.titles a.active');

        for(let activeLink of activeLinks) {
            activeLink.classList.remove("active");
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
        console.log('articleSelector', articleSelector);

        /* [DONE yet error] find the correct article using the selector (value of 'href' attribute) */

        const targetArticle = document.querySelector(articleSelector);
        console.log('targetArticle',targetArticle);

        /* [DONE yet error] add class 'active' to the correct article */

        targetArticle.classList.add('active');
        console.log('targetArticle', targetArticle);

        return titleClickHandler();

        };

        

   /* Generate Title List */
    const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

    function generateTitleLinks() {
        console.log('title list generated: ');
    
        /* remove contents of titleList */
        const titleList = document.querySelector(optTitleListSelector);
        titleList.innerHTML = '';
        
        /* for each article */

        /* get the article id */

        /* find the title element */
        
        /* get the title from the title element */

        /* create HTML of the link */

        /* insert link into titleList */

        
    }   
    
}      

 
























// document.getElementById('test-button').addEventListener('click', function(){
//     const links = document.querySelectorAll('.titles a');
//     console.log('links:', links);
//   });
