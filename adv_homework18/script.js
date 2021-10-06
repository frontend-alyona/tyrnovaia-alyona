const renderPosts = (post) => {
  const {title, body, id} = post;
  
  
  const postContainer = document.createElement('div');
  postContainer.classList.add('containerPosts');
  const titleElem = document.createElement('h2');
  const bodyElem = document.createElement('p');

  const showBtnElem = document.createElement('button');
  
  
  titleElem.innerText = title;
  bodyElem.innerText = body;

  showBtnElem.innerText = 'Show Comment';
  showBtnElem.classList.toggle('btnHideComment');
  
  
  postContainer.append(titleElem, bodyElem, showBtnElem);

  
  document.body.append(postContainer);

  showBtnElem.addEventListener('click', (event) =>{
    event.preventDefault()

    if(showBtnElem.innerText == 'Show Comment' ){
      showBtnElem.innerText = 'Hide Comment'
    } else{
      showBtnElem.innerText = 'Show Comment'
    };


    if (!postContainer.style.display == 'none'){
      postContainer.style.display="none";
    } else{
      postContainer.style.display="block";
    }

    const commentXhr = new XMLHttpRequest();
    commentXhr.open("GET",`${BASE_URL}/${id}/comments` );
    commentXhr.responseType = 'json';
    commentXhr.send();

    commentXhr.onload =() => {
      const {response: comments} = commentXhr;
      console.log(`comments`, comments);

      comments.forEach((comments) => renderComment(comments))

      
    };

    const renderComment =(comments) => {
      const {body, id} = comments;
      const bodyElemComm = document.createElement('p');
      bodyElemComm.innerText = body;
      postContainer.append(bodyElemComm)
      document.body.append(postContainer, `${id}`);
    }

    
    
    

  });

};

const postXhr = new XMLHttpRequest();
const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

postXhr.open("GET", `${BASE_URL}`);
postXhr.responseType = "json";
postXhr.send();

postXhr.onload = () => {
  const { response: posts } = postXhr;
  const {id} = posts;
  console.log(`posts`, posts);

  posts.forEach((postElem) => renderPosts(postElem));
  
  

};



 

