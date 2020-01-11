let makeActive = (e) => {
    let menu = document.body.getElementsByClassName("menu")[0];
    let children = menu.children;
    for (let i=0;i<children.length;i++) {
        children[i].classList.remove("active")
    }
    let target = e.target;
    target.classList.add("active");
}
let makeActivePhoto = (e) => {
    let menu = document.getElementById("peopleSaySlider");
    let children = menu.children;
    for (let i=0;i<children.length;i++) {
        children[i].classList.remove("activeImg")
    }
    let target = e.target;
    target.classList.add("activeImg");

    
    changePeopleSayText(e);

}
let changePeopleSayText = (e) => {
    let name = document.getElementById("name");
    let job = document.getElementById("job");
    name.innerHTML = e.target.getAttribute("name")
    job.innerHTML = e.target.getAttribute("job")
}
(function onScroll() {
    window.onscroll = function() {myFunction()};

    let menu = document.body.getElementsByClassName("menu")[0];
    let sticky = menu.offsetTop;

    function myFunction() {
    if (window.pageYOffset > sticky) {
        menu.classList.add("sticky")
    } else {
        menu.classList.remove("sticky");
    }
    }
})()