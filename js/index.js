$(document).ready(function(){
  $(".term",".flash").on("click",function(){
     $(this).hide();
     $(this).siblings(".explanation").show();
  });

  $(".explanation",".flash").on("click",function(){
    $(this).hide();
    $(this).siblings(".term").show();
  })
});
