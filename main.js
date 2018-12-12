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
let regno;
//function for displaying responses
function disp(param) {
    for(let i in global){
        if(global[i].regno==param){
            $("#q1").html(global[i].question1);
            $("#a1").html(global[i].answer1);

            $("#q2").html(global[i].question2);
            $("#a2").html(global[i].answer2);

            $("#q3").html(global[i].question3);
            $("#a3").html(global[i].answer3);

            $("#q4").html(global[i].question4);
            $("#a4").html(global[i].answer4);

            $("#q5").html(global[i].question5);
            $("#a5").html(global[i].answer5);

            $("#q6").html(global[i].question6);
            $("#a6").html(global[i].answer6);

            $("#q7").html(global[i].question7);
            $("#a7").html(global[i].answer7);

            $("#q8").html(global[i].question8);
            $("#a8").html(global[i].answer8);

            $("#q9").html(global[i].question9);
            $("#a9").html(global[i].answer9);

            $("#q10").html(global[i].question10);
            $("#a10").html(global[i].answer10);
        }
    }
}

//submitting the evaluators response
function sub() {
    var x=$("#select").is(":checked");
    console.log(x);
    let name=$("#name").val();
    let body={
        "reg": regno,
        "selected": x,
        "evaluated": true,
        "evaluator": name
    };
    $.ajax({
        type: "POST",
        data: body,
        url: durl,
        async: false,
        success: function(data) {
            alert("Response submitted");
            window.location.href = "index.html";
        },
        error: function(){
            alert("error");
        }
    });
}