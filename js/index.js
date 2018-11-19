$(function () {
       $('[data-toggle="tooltip"]').tooltip();

});
// function getData(callback) {
//        if (window.res){
//             callback && callback(window.res);
//        }else{
//               $.ajax({
//                      url:'js/data.json',
//                      dataType:'json',
//                      type:'get',
//                      success:function (res) {
//                             window.res = res;
//                             callback(res);
//               }
//               })
//        }
// }
// function banner(res){
//        var pointer = template('pointerTemp',{list:data});
//        var imgpick = template('imgTemp',{list:data});
//        $('.carousel-indicators').html(pointer);
//        $('.carousel-inner').html(imgpick);
// }
// var banner = function () {
//        var getData = function (callback) {
//               if(window.data){
//                      callback && callback(window.data);
//               }else {
//                      $.ajax({
//                             type:'get',
//                             url:'js/data.json',
//                             dataType:'json',
//                             data:'',
//                             success:function (data) {
//                                    window.data = data;
//                                    callback && callback(window.data);
//                             }
//                      });
//               }
//        }
// var render = function () {
//        getData(function (data) {
//               var isMobile = $(window).width() < 768 ? true : false;
//               var pointHtml = template('pointTemplate', {list: data});
//               var imageHtml = template('imageTemplate', {list: data, isMobile: isMobile});
//               $('.carousel-indicators').html(pointHtml);
//               $('.carousel-inner').html(imageHtml);
//        })
// }}


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
                          $(res).each(function(i,item) {
                            var picture=$('<div class="item '+(i==0?'active':'')+'"><a href="" class="img_box" style="background-image:url('+(item.pcUrl)+')"></a></div>'); 
                            picture.appendTo($('.carousel-inner').get(0));   
                            $('<li data-target="#carousel-example-generic" data-slide-to="'+i+'" class="'+(i==0?'active':'')+'"></li>').appendTo($('.carousel-indicators'));

                          });                                               
                            
                       
                    
              })           
       }
       render()
}




banner();