(function(doc,win){
    var docEI = doc.documentElement,
        resizeEvt = 'orientationchange' in window?'orientataionchange':'resize',
        recalc = function(){
            var clientWidth = docEI.clientWidth;
            if(!clientWidth) return;

            //100是字体大小，1536是开发时浏览器窗口的宽度，等比计算
            docEI.style.fontSize = 16*(clientWidth/1400)+'px';
            console.log(clientWidth);
            if (clientWidth<=1690){

                docEI.style.fontSize='19.3257px';
            //console.log(docEI.style.fontSize);
            }
        }
    if(!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document,window);

function baoming() {
    window.open("http://tb.53kf.com/code/client/10143228/1");
}
function php(){
    window.open("http://tb.53kf.com/code/client/10143228/1");
}
function java(){
    window.open("http://tb.53kf.com/code/client/10143228/1");
}
function qianduan(){
    window.open("http://tb.53kf.com/code/client/10143228/1");
}
function python(){
    window.open("http://tb.53kf.com/code/client/10143228/1");
}
function dashuju(){
    window.open("http://tb.53kf.com/code/client/10143228/1");
}
function linux(){
    window.open("http://tb.53kf.com/code/client/10143228/1");
}