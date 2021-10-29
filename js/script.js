{
  'use strict';

  /* added during 6 - 7.2 modules  */

  const optArticleSelector = '.post',
    optActiveArticleSelector = '.posts .active',   
    optTitleSelector = '.post-title',
    optArticleAuthorSelector = '.post-author',
    optTitleListSelector = '.titles',
    optTitleListSelectorA = '.titles a',
    optArticleTagsSelector = '.post-tags .list';

  /* added during 7.3 module */
  const optTagsListSelector = '.tags .list';

  /* Generate Title Click Handler [DONE] */

  const titleClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;

    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    /* [DONE]  add class 'active' to the clicked link */
    clickedElement.classList.add('active');

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll(optActiveArticleSelector);

    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');
    // console.log('articleSelector', articleSelector);

    /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    // console.log('targetArticle', targetArticle);

    /* [DONE] add class 'active' to the correct article */
    targetArticle.classList.add('active');
    // console.log('targetArticle', targetArticle);
  };

  /* Generate Title List [DONE] */

  const generateTitleLinks = function (customSelector = '') {
    // console.log(optArticleSelector + customSelector);

    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
    // console.log('pokaz:', titleList);
    
    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    // console.log('pokaz: ', articles);

    let html = '';
    // console.log(html);

    for (let article of articles) {

      /* get the article id */
      const articleID = article.getAttribute('id');
      // console.log(articleID);

      /* find the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      // console.log(articleTitle);

      /* get the title from the title element */
      
      // console.log('pokaz: ', articleTitle);

      /* create HTML of the link */
      const linkHTML = '<li><a href="#' + articleID + '"><span>' + articleTitle + '</span></a></li>';
      // console.log(linkHTML);

      titleList.innerHTML = titleList.innerHTML + linkHTML;

      /* insert link into titleList */
      html += linkHTML;
      // console.log('pokaz: ', html);

    }

    titleList.innerHTML = html;
 
    // console.log('pokaz: ', titleList);

    const links = document.querySelectorAll(optTitleListSelectorA);
    // console.log('pokaz: ', links);

    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }

  };

  /* Generate Tags [DONE] */

  const generateTags = function (customSelector = '') {
    
    /* [NEW] create a new variable allTags with an empty array */
    let allTags = [];

    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
    articles.innerHTML = '';
    // console.log('zapis: ', generateTags);

    /* START LOOP: for every article: */
    for (let article of articles) {
      // console.log('zapis: ', article);
      
      let html = '';
      
      /* find tags wrapper */
      const titleList = article.querySelector(optArticleTagsSelector + customSelector);
      // console.log('zapis: ', titleList);

      /* make html variable with empty string */
      titleList.innerHTML='';
      // console.log('titleList');

      /* get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');
      // console.log('zapis: ', articleTags);

      /* split tags into array */
      const articleTagsArray = articleTags.split(' ');
      // console.log('zapis: ', articleTagsArray);

      /* START LOOP: for each tag */
      for (let tag of articleTagsArray) {
        // console.log('zapis: ', tag); 

        /* generate HTML of the link */
        const taglinkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
        // console.log('zapis: ', taglinkHTML);

        /* [NEW] check if this link is NOT already in allTags */
        if(allTags.indexOf(taglinkHTML) == -1){
          /* [NEW] add generated code to allTags array */
          allTags.push(taglinkHTML);
        }

        /* add generated code to html variable */
        html = html + taglinkHTML;
        // console.log('zapis: ', taglinkHTML);

        /* END LOOP: for each tag */

      }

      /* insert HTML of all the links into the tags wrapper */
      titleList.innerHTML = html;
      // console.log('zapis: ', html);

      /* END LOOP: for every article: */

      /* [NEW] find list of tags in right column */
      const tagList = document.querySelector('.tags');

      /* [NEW] add html from allTags to tagList */
      tagList.innerHTML = allTags.join(' ');
    }

    const links = document.querySelectorAll(optTitleListSelectorA);
    // console.log('pokaz: ', links);

    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }

  };

  /* Generate Tag Click Handler [DONE]*/

  const tagClickHandler = function (event) {
    /* prevent default action for this event */
    event.preventDefault();
  
    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
  
    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');

    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');
    // console.log(tag);

    /* find all tag links with class active */
    const tagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
    // console.log(tagLinks);

    /* START LOOP: for each active tag link */

    /* remove class active */
    for (let tagLink of tagLinks) {
      tagLink.classList.remove('active');
    }
    /* END LOOP: for each active tag link */

    /* find all tag links with "href" attribute equal to the "href" constant */
    const tagLinksHref = document.querySelectorAll('a[href="' + href + '"]');
    // console.log(tagLinksHref);
    
    /* START LOOP: for each found tag link */

    /* add class active */
    for (let tagLinkHref of tagLinksHref) {
      tagLinkHref.classList.add('active');
    }
    /* END LOOP: for each found tag link */

    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');
    // console.log(generateTitleLinks);

  };

  /* Tags click listener [DONE]*/
  const addClickListenersToTags = function () {
    /* find all links to tags */
    const allLinksToTags = document.querySelectorAll('a[href^="#tag-"]');

    /* START LOOP: for each link */
    for (let link of allLinksToTags) {

      /* add tagClickHandler as event listener for that link */
      link.addEventListener('click', tagClickHandler);
    }

    /* END LOOP: for each link */
  };

  /* Generate Authors [DONE] */

  const generateAuthors = function (customSelector = '') {
    
    /* find all authors */
    const articles = document.querySelectorAll(optArticleSelector);
    // console.log(articles);
   
    /* make html variable with empty string */
    let html = '';

    /* START LOOP: for every author */
    for (let article of articles) {
      // console.log(article);

      /* [DONE] find tags wrapper */
      const titleList = article.querySelector(optArticleAuthorSelector + customSelector);
      // console.log(titleList);



      /* get author from data-tags attribute */
      const authorTags = article.getAttribute('data-author');
      // console.log(authorTags);

      /* generate HTML of the link */
      const authorLinkHTML = '<span> by </span><a href="#author-' + authorTags + '"><span>' + authorTags + '</span></a>';
      // console.log(authorLinkHTML);

      /* add generated code to html variable */
      html += authorLinkHTML;
      // console.log(html);

      /* insert HTML of all the links into the tags wrapper */
      titleList.innerHTML = titleList.innerHTML + authorLinkHTML;
      // console.log(titleList.innerHTML);

      /* END LOOP: for every article: */
    }
    
    articles.innerHTML = html;
    
  };

  /* Generate Author Click Handler [DONE]*/

  const authorClickHandler = function (event) {
    /* prevent default action for this event */
    event.preventDefault();
    

    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    // console.log('Tag clicked ', clickedElement);

    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    console.log(href);

    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#author-', '');
    console.log(tag);
    
    const authorLinks = document.querySelectorAll('a.active[href^="#author-"]');

    /* START LOOP: for each active tag link */

    /* remove class active */
    for (let authorLink of authorLinks) {
      authorLink.classList.remove('active');
    }
    /* END LOOP: for each active author link */

    /* find all tag links with "href" attribute equal to the "href" constant */
    const authorLinksHref = document.querySelectorAll('a[href="' + href + '"]');
    // console.log(authorLinksHref);

    /* START LOOP: for each found author link */

    /* add class active */
    for (let authorLinkHref of authorLinksHref) {
      authorLinkHref.classList.add('active');
    }

    /* END LOOP: for each found author link */

    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-author="' + tag + '"]');
    // console.log(generateTitleLinks);

  };

  /* Authors click listener [DONE] */

  const addClickListenersToAuthors = function () {
    /* find all links to tags */
    const allLinksToAuthors = document.querySelectorAll('a[href^="#author-"]');
    // console.log(allLinksToAuthors);

    /* START LOOP: for each link */
    for (let link of allLinksToAuthors) {

      /* add authorClickHandler as event listener for that link */
      link.addEventListener('click', authorClickHandler);
    }

    /* END LOOP: for each link */
  };


  generateTags();
  addClickListenersToTags();
  generateAuthors();
  addClickListenersToAuthors();
  generateTitleLinks();
  
}