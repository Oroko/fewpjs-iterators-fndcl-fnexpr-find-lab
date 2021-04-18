
// const record = [
//   { year: "2018", result: "L" },
//   { year: "2017", result: "W" },
//   { year: "2016", result: "N/A" },
//   //...
// ];

const superbowlWin = (array) => {


  let w = array.find(w => w.result === "W") 
  return w ? w.year : undefined
  
  
}



