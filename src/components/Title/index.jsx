import React from 'react';

import {
    StyledTitle
} from './styles';

function Title({left, top, children}) {
    return (
        <>
            <StyledTitle left={left} top = {top}>
                {children}
            </StyledTitle>
        </>
    );
}

export default Title;
