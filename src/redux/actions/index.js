import Bitrix24 from './bitrix24';

import store from '../store';
import { hook } from './settings';

const B24 = new Bitrix24({
  hook,
  store
});

export {
  B24,
};