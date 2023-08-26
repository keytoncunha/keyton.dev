const nome = document.querySelector('#nome')


const digitar=()=>{
    const arrayNome = nome.innerHTML.split('')
    nome.innerHTML = ''
    arrayNome.forEach((letra,ind)=>{
        setTimeout(()=>{
            nome.innerHTML += letra
            if(ind+1 == arrayNome.length){
                digitar()
            }
        },290*ind)
    })
}

digitar()