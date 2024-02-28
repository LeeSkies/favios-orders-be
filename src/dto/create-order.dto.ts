export class CreateOrderDto {
    notes: string

    prediction: boolean

    branch: string

    branchId: number

    orderType: string | null

    eventId: number

    recurrence: number

    customer: string

    customerId: number

    products: string

    numOfGuests: number

    source: string

    status: string

    toDate: string
}