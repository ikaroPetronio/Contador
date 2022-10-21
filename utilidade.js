function contar (){

    var ini = document.getElementById("in")
    var fim = document.getElementById("f")
    var pas = document.getElementById("pass")
    var res = document.getElementById("res")

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0 ){
        res.innerHTML = `IMPOSSÍVEL CONTAR`

    } else {

        res.innerHTML = 'Contando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)

        if (p <= 0 ){

        alert("Passo inválido, considerando como 1")
        p = 1

        }    

        if (i < f) {

            for (var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1f449} `

            } 

        } else {

            for (var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1f449} `

            }
        }

        res.innerHTML += `\u{1F3C1}`
        
    }

    res.style.textAlign = "center"

}