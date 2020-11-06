function format(string: string){
  let trined = string.trim()
  let array:Array<string> = trined.split('-');
  let finalString:string = '';
  for (let index = 0; index < array.length; index++) {
    finalString += array[index] + ' ';
  }
  return finalString;
}

export default format;