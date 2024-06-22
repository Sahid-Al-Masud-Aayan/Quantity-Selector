let deduct = document.querySelector('.sub')
let sum = document.querySelector('.add')
let num = document.querySelector('.number')
let err = document.querySelector('.mental')
let a = 1

num.innerHTML = a

sum.addEventListener('click' , ()=>{
    if(a == 25){
        err.innerHTML = "Can't be  selected more than " + a + '.'
    }else{
        a++
       num.innerHTML = a
    err.innerHTML = ''
    }
})
deduct.addEventListener('click' , ()=>{
    if(a == 1){
        err.innerHTML = "Can't be  selected more than " + a + '.'
    }else{
    a--
    num.innerHTML = a
    err.innerHTML=''
    }s
})

