$(document).ready(function(){

    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a') )

    //Store Local Storage
    $(".saveBtn").on('click', function(){
        var inputData = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id")
        localStorage.setItem(time, inputData)
    })

    //Change color of Time Block
    function blockColor(){
        var currentHour = moment().hours()
        $(".time-block").each(function(){
            var rowHour = parseInt($(this).attr("id"))
            if(rowHour < currentHour){
                $(this).addClass("past")
            }else if(rowHour >  currentHour){
                $(this).addClass("future")
            } else {
                $(this).addClass("present")
            }
        })


    }
    blockColor()
})










