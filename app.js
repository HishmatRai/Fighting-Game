window.onkeydown = checkKey;
var marginLeft = 0;
var marginLeft2 = 0;
function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        // up arrow
        console.log("up")
    }
    else if (e.keyCode == '40') {
        console.log("down")
    }
    else if (e.keyCode == '37') {
        console.log("left")
        if (marginLeft === -15) {

        }
        else {
            marginLeft = marginLeft - 15
            console.log(marginLeft)
            document.getElementById("spiderStand").style.marginLeft = marginLeft.toString() + "px"
            document.getElementById("spiderRuning").style.marginLeft = marginLeft.toString() + "px"
            document.getElementById("spiderRuning").style.display = "block"
            document.getElementById("spiderStand").style.display = "none"
            setTimeout(() => {
                document.getElementById("spiderRuning").style.display = "none"
                document.getElementById("spiderStand").style.display = "block"
            }, 5000)
        }
    }
    else if (e.keyCode == '39') {
        console.log("right");
        if (marginLeft === 1110) {

        }
        else {
            marginLeft = marginLeft + 15
            console.log(marginLeft)
            document.getElementById("spiderStand").style.marginLeft = marginLeft.toString() + "px"
            document.getElementById("spiderRuning").style.marginLeft = marginLeft.toString() + "px"
            document.getElementById("spiderRuning").style.display = "block"
            document.getElementById("spiderStand").style.display = "none"
            setTimeout(() => {
                document.getElementById("spiderRuning").style.display = "none"
                document.getElementById("spiderStand").style.display = "block"
            }, 5000)
        }
    }
    else if (e.keyCode == '32') {
        console.log("space ")
    }
    else if (e.keyCode == '87') {
        console.log("w")
    }
    else if (e.keyCode == '65') {
        console.log("a")
        marginLeft2 = marginLeft2 + 15
        console.log(marginLeft)
        document.getElementById("spiderStand1").style.marginRight = marginLeft2.toString() + "px"
        document.getElementById("spiderRuning2").style.marginRight = marginLeft2.toString() + "px"
        document.getElementById("spiderRuning2").style.display = "block"
        document.getElementById("spiderStand1").style.display = "none"
    }
    else if (e.keyCode == '68') {
        console.log("d")
        console.log("a")
        marginLeft2 = marginLeft2 - 15
        console.log(marginLeft)
        document.getElementById("spiderStand1").style.marginRight = marginLeft2.toString() + "px"
        document.getElementById("spiderRuning2").style.marginRight = marginLeft2.toString() + "px"
        document.getElementById("spiderRuning2").style.display = "block"
        document.getElementById("spiderStand1").style.display = "none"
    }
    else if (e.keyCode == '83') {
        console.log("s")
       
        document.getElementById("spiderRuning3").style.display = "block"
        document.getElementById("spiderStand").style.display = "none"
        document.getElementById("spiderRuning").style.display = "none"
    }
}