function starter() {
    let counter = 1;
    setInterval(() => {
        
        if (counter == 1) {
            document.getElementById('red').src = "images/red.png";
            document.getElementById('yellow').src = "images/gray.png";
            document.getElementById('green').src = "images/gray.png";
        } else if (counter == 2) {
            document.getElementById('yellow').src = "images/yellow.png";
            document.getElementById('red').src = "images/gray.png";
            document.getElementById('green').src = "images/gray.png";
        } else if (counter == 3) {
            document.getElementById('green').src = "images/green.png";
            document.getElementById('red').src = "images/gray.png";
            document.getElementById('yellow').src = "images/gray.png";
        } else {
            counter = 0
        }
        counter++;
    }, 5000);
}


starter()