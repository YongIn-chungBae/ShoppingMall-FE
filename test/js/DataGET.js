 $.ajax({
        type: "GET",
        crossOrigin : true,
        dataType : "json",
        contentType: 'application/jsonx',
        url : "http://3.35.237.169:8080/productList",
        data: {},
    success : function(param_data) {
        const data = param_data["data"];
        var li = "";
        alert(data[2]["category"]);
        
        for(var i =0; i < data.length; i++){
                li+= "<ul id = product_item_ul>"
                li += "<li><img src =" +data[i]["image"] + "></li>"
                li += "<li class = 'a'>"+data[i]["name"] + "</li>"
                /*li += "<li class = 'b'>"+data[i]["count"] + "</li>"*/
                li += "<li class = 'b'>"+data[i]["bpCategory"] + "</li>"
                li += "<li class = 'c'>"+ "₩" + data[i]["price"] + "</li>"
                li += "</ul>"
        }
        document.getElementById("product_list_div").innerHTML = li
        
    },
    error: function(response){
        alert("에러나요오"+response[0])
    }
})
  