window.onload = function () {
    // 封装选择器
    var $ = function(selector) {
        return document.querySelector(selector);
    }
    var box = $("#box");
    var btn = $(".slider_btn");
    var txt = $(".txt");
    var bg = $(".bg");
    var flag = false;

    // 事件
    btn.onmousedown = function(ev) {
        var e = ev || window.event;
        var downX = e.clientX;
        btn.onmousemove = function(en) {
            var moveX = en.clientX - downX;    // 移动的距离
            if (moveX > 0) {
                this.style.left = moveX + 'px';  // 滑块左侧距离
                bg.style.width = moveX + 'px';  // 背景绿色区域宽度
                // 验证通过
                if (moveX >= box.offsetWidth-btn.offsetWidth) {
                    flag = true;
                    txt.innerHTML = '通过验证';
                    txt.style.color = '#fff';
                    btn.onmousemove = null;
                    btn.onmousedown = null;
                }
            }
           
        }
    };
    window.onmouseup = function(e) {
        console.log('www');
        btn.onmousemove = null;
        if (flag) { return}
        btn.style.left = 0;
        bg.style.width = 0;
    }
}