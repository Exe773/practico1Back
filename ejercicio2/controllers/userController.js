let users = [];
let idNumber = 0;

const getUsers = (req, res) => {
  res.status(200).send(users);
};

const createUser = (req, res) => {
  idNumber++;
  users.push({
    ID: idNumber,
    Nombre: req.body.Nombre,
    Apellido: req.body.Apellido,
    DNI: req.body.DNI,
  });
  res.status(200).send("El usuario fue creado exitosamente!");
};

module.exports = {
  getUsers,
  createUser,
};
