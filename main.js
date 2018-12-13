let durl,global;
function getData(value) {
    console.log(value);
    if(value==0){
        //url for technical
        durl = "https://mstc-ccr-admin.herokuapp.com/tech";
    }
    else if(value==1){
        //url for management
        durl = "https://mstc-ccr-admin.herokuapp.com/management";
    }
    else{
        //url for design
        durl = "https://mstc-ccr-admin.herokuapp.com/design"
    }

    db();
}
//function to get the database
function db(){
    $.ajax({
        type: "GET",
        url: durl,
        async: false,
        dataType: "json",
        success: function(data){
            console.log(data);
            global=data;
            //function to display the data of students
            $("#data").fadeIn(1000);
            let count=0; //for serial number
            for(let i in global){
            $("#rows").append("<tr><td>"+(++count)+"</td><td class='text-primary' style='text-decoration:underline;cursor: pointer' onclick='disp(this.innerHTML)'>"+global[i].reg+"</td><td>"+global[i].selected+"</td><td>"+global[i].evaluated+"</td></tr>")
            }
        },
        error: function(){
            alert("error");
        }
    });
}
let regno;
//function for displaying responses
function disp(param) {
    regno=param;
    $("#data").fadeOut(1000,function() {
        $("#respo").fadeIn(1000);
    });
    for(let i in global){
        if(global[i].reg==param){
            $("#q1").html(global[i].question1);
            $("#a1").text(global[i].answer1);

            $("#q2").html(global[i].question2);
            $("#a2").text(global[i].answer2);

            $("#q3").html(global[i].question3);
            $("#a3").text(global[i].answer3);

            $("#q4").html(global[i].question4);
            $("#a4").text(global[i].answer4);

            $("#q5").html(global[i].question5);
            $("#a5").text(global[i].answer5);

            $("#q6").html(global[i].question6);
            $("#a6").text(global[i].answer6);

            $("#q7").html(global[i].question7);
            $("#a7").text(global[i].answer7);

            $("#q8").html(global[i].question8);
            $("#a8").text(global[i].answer8);

            $("#q9").html(global[i].question9);
            $("#a9").text(global[i].answer9);

            $("#q10").html(global[i].question10);
            $("#a10").html(global[i].answer10);

            break;
        }
    }
}

//submitting the evaluators response
function sub() {
    var x=$("#select").is(":checked");
    console.log(x);
    let name=$("#name").val();
    console.log(name);
    console.log(regno);
    let body={
        "reg": regno,
        "selected": x,
        "evaluated": true,
        "evaluator": name
    };
    console.log(body);
    $.ajax({
        type: "POST",
        data: body,
        url: durl,
        async: false,
        success: function(data) {
            alert("Response submitted");
            $("#respo").fadeOut(1000,function() {
                db();
            });
        },
        error: function(){
            alert("error");
        }
    });
}