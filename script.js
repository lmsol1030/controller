$(document).ready(function(){
    $('#up-btn').click(function(){
    $('#player').animate({top:"+=100px"},1000);
    });
    $('#in-btn').click(function(){
    $('#player').fadeOut('fast');
    });
});
