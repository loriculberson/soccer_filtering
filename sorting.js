//OPTION 1 - the better way
//to avoid using id or class for selecting elements
//add data-type attribute to each button and class of team icons
//because a designer could change the css selectors, but will not
//change the data-type
$(document).ready(function(){
  var buttons = $("[data-role='team-button']")    //select any data-role with 'team-button'
  
  buttons.not("[data-type='all']").on('click', function() {    
    var button = $(this);
    var teamType = button.data('type') 
    $("[data-role='team']").hide();
    $("[data-type='" + teamType + "']").show();
  })
  
  $("[data-type='all']").on('click', function(){
    $("[data-role='team']").show();
  });
});
//OPTION 4: default view is a filter
// $(document).ready(function(){
//   var premier = $("[data-type='premier'][data-role='team-button']")
//   filteredView(premier);
  
//   var buttons = $("[data-role='team-button']")    //select any data-role with 'team-button'
  
//   buttons.not("[data-type='all']").on('click', function() {    
//     var button = $(this);
//     filteredView(button);
//   })
//   // $("[data-type='all']").on('click', function(){
//   //   $("[data-role='team']").show();
//   // });
//   function filteredView (button) {
//     var teamType = button.data('type') 
//     $("[data-role='team']").hide();
//     $("[data-type='" + teamType + "']").show();
//   }
// });


//OPTION 2
// $(document).ready(function(){
//   $('.btn').not('#all').on('click', function() {
//     $('.team').hide()
//     $('.' + this.id).show()
//   })

//   $('#all').on('click', function(){
//     $('.team').show()
//   });
// });



//OPTION 3: beginner
// $(document).ready(function(){
//   $('#all').on('click',function() {
//     $('.premier').show();
//     $('.champs').show();
//     $('.league1').show();
//     $('.league2').show();
//   });

//   $('#premier').click(function(){
//     $('.premier').show();
//     $('.champs').hide();
//     $('.league1').hide();
//     $('.league2').hide();
//   });

//   $('#champs').click(function(){
//     $('.champs').show();
//     $('.premier').hide();
//     $('.league1').hide();
//     $('.league2').hide();

//   });

//   $('#league1').click(function(){
//     $('.league1').show();
//     $('.champs').hide();
//     $('.premier').hide();
//     $('.league2').hide();
//   });

//   $('#league2').click(function(){
//     $('.league2').show();
//     $('.league1').hide();
//     $('.champs').hide();
//     $('.premier').hide();
//   });
// });
