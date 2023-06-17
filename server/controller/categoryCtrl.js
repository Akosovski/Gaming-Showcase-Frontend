import { sequelize } from "../models/init-models";


const findAll = async (req, res) => {
    try {
      const product_category = await req.context.models.product_category.findAll();
      return res.send(product_category);
    } catch (error) {
      return res.send(error);
    }
};

const findOne = async (req, res) => {
    try {
      const product_category = await req.context.models.product_category.findOne({
        where: { category_id: req.params.ids },
      });
      return res.send(product_category);
    } catch (error) {
      return res.send(error);
    }
};

const querySQL = async (req, res) => {
try {
    await sequelize
    .query("select * from product_category where category_id = :id", {
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