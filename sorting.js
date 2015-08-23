$(document).ready(function(){
  $('#soccer-teams').on('click', "#all", function() {
    $(this).show();
  });

  $('#premier').click(function(){
    $('.premier').show();
    $('.champs').hide();
    $('.league1').hide();
    $('.league2').hide();
  });

  $('#champs').click(function(){
    $('.champs').show();
    $('.premier').hide();
    $('.league1').hide();
    $('.league2').hide();

  });

  $('#league1').click(function(){
    $('.league1').show();
    $('.champs').hide();
    $('.premier').hide();
    $('.league2').hide();
  });

  $('#league2').click(function(){
    $('.league2').show();
    $('.league1').hide();
    $('.champs').hide();
    $('.premier').hide();
  });

});
