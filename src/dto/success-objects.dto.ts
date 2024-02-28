import { Order } from "../schemas/order.schema"

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