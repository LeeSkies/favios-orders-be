import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OrderDetailsDto } from 'src/dto/create-order-details.dto';
import { OrderDetailsSuccessObject } from 'src/dto/success-objects.dto';
import { Model } from 'mongoose';
import { OrderDetails } from 'src/schemas/order-details.schema';
import { Order } from 'src/schemas/order.schema';

@Injectable()
export class OrderDetailsService {
  constructor(
    @InjectModel(OrderDetails.name)
    private readonly orderDetailsModel: Model<OrderDetails>,
    @InjectModel(Order.name) private readonly orderModel: Model<Order>,
  ) {}

  async getOne(id: string): Promise<OrderDetailsSuccessObject> {
    const orderDetails = await this.orderDetailsModel.findById(id);
    if (!orderDetails?._id) {
      throw new Error('Invalid ID provided');
    }
    return {
      success: true,
      data: orderDetails,
    };
  }

  async getOneByOrderId(orderId: string): Promise<OrderDetailsSuccessObject> {
    const orderDetails = await this.orderDetailsModel.findOne({ orderId });
    if (!orderDetails?._id) {
      throw new Error('Invalid ID provided');
    }
    return {
      success: true,
      data: orderDetails,
    };
  }

  async createOne(
    orderId: string,
    orderDetailsDto: OrderDetailsDto,
  ): Promise<OrderDetails> {
    const order = await this.orderModel.findById(orderId);
    if (!order?._id) {
      throw new Error('Invalid order ID provided');
    }
    return this.orderDetailsModel.create({
      ...orderDetailsDto,
      orderId: orderId,
    });
  }
}
