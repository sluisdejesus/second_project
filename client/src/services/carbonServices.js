const baseURL = 'http://localhost:5000/api/carbon/';

const carbonServices = {
    getCarbonData() {
        return fetch(baseURL)
        .then(res => res.json());
    },

    addCarbonData(data) {
        return fetch(baseURL, {
            method:'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json());

    }
    
}