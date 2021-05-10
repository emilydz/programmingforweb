let mic
// all tracks will be pushed to this array
let loopsArray = [];

function setup() {
  createCanvas(windowWidth, 150);
  mic = new p5.AudioIn();
  mic.start();

  // create a new loop function
  createLoop();

  // button that calls the createLoop function
  const addLoopButton = createButton("New loop");
  addLoopButton.mouseClicked(createLoop);
  addLoopButton.position(windowWidth / 5, 450);
  addLoopButton.style("font-family", "sans-serif");
  addLoopButton.style("font-size", "20px");
  addLoopButton.style("border", "none");
  addLoopButton.style("padding", " 2rem 15rem");
}

// Looper button for each track
function handleLoopButtonClick(loopObject) {
  // ready to record
  if (loopObject.state === "idle" && mic.enabled) {
    loopObject.recorder.record(loopObject.soundFile);

    loopObject.state = "recording";
    console.dir(loopObject.button.elt.style.backgroundColor = "#97D398");

  // stop recording
  } else if (loopObject.state === "recording") {
    loopObject.recorder.stop();

    loopObject.state = "stopped";
    console.dir(loopObject.button.elt.style.backgroundColor = "#737373");

  // play loop
  } else if (loopObject.state === "stopped") {
    loopObject.soundFile.loop();

    loopObject.state = "playing";
    console.dir(loopObject.button.elt.style.backgroundColor = "#438AC1");

  // stop loop
  } else if (loopObject.state === "playing") {
    loopObject.soundFile.stop();

    loopObject.state = "stopped";
    console.dir(loopObject.button.elt.style.backgroundColor = "#9E0C0C");
  }
}

// create a looper button function
function createLoop() {
  const newButton = createButton("");
  newButton.style("background-color", "#737373");
  newButton.style("padding", "3rem");
  newButton.style("margin", "2rem");
  newButton.style("border", "none");


  // new loop object with global parameters on it
  const newLoopObject = {
    button: newButton,
    state: "idle",
    recorder: new p5.SoundRecorder(),
    soundFile: new p5.SoundFile(),
  };

  // every new loop button, when clicked is handled by the handleLoopButtonClick function
  newButton.mouseClicked(function() {
     handleLoopButtonClick(newLoopObject)
  });

  // allow the newLoopObject to record
  newLoopObject.recorder.setInput(mic);

  // push to the array
  loopsArray.push(newLoopObject);
}
