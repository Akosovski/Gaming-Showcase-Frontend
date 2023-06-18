import bcrypt from "bcrypt";

import models from "../models/init-models";

const createUser = async (req, res) => {
  if (req.body.username == "") {
    return res.status(401).send({ message: "Failed! Username is not null" });
  } else if (req.body.password == "") {
    return res.status(401).send({ message: "Failed! Password is not null" });
  } else {
    try {
      const salt = await bcrypt.genSalt(10);
      const passHash = await bcrypt.hash(req.body.password, salt);
      const user = await req.context.models.users.create({
        username: req.body.username,
        firstname: req.body.first_name,
        lastname: req.body.last_name,
        password: passHash,
      });
      const { username, user_email, user_phone } = user.dataValues;
      return res.send({ username, user_email, user_phone });
    } catch (error) {
      return res.send(error);
    }
  }
};

const findByUsername = async (req, res) => {
  try {
    const users = await req.context.models.users.findOne({
      where: { user_id: req.params.ids },
    });
    return res.send(users);
  } catch (error) {
    return res.send(error);
  }
};

export default {
  createUser,
  findByUsername
};