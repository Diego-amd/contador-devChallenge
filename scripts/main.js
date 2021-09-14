var counter = setInterval(function() {
    const Data = sessionStorage.getItem('data')
    var data = new Date(parseInt(Data))
    const now = new Date();
    const rest = data - now;

    var days, hours, minutes, seconds

    days = Math.floor((rest / (1000 * 60 * 60 * 24)))

    hours = ((data.getHours() - 21) - now.getHours())*(-1) - 1

    minutes = Math.floor((rest % (1000 * 60 * 60)) / (1000 * 60) + 1)

    seconds = Math.floor((rest % (1000 * 60)) / 1000)

    document.getElementById("dias").innerText = days
    document.getElementById("horas").innerHTML = hours
    document.getElementById("minutos").innerHTML = minutes
    document.getElementById("segundos").innerHTML = seconds
})

function backIndex(){
    button.addEventListener("click", function () {    
        window.location.href = "./index.html";
    });
}