document.addEventListener("DOMContentLoaded", () => {
  let sequenceInput = document.getElementById("sequence");
  let greenIntervalInput = document.getElementById("greenInterval");
  let yellowIntervalInput = document.getElementById("yellowInterval");
  let startButton = document.getElementById("startButton");
  let stopButton = document.getElementById("stopButton");

  let sequence = [];
  let greenInterval = 0;
  let yellowInterval = 0;
  let currentSignal = 0;
  let timer;

  startButton.addEventListener("click", startSignals);
  stopButton.addEventListener("click", stopSignals);

  function startSignals() {
    sequence = sequenceInput.value.split(",").map((id) => id.trim());
    greenInterval = parseInt(greenIntervalInput.value) * 1000;
    yellowInterval = parseInt(yellowIntervalInput.value) * 1000;

    if (validateInputs()) {
      // Send data to the server via AJAX
      sendSignalData(sequence, greenInterval, yellowInterval);

      // Start the signal cycling
      currentSignal = 0;
      cycleSignals();
    } else {
      alert("Please fill in all fields correctly.");
    }
  }

  function stopSignals() {
    clearTimeout(timer);
    resetLights();
  }

  function validateInputs() {
    if (
      sequence.length === 0 ||
      isNaN(greenInterval) ||
      isNaN(yellowInterval)
    ) {
      return false;
    }
    return sequence.every((id) => document.getElementById(id) !== null);
  }

  function resetLights() {
    document.querySelectorAll(".light").forEach((light) => {
      light.style.backgroundColor = "grey";
    });
  }

  function cycleSignals() {
    if (currentSignal < sequence.length) {
      let signalId = sequence[currentSignal];
      let signalElement = document.getElementById(signalId);

      if (signalElement) {
        resetLights();
        signalElement.querySelector(".green").style.backgroundColor = "green";

        timer = setTimeout(() => {
          signalElement.querySelector(".green").style.backgroundColor = "grey";
          signalElement.querySelector(".yellow").style.backgroundColor =
            "yellow";

          timer = setTimeout(() => {
            signalElement.querySelector(".yellow").style.backgroundColor =
              "grey";
            currentSignal++;
            cycleSignals();
          }, yellowInterval);
        }, greenInterval);
      } else {
        console.error(`Signal element with ID '${signalId}' not found.`);
        stopSignals();
      }
    } else {
      currentSignal = 0;
      cycleSignals();
    }
  }

  function sendSignalData(sequence, greenInterval, yellowInterval) {
    fetch("/start-signals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sequence: sequence,
        greenInterval: greenInterval,
        yellowInterval: yellowInterval,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          console.log("Success:", data.message);
        } else {
          console.error("Error:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});
