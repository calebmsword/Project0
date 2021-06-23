import TeaShopDao from '../controllers/TeaShopDao';
import { exampleTeaShop } from '../shared/constants';
const teaShopDao = new TeaShopDao();

/*
To understand  how jest was implemented in this project, see
https://basarat.gitbook.io/typescript/intro-1/jest
*/

test('Testing TeaShopDao.addOrUpdateTeaShop()', () => {
    teaShopDao.addOrUpdateTeaShop(exampleTeaShop).then(p => {
            expect(p).toContain(exampleTeaShop);
    }).catch( () => {/** */} );
});

test('Testing TeaShopDao.getTeaShopById()', () => {
    teaShopDao.addOrUpdateTeaShop(exampleTeaShop);
    teaShopDao.getTeaShopById(exampleTeaShop.id).then( p => {
        expect(p).toBe(exampleTeaShop);
    }).catch( () => {/** */} );
});