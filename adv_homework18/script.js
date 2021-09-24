const BASE_URL = "https://jsonplaceholder.typicode.com/posts";


const form = document.getElementById("findPostForm");
const postIdInput = document.getElementById("postId");
const postContainer = document.getElementById("postContainer");

const renderPost = ({text}) => {
    console.log("finding post..");
    
    const textParagraph = document.createElement("p");  
    textParagraph.innerText = text;
     
    
    postContainer.innerHTML = "";
    postContainer.append( textParagraph);
};



const handleFindPost = (event) => {
    event.preventDefault();

    const postId = postIdInput.value;
  
    const getPostByIdRequest = new XMLHttpRequest();
    getPostByIdRequest.open("GET", `${BASE_URL}/{postId}/comments`);
    getPostByIdRequest.responseType = "json";
    getPostByIdRequest.send();
  
    getPostByIdRequest.onload = () => {
      const { status } = getPostByIdRequest;
  
      if (status === 200) {
        renderPost(getPostByIdRequest.response);
      } else {
        alert("Post is not found!");
      }
    };

    
};

form.addEventListener("submit", handleFindPost);

