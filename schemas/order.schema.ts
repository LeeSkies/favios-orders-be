import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderSchema = HydratedDocument<Order>;

@Schema({ timestamps: true })
export class Order {
    @Prop({
        type: String,
        default: ""
    })
    notes: string

    @Prop({
        type: Number,
        min: 0,
        max: 2,
        required: true
    })
    urgency: number

    @Prop({
        type: Number,
        required: true,
        min: 0
    })
    cost: number

    @Prop({
        type: Boolean,
        default: false,
    })
    prediction: boolean

    @Prop({
        type: String,
        required: true,
        minlength: 3
    })
    branch: string

    @Prop({
        type: Number,
        required: true
    })
    branchId: number

    @Prop({
        type: String,
        default: null
    })
    orderType: string | null

    @Prop({
        type: Number,
        default: null
    })
    eventId: number | null

    @Prop({
        type: Number,
        required: true
    })
    recurrence: number

    @Prop({
        type: String,
        required: true,
        minlength: 3
    })
    customer: string

    @Prop({
        type: Number,
        required: true
    })
    customerId: number

    @Prop({
        type: Number,
        default: 0,
    })
    numOfGuests: number

    @Prop({
        type: String,
        required: true
    })
    source: string

    @Prop({
        type: String,
        required: true
    })
    status: string
}

export const OrderSchema = SchemaFactory.createForClass(Order)