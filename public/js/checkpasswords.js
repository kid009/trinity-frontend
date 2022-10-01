const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');


form.addEventListener('submit',function(e){
    e.preventDefault();
   
   

    checkInput([username,email,password,confirmpassword]);
   
    if(!validateEmail(email.value.trim())){

        showerror(email,'อีเมลไม่ถูกต้อง');

    }else{
       
        showsuccess(email);
    } 

   
   
    checkInputLength(password,7,20);

    checkeng(username,password,confirmpassword);
    
   
  
   
  

});

function showerror(input,message){
    const formControls = input.parentElement;
    formControls.className='form-controls error';
    const small=formControls.querySelector('small');
    small.innerText=message; 
}

function showsuccess(input){

    const formControls = input.parentElement;
    formControls.className='form-controls success';

}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkInput(inputArray){
    inputArray.forEach(function(input){
        if(input.value.trim() === ''){
            showerror(input,`กรุณาป้อน ${getInputCase(input)}`);
        }else{
            showsuccess(input);
        }
    })

}

function getInputCase(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}


function checkPassword(password,confirmpassword,min,max){

        if(password.value !== confirmpassword.value ){
            showerror(confirmpassword,'Password ไม่ตรงกัน');
           
            
        }else if(password.value === ''){

            showerror(password,' ');
            showerror(confirmpassword,'กรุณากรอกข้อมูล');

        }else if(password.value.length <= min) {

            showerror(password,' ');
            showerror(confirmpassword,'Password ต้องมากกว่า 7 ตัวอักษร');
        
        }else if(password.value.length >= max) {

            showerror(password,' ');
            showerror(confirmpassword,'Password ต้องไม่เกิน 20 ตัวอักษร');
        
        }else if(password.value.match(/^([0-9])+$/i)){

            showerror(password,' ');
            showerror(confirmpassword,'Password จะต้องประกอบไปด้วยอักษรตัวใหญ่ อักษรตัวเล็ก และตัวเลข');

        }else{

           
            document.getElementById("form").submit();
           
        }

}



function checkInputLength(input,min,max){
    if(input.value.length <= min){
        showerror(input,` ${getInputCase(input)} ต้องมากกว่า ${min} ตัวอักษร`);
    }else if(input.value.length > max){
        showerror(input,` ${getInputCase(input)} ต้องไม่เกิน ${max} ตัวอักษร`);
    }else{
       
        showsuccess(input);
    }
}

function checkeng(input,password,confirmpassword) {
     
    var obj=input
    var val=obj.value
   

	if(!val.match(/^([a-z0-9])+$/i) || val.length <= 5 || val.length > 20) {
       
        showerror(input,'Username ต้องมากกว่า 5 ตัวและต้องเป็นภาษาอังกฤษกับตัวเลขเท่านั้น');
         
          
    }else if(val.match(/^([0-9])+$/i)){

        showerror(input,'Username ต้องมากกว่า 5 ตัวและต้องเป็นภาษาอังกฤษกับตัวเลขเท่านั้น');

    } else{


        checkPassword(password,confirmpassword,7,20);
       
      
    }
}








