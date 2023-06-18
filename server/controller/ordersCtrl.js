import models from "../models/init-models";

const create = async (req, res, next) => {
    try {
      const createdOrder = await req.context.models.orders.create({
        order_id: req.body.order_id,
        user_id: req.body.user_id,
        totalproducts: req.body.totalproducts,
        totalprice: req.body.totalprice,
      });

      const createdOrderDetail = await req.context.models.order_detail.create({
        order_detail_id: req.body.order_detail_id,
        order_id: req.body.order_id,
        product_id: req.body.product_id,
        quantity: req.body.quantity,
      });

      next()
    } catch (error) {
      return res.send(error);
    }
};

export default {
  create
};