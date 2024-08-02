export interface Hotel {
    HotelId: number;
    HotelName: string;
    Description: string;
    Description_fr: string;
    LastRenovationDate: string;
    Address: {
        StreetAddress: string,
        City: string,
        StateProvince: string,
        PostalCode: string,
        Country: string
    };
    Location: object;
    Rooms: Room[];
    hotelImage: string;
    
}