const { welcome, goodbye, tell } = require("../utils/fortune-teller");

function getFortune(question) {
  let empty = [];
  return tell(question).then((fortune) => {
    empty.push("Your question was: " + question );
    empty.push("Your fortune is: " + fortune );
    return empty
  }).catch((error) => {
    let strg = "There was an error: " + error
    return strg;
  })
}

function fullSession(question) {
   let empty = [];
  return welcome().then(msg => empty = [...empty,msg]
//     empty.push(msg)
//     return empty
  ).then(() => tell(question))
    .then(fortune => empty = [...empty,"Your question was: " + question, "Your fortune is: " + fortune] 
//       empty.push("Your question was: " + question)
//       empty.push("Your fortune is: " + fortune)
  ).catch(error => empty = [...empty,"There was an error: " + error]
//       empty.push("There was an error: " + error)
  ).then(() => goodbye().then(msg => empty = [...empty, msg]
//     empty.push(msg)
//     return empty
  ))
 }
           
module.exports = { getFortune, fullSession };
