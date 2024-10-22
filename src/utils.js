const generateNotes = (start, number) => {
  const letters = [
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#"
  ];
  let last_letter = "";
  const output = [];
  // for (let i = 0; i < 2 * 87; i++) {
  for (let i = 0; i < number; i++) {
    // let note, quarter_tone, octave, freq;
    let note, quarter_tone, freq;
    let x = i / 2;
    //// note from array
    let getNote = letters[x % 12];
    if (getNote) {
      last_letter = getNote;
      note = getNote;
    } else {
      note = last_letter;
    }
    //// quarter_tone
    if (Math.trunc(x) === x) {
      quarter_tone = "";
    } else {
      // quarter_tone = `${unicodeChar}`;
      quarter_tone = "-half";
    }
    //// make string
    freq = parseFloat((start * Math.pow(2.0, x / 12.0)).toFixed(4));
    // freq = parseFloat((220 * Math.pow(2.0, x / 12.0)).toFixed(4));
    // octave = Math.trunc((x + 9) / 12);
    // const string = `${note}${quarter_tone}${octave}`;
    const string = `${note}${quarter_tone}`;
    let obj = { frequency: freq, name: string };
    output.push(obj);
  }
  return output;
};

export { generateNotes };
