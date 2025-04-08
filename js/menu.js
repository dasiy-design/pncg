$(document).ready(function (){

$(".gnb").hover(function (){
    $(this).find(".sub").stop().slideDown(500, "easeOutQuart");

}, function(){
    $(this).find(".sub").stop().slideUp(); 
})
});

