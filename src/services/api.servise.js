class ApiServise {
    constructor(baseUrl) {
        this.url = baseUrl
    }

    async createPost(post) {
        try {
            const request = new Request(this.url + '/posts.json', {
                method: 'POST',
                body: JSON.stringify(post)
            })
            const response = await fetch(request)
            return await response.json()
        } catch (error) {
            console.error('error: ', error);
            
        }
    }

    async getPosts() {
        try {
            const request = new Request(this.url + '/posts.json', {
                method: 'get'
            })
            const response = await fetch(request)
            return await response.json()
        } catch (error) {
            console.error('error: ', error);
            
        }
    }

    async getPost(id) {
        try {
            const request = new Request(`${this.url}/posts/${id}.json`, {
                method: 'get'
            })
            const response = await fetch(request)
            return await response.json()
        } catch (error) {
            console.error('error: ', error);
            
        }
    }
}
export const apiServise = new ApiServise('https://blog-01001-default-rtdb.europe-west1.firebasedatabase.app/')