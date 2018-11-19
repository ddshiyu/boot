$(function () {
       $('[data-toggle="tooltip"]').tooltip();
       banner();
     
});
function banner() {
       function getData(callback) {
              $.ajax({
                     type: 'get',
                     url: 'js/data.json',
                     dataType: 'json',
                     data: '',
                     success: function (res) {
                            window.res = res;
                            callback && callback(window.res)
                     }
              });
       }
       function render() {
              getData(function (res) {  
                     var isMobile = $(window).width()<768?true:false;
                          $(res).each(function(i,item) {
                            if(isMobile){
                                   $('<div class="item '+(i==0?'active':'')+'"><a href="" class="m_imgBox"><img src="'+item.pcUrl+'" alt="..."></a></div>').appendTo($('.carousel-inner').get(0));
                                   $('<li data-target="#carousel-example-generic" data-slide-to="'+i+'" class="'+(i==0?'active':'')+'"></li>').appendTo($('.carousel-indicators'));
                            }else{
                                   var picture=$('<div class="item '+(i==0?'active':'')+'"><a href="" class="img_box" style="background-image:url('+(item.pcUrl)+')"></a></div>'); 
                                   picture.appendTo($('.carousel-inner').get(0));   
                                   $('<li data-target="#carousel-example-generic" data-slide-to="'+i+'" class="'+(i==0?'active':'')+'"></li>').appendTo($('.carousel-indicators'));
                            }         
                          });                                                            
              })           
       }
       render();
}

