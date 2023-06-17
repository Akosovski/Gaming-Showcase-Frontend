import userCtrl from "../controller/userCtrl";
import jwt from "jsonwebtoken";
import ResponseHelper from "../helpers/ResponesHelper";
import bcrypt from "bcrypt";

const userLogin = async (req, res) => {
  let data = req.body;
  console.log();
  await userCtrl
    .findAllByUsername(data.username)
    .then((items) => {
      console.log();
      if (items.username) {
        if (bcrypt.compareSync(data.password, items.user_password)) {
          var token = jwt.sign(
            {
              user_id: items.user_id,
            },
            process.env.SECRET_KEY,
            {
              expiresIn: "2h",
            }
          );
          const { user_password, ...user } = items;
          let result = {
            userdata: user,
            accessToken: token,
          };
          ResponseHelper.sendResponse(res, 200, result);
        } else {
          ResponseHelper.sendResponse(res, 401);
        }
      } else {
        ResponseHelper.sendResponse(res, 404);
      }
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

function verify(req, res, next) {
  let bearer = req.headers.authorization;
  bearer = bearer.split(" ");
  const token = bearer[1];
  jwt.verify(token, process.env.SECRET_KEY, (error, data) => {
    if (error) {
      console.info(error.message);
      return res.json(error);
    }
    req.body = data;
    next();
  });
}

const checkToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json("you are not authorized");
  } else {
    let bearer = req.headers.authorization;
    bearer = bearer.split(" ");
    const token = bearer[1];
    try {
      jwt.verify(token, process.env.SECRET_KEY);
      return next();
    } catch (error) {
      return res.status(401).json("invalid token");
    }
  }
};
export default {
  userLogin,
  verify,
  checkToken,
};