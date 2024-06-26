// 任務 1. 需要取的電腦的出拳(隨機產生)
// 任務 2. 玩家的出拳(取得玩家操作)
// 任務 3. 比較的結果+呈現
// 任務 4. 可清除遊戲的控制項

// 任務 1.
function getComputerChoice(){
    // 剪刀石頭布可能出現的結果 => 0,1,2
    var pssChoice=["paper","scissor","stone"]
    // 亂數產生其中一個結果，並存放於空間，最後回傳(return)這個結果

    // *HINT*：要亂數使用Math.random =>值介於 0~1 所以需要 *3 因為陣列值0,1,2
    // 而 Math.floor() =>取德最靠近(小於)該數的整數
    var ComputerChoice=pssChoice[Math.floor(Math.random()*3)]   // 值為 0,1,2 隨機
    return ComputerChoice
}

// 任務 3-1. 取得比較結果
// getResult() 需要有 playerChoice、computerChoice 進行比較 並回傳結果
function getResult(playerChoice,computerChoice){
    // 先宣告一個儲存空間 score 用來放置遊戲結果
    var score
    // 加上判斷式 if else
    if(playerChoice==computerChoice){
        score=0
    }else if(playerChoice=="paper"&&computerChoice=="stone"){
        score=1
    }else if(playerChoice=="scissor"&&computerChoice=="paper"){
        score=1
    }else if(playerChoice=="stone"&&computerChoice=="scissor"){
        score=1
    }else{
        score=-1
    }
    return score
    // 進行測試
}

// 任務 3-2. 呈現結果
// showResult()需要有 分數(判斷依據)、玩家拳(結果1)、電腦拳(結果2) 用於顯示結果
function showResult(score,playerChoice,computerChoice){
    // 需要顯示三個結果：玩家拳、電腦拳、勝負，所以需要三個 div ( DOM ) + 三個儲存空間 ( js ) 
    const PSSresult=document.getElementById("result")
    const PSSplayer=document.getElementById("player")
    const PSScomputer=document.getElementById("computer")
    
    // 因為有三個case => 使用switch
    switch(score){
        case 1:
            PSSresult.innerHTML="你贏了！"
            PSSplayer.innerHTML=`你出了：${playerChoice}`
            PSScomputer.innerHTML=`電腦出了：${computerChoice}`
            break
        case 0:
            PSSresult.innerHTML="平手！！"
            PSSplayer.innerHTML=`你出了：${playerChoice}`
            PSScomputer.innerHTML=`電腦出了：${computerChoice}`
            break
        case -1:
            PSSresult.innerHTML="你輸了！"
            PSSplayer.innerHTML=`你出了：${playerChoice}`
            PSScomputer.innerHTML=`電腦出了：${computerChoice}`
            break
    }
}

// 任務2. 玩家出拳，取得電腦出拳(getComputerChoice)、顯示最終結果(getResult)
function getPlayerChoice(playerChoice){
    // 取得電腦出拳
    const computerChoice=getComputerChoice()
    // 去得結果
    const score=getResult(playerChoice,computerChoice)
    // 顯示解果
    showResult(score,playerChoice,computerChoice)
}

// 任務2. 取得玩家的出拳
function playGame(){
    // step1. 先從<class>buttons中，取得一個集合 *hint*：記得 <class> 要加上 '.'
    let pssButtons=document.querySelectorAll(".pssBtn")
    // step2. 使用foreach()找出 btn 這個集合每個元素並加入 onclick事件
    pssButtons.forEach(pssbtn=>{
        // 需要有個空間取得便點選btn的值
        let _id=pssbtn.id
        // 當按下按鈕要取得玩家出拳(getPlayerChoice)
        pssbtn.onclick=()=>getPlayerChoice(_id)
    })
}

const endGameBtn=document.getElementById("endGame")
// 任務4. 結束遊戲按鈕
endGameBtn.onclick=function endGame(){
    const PSSresult=document.getElementById("result")
    const PSSplayer=document.getElementById("player")
    const PSScomputer=document.getElementById("computer")
    PSSresult.innerHTML=""
    PSSplayer.innerHTML=""
    PSScomputer.innerHTML=""
}
// 一定要宣告這個，當作事件監聽器，每當畫面有操錯就需要執行這個function
playGame()