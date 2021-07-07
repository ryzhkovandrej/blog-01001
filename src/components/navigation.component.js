import Component from "../core/Component";

export default class NavigationComponent extends Component {
    constructor(id) {
        super(id)

        this.tabs = []
    }

    registerTabs(tabs){
        this.tabs = tabs
    }

    init(){
        this.$el.addEventListener('click', tabClickHandler.bind(this))
    }
}
function tabClickHandler(event) {
    const target = event.target
    if (target.classList.contains('tab')) {

        Array.from(this.$el.querySelectorAll('.tab')).forEach(tab => {
            tab.classList.remove('active')
        });

        event.target.classList.add('active')

        const activeTab = this.tabs.find(t=>t.name === target.dataset.name)
        this.tabs.forEach(tab => tab.component.hide())
        activeTab.component.show()

    }
}