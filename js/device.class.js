var Device = function () {

};

Device.prototype.GetBetween = function (content, start, end){
  var r = content.split(start);
  if (1 in r) {
      var z = r[1].split(end);
      return z[0];
  }
  return '';
}

Device.prototype.str_replace = function (search, replace, subject) {

  var i = 0
  var j = 0
  var temp = ''
  var repl = ''
  var sl = 0
  var fl = 0
  var f = [].concat(search)
  var r = [].concat(replace)
  var s = subject
  s = [].concat(s)

  for (i = 0, sl = s.length; i < sl; i++) {
    if (s[i] === '') {
      continue
    }
    for (j = 0, fl = f.length; j < fl; j++) {
      temp = s[i] + ''
      repl = r[0]
      s[i] = (temp).split(f[j]).join(repl)
      if (typeof countObj !== 'undefined') {
        countObj.value += ((temp.split(f[j])).length - 1)
      }
    }
  }
  return s[0]
}


Device.prototype.partOfArray = function (arr,obj) {
    for(var i=0; i<arr.length; i++) {
        if (arr[i] == obj) return true;
    }
}

Device.prototype.version = function() {
    var UA = navigator.userAgent;
    console.log(UA);
    console.log(this.str_replace("_", ".", this.GetBetween(UA, "iPhone OS ", " like")));

    // if (this.partOfArray(versions, this.GetBetween(UA, "Mobile/", " "))) {
    if (this.GetBetween(UA, "iPhone OS ", " like") != undefined || this.GetBetween(UA, "iPhone OS ", " like") != null || this.GetBetween(UA, "iPhone OS ", " like") != "") {
      return this.str_replace("_", ".", this.GetBetween(UA, "iPhone OS ", " like"));
    } else {
      return "Unknown";
    }
};

Device.prototype.product_name = function() {
    var canvas = document.createElement("canvas");
    if (canvas) {
        var context = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        if (context) {
            var info = context.getExtension("WEBGL_debug_renderer_info");
            if (info) {
                var renderer = context.getParameter(info.UNMASKED_RENDERER_WEBGL);
            }
        }
    }

    // iPhone XS Max
    if ((window.screen.height / window.screen.width == 896 / 414) && (window.devicePixelRatio == 3)) {
      return "iPhone XS Max";
    // iPhone XR
    } else if ((window.screen.height / window.screen.width == 896 / 414) && (window.devicePixelRatio == 2)) {
      return "iPhone XR";
    // iPhone X/XS
    } else if ((window.screen.height / window.screen.width == 812 / 375) && (window.devicePixelRatio == 3)) {
      switch (renderer) {
          default:
              return "iPhone X/XS";
          case "Apple A12 GPU":

              return "iPhone XS";
          case "Apple A11 GPU":
              return "iPhone X";
      }
    // iPhone 6+/6s+/7+ and 8+
    } else if ((window.screen.height / window.screen.width == 736 / 414) && (window.devicePixelRatio == 3)) {
        switch (renderer) {
            default:
                return "iPhone 6 Plus/6s Plus/7 Plus/8 Plus";
            case "Apple A8 GPU":
                return "iPhone 6 Plus";
            case "Apple A9 GPU":
                return "iPhone 6s Plus";
            case "Apple A10 GPU":
                return "iPhone 7 Plus";
            case "Apple A11 GPU":
                return "iPhone 8 Plus";
        }
    // iPhone 6+/6s+/7+ and 8+ in zoom mode
    } else if ((window.screen.height / window.screen.width == 667 / 375) && (window.devicePixelRatio == 3)) {
        switch(renderer) {
            default:
                return "iPhone 6 Plus/6s Plus/7 Plus/8 Plus";
            case "Apple A8 GPU":
                return "iPhone 6 Plus";
            case "Apple A9 GPU":
                return "iPhone 6s Plus";
            case "Apple A10 GPU":
                return "iPhone 7 Plus";
            case "Apple A11 GPU":
                return "iPhone 8 Plus";
        }
    // iPhone 6/6s/7 and 8
    } else if ((window.screen.height / window.screen.width == 667 / 375) && (window.devicePixelRatio == 2)) {
        switch(renderer) {
            default:
                return "iPhone 6/6s/7/8";
            case "Apple A8 GPU":
                return "iPhone 6";
            case "Apple A9 GPU":
                return "iPhone 6s";
            case "Apple A10 GPU":
                return "iPhone 7";
            case "Apple A11 GPU":
                return "iPhone 8";
        }
    // iPhone 5/5C/5s/SE or 6/6s/7 and 8 in zoom mode
    } else if ((window.screen.height / window.screen.width == 1.775) && (window.devicePixelRatio == 2)) {
        switch(renderer) {
            default:
                return "iPhone 5/5c/5s/SE/6/6s/7/8";
            case "PowerVR SGX 543":
                return "iPhone 5c";
            case "Apple A7 GPU":
                return "iPhone 5s";
            case "Apple A8 GPU":
                return "iPhone 6";
            case "Apple A9 GPU":
                return "iPhone SE";
            case "Apple A10 GPU":
                return "iPhone 7";
            case "Apple A11 GPU":
                return "iPhone 8";
        }
    } else {
        return "Unknown";
    }
};