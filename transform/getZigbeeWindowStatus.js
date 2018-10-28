(function(x){
    var result = "";
    var json = JSON.parse(x);
    if (json.hasOwnProperty('contact')) {
      if (json.contact) {
        result="ON";
      } else {
        result="OFF";
      }
    }
    return result;
})(input)
