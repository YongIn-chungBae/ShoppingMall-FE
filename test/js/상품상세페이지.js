
$(document).ready(function(){
    alert("되냐고")
    var idx = localStorage.getItem("idx");
    const price = localStorage.getItem("price");

    $.ajax({
        type: "GET",
        crossOrigin : true,
        dataType : "json",
        contentType: 'application/jsonx',
        url : "http://3.35.237.169:8080/productDetail?productIdx="+idx,
        data: {},
    success : function(param_data) {
        const data = param_data["data"];
        var li = "";
        
        li+= "<ul class = product_detail_ul id = product_detail_ul>"
        li += "<li><img src =" +data["image"] + "</li>"
        li += "<li class = 'a'>"+data["productName"] + "</li>"
        li += "<li>"+"가격: "+ price + "</li>"
        li += "<li>"+data["style"] + "</li>"
        li += "<li>"+data["color"] + "</li>"
        li += "<li>"+data["material"] + "</li>"
        li += "<li>"+data["size"] + "</li>"
        li += "<li>"+data["country"] + "</li>"
        li += "<li>"+data["md"] + "</li>"
        li += "<li>"+data["period"] + "</li>"
        li += "<li class = 'a'>"+data["title"] + "</li>"
        li += "<li>"+data["content"] + "</li>"
        li += "</ul>"

        
    document.getElementById("product_detail_div").innerHTML = li
        
    },
    error: function(response){
        alert("에러나요오"+response[0])
    }
    })
    
})

