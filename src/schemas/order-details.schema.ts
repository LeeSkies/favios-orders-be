import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, SchemaTypes } from "mongoose";

export type OrderDetailsSchema = HydratedDocument<OrderDetails>;

@Schema({ timestamps: true })
export class OrderDetails {
    @Prop({
        type: SchemaTypes.ObjectId,
        ref: "Order",
        unique: true,
        required: true
    })
    orderId: string;

    @Prop({
        type: String,
        default: ""
    })
    notes: string

    @Prop({
        type: [String],
        default: [],
    })
    products: string[]

    @Prop({
        type: String,
        required: true,
        minlength: 3
    })
    branch: string

    @Prop({
        type: Boolean,
        default: false,
    })
    prediction: boolean

    @Prop({
        type: String,
        default: new Date().toISOString().slice(0, 10),
    })
    toDate: string

    @Prop({
        type: String,
        default: null
    })
    orderType: string | null

    @Prop({
        type: String,
        required: true,
        minlength: 3
    })
    customer: string

    @Prop({
        type: Number,
        default: 0,
    })
    numOfGuests: number

    @Prop({
        type: Number,
        default: 0,
    })
    unknownProducts: number

    @Prop({
        type: String,
        required: true
    })
    source: string
}

export const OrderDetailsSchema = SchemaFactory.createForClass(OrderDetails)