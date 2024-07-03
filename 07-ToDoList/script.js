// 任務 1. 按下"add" button要把<input>的文字輸入到<ul>
// 任務 2. uncheck與check的切換
// 任務 3. 製作 delete 的功能刪除<li>項目
// 任務 4. 因為有製作 <form> => 預設屬性，當提交任何東西，整個頁面都會重整(要關掉)
// 任務 5. 若input裡沒輸入要跳出警示訊息


let listState=[]
const STATE_KEY="todo-list"

function  loadState(){
    const listState=localStorage.getItem(STATE_KEY)
    if(listState !== null){
        return JSON.parse(listState)
    }
    return []
}

function saveState(list){
    localStorage.setItem(STATE_KEY,JSON.stringify(list))
}

intList()

function intList(){
    // loda state
    listState=loadState()

    // remder list
    const ul=document.getElementById("list")
    for(const item of listState){
        const li=document.createElement("li")
        li.innerText=item.text

        const deleteButton=document.createElement("span")
        deleteButton.classList.add("delete")
        deleteButton.onclick=deleteItem

        li.appendChild(deleteButton)
        li.classList.add("item")

        if(item.checked){
            li.classList.add("checked")
        }

        li.onclick=checkItem
        ul.appendChild(li)
    }
}

// 取得 add-button 的 id 交給 .js 去控制
const addBtn=document.getElementById("add-button")
// 取得 <form> 的 id 交給 .js 去控制
const form=document.getElementById("input-wrapper")

// 任務4. 把重整預設值關掉(運用事件監聽製作function)
form.addEventListener("submit",(e)=>{
    e.preventDefault()  // 參數用"e"，關閉預設為"preventDefault()"
})

// 任務1. 按下btn要有事件發生 => addItem事件後面在宣告(邏輯拆分概念)
addBtn.addEventListener("click",addItem)

// 製作addItem 事件 => 取得 <input>的值，並放到 <ul> 裡面
function addItem(){
    // 取得 <input>輸入端、<ul>輸出端的 id 交給 .js 去控制
    const input=document.getElementById("input")
    const ul=document.getElementById("list")
    // 宣告一個變數去接住 input 的值
    const text=input.value
    
    // 任務 5. 若input裡沒輸入要跳出警示訊息 
    if (text==""){
        alert("Please enter the item")
        return  // 因為在函式裡面，需要return跳出函示，否則會繼續執行
    }

    // 任務 1. 將<input> 值加入<ul>底下的<li>標籤
    // 要創造出 <li> 標籤加入
    const newItem=document.createElement("li")
    newItem.classList.add("item")   // 套用<class>的樣式
    newItem.innerText=text
    ul.appendChild(newItem) // appendChile串接物件，將newItem加入到<ul>當中
    input.value=""  // 插入後要將 input 的值清空

    // 任務 2. 點擊項目要切換check 與 uncheck 的狀態
    // 另外製作切換的function 並賦值給 newItem 的點擊事件
    
    // newItem.onclick=checkItem     以上兩種寫法都可以：onclick事件/事件監聽
    newItem.addEventListener("click",checkItem)

    
    // 另外製作一個 deleteButton 來接住 deleteItem 事件，並串接btn 在每行<li>後面 
    const deleteBtn=document.createElement("span")  // 因為串接在<li>裡面，所以用<span>標籤
    deleteBtn.classList.add("delete")   //讓delteBtn 吃到css
    newItem.appendChild(deleteBtn)  // 讓<li>接住新元素<span>
    deleteBtn.onclick=deleteItem

    listState.push({
        text,
        checked: false
    })
    saveState(listState)
}


function checkItem(){
    const item=this
    const parent=item.parentNode
    const idx=Array.from(parent.childNodes).indexOf(item)

    listState[idx].checked= !listState[idx].checked
    item.classList.toggle("checked")

    saveState(listState)
} 

// 任務 3. 製作 delete 的功能刪除<li>項目
function deleteItem(e){
    const item=this.parentNode
    const parent=item.parentNode
    const idx=Array.from(parent.childNodes).indexOf(item)
    listState=listState.filter((_,i)=>i !==idx)
    parent.removeChild(item)

    saveState(listState)
    e.stopPropagation()
}