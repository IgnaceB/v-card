

document.getElementById('test').style.display = "none";

function openTest() {
    document.getElementById('test').style.display="block";
}
;
document.getElementById('BTN').addEventListener('click',openTest());
