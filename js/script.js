const text = document.querySelector('.typing-demo')

text.addEventListener('click', function(){
    text.classList.add('textAnimation')
})

document.addEventListener('keypress', function(e){
    text.classList.remove('textAnimation')
})