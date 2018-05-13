/*Name this external file gallery.js*/


function billingFunction() {

        document.getElementById("billingName").value = document.getElementById("shippingName").value
        document.getElementById("billingZip").value = document.getElementById("shippingZip").value
        /*alert(document.getElementById("same").checked) */

	if(!document.getElementById("same").checked){
		document.getElementById("billingName").value = ""
        document.getElementById("billingZip").value = ""
    }

    }