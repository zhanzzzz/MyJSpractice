// 因為兩個click事件操控同樣的物件，在製作function前先進行宣告

const priceoffood=document.getElementById("PriceOfFood")
const priceoftip=document.getElementById("PriceOfTip")
const priceoftotal=document.getElementById("PriceOfTotal")

// 製作計算的按鈕
function Accumulate(){
    // 先創建所需的變數
    var food,tip,total

    // 變數的取得來源，若是數字記得轉型!
    food=parseInt(prompt("請輸入這餐的食物花費"))
    tip=parseInt(prompt("請輸入小費的%數"))/100*food
    total=food+tip

    // 製作事件，藉由取得 html 上物件的 id 來將結果值呈現在網頁上
    priceoffood.textContent="食物："+food
    priceoftip.textContent="小費："+tip
    priceoftotal.textContent="總金額："+total
    priceoftotal.style.color="Blue"
}

// 製作清除的按鈕
function clean(){
    priceoffood.textContent=""
    priceoftip.textContent=""
    priceoftotal.textContent=""
}

