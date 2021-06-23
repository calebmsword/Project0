const AWS = require('aws-sdk');
require('dotenv').config();
import { ITeaShop } from '../models/TeaShop';
import { IAddress } from '../models/Address';

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACESS_KEY
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = 'tea-time-api';

export interface ITeaShopDao{
    getAllTeaShops: () => Promise<ITeaShop[]>;
    getTeaShopById: (id: string) => Promise<ITeaShop | null>;
    addOrUpdateTeaShop: (teaShop: ITeaShop) => Promise<void>;
    deleteTeaShop: (id: string) => Promise<void>;
}

class TeaShopDao implements ITeaShopDao {

    /**
     * 
     * @returns 
     */
    public async getAllTeaShops(): Promise<ITeaShop[]> {
        const params = {
            TableName: TABLE_NAME,
        };
        const shops = await dynamoClient.scan(params).promise();
        console.log(shops.Items);
        return shops.Items as ITeaShop[];
    }

    /**
    * 
    * @param id 
    * @returns 
    */
    public async getTeaShopById(id: string): Promise<ITeaShop | null> {
        const params = {
            TableName: TABLE_NAME,
            Key: {
                id,
            }
        }
        return await dynamoClient.get(params).promise() as ITeaShop;
    }

    /**
     * 
     * @param teaShop 
     * @returns 
     */
    public async addOrUpdateTeaShop(teaShop: ITeaShop): Promise<void> {
        const params = {
            TableName: TABLE_NAME,
            Item: teaShop,
        }
        return await dynamoClient.put(params).promise();
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    public async deleteTeaShop(id: string): Promise<void> {
        const params = {
            TableName: TABLE_NAME,
            Key: {
                id,
            }
        }
        return await dynamoClient.delete(params).promise();
    }
}

export default TeaShopDao;