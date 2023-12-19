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

const getUserById = (id, callback) => {
  const data = users.find((user) => user.id === id);

  if (!data) {
    return callback(`USUARIO no encontrado ${id}`);
  }

  return callback(null, data);
};

//Los módulos son una forma de encapsulamiento donde solo mostramos lo que necesitamos

module.exports = {
  getUserById,
};
