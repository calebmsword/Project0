import TeaShopDao from '../controllers/TeaShopDao';
import { exampleTeaShop } from '../shared/constants';
const teaShopDao = new TeaShopDao();

/*
To understand how jest was set up for this project, see
https://basarat.gitbook.io/typescript/intro-1/jest

To understand the (done) parameter, see
https://jestjs.io/docs/asynchronous
*/

test('Testing TeaShopDao.addOrUpdateTeaShop()', done => {
    teaShopDao.addOrUpdateTeaShop(exampleTeaShop)
    .then( p => {
            expect(p).toContain(exampleTeaShop);
    })
    .catch( () => {
        /** 
        * 
        */
    })
    .then( p => {
        teaShopDao.deleteTeaShop(exampleTeaShop.id);
        done();
    });
});

test('Testing TeaShopDao.getTeaShopById()', done => {
    teaShopDao.addOrUpdateTeaShop(exampleTeaShop);
    teaShopDao.getTeaShopById(exampleTeaShop.id)
    .then( p => {
        expect(p).toBe(exampleTeaShop);
    })
    .catch( () => {
        /** 
        * 
        */
    })
    .then( p => {
        teaShopDao.deleteTeaShop(exampleTeaShop.id);
        done();
    });
});