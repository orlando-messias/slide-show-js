
var imgToShow = 1
window.load = showSlide(imgToShow)

function showSlide(imgToShow){
    var totalImgs = 4
    document.getElementById('imagesBg').style.backgroundImage = "url('images/" + imgToShow + ".jpg')"    
    buttons(imgToShow, totalImgs)
}

function prev(){
    if(imgToShow > 1){
        imgToShow--
        showSlide(imgToShow)
    }
}

function next(){
    if(imgToShow < 4){
        imgToShow++
        showSlide(imgToShow)
    }
}

function buttons(imgToShow, totalImgs){
    document.getElementById('buttons').innerHTML = ''
    for(i=1; i<=totalImgs; i++){
        if(i == imgToShow){
            document.getElementById('buttons').innerHTML += `<li class=selected onclick=showSlide(${i})></li>`
        }else{
            document.getElementById('buttons').innerHTML += `<li onclick=showSlide(${i})></li>`
        }
    }
}
