//operateur
let operateur = document.getElementsByClassName('boutonOperateur')

operateur[0].value = '+'
operateur[1].value = '-'
operateur[2].value = '*'
operateur[3].value = '/'

let ope = "";
for (let i = 0; i < operateur.length; i++) {
    operateur[i].addEventListener('click', function(){
        ope = this.value
        input.value = ope
        console.log(ope)

    })
    
}


//input valeur

let chiffres = document.getElementsByClassName('boutonChiffre')
let input = document.querySelector('input')

let valueSauvegarde;
let valueSauvegarde2;
for (let i = 0; i < chiffres.length; i++) {
    chiffres[i].addEventListener("click", function(){
        if (ope == "") {
            input.value += chiffres[i].innerHTML
            valueSauvegarde = Number(input.value)
            console.log(valueSauvegarde)
        } else {
            input.value += chiffres[i].innerHTML
            valueSauvegarde2 = Number(input.value.substr(1, input.value.length))
            console.log(valueSauvegarde2)
        }
    })
}

// egal
let egal = document.querySelector('.boutonEgal')
egal.addEventListener('click', function(){
    console.log(ope);
    switch (ope) {
        case '+':
            input.value = valueSauvegarde + valueSauvegarde2
            break;
        case '-':
        input.value = valueSauvegarde - valueSauvegarde2
            break;
        case '*':
            input.value = valueSauvegarde * valueSauvegarde2
            break;
        case '/':
            input.value = valueSauvegarde / valueSauvegarde2
            break;
        default:
            break;
    }
    valueSauvegarde = "";
    valueSauvegarde2 = "";
    ope = "";
})

// C

let buttonC = document.querySelector('.boutonC')

buttonC.addEventListener('click', function(){
    input.value = ""
    valueSauvegarde = ""
    valueSauvegarde2 = ""
    ope = ""
})
