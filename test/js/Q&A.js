$.ajax({
    type: "GET",
    crossOrigin : true,
    dataType : "json",
    contentType: 'application/jsonx',
    url : "http://3.35.237.169:8080/qna/findAll",
    data: {},

success : function(param_data) {
    const data = param_data["data"];
    var li = "";
    const idx_data = [];
    for(var i =0; i < data.length; i++){
            li += "<tr>"
            li += "<td>" + data[i]["idx"] + "</td>"
            li += "<td>" + data[i]["title"] + "</td>"
            li += "<td>" + data[i]["userName"] + "</td>"
            li += "<td>" + data[i]["createdTime"] + "</td>"
            li += "<td>" + data[i]["reference"] + "</td>"
            li += "</tr>"

            idx_data[i] = data[i]["idx"]
    }
    document.getElementById("QA_list").innerHTML = li

    const notice_list_child = document.getElementById("notice_list").childNodes;

    for (let i =0;i<notice_list_child.length;i++){
        notice_list_child[i].addEventListener('click', function(){
            alert(idx_data[i]);
        })
        
    }
    
},
error: function(response){
    alert("에러나요오"+response[0])
}
})
