let seconds=0
let m_seconds=0
const displaySeconds=document.getElementById("seconds")
const displayMseconds=document.getElementById("m_seconds")
const buttonStart=document.getElementById("start")
const buttonStop=document.getElementById("stop")
const buttonReset=document.getElementById("reset")
var interval  // 需要有個存放計時器的變數

// 綁定 button_start 的事件
// 為何可以這樣寫：因為buttonStart被我們宣告要去html裡找"id=start" ，為一個button，在複寫 onclick 事件
buttonStart.onclick=function(){
    // setInterval 為API ：計時器的概念
    interval=setInterval(timer,10)
}
// 綁定 button_stop 的事件
buttonStop.onclick=function(){
    clearInterval(interval)
}
// 綁定 button_reset 的事件
buttonReset.onclick=function(){
    clearInterval(interval)     // 一定需要暫停計時器，否則更新後會重新繼續跑
    seconds=0
    m_seconds=0
    displayMseconds.innerHTML=`0${m_seconds}`
    displaySeconds.innerHTML=`0${seconds}`
}
// 碼表讀取方法
const timer=function(){
    m_seconds++
    // 顯示於window上，且加上一些條件讓他正常顯示
    if(m_seconds<=9){
        // 順利顯示出 01 02 03 04....
        // 用樣板字面值才不會發生跳動，不知道原因為何
        // 樣板字面值可讓字串去接變數喔!!!
        displayMseconds.innerHTML=`0${m_seconds}`
    }else{
        // 當進到 2位數時，"0" 需要消失
        displayMseconds.innerHTML=m_seconds
    }
    if(seconds<=9){
        // 一開始要顯示 01 02 03.....
        displaySeconds.innerHTML=`0${seconds}`
    }else{
        // 進到 2位數時，"0" 需要消失
        displaySeconds.innerHTML=seconds
    }
    // 當毫秒到100時，秒數要進位
    // 秒數顯示於畫面，顯示的條件也需要如同毫秒加進去
    if(m_seconds>99){
        seconds++
        m_seconds=0
    }
    
}