// code your solution here

function superbowlWin(record) {
  const winResult = record.find((record) => record.result === "W");
  return winResult ? winResult.year : undefined;
}

//     let result = record[result]
//     let year = record[year]
//   if ((result = "W"))
//   return year;
//   else (result = !"w")
//   return "undefined";
// }

// function superbowlWin(record){
//     const winResult = record.find(result = "W");
//     return winResult ? winResult.year :undefined;
// }
