application.filter("myFilter", function() {
    return function(name) {
      var c,i,txt="";
        for(i=0;i<name.length;i++) {
          c = name[i];
            if(i %  2 == 0) {
                c = c.toUpperCase();
            }
             txt = txt + c;
        }
        return txt;
    };
})