/*Name this external file gallery.js*/


function upDate(link_object) {
        // document.getElementById("image").src= link_object.src;
        document.getElementById("image").style.backgroundImage = "url("+link_object.src+")";
        document.getElementById("image").innerHTML=link_object.alt
    }

    function unDo(){
        document.getElementById("image").style.backgroundImage =""
    }