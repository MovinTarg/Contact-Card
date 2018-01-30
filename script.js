$(document).ready(function() {
    $(".back_side").hide();   
});
$(document).on("click", ".btn", function() {
    $(".users").append("<div class='card'><h1 class='front_side'>"+$("input[name='first_name'").val()+" "+$("input[name='last_name'").val()+"</h1><p class='front_side'>Click for a description!</p><h4 class='back_side'>"+$("textarea[name='description'").val()+"</div>");
    $(".back_side").hide();
    $("input, textarea").val("");
    return false;
});
$(document).on("click", ".card", function() {
    $(this).children().toggle();
});