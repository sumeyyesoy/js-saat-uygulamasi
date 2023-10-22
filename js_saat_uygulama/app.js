function getDate() {
    let now = new Date();
    let saat = now.getHours();
    let dakika = now.getMinutes();
    let saniye = now.getSeconds();

    let gun = now.getDate();
    let ay = now.getMonth() +1;
    let yil = now.getFullYear();

    document.getElementById("saat").innerText=saat;
    document.getElementById("dakika").innerText = dakika;
    document.getElementById("saniye").innerText = saniye;


    document.getElementById("gun").innerText= gun + "/" + ay + "/" + yil;
}

getDate();
setInterval(()=> {getDate()},1000);