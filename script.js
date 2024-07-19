let hours = 0,
    minutes = 0,
    seconds = 0,
    milliseconds = 0,
    interval;

function startStopwatch() {
    clearInterval(interval);
    interval = setInterval(updateStopwatch, 10);
}

function stopStopwatch() {
    clearInterval(interval);
}

function resetStopwatch() {
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    document.getElementById('milliseconds').textContent = '00';
}

function updateStopwatch() {
    milliseconds += 1;
    if (milliseconds >= 100) {
        milliseconds = 0;
        seconds += 1;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes += 1;
    }
    if (minutes >= 60) {
        minutes = 0;
        hours += 1;
    }

    document.getElementById('hours').textContent = formatTime(hours);
    document.getElementById('minutes').textContent = formatTime(minutes);
    document.getElementById('seconds').textContent = formatTime(seconds);
    document.getElementById('milliseconds').textContent = formatTime(milliseconds, 2);
}

function formatTime(time, digits = 2) {
    return time.toString().padStart(digits, '0');
}
