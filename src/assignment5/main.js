let index = 0;
function postFunction(){
    const box_valuex = document.getElementById('text1').value;
    if(index == 0){
        document.getElementById('topic1').textContent=box_valuex;
    }
    else if(index == 1){
        document.getElementById('comment1').textContent=box_valuex;
    }
    else{
        document.getElementById('comment2').textContent=box_valuex;
    }
    document.getElementById('text1').value = " ";
    index++;
}

function clearFunction(){
    document.getElementById('topic1').textContent=" ";
    document.getElementById('comment1').textContent=" ";
    document.getElementById('comment2').textContent=" ";
    index=0;
}