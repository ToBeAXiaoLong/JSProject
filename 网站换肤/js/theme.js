// window.onload = function () {
//     var body = document.getElementsByTagName('body');
//     var btnList = this.document.getElementsByTagName('button');
//     console.log(btnList);
// }
$(function() {
    $(".div_right button").on("click", function() {
        var theme = $(this).attr('btn-name');
        $('body').attr('class', theme);
        console.log('ass');
    })
})