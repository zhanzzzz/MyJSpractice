// 任務：當 btn 被按下後，<div> 要「從遠端抓取資料」呈現出 image
// 網址 https://dog.ceo/api/breeds/image/random

// step1. 製作 dogButton 按下去的事件
// 先取得 DOM 當中的 "dogButton" 加入 .js 檔以使用
const dogbtn=document.getElementById("dogButton")
// 按下按鈕事件綁定其它事件，寫法如下
dogbtn.onclick=()=>getDogImage()


/* 此為樓上的詳細版
    dogbtn.onclick=function(){
        getDogImage()
    }
*/


// step2. 製作 getDogImage()的事件
// 先取得 DOM 當中顯示結果的 "dogImage" 加入 .js 檔以使用
const dogImgDiv=document.getElementById("dogIMG")
function getDogImage(){
    // 測試：console.log("HI")，看btn.onclick()能否正常呼叫 getDogImage()
    // 新語法：fetch => 用來取的一個非同步的請求，去別人的伺服器拿資料，當中含有Request、Response的概念
    // 以下為 promise(承諾) 語法，用來處理非同步狀況，會出現 .then
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response=>response.json())    //第一個 .then 先取得response
        .then(json=>{       // 第二個 .then 取得json「物件」，然後信息(message)為json 物件裡的其中一個屬性
            console.log(json)
            dogImgDiv.innerHTML=`<img src=${json.message}/>`  // 樣板字面值可以用來帶入<html>標籤!!
        })
}

