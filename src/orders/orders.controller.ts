import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from '../schemas/order.schema';
import { CreateOrderDto } from '../dto/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async readAll() {
    return this.ordersService.readAll();
  }

  @Get(':id')
  async readOne(@Param('id') id: string) {
    return this.ordersService.readOne(id);
  }

  @Get("search/:query")
  async search(@Param("query") query: string) {
    return this.ordersService.search(query)
  }

  @Put('update/:id')
  @HttpCode(201)
  updateOne(@Param('id') id: string) {}

  @Post()
  async createOne(@Body() newOrder: CreateOrderDto) {
    return this.ordersService.createOne(newOrder);
  }

  @Delete('delete/:id')
  deleteOne(@Param('id') id: string) {
    return this.ordersService.deleteOne(id);
  }
}
