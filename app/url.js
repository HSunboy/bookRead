const baseUrl = "http://localhost:7001"

module.exports = {
    statusUrl: baseUrl + "/public",
    register: baseUrl + "/register",
    login: baseUrl + "/login",
    getBookList: baseUrl + "/getBookList",
    getDetailBook: baseUrl + '/getBookDetail',
    addBook: baseUrl + "/addBook",
    getMybook: baseUrl + "/getMybooks"

}