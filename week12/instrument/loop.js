let mic, recorder;
let button = ['1', '2', '3'];
let soundFile = ['1', '2', '3'];
let state = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  mic = new p5.AudioIn();
  mic.start();
  recorder = new p5.SoundRecorder();
  recorder.setInput(mic);
  soundFile = new p5.SoundFile();

  button['1'] = createButton("record");
  button['2'] = createButton("record");
  button['3'] = createButton("record");

  button['1'].position(10, 10, 10);
  button['2'].position(30, 30, 10);
  button['3'].position(50, 50, 10);

  button['1'].mouseClicked(loopRecord(soundFile['1']));
  button['2'].mouseClicked(loopRecord(soundFile['2']));
  button['3'].mouseClicked(loopRecord(soundFile['3']));
}

// this is the looper
function loopRecord(soundFile) {
  if (state === 0 && mic.enabled) {
    recorder.record(soundFile);

    background(255, 0, 0);
    state++;
  } else if (state === 1) {
    recorder.stop();

    background(0, 255, 0);
    state++;
  } else if (state === 2) {
    soundFile.loop();
    state++;
  } else if (state === 3) {
    soundFile.stop();
    state++;
  } else if (state === 4) {
    state === 0;
  }
}
