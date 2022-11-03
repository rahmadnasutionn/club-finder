class DataSource {
    static searchClub(keyword) {
        return fetch(`https://sports-api.dicoding.dev/teams/search?t=${keyword}`)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.teams) {
                    return Promise.resolve(responseJson.teams);
                } else {
                    return Promise.reject(`${keyword} not found`);
                }
            });
    }
}

export default DataSource;