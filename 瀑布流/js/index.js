$(function() {
    init();
    $(window).on('resize', function(){
        init();
    });
});
function init() {
    // width()  不包括padding/margin/border
    // outerWidth() 包括padding/border， 为true,还包括margin
    let itemWidth = $(".item").outerWidth(true); // 图片宽度
    let cols = parseInt($(window).width()/itemWidth, 10); // 每行展示的列数
    let heightArr = [];
    for (let i = 0; i < cols; i++) {
        heightArr.push(0);
    };
    // 遍历每一张图片
    $(".item").each(function(index, item) {
        let idex = 0; // 索引
        let minHeight = heightArr[0];
        for(let i = 0; i < heightArr.length; i++) {
            if (minHeight > heightArr[i]) {
                minHeight = heightArr[i];
                idex = i;
            }
        }
        // 设置图片样式
        $(item).css({
            left: itemWidth*idex,
            top: minHeight,
        })
        // 高度数组，高度累加
        heightArr[idex] += $(item).outerHeight(true);
    })
} 