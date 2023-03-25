import axios from "axios";

export default async function getUsers(id) {
    const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.data)
        .catch(error => console.log(error));
    const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(response => response.data)
        .catch(error => console.log(error));
    user.posts = posts;
    return user;
}