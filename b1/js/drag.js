/** we set the dragable class to be dragable, we add the containment which will be #boxdemo, so dropable and dragable object cant pass out of this box **/

$(function() {
        /** we set the dragable class to be dragable, we add the containment which will be #boxdemo, so dropable and dragable object cant pass out of this box **/
  run();
 var uservals = [];
      
  
  function run(){
    uservals = '';
    $("#heading").empty();
    arr =['jktk','Hkkxk','yky','vk;k','x;k','vk/kk','rek\'kk'];
   item = arr[Math.floor(Math.random()*arr.length)];
  $("#heading").html(item);
    $( ".droppable" ).empty();
      $( ".droppable" ).removeClass('dropClass');
  }
  
  $(".clear").click(function(){
    run();
    
  });
    $( ".draggable" ).draggable({
        containment:"#boxdemo",
        revert: "invalid",
        helper:"clone"
    });
 
    $( ".droppable" ).droppable({
        /** tolerance:fit means, the moveable object has to be inside the dropable object area **/
        tolerance: 'fit',
        over: function(event, ui) {
            /** We add the hoverClass when the moveable object is inside of the dropable object **/
            $('.ui-draggable-dragging').addClass('hoverClass');
        },
        out: function(event, ui) {
            /** We remove the hoverClass when the moveable object is outside of the dropable object area **/
            $('.draggable').addClass('.hoverClass');
        },
        /** This is the drop event, when the dragable object is moved on the top of the dropable object area **/
        drop: function( event, ui ) {
            $( ".droppable" ).addClass('dropClass');
            $(ui.draggable).clone().appendTo($(this));
          uservals = uservals+$(ui.draggable).html();
          uservals = uservals.replace(/\s+/g, '');
        }
    });
  $('.submit').click(function(){
    if(uservals==item){
    alert('correct');
      run();
    }
    else{
    alert('wrong');
      run();
    }
   
  });
});
