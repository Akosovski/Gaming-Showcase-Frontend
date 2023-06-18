import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
    try {
      const orderdetail = await req.context.models.order_detail.findAll();
      return res.send(orderdetail);
    } catch (error) {
      return res.send(error);
    }
};

const findOne = async (req, res) => {
    try {
      const orderdetail = await req.context.models.order_detail.findOne({
        where: { order_detail_id: req.params.ids },
      });
      return res.send(orderdetail);
    } catch (error) {
      return res.send(error);
    }
};

export default {
    findAll,
    findOne
};