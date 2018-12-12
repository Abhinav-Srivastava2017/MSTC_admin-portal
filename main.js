let durl,global;
function getData(value) {
    if(value==0){
        //url for technical
        // durl = 
    }
    else if(value==1){
        //url for management
        //durl =
    }
    else{
        //url for design
        //durl =
    }

    $.ajax({
        type: "GET",
        url: durl,
        async: false,
        dataType: "json",
        success: function(data){
            console.log(data);
            global=data;
        },
        error: function(){
            alert("error");
        }
    });

    //function to display the data of students
    let count=0; //for serial number
    let url
    for(let i in global){
        $("#rows").append("<tr><td>"+(count++)+"</td><td><a href='"+respo.htm+"' onclick='disp(this.innerHTML())'>"+global[i].regno+"</a></td><td>"+global[i].name+"</td><td>"+global[i].eval+"</td></tr>")
    }
}
