//add a colour to each span tag in panel2 
// window.onload = function() {
//     const colours = ["red", "pink", "blue", "purple", "yellow"]
//     const spans = document.querySelectorAll("span");
//     for (let i = 0; i < spans.length; i++) {
//         var random_num = Math.floor(Math.random() * colours.length - 1) + 1
//         console.log(random_num)
//         spans[i].style.color = colours[random_num];
//     }
// }


function login_values() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email != "a" || password != "a") {
        console.log("incorrect")
        document.getElementById("login-error-msg").innerText = "incorrect email and password";
    } else {
        console.log("correct")
        var login_content = document.getElementById("login-content-container");
        login_content.style.display = "flex";
        login_content.scrollIntoView()
    }
}

window.onload = function() {
    const left_gap = 5.5;
    const layers = 6;
    const layer_images = 10;
    const images = [
        "int.jpg", "def.jpg", "return.jpg", "true.jpg",
        "else.jpg", "zip.jpg", "async.jpg", "while.jpg",
        "bool.jpg"
    ];

    for (let x = 0 ; x < layers; x ++) {

        for (let i = 0; i < layer_images ; i ++) {
            //create img tag
            var img = document.createElement("img")

            //add to parent div
            document.getElementById("programming").appendChild(img)

            //randomly select image
            var img_index = Math.floor(Math.random() * (images.length - 1)) ;
            
            //set image
            img.src = images[img_index];  
            
            //random positioning variance
            var position_variance = Math.floor(Math.random() * 2)

            //set random postion
            var top = (i+1) * 4; 
            var left = (i * 2)

            //if half way through the arch, change direction
            if (i > (layer_images / 2)-1) {
                //reverse direction
                left = (2 * (layer_images - i) - 2) 
            }

            //flip arch to other side of the page
            if (x+1 <= layers / 2) {
                left = (x+1) * left_gap - left
            } else {
                left = 100 - (x+1 - (layers / 2)) * left_gap + left
            }

            //apply random position variance 
            left += position_variance
            top += position_variance

            //apply positioning to image
            img.style.top = `${top}rem`;
            img.style.left = `calc(${left}% - 1.5rem)`
            
        }
    }
}