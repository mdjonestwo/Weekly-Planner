
//Moment.js Variable Assigments 
var m = moment().format('MMMM Do YYYY, h:mm:ss a')
var mFromHour = moment().startOf('day').fromNow();    
var ma = moment([2020, 10, 22])
var mn = moment([2020, 10, 23])
var currentTime = moment().format('LT')


//Dom Variable Assignments 
var hours = [moment("800", "hmm").format("HH:mm"), moment("900", "hmm").format("HH:mm"), moment("1000", "hmm").format("HH:mm")]
var $table = $('<table>')
var $tableRow = $('<tr>').attr('id',"hour") 
var $timeSlot = $('<td>').addClass("time")
var $scheduleSlot = $('<td>').addClass("schedule")
var $trackerSlot = $('<td>').addClass("timeTracker")
var inputField = $('<input>').attr('id', 'realInput')
var val = $scheduleSlot.attr('input')
var saveButtonSlot = $('<td>')
var saveButton = ($('<button>' + "Save" + '</button>' ).attr("type", "button"))


$('#currentDay').text(m)
$('.container').append($table)

//Create Planner
hours.forEach(function(hour, index) {
    $table.append($tableRow).push(index) 
    $tableRow.append($timeSlot) 
    $timeSlot.text(hour)
    $tableRow.append($scheduleSlot)
    $scheduleSlot.append(inputField)
    $tableRow.append(saveButtonSlot)
    saveButtonSlot.append(saveButton)
    $tableRow.append($trackerSlot)
   
    
  
})

//Track time 

//console.log(currentTime.diff(hours))


//Save Input Data





function saveDataClick() {
    var data = $('#realInput').val()
    localStorage.setItem("savedSchedule", data)
}

localStorage.getItem("saveSchedule")
