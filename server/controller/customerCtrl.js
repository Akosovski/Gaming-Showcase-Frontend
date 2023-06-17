import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
    try {
      const customer = await req.context.models.customer.findAll();
      return res.send(customer);
    } catch (error) {
      return res.send(error);
    }
};

const findOne = async (req, res) => {
    try {
      const customer = await req.context.models.customer.findOne({
        where: { customer_id: req.params.ids },
      });
      return res.send(customer);
    } catch (error) {
      return res.send(error);
    }
};

const querySQL = async (req, res) => {
try {
    await sequelize
    .query("select * from customer where customer_id = :id", {
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