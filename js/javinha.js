function entrar(){
    var user = document.getElementById("cxuser").value;
    var senha = document.getElementById("cxsenha").value;


if(user == "adm" && senha == "2510"){
    alert("Acesso permitido");
}
else{
    alert("Acesso negado");
}


}


function parimpar(){
var n1 = document.getElementById("cx1").value;

if(parseFloat(n1)%2 == 0 ){
       alert("número par");

}
else{
    alert("número ímpar")
}


}