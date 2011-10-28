// Skrewler by Sam Hough - https://github.com/Jqeff/Skrewler MIT LICENSE
(function($){$.fn.skrewler=function(options){var error={e:"Skrewler ERROR: ",noDirection:function(){console.log(this.e+"No direction was provided to the handler - $('#yourElement').skrewler({ direction: 'vertical' (or) 'horizontal' ");},leftUp:function(){console.log(this.e+"No id for leftUpButtonID && enableKeys === false   FIX:  $('#yourElement').skrewler({ leftUpButtonID: '#id'");},rightDown:function(){console.log(this.e+"No id for rightDownButtonID && enableKeys === false  FIX:  $('#yourElement').skrewler({ rightDownButton: '#id'");}};var defaults={direction:"",leftUpButtonID:'',rightDownButtonID:'',duration:800,reverse:false,enableKeys:false,keyCode_left:37,keyCode_right:39,keyCode_up:38,keyCode_down:40,postAnimFunc:function(){},leaveBoundsFunc:function(){},scrollByPageSize:false,_this:null};defaults=$.extend(defaults,options);defaults._this=this;var skrewler={wHeight:0,wWidth:0,element:{},position:0,xPos:0,yPos:0,atBoundary:false,init:function(obj){this.wHeight=$(window).height();this.wWidth=$(window).width();this.element=obj;if(defaults.direction===''){error.noDirection();}
if(defaults.leftUpButtonID===''&&defaults.enableKeys===false){error.leftUp();}
if(defaults.rightDownButtonID===''&&defaults.enableKeys===false){error.rightDown();}},scroll:function(direction){if(defaults.reverse===true){switch(direction){case"left":direction="right";break;case"right":direction="left";break;case"up":direction="down";break;case"down":direction="up";break;}}
switch(direction){case"left":this.scrollLeft();break;case"right":this.scrollRight();break;case"up":this.scrollUp();break;case"down":this.scrollDown();break;default:console.log(error.e+' No valid direction was passed to skrewler.scroll(direction)');break;}},scrollLeft:function(){this.wWidth=$(window).width();var totalWidth=0;$(this.element).find("li").each(function(){totalWidth+=$(this).outerWidth(true);});var elements=$(this.element).find("li").length,scrollLength=parseInt(totalWidth/elements,10);if(defaults.scrollByPageSize){scrollLength=this.wWidth;}
if(((this.position-1)*scrollLength)>=(-totalWidth+this.wWidth)){this.position-=1;this.xPos=this.position*scrollLength;}else{if(this.atBoundary){defaults.leaveBoundsFunc();}
this.xPos=(-totalWidth+this.wWidth);this.atBoundary=true;}
$(this.element).stop().animate({marginLeft:this.xPos},defaults.duration,function(){defaults.postAnimFunc();});},scrollRight:function(){this.wWidth=$(window).width();var totalWidth=0;$(this.element).find("li").each(function(){totalWidth+=$(this).outerWidth(true);});var elements=$(this.element).find("li").length,scrollLength=parseInt(totalWidth/elements,10);if(defaults.scrollByPageSize){scrollLength=this.wWidth;}
if(((this.position+1)*scrollLength)<=0){this.atBoundary=false;this.position+=1;this.xPos=this.position*scrollLength;}else{defaults.leaveBoundsFunc();this.xPos=0;}
$(this.element).stop().animate({marginLeft:this.xPos},defaults.duration,function(){defaults.postAnimFunc();});},scrollUp:function(){this.wHeight=$(window).height();var totalHeight=0;$(this.element).find("li").each(function(){totalHeight+=$(this).outerHeight(true);});var elements=$(this.element).find("li").length,scrollLength=parseInt(totalHeight/elements,10);if(defaults.scrollByPageSize){scrollLength=this.wHeight;}
if(((this.position+1)*scrollLength)<=0){this.atBoundary=false;this.position+=1;this.yPos=this.position*scrollLength;}else{defaults.leaveBoundsFunc();this.yPos=0;}
$(this.element).stop().animate({marginTop:this.yPos},defaults.duration,function(){defaults.postAnimFunc();});},scrollDown:function(){this.wHeight=$(window).height();var totalHeight=0;$(this.element).find("li").each(function(){totalHeight+=$(this).outerHeight(true);});var elements=$(this.element).find("li").length,scrollLength=parseInt(totalHeight/elements,10);if(defaults.scrollByPageSize){scrollLength=this.wHeight;}
if(((this.position-1)*scrollLength)>=(-totalHeight+this.wHeight)){this.position-=1;this.yPos=this.position*scrollLength;}else{if(this.atBoundary){defaults.leaveBoundsFunc();}
this.yPos=(-totalHeight+this.wHeight);this.atBoundary=true;}
$(this.element).stop().animate({marginTop:this.yPos},defaults.duration,function(){defaults.postAnimFunc();});}};skrewler.init($(this));$(defaults.leftUpButtonID).click(function(){if(defaults.direction==='horizontal'){skrewler.scroll('left');}else{skrewler.scroll('up');}
return false;});$(defaults.rightDownButtonID).click(function(){if(defaults.direction==='horizontal'){skrewler.scroll('right');}else{skrewler.scroll('down');}
return false;});$(window).keydown(function(event){if(defaults.enableKeys){if(defaults.direction==='vertical'){switch(event.which){case defaults.keyCode_up:skrewler.scroll("up");event.preventDefault();break;case defaults.keyCode_down:skrewler.scroll("down");event.preventDefault();break;}
event.preventDefault();}
if(defaults.direction==='horizontal'){switch(event.which){case defaults.keyCode_left:skrewler.scroll('left');event.preventDefault();break;case defaults.keyCode_right:skrewler.scroll('right');event.preventDefault();break;}}}});$(window).resize(function(){if(defaults.direction==="vertical"){var elements=$(skrewler.element).find("li").length,totalHeight=(elements*$(skrewler.element).find("li").outerHeight(true)),scrollLength=parseInt(totalHeight/elements,10),resizePos=skrewler.position*scrollLength;skrewler.yPos=resizePos;$(skrewler.element).stop().css({marginTop:resizePos});}else{var elements=$(skrewler.element).find("li").length,totalWidth=(elements*$(skrewler.element).find("li").outerWidth(true)),scrollLength=parseInt(totalWidth/elements,10),resizePos=skrewler.position*scrollLength;skrewler.xPos=resizePos;$(skrewler.element).stop().css({marginLeft:resizePos});}});return this;};})(jQuery);