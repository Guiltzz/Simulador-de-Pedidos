const batata = 15.00 
const hamburguer = 30.00
const nuggets = 15.00
const refri = 10.00

 let escolha = Number(prompt('Escolha uma opção? \n (1)-Hamburguer  \n (2)-Batata frita \n (3)-Nuggets \n (4)-Refri '))

    switch(escolha){
        case 1:
            alert("Voce pegou um hamburguer")
            break
            case 2:
                alert('Você pegou uma batata')
                break
                case 3:
                    alert("Você um nuggets")
                    break
                    case 4:
                        alert('Você pegou um refri')
                        break
                    default:
                        alert("Você não pegou nada")

    }
