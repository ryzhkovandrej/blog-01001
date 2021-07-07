import Component from './../core/Component'
export default class Header extends Component {
    constructor(selector){
        super(selector)
    }

    init(){
        if (localStorage.getItem('visited')) {
            this.hide()
        }
        const $btn = this.$el.querySelector('.js-header-start')
        $btn.addEventListener('click', buttonHandler.bind(this))

    }
}

function buttonHandler() {
    localStorage.setItem('visited', JSON.stringify(true))
    this.hide()
}