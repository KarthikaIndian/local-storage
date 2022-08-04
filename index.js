function add(){


let key=document.getElementById("key").value
let value=document.getElementById("name").value
if(key&&value){
    localStorage.setItem(key,value)
}
for(i=0;i<=localStorage.length;i++){
    let key=localStorage.key(i)
    let value=localStorage.getItem(key);
 

}
document.getElementById("result").innerHTML=key+":"+value+":"+i;


}
