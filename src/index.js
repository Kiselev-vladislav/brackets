module.exports = function check(str, bracketsConfig) {
  let result = true
  let stack = []
  for(i = 0; i < str.length; i++){
    for(let elem of bracketsConfig){
      if(str[i] == elem[0] && str[i] != elem[1]){
        stack.push(str[i])
      }

      else if(str[i] == elem[1] && str[i] != elem[0]){
        if(stack.length > 0 && stack[stack.length - 1] == elem[0]){
          console.log(str[i])
          stack.pop()
          
        }
        else{
          result = false
        }
      }

      else if(str[i] == elem[0] && str[i] == elem[1]){
        if(stack[stack.length-1] == str[i]){
          stack.pop()
        }
        else {
          stack.push(str[i])
        }
      }

    }
  }
  if(stack.length > 0){
    result = false
  }
  return result
}