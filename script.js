let hamburger=document.querySelector("#hamburger");
hamburger.addEventListener("click",()=>{
    document.querySelector(".hamburger-menu").style.right="0";
    document.querySelector(".hamburger-menu").style.display="inline-block";
    // ocument.querySelector(".hamburger-menu").style.transition="all 6s ease ";
})

// addEventListner to hamburger ---> close :
let cross=document.querySelector("#cross");
cross.addEventListener("click",()=>{
  document.querySelector(".hamburger-menu").style.right="-300%";
  document.querySelector(".hamburger-menu").style.display="none";
})
