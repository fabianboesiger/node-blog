
window.addEventListener("load", () => {
    let images = document.getElementsByTagName("img");
    for(let i = 0; i < images.length; i++) {
        let image = images[i];
        let lazysrc = image.getAttribute("lazysrc");
        if(lazysrc !== null && lazysrc !== undefined) {
            let download = new Image();
            download.onload = function(){
                image.src = this.src;   
            };
            download.src = lazysrc;
        }
    }
});