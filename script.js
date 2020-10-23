var m = moment()
$('#currentDay').text(m)

var hours = ["8:00", "9:00", "10:00","11:00", "12:00", "1:00", "2:00", "3:00", "4:00", "5:00"]
var $table = $('<table>')
var $tableRow = $('<tr>') 
var $timeSlot = $('<td>').addClass("time")
var $scheduleSlot = $('<td>').addClass("schedule")
var $trackerSlot = $('<td>').addClass("timeTracker")
var inputField = $('<input>').attr('type', 'text')
var val = $scheduleSlot.attr('input')
var saveButtonSlot = $('<td>').append($('<button>' + "Save" + '</button>' ))

//$scheduleSlot.append($('<input>')).attr('input','')



$('.container').append($table)


hours.forEach(function(element, index) {
    $table.append($tableRow).push(index) 
    $tableRow.append($timeSlot) 
    $timeSlot.text(element)
    $tableRow.append($scheduleSlot)
    $scheduleSlot.append(inputField)
    $tableRow.append(saveButtonSlot)
    $tableRow.append($trackerSlot)
    

})
