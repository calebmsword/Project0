export interface ITeaShop{
    id: string;
    name: string;
    address: string;
    state: string;
    areaCode: string;
}

class TeaShop implements ITeaShop{
    
    public id: string;
    public name: string;
    public address: string;
    public state: string;
    public areaCode: string;

    constructor(id: string, name: string, address: string, state: string, areaCode: string){
        this.id = id;
        this.name = name;
        this.address = address;
        this.state = state;
        this.areaCode = areaCode;
    }
}

export default TeaShop;