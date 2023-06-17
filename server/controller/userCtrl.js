import bcrypt from "bcrypt";

import models from "../models/init-models";

const createUser = async (req, res) => {
  if (req.body.username == "") {
    return res.status(401).send({ message: "Failed! Username is not null" });
  } else if (req.body.password == "") {
    return res.status(401).send({ message: "Failed! Password is not null" });
  } else if (req.body.email == "") {
    return res.status(401).send({ message: "Failed! Email is not null" });
  } else {
    try {
      const salt = await bcrypt.genSalt(10);
      const passHash = await bcrypt.hash(req.body.password, salt);
      const user = await req.context.models.users.create({
        username: req.body.username,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        user_email: req.body.email,
        user_phone: req.body.phone,
        user_password: passHash,
      });
      const { username, user_email, user_phone } = user.dataValues;
      return res.send({ username, user_email, user_phone });
    } catch (error) {
      return res.send(error);
    }
  }
};

const findAllByUsername = async (username) => {
  const user = await models.users.findOne({
      where: { username: username },
    })
    .catch((err) => {
      return err;
    });
    return user.toJSON()
};

export default {
  createUser,
  findAllByUsername
};