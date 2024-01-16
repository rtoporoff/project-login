function postData() {
    var formData = new FormData(document.getElementById("form"));
    fetch('http://26.204.2.167:8080/swagger-ui/index.html', {
        method: 'POST',
        body:formData
    })
    .then (response => response.json())
    .then (data => {
        document.getElementById('result').innerHTML = 'Resposta da API:'
    })
    .catch (error => {
        console.error ('Erro na chamada da API:', error);
        document.getElementById ('result').innerHTML = 'Erro na Chamada'
    })
}





const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
})

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
})

function login(){
    var form = document.getElementById("formLogin");
    var formData = new FormData(form);
    var jsonData = {};
        formData.forEach(function(value,key){
            jsonData[key] = value;
     });
        console.log(jsonData);
        return false;
} 
     
function registrar(){
    var form = document.getElementById("formRegistro");
    var formData = new FormData(form);
    var jsonData = {};
        formData.forEach(function(value,key){
            jsonData[key] = value;
     });
        console.log(jsonData);
        return false;
}