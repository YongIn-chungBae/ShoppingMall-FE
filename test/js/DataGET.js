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
        const idx_data = [];
        const price_data = [];



        for(var i =0; i < data.length; i++){
                li+= "<ul class = product_item_ul id = product_item_ul"+i+">"
                li += "<li><img src =" +data[i]["image"] + "</li>"
                li += "<li class = 'a'>"+data[i]["name"] + "</li>"
                li += "<li class = 'b'>"+data[i]["bpCategory"] + "</li>"
                li += "<li class = 'c'>"+ "₩" + data[i]["price"] + "</li>"
                li += "</ul>"
                idx_data[i] = data[i]["idx"]
                price_data[i] = data[i]["price"]
                
        }
        document.getElementById("product_list_div").innerHTML = li
        
        for(let i =0;i<data.length;i++){
            document.getElementById("product_item_ul"+i).addEventListener('click', function(){
                alert(i);
                localStorage.setItem('idx', idx_data[i]);
                localStorage.setItem('price', price_data[i]);
                location.href = "상품상세페이지.html";
            })
            
        }

    },
    error: function(response){
        alert("에러나요오"+response[0])
    }
})
  