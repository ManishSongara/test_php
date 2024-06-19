<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="controls">
        <label for="sequence">sequence (e.g., A,B,C,D)</label>
        <input type="text" id="sequence" name="sequence" />

        <label for="greenInterval">Green Interval</label>
        <input type="number" id="greenInterval" name="greenInterval" />

        <label for="yellowInterval">yellow Interval</label>
        <input type="number" id="yellowInterval" name="yellowInterval" />

        <button id="startButton">Start</button>
        <button id="stopButton">Stop</button>
    </div>

    <div id="signalContainer">
        <div class="signal" id="A">
            <div class="light red"></div>
            <div class="light yellow"></div>
            <div class="light green"></div>
            <div class="label">A</div>
        </div>
        <div class="signal" id="B">
            <div class="light red"></div>
            <div class="light yellow"></div>
            <div class="light green"></div>
            <div class="label">B</div>
        </div>
        <div class="signal" id="C">
            <div class="light red"></div>
            <div class="light yellow"></div>
            <div class="light green"></div>
            <div class="label">C</div>
        </div>
        <div class="signal" id="D">
            <div class="light red"></div>
            <div class="light yellow"></div>
            <div class="light green"></div>
            <div class="label">D</div>
        </div>
    </div>
    <script src="script.js"></script>
</body>

</html>