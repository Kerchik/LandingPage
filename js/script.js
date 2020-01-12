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
    e.classList.add("activeImg");

    
    changePeopleSayText(e);

}
let changePeopleSayText = (e) => {
    let name = document.getElementById("name");
    let job = document.getElementById("job");
    name.innerHTML = e.getAttribute("name")
    job.innerHTML = e.getAttribute("job")
}

let playVideo = (e) => {
    let videoContent = document.getElementById("videoContent");
    videoContent.style.display = "none";

    let video = document.getElementById("videoTemplate");
    video.classList.remove("hideVideo");
    video.classList.add("showVideo")
    video.play();
}
let leftButton = () => {
    let menu = document.getElementById("peopleSaySlider");
    let children = menu.children;
    for (let i=0;i<children.length;i++) {
        if (children[i].classList.contains("activeImg")) {
            children[i].classList.remove("activeImg")
            if (i-1!=0) {
                children[i-1].classList.add("activeImg")
                changePeopleSayText(children[i-1]);
            } else {
                children[children.length-1].classList.add("activeImg")
                changePeopleSayText(children[children.length-1]);
            }
        }
    }
}
let rightButton = () => {
    let menu = document.getElementById("peopleSaySlider");
    let children = menu.children;
    for (let i=children.length-1;i>=0;i--) {
        if (children[i].classList.contains("activeImg")) {
            children[i].classList.remove("activeImg")
            if ((i+1)!=children.length-1) {
                changePeopleSayText(children[i+1]);
                children[i+1].classList.add("activeImg")
            } else {
                children[0].classList.add("activeImg")
                changePeopleSayText(children[0]);
            }
        }
    }
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