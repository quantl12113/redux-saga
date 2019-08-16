import userSagas from "../sagas/user-sagas";

let users = [
  {
    id: 1,
    username: "quan1",
    password: "123456",
    email: "quan1@gmail.com"
  },
  {
    id: 2,
    username: "quan2",
    password: "123456",
    email: "quan2@gmail.com"
  },
  {
    id: 3,
    username: "quan3",
    password: "123456",
    email: "quan3@gmail.com"
  }
]

const login = async ({ email, password }) => new Promise((resolve, reject) => {
  setTimeout(_ => {
    users.map(user => {
      if (user.email == email && user.password == password) return resolve(user);
    })
    return reject(new Error('Login fail'));
  }, 1000);
});

const register = async ({ email, password, username }) => new Promise((resolve, reject) => {
  setTimeout(_ => {
    const id = users.length + 1;
    if (users.push({ id, email, password, username })) {
      console.log(users)
      return resolve(users[users.length - 1])
    }
    return reject(new Error('Signup fail'));
  }, 1000);
});

const loadData = () => {
  return fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
}

const Api = {
  login,
  loadData,
  register,
}

export default Api;