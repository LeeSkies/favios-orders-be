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
import { OrderDetailsService } from './order-details.service';
import { OrderDetailsSuccessObject } from 'src/dto/success-objects.dto';
import { OrderDetailsDto } from 'src/dto/create-order-details.dto';

@Controller('order-details')
export class OrderDetailsController {
  constructor(private readonly orderDetailsService: OrderDetailsService) {}

  @Get(':id')
  async readOne(@Param('id') id: string): Promise<OrderDetailsSuccessObject> {
    return this.orderDetailsService.getOne(id);
  }

  @Get('order/:id')
  async readOneByOrderId(
    @Param('id') orderId: string,
  ): Promise<OrderDetailsSuccessObject> {
    return this.orderDetailsService.getOneByOrderId(orderId);
  }

  @Put(':id')
  @HttpCode(201)
  updateOne(@Param('id') id: string) {}

  @Post(':id')
  async createOne(
    @Param('id') orderId: string,
    @Body() orderDetailsDto: OrderDetailsDto,
  ) {
    return this.orderDetailsService.createOne(orderId, orderDetailsDto);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    // return this.orderDetailsService.
  }
}
