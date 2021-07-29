import React from 'react';
import { 
    PateTitleContainer,
    PageTitleStyled,
    PageSubtitleStyled
} from './PageTitle.style';

interface PageTitleProps {
    title: string;
    subtitle?: string;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
    return (
        <PateTitleContainer>
            <PageTitleStyled>
                {props.title}
            </PageTitleStyled>
            <PageSubtitleStyled>
                {props.subtitle}
            </PageSubtitleStyled>
        </PateTitleContainer>
    )
}

export default PageTitle;