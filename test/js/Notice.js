$.ajax({
    type: "GET",
    crossOrigin : true,
    dataType : "json",
    contentType: 'application/jsonx',
    url : "http://3.35.237.169:8080/noticeList",
    data: {},

success : function(param_data) {
    const data = param_data["data"];
    var li = "";
    alert(data)
    for(var i =0; i < data.length; i++){
            li += "<tr>"
            li += "<td>" + data[i]["idx"] + "</td>"
            li += "<td>" + data[i]["title"] + "</td>"
            li += "<td>" + data[i]["userName"] + "</td>"
            li += "<td>" + data[i]["createdTime"] + "</td>"
            li += "<td>" + data[i]["reference"] + "</td>"
            li += "</tr>"
    }
    document.getElementById("notice_list").innerHTML = li
    
},
error: function(response){
    alert("에러나요오"+response[0])
}
})

