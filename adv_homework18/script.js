// const hideBtn = document.getElementById('hideComment');

const renderPosts = (post) => {
  const {title, body} = post;

  const postContainer = document.createElement('div');
  const titleElem = document.createElement('h2');
  const bodyElem = document.createElement('p');

  titleElem.innerText = title;
  bodyElem.innerText = body;

  postContainer.append(titleElem, bodyElem);

  document.body.prepend(postContainer)
};

const showBtn = document.getElementById('showComment');

const postXhr = new XMLHttpRequest();
const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

postXhr.open("GET", `${BASE_URL}`);
postXhr.responseType = "json";
postXhr.send();

postXhr.onload = () => {
  const { response: post } = postXhr;
  const {postId} = post;
  console.log(`post`, post);

    

  

};


const handleShowBtn = (event) => {
  event.preventDefault() ;

  const commentXhr = new XMLHttpRequest();
  commentXhr.open("GET",`${BASE_URL}/${1}/comments` );
  commentXhr.responseType = 'json';
  commentXhr.send();

  commentXhr.onload =() => {
    console.log(`commentXhr.response`, commentXhr.response);
    const comment = commentXhr.response
    
    
  }
  renderPosts(post,comment)
} 
// renderPosts(post,comment)

showBtn.addEventListener('click', handleShowBtn);

 

