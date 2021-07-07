import { Validators } from "./Validators"

export class Form {
    constructor(form, controls){
        this.form = form
        this.controls = controls
    }
    value(){
        const value = {}
        Object.keys(this.controls).forEach(control => {
            value[control] = this.form[control].value
        })
        return value
    }

    clear(){
        Object.keys(this.controls).forEach(control => {
            this.form[control].value = ''
        })
    }

    isValid(){
        let isValidForm = true
        Object.keys(this.controls).forEach(control => {
            clearError(this.form[control])
            let isValid = true
            this.controls[control].forEach(validator=>{
                isValid = this.form[control].value
                if (!isValid) {
                    setError(this.form[control])
                }
               
                isValidForm = isValid && isValidForm
            })
        })
        return isValidForm
    }
}

function setError($control) {
    const error = `<p class="validation-error">Введите корректное значение</p>`
    $control.classList.add('invalid')
    $control.insertAdjacentHTML('afterend', error)
}

function clearError($control) {
    $control.classList.remove('invalid')
    const $removeElements = $control.parentNode.querySelectorAll('.validation-error')
    console.log('$removeElements: ', $removeElements);
    $removeElements.forEach($removeElement=>{
        $removeElement.remove()
    })
}