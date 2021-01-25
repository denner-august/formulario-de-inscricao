let nome = document.getElementById('nome');
let sobrenome = document.getElementById('sobrenome')
let enviar  = document.getElementById('button')
let email = document.getElementById('email')
let input = document.querySelectorAll('input')
let senha = document.getElementById('senha')




enviar.addEventListener('click', function(){
   if(nome.value  == ''){
    nome.style ['background-color'] ='#CEC7FF'
    nome.style ['color'] ='white'
    nome.focus();
    
    
   }
   else if(sobrenome.value == ''){
    sobrenome.style ['background-color'] ='CEC7FF'
    sobrenome.style ['color'] ='white'
    sobrenome.focus();
    
   }
   else if(email.value == ''){
    email.style ['background-color'] ='CEC7FF'
    email.style ['color'] ='white'
    email.focus();
    
   }
   else if(senha.value ==''){
    senha.style ['background-color'] ='CEC7FF'
    senha.style ['color'] ='white'
    senha.focus();
    
   }else{
       enviar.innerText = 'Enviado'
   }
    }
)

    nome.addEventListener('click',() =>{
        nome.style ['background-color'] = 'white'
        nome.style ['color'] = 'black'
        nome.value = ''

    })

    sobrenome.addEventListener('click',() =>{
        sobrenome.style ['background-color'] = 'white'
        sobrenome.style ['color'] = 'black'
        sobrenome.value = ''

    })

    email.addEventListener('click',() =>{
        email.style ['background-color'] = 'white'
        email.style ['color'] = 'black'
        email.value = ''

    })

    senha.addEventListener('click',() =>{
        senha.style ['background-color'] = 'white'
        senha.style ['color'] = 'black'
        senha.value = ''
    })

    



    //enviar.innerText ='ENVIADO'

