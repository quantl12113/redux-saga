import userSagas from "../sagas/user-sagas";

const users = [
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

const Api = {
  login
}

export default Api;