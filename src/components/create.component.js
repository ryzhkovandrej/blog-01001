import Component from "../core/Component";
import { Form } from "../core/Form";
import { Validators } from "../core/Validators";
import { apiServise } from "../services/api.servise";

export default class CreateComponent extends Component {
    constructor(id) {
        super(id)
    }

    init(){
        this.$el.addEventListener('submit', submitFormHandler.bind(this))
        
        this.form = new Form(this.$el, {
            title: [Validators.required],
            fulltext: [Validators.required, Validators.minLength(10)]
        })
    }
}
async function submitFormHandler(event) {
    event.preventDefault()
    if (this.form.isValid()) {
        const formData = {
            ...this.form.value(),
            data: new Date().toLocaleDateString(),
            type: this.$el.type.value
        }
        const resp = await apiServise.createPost(formData)
        this.form.clear()
    }

}