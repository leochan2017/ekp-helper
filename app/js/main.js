document.getElementById('getWorkReportInfo').onclick = function() {
  open('http://product.landray.com.cn/km/workhours/km_workhours_calendar/worcalendar.jsp')
}


document.getElementById('writeWorkReport').onclick = function() {
  open('http://product.landray.com.cn/km/workhours/km_workhours_main/kmWorkhoursMain.do?method=addDialog')
}