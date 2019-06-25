$(document).ready(function() {
    $("thumbPic").hover(function () {
        $("thumbnail img").css({'filter: blur(1px); -webkit-filter: blur(1px); cursor: pointer; color: gray;'});
    });
});