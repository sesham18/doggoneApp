'use strict';


$('.container').hide(); 
$('.restart').hide();
$('.restart').hide(); 

$('#get-start').on('click', function(){
    $('.instructions').hide(); 
    $('.choose-instructions').hide(); 
    $('.container').hide(); 
})

$('#login').on('click', function(){
    $('.instructions').hide(); 
    $('.choose-instructions').hide(); 
    $('.container').show(); 
})

$('.home').on('click', function(){
    $('.instructions').show(); 
    $('.choose-instructions').show(); 
    $('.container').hide(); 
})

$('.restart').on('click', function(){
  $('.instructions').show(); 
});