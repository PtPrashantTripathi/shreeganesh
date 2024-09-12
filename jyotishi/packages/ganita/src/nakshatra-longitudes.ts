import { nakshatras } from './nakshatras';
import { mapObjIndexed, values, pipe } from 'ramda';

pipe(
    nakshatras,
    values,
)
