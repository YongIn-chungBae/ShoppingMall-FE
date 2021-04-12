 $.ajax({
        type: "GET",
        crossOrigin : true,
        dataType : "json",
        contentType: 'application/jsonx',
        url : "http://93e3965104aa.ngrok.io/productList",
        data: {},
    success : function(param_data) {
        const data = param_data["data"];
        var li = "";
        alert(data[2]["category"]);
        
        for(var i =0; i < data.length; i++){
                li += "<li><img src =" +data[i]["image"] + "></li>"
                li += "<li class = 'a'>"+data[i]["name"] + "</li>"
                /*li += "<li class = 'b'>"+data[i]["count"] + "</li>"*/
                li += "<li class = 'b'>"+data[i]["bpCategory"] + "</li>"
                li += "<li class = 'c'>"+data[i]["price"] + "</li>"
        }
        document.getElementById("test_id").innerHTML = li
        
    },
    error: function(response){
        alert("에러나요오"+response[0])
    }
})
  