const handleClick = (e)=>{
    console.log(e.target)
}

document.querySelector("#exampleEventListener").addEventListener("click", handleClick)

// document.addEventListener("click", handleClick);

// :(
// var d = document
// $( d ).on( "click",  handleClick);