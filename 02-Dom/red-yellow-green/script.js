// 製作"切換標題" 的Button，更改原文字內容，並修改為藍色
function changeTitle(){
    const tit=document.getElementById("title")
    const message="報告 Mr.張 ， 以切換標題"
    
    //更改文字的方式可以用以下三種：innerText / textContent / innerHTML(但需要加上樣板字串)
    //tit.innerText=message
    //tit.textContent=message
    tit.innerHTML=`${message}`
    tit.style.color="blue"
}
// 找尋 <class> 記得前方須加上 '.' 
// querySelectorAll('')：找尋符合字串裡的所有值，並組成一個陣列
const squares=document.querySelectorAll(".colorSquare")
const outputt=document.getElementById("output")

// 從squares陣列裡找出每個值
squares.forEach(function(choose){
    // 製作每個值被點擊的function
    choose.onclick=function(){
        // getAttribute 取出該 id
        _id=choose.getAttribute("id")
        outputt.innerHTML="我輩點擊"
        outputt.style.color=_id
    }  
})

