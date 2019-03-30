// function currentLine(katzDeliLine) {
//   var newLine = []
// 	if (katzDeliLine.length === 0) {
//   	return ( `The line is currently empty.`)
// 	} else {
//     for(var i = 0; i < katzDeliLine.length; i++){
//     newLine.push(`${i+1}\. ${katzDeliLine[i]}`)
//   }
//     return (`The line is currently: ${newLine.join(', ')}`)
// 	}
// }


function takeANumber(line, name){
  line.push(name)
  return(`Welcome, ${name}. You are number ${line.length} in line.`)
}

function nowServing(line){
  if(line.length > 0){
    return (`Currently serving ${line.shift()}.`)
  } else{
    return(`There is nobody waiting to be served!`)
  }
}

function currentLine(line){
  var newLine = []
  if(line.length > 0){
    for(var i = 0; i < line.length; i++){
      newLine.push(`${i+1}\. ${line[i]}`)
    }
    } else{
    return(`The line is currently empty.`)
  }
  return(`The line is currently: ${newLine.join(', ')}`)
}