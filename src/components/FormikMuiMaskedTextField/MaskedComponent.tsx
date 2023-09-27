import PropTypes from 'prop-types';
import React from 'react';
import MaskedInput from 'react-text-mask';

export const BR_PHONE_MASK = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
export const BR_MOBILE_MASK= ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
export const BR_CEP_MASK = [/[\d]/, /\d/,'.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
export const BR_CNPJ_MASK = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/,'/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
export const BR_CPF_MASK = [/\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/,'-', /\d/, /\d/];
export const TEST_BR_MOBILE_MASK = (value: string) => value.replace(/\D/g, '')[2] === '9'

const MaskedComponent = React.forwardRef((props: any, ref) => {

    const { mask, ...rest } = props

    return (
        <MaskedInput
            {...rest}
            mask={mask}
            placeholderChar={'\u2000'}
            showMask
            guide={false}
        />
    );
});

MaskedComponent.propTypes = {
    mask: PropTypes.array.isRequired
}

export default MaskedComponent;