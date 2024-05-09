
var days_html = document.getElementById("days")
var hours_html = document.getElementById("hours")
var minutes_html = document.getElementById("minutes")
var seconds_html = document.getElementById("seconds")

var now = new Date()
var bakraEid = new Date("6/17/2024")

console.log("now==>", now)
console.log("bakraEid==>", bakraEid)


var diff = bakraEid.getTime() - now.getTime()

var second = diff / 1000
var minutes = diff / 1000 / 60
var hours = diff / 1000 / 60 / 60
var days = diff / 1000 / 60 / 60 / 24

days_html.innerText = Math.round(days)
hours_html.innerText = Math.round(hours)
minutes_html.innerText = Math.round(minutes)
seconds_html.innerText = Math.round(second)

var now = new Date()
var bakraEid = new Date("6/17/2024")
var diff = bakraEid.getTime() - now.getTime()




var interval = setInterval(function(){ 
    var currentDate = new Date()
    diff = diff - 1000
    // var second = diff / 1000
    var second = 60 - currentDate.getSeconds()

    // var minutes = diff / 1000 / 60
    var minutes = 60 - currentDate.getMinutes()

    // var hours = diff / 1000 / 60 / 60
    var hours = 24 - currentDate.getHours()
    // var days = diff / 1000 / 60 / 60 / 24
    
    days_html.innerText = Math.round(days)
    hours_html.innerText = Math.round(hours)
    minutes_html.innerText = Math.round(minutes)
    seconds_html.innerText = Math.round(second)
    }, 1000);
