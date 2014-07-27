$(document).ready(function(){
    updateMonthYear();
    updateCalendarDays();

    showHideDay();
});

function showHideDay(){

    $('.calendar-day').click(function(){
        if($('#dayView').css('display') === 'none'){
            $('#dayView').load("ajax?file=views/dayView.jade", function(){

            });
            $('#blackout').fadeIn(200);
            $('#dayView').fadeIn(200);
        }
    });

    $('.close').click(function(){
        $('#dayView').fadeOut(400); 
        $('#blackout').fadeOut(200);
    });

    $('#blackout').click(function(){
        $('#dayView').fadeOut(400); 
        $('#blackout').fadeOut(200);
    });
}

function updateMonthYear(){
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];;
    var date = new Date();
    var month = months[date.getMonth()]; 
    var year = date.getFullYear()
    $('#MonthYear').text(month + " " + year);
}

function updateCalendarDays(){
    var date = new Date();
    var daysInMonth = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
    var currentDay = date.getDate();
    var firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    var lasDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);


    //alert(daysInMonth + " " + currentDay + " " + firstDayOfMonth + " " + lasDayOfMonth);
    for(var i=1; i<36; ++i){
        //$('#'+i).text((i+1)+"");
    }



}