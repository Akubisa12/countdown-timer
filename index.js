const TimerBtns = document.querySelectorAll('.timer');
TimerBtns.forEach(TimerBtn => {
    TimerBtn.addEventListener('click', () => {
        TimerBtns.forEach(TimerBtn => {
            TimerBtn.classList.remove('active');
        });
        TimerBtn.classList.add('active');
    });
});

//mari mulai membuat countdown
const ShowTimer = document.querySelector('.countdown-value');
var Counter;
const ResetBtn = document.querySelector('.submitbtn');
function Countdown(duration){
    let stTime = duration*60;
    var displaySecond;
    Counter = setInterval(function(){
        const Minutes = Math.floor(stTime/60)
        const Seconds = stTime % 60;
        if(Seconds<10){
            displaySecond= "0" + Seconds.toString();
        }
        else{
            displaySecond= Seconds.toString();
        }
        ShowTimer.innerHTML =  Minutes + ":" + displaySecond;
        stTime--;
        if(stTime<=0){
            clearInterval(Counter)
            ShowTimer.innerHTML="Complete!";
            ShowTimer.classList.add('active')
        }
        ResetBtn.classList.add('active')
    },1000)
    ShowTimer.innerHTML = "00:00";
    ShowTimer.classList.remove('active')
}

function Reset(){
    clearInterval(Counter);
    ShowTimer.innerHTML = "00:00";
    ResetBtn.classList.remove('active');
}