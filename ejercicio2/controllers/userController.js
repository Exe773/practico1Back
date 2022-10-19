const getUsers = (req, res) => {
  let obj = JSON.parse(process.env.USERS_ARRAY);
  res.status(200).send(obj);
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

const updateUser = (req, res) => {
  let obj = JSON.parse(process.env.USERS_ARRAY);

  let update = obj.findIndex((obj) => obj.ID === req.params.id);

  obj[update] = {
    Nombre: req.body.Nombre,
    Apellido: req.body.Apellido,
    DNI: req.body.DNI,
  };

  process.env.USERS_ARRAY = JSON.stringify(obj);
  res.status(200).send("El usuario fue actualizado exitosamente!");
};

const deleteUser = (req, res) => {
  let obj = JSON.parse(process.env.USERS_ARRAY);
  let newObj = obj.filter((obj) => obj.ID !== req.params.id);
  process.env.USERS_ARRAY = JSON.stringify(newObj);
  res.status(200).send("El usuario fue eliminado exitosamente!");
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
