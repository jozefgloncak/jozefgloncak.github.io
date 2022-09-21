function outputViaInnerHtml(idElement, outputText) {
    document.getElementById(idElement).innerHTML = outputText;
}

function varFunc() {
    var v1 = 4;
    console.log("v1 before top ", v1);
    console.log("v2 before for", v2);
    for (var i = 0; i < 2; i++) {        
        var v2 = 44;
        console.log("v1 from for", v1);
        console.log("v2 from for", v2);
        console.log("i from for", i);
    }
    console.log("v1 behind for", v1);
    console.log("v2 behind for", v2);
    console.log("i behind for", i);
}