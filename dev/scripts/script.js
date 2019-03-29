// Insert JavaScript here...
function toggleListView(){
    var list = document.getElementById("listView");
    var btn= document.getElementById("scheduleButton");
    btn.innerText="hello shawn";

  if(list.style.display=="none"){
        list.style.display="";
        btn.innerText="Calendar View";
  }else {
      list.style.display="none";
      btn.innerText="List View";
  }
  
  toggleCalendarView();
}

function toggleCalendarView(){
    var calView = document.getElementById("calendarView");
  calView.classList.toggle("calendarView");
}
