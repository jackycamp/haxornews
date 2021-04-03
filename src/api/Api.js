/* eslint-disable no-mixed-spaces-and-tabs */

export default class Api {
	constructor() {
		this.base_url = 'https://hacker-news.firebaseio.com/v0/';
	}

    topStories = () => (
    	fetch(`${this.base_url}topstories.json?print=pretty`)
    		.then((response) => response.json())
    		.then((data) => data)
    		.catch((error) => error)
    )

    newStories = () => (
    	fetch(`${this.base_url}newstories.json?print=pretty`)
    		.then((response) => response.json())
    		.then((data) => data)
    		.catch((error) => error)
    )

    bestStories = () => (
    	fetch(`${this.base_url}beststories.json?print=pretty`)
    		.then((response) => response.json())
    		.then((data) => data)
    		.catch((error) => error)
    )

    jobStories = () => (
    	fetch(`${this.base_url}jobstories.json?print=pretty`)
    		.then((response) => response.json())
    		.then((data) => data)
    		.catch((error) => error)
    )

	item = (id) => (
	    fetch(`${this.base_url}item/${id}.json?print=pretty`)
	    .then((response) => response.json())
	    .then((data) => data)
	    .catch((error) => error)
	)
}
