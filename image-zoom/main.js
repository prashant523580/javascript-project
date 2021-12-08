const imageZoom = (imgID,result_id) => {
        var img, lens,result, cx,cy;
        img = document.getElementById(imgID);
        result = document.getElementById(result_id);
        //create lens
        lens = document.createElement("div");
        lens.setAttribute("class", "img-zoom-lens");
        console.log(lens)
        //insert lens 
        img.parentElement.insertBefore(lens, img);

        //calculate the ratio between result div and lens;
        cx = result.offsetWidth / lens.offsetWidth;
        cy = result.offsetHeight / lens.offsetHeight;
        //set background properties for div
        result.style.backgroundImage = `url("${img.src}")`;
        result.style.backgroundSize = `${img.width *cx}px  ${img.height * cy}px`;
        //execute function when someone moves  cursor  over the image or the lens;
        lens.addEventListener("mousemove",lensMove_func);
        img.addEventListener("mousemove", lensMove_func);
        //for touch screen
        lens.addEventListener("touchmove", lensMove_func);
        img.addEventListener("touchmove", lensMove_func);
     function lensMove_func(e){
             //prevent any other actions that may occur when moving over the image
            e.preventDefault();
            var x , y, pos;
            pos = getCursorPos(e);
            //calculate the position of the lens
            x = pos.x - (lens.offsetWidth / 2);
            y = pos.y - (lens.offsetHeight /2);
            if(x > img.width - lens.offsetWidth){
                x = img.width - lens.offsetWidth;
            }
            if(x < 0)x = 0;
            if(y > img.height - lens.offsetWidth){
                y = img.height - lens.offsetHeight;
            }
            if(y< 0) y = 0;
            //set position of the lens
            lens.style.left = x + "px";
            lens.style.top =  y + "px";
            //display what the lens sees
            result.style.backgroundPosition = '-' + (x * cx ) + "px -" + (y * cy) + "px";

        }
        getCursorPos= e => {
            var a , x = 0 , y = 0;
            e = e || window.event;
            //get the x and y position of the image
            a = img.getBoundingClientRect();
            x = e.pageX - a.left;
            y = e.pageY - a.top;
            // console.log(x)
            // console.log(y)
            //consider any page scrolling
            x = x - window.pageXOffset;
            y = y - window.pageYOffset;
            return {x:x, y:y}

        }
}
imageZoom("image","img-result");
// imageZoom("")