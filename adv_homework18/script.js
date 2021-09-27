

const showBtn = document.getElementById('showComment');
const hideBtn = document.getElementById('hideComment');



const renderPosts = (title, body) => {
  const titleElem = document.createElement('h4');
  const bodyElem = document.createElement('p');
  

  titleElem.innerText = title;
  bodyElem.innerText = body;

  document.body.append(titleElem,bodyElem);

}

// renderPosts()

const postXhr = new XMLHttpRequest();
const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

postXhr.open("GET", `${BASE_URL}`);
postXhr.responseType = "json";
postXhr.send();

postXhr.onload = () => {
  const { response: post } = postXhr;
  console.log(`post`, post);

};


const handleShowBtn = (event) => {
  event.preventDefault()

    const getCommentByIdRequest = new XMLHttpRequest();

    getCommentByIdRequest.open("GET", `${BASE_URL}/1/comments`);
    getCommentByIdRequest.responseType = "json";
    getCommentByIdRequest.send();
  
    getCommentByIdRequest.onload= () => {
      const {response :comments} = getCommentByIdRequest;
      console.log(`comments`, comments)
    }

  
}

showBtn.addEventListener('click', handleShowBtn)

// const getCommentByIdRequest = new XMLHttpRequest();

//   getCommentByIdRequest.open("GET", `${BASE_URL}/1/comments`);
//   getCommentByIdRequest.responseType = "json";
//   getCommentByIdRequest.send();

//   getCommentByIdRequest.onload= () => {
//     const {response :comments} = getCommentByIdRequest;
//     console.log(`comments`, comments)
//   }



