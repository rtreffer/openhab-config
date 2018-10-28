(function(x){
    var result = "";
    var json = JSON.parse(x);
    if (json.hasOwnProperty('occupancy')) {
      if (json.occupancy) {
        result="ON";
      } else {
        result="OFF";
      }
    }
    return result;
})(input)
