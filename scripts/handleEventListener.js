const handleClick = (e)=>{
    // if (e.currentTarget === e.target) {
        console.log(e.target)
    // }
}

document.querySelector("#exampleEventListener").addEventListener("click", handleClick)

// document.addEventListener("click", handleClick);

// :(
// var d = document
// $( d ).on( "click",  handleClick);