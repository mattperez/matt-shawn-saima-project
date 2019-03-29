// Insert JavaScript here...
function toggleListView(){
    var element = document.getElementById("listView");
  //element.classList.toggle("listView");
  if(element.style.display=="none"){
        element.style.display="";
  }else element.style.display="none";
  
  toggleCalendarView();
}

function toggleCalendarView(){
    var element = document.getElementById("calendarView");
  element.classList.toggle("calendarView");
}
