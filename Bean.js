function countBs(str) {
    var count = 0; 
    for (var i = 0; i < str.length; i++) {
      if (str.charAt(i) === "B")
        count++;
    }
    return count;
  }
  console.log(countBs("Hello B the count of b is equals to B so BBBB"));




  var countChar = function(str, character) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === character)
            count++;
    }
    return count;
}
console.log(countChar('Submission guidelines', 'i'))
console.log(countChar('Submission guidelines', 's'));


