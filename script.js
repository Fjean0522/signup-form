const passwd = document.querySelector("#user_passwd")
const confirmPasswd = document.querySelector("#confirm_passwd")

const checkPasswords = () => {
    let passwd1 = passwd.value 
    let passwd2 = confirmPasswd.value
    if (passwd2 != passwd1) {
        confirmPasswd.style.outlineColor = 'red';        
    } else {
        confirmPasswd.style.outlineColor = 'black';  
    }
}

const escapeRegExp = (str) => {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

confirmPasswd.addEventListener('input', () => {
   checkPasswords();
})