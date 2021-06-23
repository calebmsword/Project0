export interface IAddress {
    streetName: string;
    state: string;
    areaCode: string;
}

class Address implements IAddress {
    streetName: string;
    state: string;
    areaCode: string;

    constructor (streetName: string, state: string, areaCode: string){
        this.streetName = streetName;
        this.state = state;
        this.areaCode = areaCode;
    }
}

export default Address;