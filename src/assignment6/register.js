const form = document.getElementById('myForm');

form.addEventListener('submit',(e)=>{
    let passworld = document.getElementById('passworld').value;
    let Re_passworld = document.getElementById('Repassworld').value;

    if(passworld != Re_passworld){
        alert("ใส่รหัสใหม่นะ");
        e.preventDefault();
    }

} )
form.addEventListener('reset',()=>{
    from.reset;
})


