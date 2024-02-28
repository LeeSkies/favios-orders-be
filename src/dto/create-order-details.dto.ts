export class OrderDetailsDto {
    orderId: string;

    notes: string;
    
    products: string[];
    
    branch: string;
    
    prediction: boolean;
    
    orderType: string | null;
    
    customer: string;
    
    numOfGuests: number;
    
    unknownProducts: number;
    
    source: string;

    toDate: string;
}
