import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
    try {
      const product = await req.context.models.product.findAll();
      return res.send(product);
    } catch (error) {
      return res.send(error);
    }
};

const findOne = async (req, res) => {
    try {
      const product = await req.context.models.product.findOne({
        where: { product_id: req.params.ids },
      });
      return res.send(product);
    } catch (error) {
      return res.send(error);
    }
};

const querySQL = async (req, res) => {
    try {
        await sequelize
        .query("select * from product where product_id = :id", {
            replacements: { id: req.params.id },
            type: sequelize.QueryTypes.SELECT,
        })
        .then((result) => {
            return res.send(result);
        });
    } catch (error) {
        return res.send(error);
    }
};
export default {
    findAll,
    findOne,
    querySQL
};