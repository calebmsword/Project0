const AWS = require('aws-sdk');
require('dotenv').config();

import TeaShop, { ITeaShop, IAddress, Address } from '../models/TeaShop';

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACESS_KEY
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = 'tea-time-api';

export interface ITeaShopDao{
    getAllTeaShops: () => Promise<TeaShop[]>;
    getTeaShopById: (id: string) => Promise<TeaShop | null>;
    addOrUpdateTeaShop: (teaShop: ITeaShop) => Promise<void>;
    deleteTeaShop: (id: string) => Promise<void>;
}

class TeaShopDao implements ITeaShopDao {

    /**
     * Returns an array containing all TeaShops in database
     * 
     * @returns 
     */
    public async getAllTeaShops(): Promise<TeaShop[]> {
        const params = {
            TableName: TABLE_NAME,
        };
        const shops = await dynamoClient.scan(params).promise();
        return shops.Items as TeaShop[];
    }

    /**
    * Returns TeaShop corresponding to partition key (TeaShop.id)
    * 
    * @param id 
    * @returns 
    */
    public async getTeaShopById(id: string): Promise<TeaShop | null> {
        const params = {
            TableName: TABLE_NAME,
            Key: {
                id,
            }
        }
        return dynamoClient.get(params).promise() as TeaShop;
    }

    /**
     * Used for post/put verbs. Used to add new TeaShops or update preexisting TeaShops
     * 
     * @param teaShop 
     * @returns 
     */
    public async addOrUpdateTeaShop(teaShop: ITeaShop): Promise<void> {
        const params = {
            TableName: TABLE_NAME,
            Item: teaShop,
            Key: {
                "id": teaShop.id
            }
        }
        return dynamoClient.put(params).promise();
    }

    /**
     * Removes TeaShop with given partition key from database
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
        return dynamoClient.delete(params).promise();
    }
}

export default TeaShopDao;