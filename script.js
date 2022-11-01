function calculatetip(event){
    event.preventDefault();
    let bill=document.getElementById('bill').value;
    let atendimento=document.getElementById('atendimento').value;
    let num=document.getElementById('people').value;
    if(bill=="" | atendimento == 0){
        alert("Preenche direito caralho")
        return
    }
    if(num==""| num<= 1){
        num=1;
        document.getElementById('each').style.display="none"
    }else{
        document.getElementById('each').style.display="block"
    }
    let total=(bill*atendimento)/num;
    total=total.toFixed(2);
    document.getElementById('tip').innerHTML=total;
    document.getElementById('totaltip').style.display = "block";
}

document.getElementById('totaltip').style.display = "none";
document.getElementById('each').style.display = "none";
document.getElementById('forminho').addEventListener('submit',calculatetip)