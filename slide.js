var list = document.getElementsByClassName("slideimg");
var index = 0;
for(x of list){
    x.style.display = 'none';
}
list[index].style.display='block';
function showleft(){
    for(x of list){
        x.style.display='none';
    }
    if(index==0) index = list.length-1;
    else index=index-1;
    list[index].style.display='block';

}function showright(){
    for(x of list){
        x.style.display='none';
    }
    if(index==list.length-1) index = 0;
    else index=index+1;
    list[index].style.display='block';
}
setTimeout(showleft,2000);