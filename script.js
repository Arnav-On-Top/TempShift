const c=document.getElementById("c");
const f=document.getElementById("f");
const k=document.getElementById("k");
c.addEventListener("input", function() {
    f.value=c.value *9/5 +32;
    k.value= +c.value+273.15;
});
f.addEventListener("input", function() {
    c.value=(f.value-32)*5/9;
    k.value=(f.value-32)*5/9+273.15;
});
k.addEventListener("input", function() {
    c.value=k.value-273.15;
    f.value=(k.value-273.15)*9/5+32;
});
function copyValue(id){
    navigator.clipboard.writeText(document.getElementById(id).value);
}
function clearAll() {
    c.value="";
    f.value="";
    k.value="";
}