function expandNavbar(){
    var list = document.getElementById("nav-list");

    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");

    if(list.style.display==="block"){
        list.style.display = "none";
        p2.style.opacity = "1";

        p1.style.transform = "rotate(0deg)";
        p3.style.transform = "rotate(0deg)";
    }else{
        p2.style.opacity="0";
        list.style.display = "block";

        p1.style.transform = "rotate(45deg)";
        p1.style.transformOrigin = "top left";

        p3.style.transform = "rotate(-45deg)";
        p3.style.transformOrigin = "bottom left";

    }
}