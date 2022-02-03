import React from 'react';

import {
    StyledTitle
} from './styles';

function Title({left, top, bottom, children}) {
    return (
        <>
            <StyledTitle left={left} top = {top} bottom={bottom}>
                {children}
            </StyledTitle>
        </>
    );
}

export default Title;
