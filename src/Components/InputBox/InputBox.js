import React from 'react';

function InputBox({ children, error=false, errormessage, ...rest }) {
    return (
        <>
            <InputBoxsStyled {...rest}>
             {children}
            </InputBoxsStyled>

            <FormFeedbackStyled error={error}>
            </FormFeedbackStyled>
        </>
    );

}
 
export default InputBox;