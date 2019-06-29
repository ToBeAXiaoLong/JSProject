window.onload = function() {
    var box = document.getElementById("box");
    var smallPic = document.getElementsByClassName("small_pic")[0];
    var slider = document.getElementsByClassName("slider")[0];
    var bigPic = document.getElementsByClassName("big_pic")[0];
    var bigImg = document.getElementsByTagName("img")[1];

    // 移入
    smallPic.onmousemove= function (event) {
        slider.style.display = 'block';
        bigPic.style.display = 'block';
        var left = event.clientX - slider.offsetWidth/2;
        var top = event.clientY - slider.offsetHeight/2;

        if (left < 0) {
            left = 0;
        } else if (left > (smallPic.offsetWidth - slider.offsetWidth)) {
            left = smallPic.offsetWidth - slider.offsetWidth;
        }
        if (top < 0) {
            top = 0;
        } else if (top > (smallPic.offsetHeight - slider.offsetHeight)) {
            top = smallPic.offsetHeight - slider.offsetHeight;
        }
        slider.style.left = left + 'px';
        slider.style.top = top + 'px';
        bigImg.style.left = -(left*2) + 'px';
        bigImg.style.top = -(top*2) + 'px';
        console.log(bigImg);
    };
    // 移出
    smallPic.onmouseout = function () {
        slider.style.display = 'none';
        bigPic.style.display = 'none';
    };

}

