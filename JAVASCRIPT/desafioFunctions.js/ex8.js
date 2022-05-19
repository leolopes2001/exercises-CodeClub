

const discount_generator = (client_name, total_purchase_amount, first_purchase, pay_cash) => {

    let result = []
    if (first_purchase === true && pay_cash === true && total_purchase_amount >= 1000) {

        result.push("OBRIGADO PELA COMPRA")

        result.push(`VALOR TOTAL SEM DESCONTO ${total_purchase_amount}`)

        result.push(`VALOR TOTAL COM DESCONTO ${total_purchase_amount - ((total_purchase_amount * 30) / 100)}`)

        result.push(`DESCONTO RECEBIDO 30%`)

        return result
    }

    if (first_purchase === true && pay_cash === true && total_purchase_amount < 1000 && total_purchase_amount >= 500) {

        result.push("OBRIGADO PELA COMPRA")

        result.push(`VALOR TOTAL SEM DESCONTO ${total_purchase_amount}`)

        result.push(`VALOR TOTAL COM DESCONTO ${total_purchase_amount - ((total_purchase_amount * 25) / 100)}`)

        result.push(`DESCONTO RECEBIDO 25%`)

        return result
    }

    if (first_purchase === true && pay_cash === true && total_purchase_amount <= 500) {
        
        result.push("OBRIGADO PELA COMPRA")

        result.push(`VALOR TOTAL SEM DESCONTO ${total_purchase_amount}`)

        result.push(`VALOR TOTAL COM DESCONTO ${total_purchase_amount - ((total_purchase_amount * 20) / 100)}`)

        result.push(`DESCONTO RECEBIDO 20%`)

        return result

    }
    if (first_purchase === true && pay_cash === false && total_purchase_amount >= 1000) {
        
        result.push("OBRIGADO PELA COMPRA")

        result.push(`VALOR TOTAL SEM DESCONTO ${total_purchase_amount}`)

        result.push(`VALOR TOTAL COM DESCONTO ${total_purchase_amount - ((total_purchase_amount * 20) / 100)}`)

        result.push(`DESCONTO RECEBIDO 20%`)

        return result
    }
    if (first_purchase === true && pay_cash === false && total_purchase_amount < 1000 && total_purchase_amount > 500) {
        
        result.push("OBRIGADO PELA COMPRA")

        result.push(`VALOR TOTAL SEM DESCONTO ${total_purchase_amount}`)

        result.push(`VALOR TOTAL COM DESCONTO ${total_purchase_amount - ((total_purchase_amount * 15) / 100)}`)

        result.push(`DESCONTO RECEBIDO 15%`)

        return result
    }
    if (first_purchase === true && pay_cash === false && total_purchase_amount <= 500) {
        
        result.push("OBRIGADO PELA COMPRA")

        result.push(`VALOR TOTAL SEM DESCONTO ${total_purchase_amount}`)

        result.push(`VALOR TOTAL COM DESCONTO ${total_purchase_amount - ((total_purchase_amount * 10) / 100)}`)

        result.push(`DESCONTO RECEBIDO 10%`)

        return result
    }
    if (first_purchase === false && pay_cash === true && total_purchase_amount >= 1000) {
        
        result.push("OBRIGADO PELA COMPRA")

        result.push(`VALOR TOTAL SEM DESCONTO ${total_purchase_amount}`)

        result.push(`VALOR TOTAL COM DESCONTO ${total_purchase_amount - ((total_purchase_amount * 20) / 100)}`)

        result.push(`DESCONTO RECEBIDO 20%`)

        return result
    }
    if (first_purchase === false && pay_cash === true && total_purchase_amount < 1000 && total_purchase_amount > 500) {
        
        result.push("OBRIGADO PELA COMPRA")

        result.push(`VALOR TOTAL SEM DESCONTO ${total_purchase_amount}`)

        result.push(`VALOR TOTAL COM DESCONTO ${total_purchase_amount - ((total_purchase_amount * 15) / 100)}`)

        result.push(`DESCONTO RECEBIDO 15%`)

        return result
    }
    if (first_purchase === false && pay_cash === true && total_purchase_amount <= 500) {
        result.push("OBRIGADO PELA COMPRA")

        result.push(`VALOR TOTAL SEM DESCONTO ${total_purchase_amount}`)

        result.push(`VALOR TOTAL COM DESCONTO ${total_purchase_amount - ((total_purchase_amount * 10) / 100)}`)

        result.push(`DESCONTO RECEBIDO 10%`)

        return result
    }
    if (first_purchase === false && pay_cash === false && total_purchase_amount > 1000) {
        result.push("OBRIGADO PELA COMPRA")

        result.push(`VALOR TOTAL SEM DESCONTO ${total_purchase_amount}`)

        result.push(`VALOR TOTAL COM DESCONTO ${total_purchase_amount - ((total_purchase_amount * 10) / 100)}`)

        result.push(`DESCONTO RECEBIDO 10%`)

        return result
    }
    if (first_purchase === false && pay_cash === false && total_purchase_amount < 1000 && total_purchase_amount > 500) {
        
        result.push("OBRIGADO PELA COMPRA")

        result.push(`VALOR TOTAL SEM DESCONTO ${total_purchase_amount}`)

        result.push(`VALOR TOTAL COM DESCONTO ${total_purchase_amount - ((total_purchase_amount * 5) / 100)}`)

        result.push(`DESCONTO RECEBIDO 5%`)

        return result
    }
    if (first_purchase === false && pay_cash === false && total_purchase_amount <= 500) {
        
        result.push('OBRIGADO PELA COMPRA')

        result.push(`VALOR TOTAL DA COMPRA ${total_purchase_amount}`)


        result.push(`CUMPOM DE DESCONTO ${Math.round(Math.random() * (20 - 10) + 10)}%`)
        
        
        return result
    }


}




let x = discount_generator("Leonardo",200, false, false)
console.log(x)