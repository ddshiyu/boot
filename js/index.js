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
                     var pointer = template('pointer',{list:res});
                     var pictureArr = template('picture',{list:res,isMobile:isMobile});
                     $('.carousel-indicators').html(pointer);
                     $('.carousel-inner').html(pictureArr);

                     //      for(var i=0;i<res.length;i++) {
                     //        if(isMobile){
                     //               $('<div class="item '+(i==0?'active':'')+'"><a href="" class="m_imgBox"><img src="'+res[i].pcUrl+'" alt="..."></a></div>').appendTo($('.carousel-inner').get(0));
                     //               $('<li data-target="#carousel-example-generic" data-slide-to="'+i+'" class="'+(i==0?'active':'')+'"></li>').appendTo($('.carousel-indicators'));
                     //        }else{
                     //               var picture=$('<div class="item '+(i==0?'active':'')+'"><a href="" class="img_box" style="background-image:url('+(res[i].pcUrl)+')"></a></div>'); 
                     //               picture.appendTo($('.carousel-inner').get(0));   
                     //               $('<li data-target="#carousel-example-generic" data-slide-to="'+i+'" class="'+(i==0?'active':'')+'"></li>').appendTo($('.carousel-indicators'));
                     //        }         
                     //      }                                                            
              })           
       }
       $(window).on('resize',function(){
              render()
       }).trigger('resize');
}

