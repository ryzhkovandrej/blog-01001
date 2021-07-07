export class Validators {
    static required(value){
        return value && value.trim()
    }
    static minLength(minLength){
        return function(value) {
            return value.length >= minLength
        }
    }
}