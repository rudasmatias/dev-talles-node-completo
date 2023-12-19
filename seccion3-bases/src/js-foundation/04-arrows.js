const users = [
  {
    id: 1,
    name: "john doe",
  },
  {
    id: 2,
    name: "jane doe",
  },
];

const getUserById2 = (id, callback) => {
  const data = users.find((user) => user.id === id);
  data ? callback(null, data) : callback(`USUARIO no encontrado ${id}`);
};

//Los módulos son una forma de encapsulamiento donde solo mostramos lo que necesitamos

module.exports = {
  getUserById2,
};
