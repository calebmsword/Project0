import { Router } from 'express';
import { getTeaShops, getTeaShopById, addOrUpdateTeaShop, deleteTeaShop } from  './teaShopVerbs';

const teaShopRouter = Router();

teaShopRouter.get('', getTeaShops);

teaShopRouter.get('/:id', getTeaShopById);

teaShopRouter.post('', addOrUpdateTeaShop);

teaShopRouter.put('/:id', addOrUpdateTeaShop);

teaShopRouter.delete('/:id', deleteTeaShop);

const baseRouter = Router();
baseRouter.use('/teaShops', teaShopRouter);
export default baseRouter;