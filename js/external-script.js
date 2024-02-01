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
var titles = document.querySelectorAll('img[title]');
titles.forEach(function(title) {
title.addEventListener('click', function() {
showInfoBox(title.getAttribute('title'));
});
});

function showInfoBox(element) {
var description = element;
var infoBoxContent = `
<div class="info-content">
    <h2>Caption</h2>
    <p>${description}</p>
    <a class="close-link" onclick="closeInfoBox()">Click This To Close</a>
</div>`;
document.getElementById("infoBox").innerHTML = infoBoxContent;
document.getElementById("infoBox").style.display = "flex";
}

function closeInfoBox() {
document.getElementById("infoBox").style.display = "none";
}