// code your solution here

function superbowlWin(record) {
  const winResult = record.find((record) => record.result === "W");
  return winResult ? winResult.year : undefined;
}
