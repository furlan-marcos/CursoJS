function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res') 
    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsexo')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = "masculino"
            if (idade >=0 && idade <=10){
                img.setAttribute('src', 'imagens/homem-bebe.jpg')
            }else if (idade <21){
                img.setAttribute('src', 'imagens/homem-jovem.jpg')
            }else if (idade <50){
                img.setAttribute('src', 'imagens/homem-adulto.jpg')
            }else{
                img.setAttribute('src', 'imagens/homem-idoso.jpg')
            }
        } else if (fsex[1].checked){
            genero = "feminino"
            if (idade >=0 && idade <=10){
                img.setAttribute('src', 'imagens/mulher-bebe.jpg')
            }else if (idade <21){
                img.setAttribute('src', 'imagens/mulher-jovem.jpg')
            }else if (idade <50){
                img.setAttribute('src', 'imagens/mulher-adulta.jpg')
            }else{
                img.setAttribute('src', 'imagens/mulher-idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos gênero ${genero} com idade ${idade} anos!`
        res.appendChild(img)
    }
}
