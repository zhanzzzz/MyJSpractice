// console.log => 列印出字串

//console.log("hello js")
//console.log("Hi , JS")
//console.log("name")



//變數宣告 (var、const、let)


//let name="codeshiba"
//console.log(name)




//字串放於變數空間 字串與字串變數可直接相加

//let sentence="嗨今天過的如何?很高興見到你，祝你有個美好的一天"
//console.log(name+" "+sentence)



//prompt 功能 => 讓頁面跳出textbox 訊息，讓使用者輸入

//let fruit=prompt("你最喜歡的水果是甚麼")
//console.log(fruit)




//ch1 練習. 小費計算機

//step 1.讓user 輸入餐費金額 & 小費趴數，需跳出textbox，所以用prompt() 取得資訊
let food=parseInt(prompt("請問這餐多少錢"))
let tipPercentage=parseInt(prompt("請問小費多少"))/100

//step 2.列印出小費金額 & 總金額，所以用console.log() 印出資訊
//先宣告出變數來儲存各金額
let tipAmount=food*tipPercentage
let total=tipAmount+food
//step 3. 發現問題total變成字串相加，需先將先前變數轉型為int類型，運用parseInt()解決
console.log("餐費： "+food)
console.log("小費金額： "+tipAmount)
console.log("總金額： "+total)

