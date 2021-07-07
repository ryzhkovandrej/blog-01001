import Component from "../core/Component";
import { apiServise } from "../services/api.servise";
import { renderPost } from "../templates/post.template";

export default class FavoriteComponent extends Component {
    constructor(id, {loader}) {
        super(id)
        this.loader = loader
    }

    init(){
        this.$el.addEventListener('click', clickHandler.bind(this))
    }

    onShow(){
        const favorites = JSON.parse(localStorage.getItem('favorites'))
        const html = renderList(favorites)
        this.$el.insertAdjacentHTML('beforeend', html)
    }

    onHide(){
        this.clear()
    }
}
function renderList(list = []) {
    console.log('list: ', list);
    if (list && list.length) {
        return `<ul>
        ${list.map(item=>`<li><a data-id="${item.id}" class="js-link" href="">${item.name}</a></li>`).join('')}
        </ul>`
    }
    return `<p class="align-center">Список пуст</p>`
}

async function clickHandler(event) {
    event.preventDefault()
    const $target = event.target
    if ($target.classList.contains('js-link')) {
        this.clear()
        this.loader.show()
        
        const id = $target.dataset.id
        const name = $target.dataset.name
        const post = await apiServise.getPost(id)
        console.log('post: ', post);
        post.id = id
        console.log('post: ', post);
        const html = renderPost(post, {withButton: false})
        this.$el.insertAdjacentHTML('beforeend', html)
        this.loader.hide()
    }
}