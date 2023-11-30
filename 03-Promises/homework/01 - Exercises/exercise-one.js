"use strict";

let exerciseUtils = require("./utils");

let args = process.argv.slice(2).map((st) => {
  return st.toUpperCase();
});

module.exports = {
  problemA: problemA,
  problemB: problemB,
  problemC: problemC,
};

// corre cada problema dado como un argumento del command-line para procesar
args.forEach((arg) => {
  let problem = module.exports["problem" + arg];
  if (problem) problem();
});


function problemA() {
  // exerciseUtils.readFile("poem-one/stanza-02.txt", function (err, stanza2) {
  //   exerciseUtils.blue(stanza2);
  //   exerciseUtils.readFile("poem-one/stanza-03.txt", function (err, stanza3) {
  //     exerciseUtils.blue(stanza3);
  //   });
  // });

  exerciseUtils.promisifiedReadFile('poem-one/stanza-02.txt')
  .then((stanza2) => {
    exerciseUtils.blue(stanza2)
    return exerciseUtils.promisifiedReadFile('poem-one/stanza-03.txt')
  })
  .then((stanza3) => {
    exerciseUtils.blue(stanza3)
  })
}

function problemB() {
  // exerciseUtils.readFile(
  //   "poem-one/wrong-file-name.txt",
  //   function (err, stanza4) {
  //     if (err) exerciseUtils.magenta(new Error(err));
  //     else exerciseUtils.blue(stanza4);
  //   }
  // )

  exerciseUtils.promisifiedReadFile('poem-one/wrong-file-name.txt')
  .then((stanza) => {
    exerciseUtils.blue(stanza)
  })
  .catch((error) => {
    return exerciseUtils.magenta(new Error(error))
  })
}

function problemC() {
  // exerciseUtils.readFile("poem-one/stanza-03.txt", function (err, stanza3) {
  //   if (err) return exerciseUtils.magenta(new Error(err));
  //   exerciseUtils.blue(stanza3);
  //   exerciseUtils.readFile(
  //     "poem-one/wrong-file-name.txt",
  //     function (err2, stanza4) {
  //       if (err2) return exerciseUtils.magenta(new Error(err2));
  //       exerciseUtils.blue(stanza4);
  //     }
  //   );
  // });

  exerciseUtils.promisifiedReadFile('poem-one/stanza-03.txt')
  .then((stanza3) => {
    exerciseUtils.blue(stanza3)
    return exerciseUtils.promisifiedReadFile('poem-one/wrong-file-name.txt')
  })
  .then((wrongFileStanza) => {
    exerciseUtils.blue(wrongFileStanza)
  })
  .catch((error) => {
    return exerciseUtils.magenta(new Error(error))
  })

}
