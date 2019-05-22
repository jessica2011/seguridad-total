//menuBurguer
var menuBurguer = function(){
  var menuAll = require('./libs/menu.js');
  var menuGeneral = new menuAll
  
  // Menú Mobile
  var btnBurguerV= document.getElementsByClassName("hamburger-menu")[0];
  var idLienzo = document.getElementById("container");
  menuGeneral.menuVertical(btnBurguerV, idLienzo);
  var elContain = document.getElementById('container');
  var mc = new Hammer(elContain);
  if(btnBurguerV.offsetLeft > 0){
    mc.on("swipeleft", function(ev) {
      btnBurguerV.click();
    });
  }
  
  var w = window.innerWidth;
  if (w <= 768) {
    $('.menu-link').click(function(){
      btnBurguerV.click(); 
    })
  }
  
}

//CarouselTitles
var carousel = function(){
  $('.owl-carousel').owlCarousel({
    items: 4,
    margin: 10,
    dots: false,
    nav: false,
    responsive: {
      0: {
        margin: 0,
        loop: false,
        items: 2,
        autoWidth:true
      },
      321: {
        loop: false,
        items: 2,
        //center: true,
        //stagePadding: 120,
        autoWidth:true,
        margin: 20
      },
      768: {
        items: 4,
        loop: false
      }
    }
  });
}
//Preguntas
var preguntasAncle = function(){
  var a = $("#faq_acc .panel .panel-heading .panel-title a");

  a.on("click",function() {
    if($(this).attr("aria-expanded")==='false'){
      a.children("img").removeClass('active');
      $(this).children("img").addClass('active');
      console.log('true')
    }else {
      $(this).children("img").removeClass('active');
    }
  });
}
//table
var table = function(){
  var more = $(".more");
  var moreUltimo = $(".ult");
  more.on("click",function() {
    if( $(this).text()==="+"){
      $(this).text("-");
      $(this).parent().next().css( "display", "table-row" )
    }else if ($(this).text()==="-"){
      $(this).text("+");
      $(this).parent().next().css( "display", "none" )
    }
  })
  moreUltimo.on("click",function() {
    if( $(this).text()==="+"){
      $(this).text("-");
      $(this).parent().children().css("border-radius", 0);
      $(this).parent().children().css("border-bottom", 0);

      $(this).parent().next().css( "display", "table-row" )

    }else if ($(this).text()==="-"){
      $(this).text("+");
      $(this).parent().children().first().css("border-bottom-left-radius", 20);
      $(this).parent().children().first().css("border-bottom", "1px solid #00a9e0");
      $(this).parent().children().first().next().css("border-bottom-right-radius", 20);
      $(this).parent().children().first().next().css("border-bottom", "1px solid #00a9e0");
      $(this).parent().next().css( "display", "none" )
    }
  })
}


// scrollMenu
var scrollMenu = function (e) {
  e.preventDefault();
  var id = $(this).attr("data-id"), posi, ele, padding = 56;
  ele = $(id); posi = ($(ele).offset()||0).top - padding;
  $('html, body').animate({scrollTop:posi}, 1500);
  $("a.menu-link").removeClass("active");
  $(this).addClass("active");
};
$('a.menu-link').on("click", scrollMenu);
//

var removeClassTabs = function(){
  var b = $("#exTab3 .nav .owl-carousel li a");
  b.on("click",function() {
    b.parent().removeClass('active');
  });
}



$(document).ready(function(){
  menuBurguer()
  preguntasAncle();
  carousel();
  table();
  removeClassTabs();
});
