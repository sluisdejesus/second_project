const baseURL = 'http://localhost:5000/api/carbon/';

const carbonServices = {
    getServices() {
        return fetch(baseURL)
        .then(res => res.json());
    }
}