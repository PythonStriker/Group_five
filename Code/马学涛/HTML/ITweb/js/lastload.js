let pointFather = document.getElementById('point');
let ppFlag = 0;          //痛点选中标志
let understandFlag = -1;  //了解详情标志
let dengjiFlag = -1      //等级了解标志
let talkFlag = 1;
let pp1 = document.getElementsByClassName('pp1')[0];
let pp2 = document.getElementsByClassName('pp2')[0];
let pp11 = document.getElementById('pp11');
let pp12 = document.getElementById('pp12');
let pointList = pointFather.children;
let i = pointList.length;
let understandButtom = document.getElementsByClassName('pain_div_buttom');
let talk1List = document.getElementById('talk1').children;
let talk2List = document.getElementById('talk2').children;
let talk1 = document.getElementById('talk1');
let talk2 = document.getElementById('talk2');
let talkLength = talk1List.length;
let index = 0;
let levelList = document.getElementsByClassName('level');
let lengthLeve = levelList.length;
let daohangList = document.getElementsByClassName('daohang')[0].children;
let daohangLength = daohangList.length;
let bannerImg = document.getElementsByClassName('banner');
let divImg = document.getElementsByClassName('bannerdiv');


function addEvent() {
    talk1.addEventListener('click',switchTalk);
    talk2.addEventListener('click',switchTalk);
    pp11.addEventListener('click',ppfunction);
    pp12.addEventListener('click',ppfunction);
    for (let j=0;j<daohangLength;j++){
        daohangList[j].addEventListener('click',daoFunction);
    }
    for (let j=0;j<lengthLeve;j++){
        levelList[j].addEventListener('click',levelFunction);
    }
    for (let j=0;j<talkLength;j++){
        talk1List[j].addEventListener('click',switchTalk);
        talk2List[j].addEventListener('click',switchTalk);
    }
    for (let j=0;j<3;j++){
        understandButtom[j].addEventListener('click',unbuttomFunction);
        divImg[j].addEventListener('click',divIMgFunction);
    }
    for(let j=0;j<i;j++){
        pointList[j].addEventListener('click',dot);}
}
addEvent();
function myRun() {
    run = setInterval(()=>{
        //console.log(index);
    pointList[index].removeAttribute('id');
    bannerImg[index].style='display:none';
        index++;
    if (index==i-1){
        index=0;
    }
    bannerImg[index].style='display:block';
    pointList[index].setAttribute('id','active');
    index=index;
    },4000)
}
myRun();
//了解详情函数
function unbuttomFunction(e){
    let event=e.target;
    let ev =  Number(event.getAttribute('id').split('buttom')[1]);
    if (understandFlag==-1){
            let border = document.getElementsByClassName('pain_div')[ev]
            border.style.borderTop='none';
            border.style.borderBottom='0.31rem solid RGB(83, 211, 205)';
            for(let j=0;j<4;j++){
                border.children[j].style="display:block";
            }
            for(let j=4;j<8;j++){
                border.children[j].style="display:none";
            }
        understandFlag=ev;
}
    else{
            let aborder = document.getElementsByClassName('pain_div')[ev];
            let bborder = document.getElementsByClassName('pain_div')[understandFlag];
            bborder.style.borderBottom='none';
            bborder.style.borderTop='0.31rem solid RGB(83, 211, 205)';
            aborder.style.borderBottom='0.31rem solid RGB(83, 211, 205)';
            aborder.style.borderTop='none';
            for(let j=0;j<4;j++){
                aborder.children[j].style="display:block";
            }
            for(let j=4;j<8;j++){
                aborder.children[j].style="display:none";
            }
            for(let j=0;j<4;j++){
                bborder.children[j].style="display:none";
            }
            for(let j=4;j<8;j++){
                bborder.children[j].style="display:block";
            }
            understandFlag=ev;
    }
}
//痛点选择函数
function ppfunction(e) {
    let event=e.target;
    let painDiv = document.getElementsByClassName('pain_div');
    let centerDiv = document.getElementById('center_div1');
    let sideDiv = document.getElementsByClassName('side_div');
    let ev =  Number(event.getAttribute('id').split('pp')[1][1]);
    if (ppFlag==0 && ev==2){
        pp1.removeAttribute('id');
        pp2.setAttribute('id','d_active');
        ppFlag = 1;
        if(understandFlag!=-1){
            let border = document.getElementsByClassName('pain_div')[understandFlag]
            border.style.borderBottom='none';
            border.style.borderTop='0.31rem solid RGB(83, 211, 205)';
            for(let j=0;j<4;j++){
                border.children[j].style="display:none";
            }
            for(let j=4;j<8;j++){
                border.children[j].style="display:block";
            }
        }
        for(let i=0;i<3;i++){
            painDiv[i].style="display:none";
        }
        understandFlag = -1;
        centerDiv.style='display:block';
        sideDiv[0].style='display:block';
        sideDiv[1].style='display:block';
    }
    else if (ppFlag==1 && ev==1){
        centerDiv.style='display:none';
        sideDiv[0].style='display:none';
        sideDiv[1].style='display:none';
        pp2.removeAttribute('id');
        pp1.setAttribute('id','d_active');
        ppFlag = 0;
        for(let i=0;i<3;i++){
            painDiv[i].style='border-top:0.31rem solid RGB(83, 211, 205)';
        }
    }
}
function divIMgFunction(e){
    clearInterval(run);
    let event = e.target;
    let number = Number(event.getAttribute('id').split('bdiv')[1]);
    pointList[index].removeAttribute('id');
    bannerImg[index].style='display:none';
    index = Number(number);
    pointList[index].setAttribute('id', 'active');
    bannerImg[index].style='display:block';
    myRun();
}

