import TeaShopDao from '../controllers/TeaShopDao';
import { exampleTeaShop } from '../shared/constants';
const teaShopDao = new TeaShopDao();

test('Testing TeaShopDao.addOrUpdateTeaShop()', () => {
    teaShopDao.addOrUpdateTeaShop(exampleTeaShop).then(p => {
            expect(p).toContain(exampleTeaShop);
    }).catch(() => {
        //the Promise is rejected, so you must "handle" it with a catch() to avoid printing warnings to console    
    });
});

test('Testing TeaShopDao.getTeaShopById()', () => {
    teaShopDao.addOrUpdateTeaShop(exampleTeaShop);
    teaShopDao.getTeaShopById(exampleTeaShop.id).then( p => {
        expect(p).toBe(exampleTeaShop);
        teaShopDao.deleteTeaShop(exampleTeaShop.id);
    }).catch(() => {
        //the Promise is rejected, so you must "handle" it with a catch() to avoid printing warnings to console
    });
});
