Chasi();
function Chasi () {
    let date = new Date();
    document.getElementById('time').innerHTML = date.getHours() + ":" + date.getMinutes();
}
setInterval(Chasi,1000)