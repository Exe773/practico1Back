const getUsers = (req, res) => {
  res.status(200).send(process.env.USERS_ARRAY);
};

const createUser = (req, res) => {
  process.env.ID_USERS++;

  let obj = JSON.parse(process.env.USERS_ARRAY);

  obj.push({
    ID: process.env.ID_USERS,
    Nombre: req.body.Nombre,
    Apellido: req.body.Apellido,
    DNI: req.body.DNI,
  });

  process.env.USERS_ARRAY = JSON.stringify(obj);

  res.status(200).send("El usuario fue creado exitosamente!");
};

module.exports = {
  getUsers,
  createUser,
};
