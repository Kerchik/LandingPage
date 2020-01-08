let makeActive = (e) => {
    let menu = document.body.getElementsByClassName("menu")[0];
    let children = menu.children;
    for (let i=0;i<children.length;i++) {
        children[i].classList.remove("active")
    }
    let target = e.target;
    target.classList.add("active");
}
