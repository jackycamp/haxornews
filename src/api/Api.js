export default class Api {
    constructor(){
        this.base_url = 'https://hacker-news.firebaseio.com/v0/';
    }
    topStories = () => (
        fetch(this.base_url + 'topstories.json?print=pretty')
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((error) => error)
    )

    item = (id) => (
        fetch(`${this.base_url}item/${id}.json?print=pretty`)
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((error) => error)
    )
}