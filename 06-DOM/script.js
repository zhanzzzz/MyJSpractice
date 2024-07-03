const btn=document.getElementById("button")
// getElementById => 運用<id>找元素
// querySelector => 可運用<class>、<id>找元素，在括弧字串中<class>要用【.】/ <id>要用【#】
const QueryBtn=document.querySelector("#button")

// 1. 事件監聽寫法
btn.addEventListener("click", e=>{
    const newBox=document.createElement("div")  // 在js裡創建存放<div>元素的變數空間
    newBox.classList.add("box") // 將newBox歸類在"box"這個<class>，讓他可以吃到<style>的樣式
    const container=document.querySelector(".container")    //找出可以存放newBox的父元素，而"container"為<class>，所以用querySelector(".")來找尋
    container.appendChild(newBox)   // 父元素當中再加上其他的子元素
})


/*  2. button 點擊
btn.onclick=()=>{
    const newBox=document.createElement("div")
    newBox.classList.add("box")
    const container=document.querySelector(".container")
    container.appendChild(newBox)
}
*/