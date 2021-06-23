// Put shared constants here

import TeaShop, { ITeaShop } from '../models/TeaShop';
import { IAddress } from '../models/Address';

export const paramMissingError = 'One or more of the required parameters was missing.';
export const exampleTeaShop = new TeaShop("-1", "Some Tea Place", "123 StreetName", "State", "area-code");