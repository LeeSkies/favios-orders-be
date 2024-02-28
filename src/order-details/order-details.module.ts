import { Module } from '@nestjs/common';
import { OrderDetailsService } from './order-details.service';
import { OrderDetailsController } from './order-details.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderDetails, OrderDetailsSchema } from '../schemas/order-details.schema';
import { Order, OrderSchema } from '../schemas/order.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: OrderDetails.name, schema: OrderDetailsSchema },
      { name: Order.name, schema: OrderSchema },
    ]),
  ],
  controllers: [OrderDetailsController],
  providers: [OrderDetailsService],
})
export class OrderDetailsModule {}
