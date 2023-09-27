import React from 'react';
export declare const BR_PHONE_MASK: (string | RegExp)[];
export declare const BR_MOBILE_MASK: (string | RegExp)[];
export declare const BR_CEP_MASK: (string | RegExp)[];
export declare const BR_CNPJ_MASK: (string | RegExp)[];
export declare const BR_CPF_MASK: (string | RegExp)[];
export declare const TEST_BR_MOBILE_MASK: (value: string) => boolean;
declare const MaskedComponent: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
export default MaskedComponent;
