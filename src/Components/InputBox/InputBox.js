import React from 'react';
import { FormFeedbackStyled, InputBoxsStyled } from './InputBox.Style';

function InputBox({ children, errors=false, errormessage='', ...rest }) {
    console.log(errors,errormessage)
    return (
        <>
            <InputBoxsStyled {...rest}>
             {children}
            </InputBoxsStyled>

            <FormFeedbackStyled error={errors}>
                {errormessage}
            </FormFeedbackStyled>
        </>
    );

}
 
export default InputBox;