let timerInterval;
let elapsedTime = 0;

function formatTime(time) {
    let milliseconds = time % 1000;
    let totalSeconds = Math.floor(time / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
}

function startTimer() {
    if (timerInterval) return;
    let startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        document.getElementById('timer').textContent = formatTime(elapsedTime);
    }, 10);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    stopTimer();
    elapsedTime = 0;
    document.getElementById('timer').textContent = '00:00:00:000';
    document.getElementById('splitTimes').innerHTML = ''; // Clear split times
}

function splitTimer() {
    const splitTime = formatTime(elapsedTime);
    const splitTimesList = document.getElementById('splitTimes');
    const listItem = document.createElement('li');
    listItem.textContent = splitTime;
    splitTimesList.appendChild(listItem);
}