//轮播点点击函数
function dot(e){
    clearInterval(run);
    let event = e.target;
    let ev = event.getAttribute('class').split('p');
    if(ev[1]==0||ev[1]==1){
        pointList[index].removeAttribute('id');
        bannerImg[index].style='display:none';
        index = Number(ev[1]);
        pointList[index].setAttribute('id', 'active');
        bannerImg[index].style='display:block';
        myRun();
   }
    else{
        pointList[index].removeAttribute('id');
        bannerImg[index].style='display:none';
        index = Number(ev[1]);
        pointList[index-1].setAttribute('id', 'active');
        bannerImg[index-1].style='display:block';
        index = index -1;
        myRun();
    }
}
//对话框选中函数
function switchTalk(e){
    let ful = document.getElementById('frontul');
    let bul = document.getElementById('backul');
    let fp = document.getElementById('frontp');
    let bp = document.getElementById('backp')
    let event = e.target;
    let ev = Number(event.getAttribute('id')[4]);
    if(talkFlag==1&&ev==2){
        fp.style='display:none';
        bp.style='display:block';
        ful.style='display:none';
        bul.style='display:block';
        talk1.style.backgroundColor='rgb(230,230,230)';
        talk2.style.backgroundColor='rgb(16,23,81)';
        talk1List[0].style='color:rgb(16,23,81);';
        talk1List[1].src='./img/黑箭头.png';
        talk2List[0].style='color:white;';
        talk2List[1].src='./img/白箭头.png';
        talkFlag=2;
    }
    else if(talkFlag==2&&ev==1){
        bp.style='display:none';
        fp.style='display:block';
        ful.style='display:block';
        bul.style='display:none';
        talk2.style.backgroundColor='rgb(230,230,230)';
        talk1.style.backgroundColor='rgb(16,23,81)';
        talk2List[0].style='color:rgb(16,23,81);';
        talk2List[1].src='./img/黑箭头.png';
        talk1List[0].style='color:white;';
        talk1List[1].src='./img/白箭头.png';
        talkFlag=1;
    }
}
//等级特效
function levelFunction(e) {
    let event = e.target;
    let ev = Number(event.getAttribute('id')[4]);
    let ture = ev-1;
    let kuang = document.getElementsByClassName('quan');
    let deng = document.getElementsByClassName('dengji');
    let dengco = document.getElementsByClassName('dengco');
    let quancontent = document.getElementsByClassName('quancontent');
    if (dengjiFlag==-1){
        kuang[ture].style.border='0px';
        deng[ture].style.color='rgb(82, 210, 204)';
        dengco[ture].style.color='rgb(82, 210, 204)';
        quancontent[ture].style.backgroundColor='rgb(245, 254, 255)';
        dengjiFlag = ture;
    }
    else{
        kuang[dengjiFlag].style.border='0.1rem solid rgb(83, 211, 205)';
        deng[dengjiFlag].style.color='RGB(0, 0, 0)';
        dengco[dengjiFlag].style.color='RGB(0, 0, 0)';
        quancontent[dengjiFlag].style.backgroundColor='rgb(255, 255, 255)';
        kuang[ture].style.border='0px';
        deng[ture].style.color='rgb(82, 210, 204)';
        dengco[ture].style.color='rgb(82, 210, 204)';
        quancontent[ture].style.backgroundColor='rgb(245, 254, 255)';
        dengjiFlag = ture;
    }
}
function daoFunction(e) {
    let yuan = document.getElementById('dao_active');
    let yuanList = document.getElementById('dao_active').children;
    let yuanIndex = Number(yuanList[2].getAttribute('id').split('dimg')[1])-1;
    let yuanShowList = document.getElementsByClassName('kuangco')[0].children;
    console.log(yuanIndex);
    console.log(yuanShowList);
    console.log(yuanShowList[yuanIndex]);
    yuanShowList[yuanIndex].style='display:none';
    yuan.removeAttribute('id');
    yuanList[0].removeAttribute('id');
    yuanList[1].removeAttribute('id');
    yuanList[2].style='display:none';
    let event = e.target;
    if (event.tagName=='DIV'){
        let eventList = event.children;
        let xianIndex = Number(eventList[2].getAttribute('id').split('dimg')[1])-1;
        yuanShowList[xianIndex].style='display:block';
        event.setAttribute('id','dao_active');
        eventList[0].setAttribute('id','huobiao');
        eventList[1].setAttribute('id','huobiaop');
        eventList[2].style='display:unset';
    }
    else{
        let eventParent = event.parentNode;
        let eventList = eventParent.children;
        let xianIndex = Number(eventList[2].getAttribute('id').split('dimg')[1])-1;
        yuanShowList[xianIndex].style='display:block';
        eventParent.setAttribute('id','dao_active');
        eventList[0].setAttribute('id','huobiao');
        eventList[1].setAttribute('id','huobiaop');
        eventList[2].style='display:block';
    }
}
