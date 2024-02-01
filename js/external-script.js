var photos =[];
var fileNames =[];
var imageList = [];
var captionTexts = [];
var descTexts = [];
var image;
var openList ="<li id ='photo'>";
var closeList = "</li>";
var openCaptionTag = "<p class='caption'>";
var closeCaptionTag = "</p>"
for(var i=0; i < 10; i++){
    fileNames.push("winterland"+(i+1));
    photos.push("<img src='images/" + fileNames[i] + ".jpg'  title='A beautiful winter scenery in the morning " + (i + 1) + "'>");
     // Add captions for each image
     captionTexts.push("winterland " + (i + 1));
    image = openList + photos[i] + openCaptionTag + captionTexts[i]+ closeCaptionTag + closeList;
    imageList.push(image);
}
document.getElementById("album").innerHTML=imageList.join(" ");
var titles = document.querySelectorAll('img[title]',);
titles.forEach(function (title, index) {
    title.addEventListener('click', function () {
        showInfoBox(title.getAttribute('title'),  captionTexts[index],index + 1, this.offsetLeft, this.offsetTop);
    });
});

function showInfoBox(description, captionTexts, boxNumber, left, top) {
    var infoBoxContent = `
        <div class="info-box" id="infoBox${boxNumber}" style="left:${left}px; top:${top}px;">
            <div class="info-content">
                <h2>${captionTexts}</h2>
                <p>${description}</p>
                <a class="close-link" onclick="closeInfoBox(${boxNumber})">Click This To Close</a>
            </div>
        </div>`;
    document.getElementById("infoBoxes").innerHTML += infoBoxContent;
    document.getElementById(`infoBox${boxNumber}`).style.display = "flex";
}

function closeInfoBox(boxNumber) {
    document.getElementById(`infoBox${boxNumber}`).style.display = "none";
}
// contact JS code
function ShowHideDiv(){
    var selectedValue = document.getElementById("contactDropdown").value;
    var showPhone = document.getElementById("phone");
    var showEmail = document.getElementById("email");
  if(selectedValue=='phone'){
    showPhone.style.display = "block";
    showEmail.style.display = "none";
  }else{
    showEmail.style.display = "block";
    showPhone.style.display = "none";
  }
  }