window.addEventListener("load", doFirst, false);

function doFirst()
{
    myPic = document.getElementById("image");
    
    myPic.addEventListener("dragstart", startDrag, false);
    myPic.addEventListener("dragend", endDrag, false);

    leftbox = document.getElementById("leftbox");

    //e.preventDefault to prevent default behaviour of various browsers.
    leftbox.addEventListener("dragenter", dragenter, false);
    leftbox.addEventListener("dragleave", dragleave, false);
    leftbox.addEventListener("dragover", function(e){e.preventDefault();}, false);
    
    leftbox.addEventListener("drop", dropped, false);
}

function endDrag(e)
{
    // pic = e.target;
    // pic.style.visibility = 'hidden';
}

function dragenter(e)
{
    e.preventDefault();
    leftbox.style.background = "skyblue";
    leftbox.style.border = "2px solid orange";
}

function dragleave(e)
{
    e.preventDefault();
    leftbox.style.background = "white";
    leftbox.style.border = "2px dotted blue";
}

function startDrag(e)
{
    var code = '<img src="image.jpg" id="image" alt="">';

    //storing some information (code of image) inside the event (e)
    e.dataTransfer.setData('Text', code);
}

function dropped(e)
{
    e.preventDefault();
    
    //Retrieving data stored in event (e).
    leftbox.innerHTML = e.dataTransfer.getData('Text');
    
    var image = document.querySelector("#rightbox>img");
    image.style.visibility = "hidden";

}