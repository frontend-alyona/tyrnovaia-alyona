const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

const postXhr = new XMLHttpRequest();
postXhr.open('GET', `${BASE_URL}`);
postXhr.responseType = 'json';
postXhr.send();

postXhr.onload = () => {
  const {response: posts} = postXhr;
  console.log(posts);
  posts.forEach((post) => renderPosts(post));
};


const renderPosts = (post) => {
    const {title, body, id} = post;

    const containerElem = document.createElement('div');
    const titleElem = document.createElement('h2');
    const bodyElem = document.createElement('p');
    const showBtnElem = document.createElement('button');
    const commentContainer = document.createElement('div');
    let btnAtr = showBtnElem.dataset;

    containerElem.classList.add('container_post');
    showBtnElem.classList.add('button');
    showBtnElem.style.color ='white';
    showBtnElem.style.background = 'red';
    showBtnElem.style.padding = '5px'
    showBtnElem.style.border = 'none';

    showBtnElem.onmouseover = function(){
      showBtnElem.style.background = 'white';
      showBtnElem.style.color = 'red'
    }
    showBtnElem.onmouseout = function (){
      showBtnElem.style.background = 'red'
      showBtnElem.style.color = 'white'
    }
      

    titleElem.innerText = title;
    bodyElem.innerText = body;
    showBtnElem.innerText = 'Show Comments';
    showBtnElem.setAttribute('data-comments-shown', 'false');
    containerElem.append(titleElem, bodyElem, commentContainer, showBtnElem);
    document.body.append(containerElem);

    const renderComment = (comments) => {
        comments.forEach((comment) => {
            const {body} = comment;
            const commentElem = document.createElement('p');
            commentElem.innerHTML = `${body} <hr>`;
            commentContainer.append(commentElem);
            commentContainer.style.display = (commentContainer.style.display === '') ? '' : 'none';

            console.log(commentElem)
        });
        commentContainer.setAttribute('id', `${id}`)
    };

    showBtnElem.addEventListener('click', (event) => {
        event.preventDefault();

        const commentXhr = new XMLHttpRequest();
        commentXhr.open('GET', `${BASE_URL}/${id}/comments`);
        commentXhr.responseType = 'json';
        commentXhr.send();

        if (btnAtr.commentsShown === 'false'){
            commentXhr.onload = () => {
                console.log(commentXhr.response);
                const {response: comments} = commentXhr;
                commentContainer.classList.add('container');
                btnAtr.commentsShown = 'true';
                showBtnElem.innerText = 'Hide Comments';
                renderComment(comments);
            }
        } else {
            commentContainer.classList.remove('container');
            showBtnElem.innerText = 'Show Comments';
            btnAtr.commentsShown = 'false';
            commentContainer.innerHTML = '';

        }
        
    });
};


 

