$(function(){
 $('.btn').click(function(){
     let value =$(this).attr('data-filter');
     if(value == 'all'){
         $('.filter').show(1000);
     }else{
         $('.filter').not('.'+value).hide(1000);
         $('.filter').filter('.'+value).show(1000);
     }
     $(' ul .btn').click(function(){
         $(this).addClass('active').siblings().removeClass('active')
     })
 })
})