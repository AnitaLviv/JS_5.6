var times = [0,0,0,0,0,0,0,1];
var firstflag = 0;



function stopAndStart() {
    times[times[2]] = (new Date()).valueOf();
    times[2] = 1 - times[2];
    if(0 == times[2]) {
        clearInterval(times[4]);
        times[3] += times[1]- times[0];
        document.getElementById("StartStopButton").value="Start";
        document.getElementById('split').innerHTML+=(times[7]++) + ' Stop: ' + formatTime(times[1] - times[0])+'<br>';
        times[4] = times[1] = times[0] = 0;
        displayAll();
        firstflag = 0;
    } else {
        document.getElementById("StartStopButton").value = "Stop";
        times[4] = setInterval(displayAll,43);
    }
}


function splitTime() {
    if(0 !== times[2]) {
        document.getElementById('split').innerHTML += (times[7]++) + ' Split: ' + formatTime(times[1] - times[0]) + '<br>';
    }
}

function resetAll() {
    if(times[2]) {
        stopAndStart();
    }
    times[4] = times[3] = times[2] = times[1] = times[0] = 0;
    displayAll();
    document.getElementById('split').innerHTML = '';
    times[7] = 1;
}


function displayAll() {
    if(times[2]) {
        times[1] = (new Date()).valueOf();
    }
    times[6].value = formatTime(times[3] + times[1] - times[0]);
}


function formatTime(ms) {
    var date = new Date(ms + times[5]).toString().replace(/.*([0-9][0-9]:[0-9][0-9]:[0-9][0-9]).*/,'$1');
    var str = String(ms %1000);

    for ( ; str.length < 3; ) {
        str = '0' + str;
    }

    date += '.' + str;

    return date;
}




function loadTime() {
    document.body.style.backgroundColor = "#808080";
    times[5] = new Date(1970,1,1,0,0,0,0).valueOf();
    times[6] = document.getElementById('displayAll');
    displayAll();
}
