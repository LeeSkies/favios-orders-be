import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateOrderDto } from 'src/dto/create-order.dto';
import { OrderSuccessObject } from 'src/dto/success-objects.dto';
import { Model } from 'mongoose';
import { OrderDetails } from 'src/schemas/order-details.schema';
import { Order } from 'src/schemas/order.schema';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private readonly orderModel: Model<Order>,
    @InjectModel(OrderDetails.name)
    private readonly orderDetailsModel: Model<OrderDetails>,
  ) {}

  async readOne(id: string) {
    return this.orderModel.findById(id)
  }

  async readAll(): Promise<OrderSuccessObject> {
    const results = await this.orderModel.find();
    const successObject = {
      success: true,
      data: {
        count: results.length,
        next: null,
        previous: null,
        results,
      },
    };
    return successObject;
  }

  async search(query: string): Promise<Order[]> {
    return this.orderModel.find({
      customer: { $regex: new RegExp(query, 'i') },
    });
  }

  async createOne(createOrderDto: CreateOrderDto): Promise<Order> {
    const { products, toDate, ...orderObj } = createOrderDto
    const order = new this.orderModel(orderObj);
    const details = new this.orderDetailsModel({
      branch: createOrderDto.branch,
      customer: createOrderDto.customer,
      notes: createOrderDto.notes,
      numOfGuests: createOrderDto.numOfGuests,
      orderId: order._id,
      orderType: createOrderDto.orderType,
      prediction: false,
      products: createOrderDto.products,
      source: createOrderDto.source,
      unknownProducts: Math.floor(Math.random() * 11),
      toDate: toDate,
    });
    details.save()
    return order.save()
  }

  async deleteOne(id: string): Promise<Order> {
    const order = await this.orderModel.findByIdAndDelete(id);
    await this.orderDetailsModel.deleteOne({ orderId: order.id });
    return order;
  }
}
