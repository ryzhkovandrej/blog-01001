export function renderPost(post, options) {
    console.log('post: ', post);
    const teg = post.type == 'news' ? '<li class="tag tag-blue tag-rounded">Новость</li>' : '<li class="tag tag-rounded">Заметка</li>'
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    const filtered = favorites.filter(favorite => favorite.id == post.id)
    
    const button = (filtered.length) 
            ? `<button data-id="${post.id}" data-name="${post.title}" class="button-round button-small button-danger">Удалить</button>`
            : `<button data-id="${post.id}" data-name="${post.title}" class="button-round button-small button-primary">Сохранить</button>`
        return `<div class="panel">
            <div class="panel-head">
            <p class="panel-title">${post.title}</p>
            <ul class="tags">
                ${teg}
            </ul>
            </div>
            <div class="panel-body">
            <p class="multi-line">${post.fulltext}</p>
            </div>
            <div class="panel-footer w-panel-footer">
            <small>${post.data}</small>
            ${options.withButton ? button : ''}
            </div>
    </div>`
}