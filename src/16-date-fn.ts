import { subDays, format } from "date-fns";

// subDays hace restas de fechas
const date = new Date(2003, 8, 4); // [0 => enero, 1 => febrero ...]; // YYYY/MM/DD
const rta = subDays(date, 366);
const str = format(rta, 'yyyy/MM/dd');

console.log(str);

