import Address from './Address'; 

export interface ITeaShop{
    id: string;
    name: string;
    address: Address;
}

class TeaShop implements ITeaShop{
    
    public id: string;
    public name: string;
    public address: Address;

    constructor(id: string, name: string, street: string, state: string, areaCode: string){
        this.id = id;
        this.name = name;
        this.address = new Address(street, state, areaCode);
    }
}

export default TeaShop;