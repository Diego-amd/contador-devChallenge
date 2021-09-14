const button = document.getElementById('start')

button.addEventListener("click", function () {
    let data = new Date(document.getElementById('txtData').value).getTime();
    const now = new Date().getTime();
    // Salva os dados na sessionStorage
    sessionStorage.setItem('data', data);

    if(data || 0){
        window.location.href = "contador.html";
    }
    //mais um else if com data menor que a atual
    else if(data < now){
        alert("Insira uma data acima da atual!")
        window.location.href = "index.html";
    }
    else{
        alert("Insira uma data!")
        window.location.href = "index.html";
    }
});