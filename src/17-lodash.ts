// var _ = require('lodash'); // Nos alerta de que la manera de llamarla es vieja
import _ from 'lodash';

type Data = {
  username: string,
  role: string
}

const data: Data[] = [
  {
    username: 'cufa',
    role: 'admin'
  },
  {
    username: 'leo',
    role: 'seller'
  },
  {
    username: 'lore',
    role: 'seller'
  },
  {
    username: 'lauti',
    role: 'customer '
  },
]

const rta = _.groupBy(data, (item) => item.role);
console.log(rta );
