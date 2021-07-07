import Component from "../core/Component";
import { apiServise } from "../services/api.servise";
import { TransformServise } from "../services/transform.servise";
import { renderPost } from "../templates/post.template";

export default class PostsComponent extends Component {
    constructor(id, {loader}) {
        super(id)
        this.loader = loader
    }

    init() {
        this.$el.addEventListener('click', buttonHandler.bind(this))
    }

    async onShow(){
        this.loader.show()
        const response =  await apiServise.getPosts()
        const posts = TransformServise.fbObjectToArray(response)
        const html = posts.map(post => renderPost(post, {withButton: true})).join('')
        this.$el.insertAdjacentHTML('afterbegin', html)
        this.loader.hide()
    }

    onHide(){
        this.$el.innerHTML = ''
    }
}

function buttonHandler(event) {
    const $target = event.target
    const id = $target.dataset.id
    const name = $target.dataset.name
    if (id) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || []
        
        const filtered = favorites.filter(favorite => favorite.id == id)
        
        if (filtered.length) {
            favorites = favorites.filter(favorite => favorite.id !== id)
            $target.classList.add('button-primary')
            $target.classList.remove('button-danger')
            $target.textContent = 'Сохранить'
        }else{
            // add element
            favorites.push({id, name})
            $target.textContent = 'Удалить'
            $target.classList.add('button-danger')
            $target.classList.remove('button-primary')
        }
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }
}