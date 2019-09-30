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