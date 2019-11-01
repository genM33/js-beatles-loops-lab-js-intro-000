// add solution here

function theBeatlesPlay(musicians, instruments) {
  let musiciansAndInstruments = [];
  for (let i = 0; i < musicians.length; i++) {
    musiciansAndInstruments[i] = `${musicians[i]} plays ${instruments[i]}`;
  };
  return musiciansAndInstruments;
};

// console.log(theBeatlesPlay(['John Lennon', 'Paul McCartney', 'George Harrison','Ringo Starr'], ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums']));

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(factsArray) {
let i = 0;
  while (factsArray[i] != undefined) {
    factsArray[i] = `${factsArray[i]}!!!`;
    i++;
  };
  return factsArray;
};

// console.log(johnLennonFacts(facts));
function iLoveTheBeatles(num) {
  let emptyArray = [];
  do {
<<<<<<< HEAD
    emptyArray.unshift("I love the Beatles!");
    num++;
=======
    emptyArray.push("I love the Beatles");
>>>>>>> 4f6bd531110391b45da7fe8533c4a172f2fd1318
  } while (num < 15);
  return emptyArray;
};

<<<<<<< HEAD
// console.log(iLoveTheBeatles(0));
=======
console.log(iLoveTheBeatles(12));
>>>>>>> 4f6bd531110391b45da7fe8533c4a172f2fd1318
