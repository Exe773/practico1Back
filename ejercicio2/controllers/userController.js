const getUsers = (req, res) => {
  let obj = JSON.parse(process.env.USERS_ARRAY);
  res.status(200).send(obj);
};

const getUsersById = (req, res) => {
  let obj = JSON.parse(process.env.USERS_ARRAY);
  let isInArray = obj.some((obj) => obj.ID === req.params.id);

  if (isInArray) {
    let user = obj.find((obj) => obj.ID === req.params.id);
    res.status(200).send(user);
  } else {
    res.status(404).send("No existe el ID solicitado");
  }
};

const createUser = (req, res) => {
  let obj = JSON.parse(process.env.USERS_ARRAY);

  let isUserExits = obj.some((obj) => obj.DNI === req.body.DNI);

  if (isUserExits) {
    res.status(200).send("El DNI ya existe");
  } else {
    process.env.ID_USERS++;
    let newUser = {
      ID: process.env.ID_USERS,
      Nombre: req.body.Nombre,
      Apellido: req.body.Apellido,
      DNI: req.body.DNI,
    };

    obj.push(newUser);
    process.env.USERS_ARRAY = JSON.stringify(obj);
    res
      .status(200)
      .send({ message: "El usuario fue creado exitosamente!", user: newUser });
  }
};

const updateUser = (req, res) => {
  let obj = JSON.parse(process.env.USERS_ARRAY);
  let isInArray = obj.some((obj) => obj.ID === req.params.id);

  if (isInArray) {
    let update = obj.findIndex((obj) => obj.ID === req.params.id);

    obj[update] = {
      ID: req.params.id,
      Nombre: req.body.Nombre,
      Apellido: req.body.Apellido,
      DNI: req.body.DNI,
    };
    process.env.USERS_ARRAY = JSON.stringify(obj);
  res
    .status(200)
    .send({
      message: "El usuario fue actualizado exitosamente!",
      user: obj[update],
    });
  } else {
    res.status(404).send("No existe el ID solicitado");
  }
  
};

const deleteUser = (req, res) => {
  let obj = JSON.parse(process.env.USERS_ARRAY);
  let newObj = obj.filter((obj) => obj.ID !== req.params.id);
  process.env.USERS_ARRAY = JSON.stringify(newObj);
  res
    .status(200)
    .send({
      message: `El usuario de ID: ${req.params.id} fue eliminado exitosamente!`,
    });
};

const filterUsers = (req, res) => {
  let obj = JSON.parse(process.env.USERS_ARRAY);
  let userFind = [];
  let newObj = obj.filter(
    (obj) =>
      obj.Apellido === req.body.Apellido || obj.Nombre === req.body.Nombre
  );

  newObj.map((user) => {
    if (
      user.Nombre === req.body.Nombre &&
      user.Apellido === req.body.Apellido
    ) {
      userFind.push(user);
    }
  });

  if (userFind.length > 0) {
    res.status(200).send(userFind);
  } else {
    res.status(200).send(newObj);
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUsersById,
  filterUsers,
};
