let password = document.querySelector('#password');
let generate = document.querySelector('#generate');
let copyButton = document.querySelector('#copytext');
function generatePass(e) {
    e.preventDefault();
    
    let characters = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890~`!@#$%^&*()_-+={[}]|\:;"<,>.?/';
    let passwordLength = 12
    let password = ''
    for (let i = 0; i <= passwordLength; i++) {
       let getRandNum = Math.floor(Math.random() * characters.length)
       password += characters.substring(getRandNum, getRandNum + 1)
        
    }
    document.querySelector('#password').value = password
}
function copy(e) {
    e.preventDefault();
    let copyPassword = document.querySelector('#password')
    copyPassword.select()
    copyPassword.setSelectionRange(0, 999)
    document.execCommand('copy')
}
generate.addEventListener('click', generatePass)
1