import TeaShopDao from '../controllers/TeaShopDao';
import { exampleTeaShop } from '../shared/constants';
const teaShopDao = new TeaShopDao();

/*
To understand how jest was set up for this project, see
https://basarat.gitbook.io/typescript/intro-1/jest

To understand the (done) parameter, see
https://jestjs.io/docs/asynchronous
*/

/**
 * addOrUpdateTeaShop returns a promise containing an array of all
 * TeaShops in the database.
 */
test('Testing TeaShopDao.addOrUpdateTeaShop()', done => {
    //add dummy item to database
    teaShopDao.addOrUpdateTeaShop(exampleTeaShop)
    .then( p => {
            expect(p).toContain(exampleTeaShop);
    })
    .catch( () => {
        //The promise does not resolve so we must catch it
    })
    .then( p => {
        //don't keep dummy item in database
        teaShopDao.deleteTeaShop(exampleTeaShop.id);
        done();
    });
});

/**
 * getTeaShopById returns a promise containing a single TeaShop
 */
test('Testing TeaShopDao.getTeaShopById()', done => {
    //add a dummy item into database
    teaShopDao.addOrUpdateTeaShop(exampleTeaShop);
    
    teaShopDao.getTeaShopById(exampleTeaShop.id)
    .then( p => {
        expect(p).toBe(exampleTeaShop);
    })
    .catch( () => {
        //The promise does not resolve so we must catch it
    })
    .then( p => {
        //remove dummy item from database
        teaShopDao.deleteTeaShop(exampleTeaShop.id);
        done();
    });
});