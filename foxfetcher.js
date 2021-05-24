const fetchButton = document.querySelector("#fetchButton");
const foxImage = document.querySelector("#foxImage");
const foxVideo = document.querySelector("#foxVideo");
const foxHole = document.querySelector("#foxHole");

const rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

function foxFetch(){
    fetch('https://randomfox.ca/floof/')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        const urlParts = data.image.split('.');
        const lastIndex = urlParts.length - 1;
        const extension = urlParts[lastIndex];
        if (extension === 'mp4') {
            foxVideo.style.display = 'inline-block';
            foxVideo.src = data.image;
        }
        else {
            foxImage.src = data.image;
            foxImage.style.display = 'inline-block';
        }
        let colorSelect = Math.floor(Math.random() * rainbow.length);
        foxHole.style.border = "5px solid " + rainbow[colorSelect];
        foxHole.style.padding = "1em";
    });
}

fetchButton.addEventListener("click", foxFetch);

foxFetch();