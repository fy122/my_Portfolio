
const text = document.querySelector(".sec-text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "YouTuber";
    }, 8000); //1s = 1000 milliseconds
}
textLoad();
setInterval(textLoad,12000);


function show_sidebar()
{
document.getElementById('sidebar').style.opacity = 1;
}

function hide_sidebar()
{
document.getElementById('sidebar').style.opacity = 0;
}




  AOS.init();
