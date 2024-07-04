// 任務 1. 按下"add" button要把<input>的文字輸入到<ul>
// 任務 2. uncheck與check的切換
// 任務 3. 製作 delete 的功能刪除<li>項目
// 任務 4. 因為有製作 <form> => 預設屬性，當提交任何東西，整個頁面都會重整(要關掉)
// 任務 5. 若input裡沒輸入要跳出警示訊息
// 任務 6. 讓網頁能繼住你的操作，並於下次啟動時保持上次的操作：localStage觀念


// localStorage 所需的值【"Key","Value"】=> 都是字串，所以需要 JSON 來進行轉換
let listState=[]    // 宣告來存放 localStorage 的 value
const STATE_KEY="todo-list"  // 宣告資料庫的 key 值

// step1. 先製作當進入頁面時，劉覽器能 loading 先前的操作
function loadState(){

    // 在DB當中，都是藉由 key值，去取得裡面的value，所以 localState 存放的是STATE_KEY 當中的 value
    const localState=localStorage.getItem(STATE_KEY)    
    
    // 當key值不是空值，代表網頁有資料，所以要return 資料回來
    if(localState !== null){
        // json.parse => 將 string (因為localStage存放都為字串) 轉換成 value
        // 並將 localStage 的 value return 傳回值
        const arr=JSON.parse(localState)
        return arr 
    }
    // 若沒有key值，回傳空字串
    return []
}

// step2. 製作一個function，將我們每個操作轉成字串並存放到 localStorage 裡面
// 要接受每個操作的值來加以轉換，所以function裡面會有一個 value的參數
function saveState(value){
    // json.strinify => 強制將任何東西轉為 string
    localStorage.setItem(STATE_KEY,JSON.stringify(value))
}

// step3. 製作每當進入瀏覽器要跟 localStorage 「拿取」 value ，並把他｢呈現」在 html 上
function initState(){
    // 1. 拿取data => 用上面的 loadState()
    listState=loadState()
    // 2. 呈現data，加到html當中
    // 先取得 <ul> 控制項
    const ul=document.getElementById("list")
    // 運用迴圈從 listState 陣列當中拿取每個資料 => 呈現在<ul> 上
    for(const item of listState){
        // 在html 創建一個 <li>子項目的 elements，且讓elements能吃到<ul>的class
        const elements=document.createElement("li")
        elements.classList.add("item")
        // 元素的內容
        elements.innerText=item.text

        // 要在每個<li> 裡面再增加可以刪除的按鍵，且吃到CSS
        const deleteBtn=document.createElement("button")
        deleteBtn.classList.add("delete")

        // 加入btn 被點擊的事件 => 串接 deleteItem()
        deleteBtn.onclick=deleteItem

        // 要加在<li> 的後面 => 用appendChild()
        elements.appendChild(deleteBtn)

        // 如果<li>元素本身是以勾選狀態，要切換class為"checked"的樣式
        if(item.checked){
            elements.classList.add("checked")
        }
        elements.onclick=checkItem
        // 完成所有<li>後串接到<ul>裡面
        ul.appendChild(elements)
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
    const deleteBtn=document.createElement("button")  // 因為串接在<li>裡面，所以用<span>標籤
    deleteBtn.classList.add("delete")   //讓delteBtn 吃到css
    newItem.appendChild(deleteBtn)  // 讓<li>接住新元素<span>
    deleteBtn.onclick=deleteItem

    // 先更新listState => 決定value的格式，用屬性包起來因為需要"做了甚麼事"&"打勾狀態"
    listState.push({
        text,
        checked:false      
    })

    // 將每個操作都存到 saveState() 在更新到 localStorage
    saveState(listState)
}


function checkItem(event){
    // 子節點：<li>
    const item=this
    // .parentNode 取得父節點 =><ul>
    const parent=item.parentNode
    
    // .children 取得子節點
    const index=Array.from(parent.children).indexOf(item)
    // 當點擊了新的狀態要賦值成原本的相反
    listState[index].checked= !listState[index].checked
    item.classList.toggle("checked")
    saveState(listState)
    event.stopPropagation()
} 

// 任務 3. 製作 delete 的功能刪除<li>項目
// 由於deleteItem / checkItem 都在同個子元素<li>都會傳給父節點 => 會發生冒泡事件(重複執行會error)
// 停止冒泡事件 => 用 event.stopPropagation() ：讓這個事件的操作只存留在這個function
function deleteItem(e){
    // 子節點：<li>
    const item=this.parentNode
    // 父節點：<ul>
    const parent=item.parentNode
    
    const index=Array.from(parent.children).indexOf(item)
    listState=listState.filter((_,i)=>i!==index)
    parent.removeChild(item)
    saveState(listState)
    e.stopPropagation()
}
initState()