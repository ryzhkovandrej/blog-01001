class Component {
    constructor(id) {
        this.$el = document.getElementById(id)
        this.init()
    }
    init(){

    }

    onHide(){
        
    }

    onShow(){
    }

    clear(){
        this.$el.innerHTML = ''
    }

    hide(){
        this.onHide()
        this.$el.classList.add('hide')
    }
    show(){
        this.onShow()
        this.$el.classList.remove('hide')
    }
}

export default Component