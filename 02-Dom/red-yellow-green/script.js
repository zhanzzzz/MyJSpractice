// Q1：製作"切換標題" 的Button，更改原文字內容，並修改為藍色
function changeTitle(){
    const tit=document.getElementById("title")
    const user=prompt("請輸入user名")
    
    //更改文字的方式可以用以下三種：innerText / textContent / innerHTML
    //tit.innerText=message
    //tit.textContent=message
    // 使用樣板字面詞，讓字串可以抓取 user 變數
    tit.innerHTML=`報告${user}，以切換標題`
    
    tit.style.color="blue"
}
// Q2：點擊紅黃綠三個方塊，並稱獻出所選

// 方法 1. 運用 <div> 來製作，找出所有的方塊並執行程式碼
// 找尋 <class> 記得前方須加上 '.' 

// step1. 找出所有<class>為 "colorSquare"的控制項並存放於一個空間
const squares=document.querySelectorAll(".colorSquare")
// step3. 抓取 DOM 呈現輸出結果的地方，並放在 .js 裡加以控制
const output=document.getElementById("output")
// step2. 一個個找出這些控制項=>foreach+箭頭函式
squares.forEach(colorbox=>{
    // squares的每個物件都會存放於colorbox共用空間，並為他們製作事件
    colorbox.onclick=()=>{
        // 驗證：console.log("我輩點擊了")，每個colorBox都有回應
        // step3+4. 影響畫面，並加上顏色
        // step4. 抓取colorBox(共有3個)的 id 出來並放置空間儲存
        const _id=colorbox.id
        // 驗證：console.log(_id) 有順利抓出每個colorBox的 id
        output.innerHTML=`我輩點擊了，你選擇的是${_id}`     // 由於 _id 是變數，需用上樣板字面詞
        output.style.color=_id
    }
})




/* 下方為樓上箭頭函示的完整版

squares.forEach(function(colorButton){
    // 製作每個值被點擊的function
    colorButton.onclick=function(){
        // getAttribute 取出該 id
        _id=choose.getAttribute("id")
        outputt.innerHTML="我輩點擊"
        outputt.style.color=_id
    }  
})
*/

/*
// 方法 2. 運用 <id> 抓取方塊製作三個事件

// step1. 先抓取三個button 並放在 .js 裡加以控制
const buttonRed=document.getElementById("red")
const buttonYellow=document.getElementById("yellow")
const buttonGreen=document.getElementById("green")
// 驗證：console.log(buttonRed,buttonGreen,buttonYellow)

// 抓取 DOM 呈現輸出結果的地方，並放在 .js 裡加以控制
const output=document.getElementById("output")

// step2. 開始製作3個 button 被點擊的事件
buttonRed.onclick=function(){
    // 驗證console.log("我被點擊了") => 確認控制台能正確執行
    output.innerHTML=`我被點擊了，你選的是${buttonRed.id}`
    output.style.color=buttonRed.id
}

// step3. 如法炮製
buttonYellow.onclick=function(){
    // 驗證console.log("我被點擊了") => 確認控制台能正確執行
    output.innerHTML=`我被點擊了，你選的是${buttonYellow.id}`
    output.style.color=buttonYellow.id
}

buttonGreen.onclick=function(){
    // 驗證console.log("我被點擊了") => 確認控制台能正確執行
    output.innerHTML=`我被點擊了，你選的是${buttonGreen.id}`
    output.style.color=buttonGreen.id
}
*/