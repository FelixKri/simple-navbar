function expandNavbar(){
    var list = document.getElementById("nav-list");
    if(list.style.display==="block"){
        list.style.display = "none";
    }else{
        console.log("display = none");
        list.style.display = "block";
    }
}