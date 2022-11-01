/* primera pregunta*/
function Salario(){
    var sueldo_basico = document.getElementById("sueldo").value;
    var hijos = document.getElementById("hijos").value;
    var sueldo_final;
    if (hijos>0){
        sueldo_final = parseFloat(sueldo_basico) + parseFloat(((sueldo_basico*7)/100).toFixed(2));}
    else  {          
        sueldo_final = "No obtiene ningun aumento";}
    document.getElementById("SueldoFinal").innerHTML = sueldo_final 
}
/* segunda pregunta*/
function Porcentaje(){
    var num = document.getElementById("numero").value;
        
    var fun ;
        if (num>500){
            fun = ((num*18)/100).toFixed(2);}
            else {
            fun = "Valor muy pequeño";}
    document.getElementById("Cantidad").innerHTML = fun;
}
/* tercera pregunta*/
function factorial(){
    var valor_numérico = document.getElementById("Numero").value;     
    var fac = 1  ;
    for( var i = 1; i <= valor_numérico; i++){
        fac = fac*i;};    
    document.getElementById("Factor").innerHTML = fac;}

/** dasldmaslmdlasfgasñf,las,fqw,flwqlrflwq,rwqlrlqw,rqwrlqw,r,qwrp */
