let taskbar = document.getElementsByClassName("taskbar")[0]
let start = document.getElementsByClassName("start")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
let search = document.getElementsByClassName("search")[0]
let searchmenu = document.getElementsByClassName("searchmenu")[0]
let widget = document.getElementsByClassName("widget")[0]
let widgetmenu = document.getElementsByClassName("widgetmenu")[0]
let uparrow = document.getElementsByClassName("uparrow")[0]
let uparrowmenu = document.getElementsByClassName("uparrowmenu")[0]
let keyboard = document.getElementsByClassName("keyboard")[0]
let keyboardmenu = document.getElementsByClassName("keyboardmenu")[0]
let wifi = document.getElementsByClassName("wifi")[0]
let wifimenu = document.getElementsByClassName("wifimenu")[0]
let date = document.getElementsByClassName("date")[0]
let datemenu = document.getElementsByClassName("datemenu")[0]
let task=document.getElementsByClassName("task")[0]
var file=document.getElementsByClassName("fileexplorer")[0]
var chrome=document.getElementsByClassName("chrome")[0]
var bins=document.getElementsByClassName("trash")[0]

bins.addEventListener("click",()=>{
    // console.log("clicked");
    var large=document.getElementById('bi');
    var mywindow=window.open("images/trashmenu.jpg",'Image','width=600,height=800,resizable=0');
    mywindow.resizeTo(720,470);
})

chrome.addEventListener("click",()=>{
    var large=document.getElementById('lo');
    var mywindow=window.open("images/chromemenu.jpg",'Image','width=600,height=800,resizable=0');
    mywindow.resizeTo(720,470);
})

file.addEventListener("click",()=>{
    var large=document.getElementById('large');
    var mywindow=window.open("images/thispc.jpg",'Image','width=600,height=800,resizable=0');
    mywindow.resizeTo(749,430);
})

task.addEventListener("click", ()=>{
        console.log("clicked");
        var largeImage = document.getElementById('largeimage');
       
        window.open("images/taskmenu.jpg",'Image','width=720,height=650,resizable=0');
    })
wifi.addEventListener("click", ()=>{
    
    if(wifimenu.style.bottom == "50px"){
        wifimenu.style.bottom = "-855px"
    }
    else{
        wifimenu.style.bottom = "50px"
    }
})

date.addEventListener("click", ()=>{
    
    if(datemenu.style.bottom == "50px"){
        datemenu.style.bottom = "-855px"
    }
    else{
        datemenu.style.bottom = "50px"
    }
})

uparrow.addEventListener("click", ()=>{
    
    if(uparrowmenu.style.bottom == "50px"){
        uparrowmenu.style.bottom = "-655px"
    }
    else{
        uparrowmenu.style.bottom = "50px"
    }
})
keyboard.addEventListener("click", ()=>{
    
    if(keyboardmenu.style.bottom == "50px"){
        keyboardmenu.style.bottom = "-655px"
    }
    else{
        keyboardmenu.style.bottom = "50px"
    }
})



start.addEventListener("click", ()=>{
    
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})
search.addEventListener("click", ()=>{
    
    if(searchmenu.style.bottom == "50px"){
        searchmenu.style.bottom = "-655px"
    }
    else{
        searchmenu.style.bottom = "50px"
    }
})
widget.addEventListener("click", ()=>{
    
    if(widgetmenu.style.left == "0px"){
        widgetmenu.style.left = "-655px"
    }
    else{
        widgetmenu.style.left = "0px"
    }
})
