const login = document.getElementById('myLogin');

login.addEventListener('submit',(e)=>{
	const param = new URLSearchParams(window.location.search);
    console.log(param);

	//รหัสที่ดึงมาเช็ค
	const getusername = param.get('username');
    const getpassworld = param.get('password');
	console.log(getusername);
    console.log(getpassworld);


	//รหัสที่กรอกเข้าไปเช็ค
	const username = document.getElementById('username').value;
	const passworld = document.getElementById('passworld').value;
	console.log(username);
	console.log(passworld);

	if(getpassworld == passworld && username == getusername){
		alert("ผ่าน");
	}
	else{
		alert("รหัสผ่านผิด หรือ ยูสเซอร์ผิด");
        e.preventDefault();
	}
})

login.addEventListener('reset',()=>{
    login.reset;
})




			