import { Request, Response } from 'express';
import { paramMissingError } from '../shared/constants';
import StatusCodes from 'http-status-codes';
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

import TeaShopDao from '../controllers/TeaShopDao'
const teaShopDao = new TeaShopDao();

/**
 * Calls TeaShopDAO.getAllTeaShops() and returns http status code
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function getTeaShops(req: Request, res: Response) {
    const teaShops = await teaShopDao.getAllTeaShops();
    return res.status(OK).json({teaShops});
}

/**
 * Calls TeaShopDAO.getTeaShopById() and returns http status code
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function getTeaShopById(req: Request, res: Response) {
    const { id } = req.params;
    const teaShop = await teaShopDao.getTeaShopById(id);
    return res.status(OK).json(teaShop);
}

/**
 * Calls TeaShopDAO.addOrUpdateTeaShop() and returns http status code
 * We handle the case where the user sumbits an empty JSON
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function addOrUpdateTeaShop(req: Request, res: Response) {
    if (!req.body) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    await teaShopDao.addOrUpdateTeaShop(req.body);
    return res.status(CREATED).end();
}

/**
 * Calls TeaShopDAO.deleteTeaShop() and returns http status code
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function deleteTeaShop(req: Request, res: Response) {
    const {id } = req.params;
    await teaShopDao.deleteTeaShop(id);
    return res.status(OK).end();
}