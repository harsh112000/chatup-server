/* eslint-disable consistent-return */
global.users = [];

const registration = async (data) => {
  const isUserExist = global.users.filter((i) => i.userName === data.userName);

  if (!isUserExist.length) {
    global.users.push(data);
    // console.log(global.users);
    if (data) {
      return { doc: data };
    }

    return { errors: [ { name: 'User', messages: 'User already exists!' } ] };
  }

  return { errors: [ { name: 'key-name', messages: 'Something went wrong!' } ] };
};

const login = async (data) => {
  // console.log(data);
  const { userName, password } = data;

  // console.log(global.users);

  const isData = global.users.find((i) => {
    if (i.userName === userName) {
      if (i.password === password) {
        return i;
      }

      return true;
    }
  });

  // console.log(isData);

  if (isData) {
    return { doc: { isLoggedIn: true } };
  }

  return { errors: [ { key: 'username', messages: 'user or password is wrong' } ] };
};

module.exports = {
  registration,
  login,
};
