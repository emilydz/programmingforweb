let synth, soundLoop;
//let notePattern = [60, 62, 64, 67, 69, 72];

 function setup() {
   let cnv = createCanvas(windowWidth, windowHeight);
   cnv.mousePressed(canvasPressed);
   colorMode(HSB);
   background(0, 0, 86);
   text('tap to start/stop', 10, 20);

   //the looper's callback is passed the timeFromNow
   //this value should be used as a reference point from
   //which to schedule sounds
   let interval = 0.2;
   soundLoop = new p5.SoundLoop(looping, interval);

   synth = new p5.MonoSynth();

   //setup setInput
   let inp = createInput([]);
   inp.position(100, 100);
   inp.size(100);
   inp.input(create);
}

function create() {
  console.log('you are typing: ', this.value());
  let notePattern = this.value();
}

function canvasPressed() {
  getAudioContext().resume();
  // ensure audio is enabled
  if (soundLoop.isPlaying) {
    soundLoop.stop();
  } else {
    // start the loop
    soundLoop.start();
  }
}

function looping(timeFromNow) {
  let noteIndex = (soundLoop.iterations - 1) % notePattern.length;
  let note = midiToFreq(notePattern[noteIndex]);
  synth.play(note, 0.5, timeFromNow);
}

function create() {
  console.log('you are typing: ', this.value());
  let notePattern = this.value();
}
