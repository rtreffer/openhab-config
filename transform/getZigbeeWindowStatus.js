(function(x){
    var result = "";
    var json = JSON.parse(x);
    // sanity check: is the device marked online?
    if (json.hasOwnProperty('device')) {
      var device = json.device;
      if (device.hasOwnProperty('status') && device['status'] != 'online') {
        return "";
      }
    }
    // sanity check: link quality is > 0
    if (json.hasOwnProperty('linkquality')) {
      if (json.linkquality <= 0) {
        return "";
      }
    }
    if (json.hasOwnProperty('contact')) {
      if (json.contact) {
        result="ON";
      } else {
        result="OFF";
      }
    }
    return result;
})(input)
