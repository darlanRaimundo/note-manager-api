// export const jwtConstants = {
//   secret:
//     'eyJhbGciOiJIUzI1NiJ9.e30.1aYdKQ4D5I94DPfsiGiWwG2mgcWDT7kei4KbfF-vJxc',
// };

import { SetMetadata } from '@nestjs/common';

export const jwtConstants = {
  secret:
    'DO NOT USE THIS VALUE. INSTEAD, CREATE A COMPLEX SECRET AND KEEP IT SAFE OUTSIDE OF THE SOURCE CODE.',
};

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
