// HIDE/SHOW OF CARD OVERLAYS

$(document).ready(function () {
    $('#overlay-1').hide();
    $('#overlay-2').hide();
    $('#overlay-3').hide();

    $(".popup").hide();
});


console.log("TEST");

$("#learn-more-1").click(function() {
    // alert("TEST!");
    $('#overlay-1').show();
    $('.first-card').hide();
});

$("#learn-more-2").click(function () {
    // alert("TEST!");
    $('#overlay-2').show();
    $('.second-card').hide();
});

$("#learn-more-3").click(function () {
    // alert("TEST!");
    $('#overlay-3').show();
    $('.third-card').hide();
});


// DOWNLOAD POP UP

$(".download").click(function() {
    $("#choose-login").show();
});

$(".popup-close").click(function() {
    $(".popupwin").hide();
});


// LOG IN 

$("#log-in").click(function() {
   
    $("#choose-login").hide();
    $("#login-module").show();
});

// GUEST CHECKOUT
$("#guest-btn").click(function () {

    $("#choose-login").hide();
    $("#cart-summary").show();
});

// CART SUM

$("#login-2").click(function () {
  
    $("#login-module").hide();
    $("#cart-summary").show();
});


// CHECKOUT
$("#cartsum-btn").click(function () {

    $("#cart-summary").hide();
    $("#checkout").show();
});

// ORDER CONF
$("#checkout-btn").click(function () {

     $("#checkout").hide();
     $("#confirmation").show();
});
