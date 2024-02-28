import { Order } from "src/schemas/order.schema"

export class OrderSuccessObject {
    success: boolean
    data: {
        count: number,
        next: null,
        previous: null,
        results: Order | Order[]
    }
}

export class OrderDetailsSuccessObject {}