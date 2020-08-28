const validation = (value, rules, form) => {
    let valid = true;

    for(let rule in rules){
        switch(rule){
            case "isRequired":
                valid=valid && validationRequired(value)
                break;
            case "isEmail":
                valid=valid && validationEmail(value)
                break;
            case "minLength":
                valid=valid && validationMinLength(value,rules[rule])
                break;
            case "maxLength":
                valid=valid && validationMaxLength(value,rules[rule])
                break;
            case "confirmPass":
                valid=valid && validationConfirmPass(value,form[rules.confirmPass].value)
                break;        
                default:
                    valid = true
        }
    }



    return valid;
}

const validationRequired = value => {
    if(value !== ''){
        return true;
    }
    return false
}

const validationEmail = email => {
    const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return expression.test(String(email).toLocaleLowerCase());
}

const validationMinLength = (value, ruleValue)=> {
    if(value.length >= ruleValue){
        return true
    }
    return false
}

const validationMaxLength = (value, ruleValue)=> {
    if(value.length <= ruleValue){
        return true
    }
    return false
}

const validationConfirmPass = (confirmPass, pass)=> {
    return confirmPass === pass
}


export default validation;