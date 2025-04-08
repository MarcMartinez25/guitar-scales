const musicTheory = require('./musicTheory');

test('root note of c and major scale returns major scale', () => {
  const rootNote = "C";
  const scale = "Major";

  const returnedNotes = musicTheory.getScaleNotes(rootNote, scale);

  expect(returnedNotes).toBe(['C', 'D', 'E', 'F', 'G', 'A', 'B']);

});