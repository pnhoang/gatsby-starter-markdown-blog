import React from 'react';
import { Link } from 'gatsby';
import styled from "styled-components";
import { BodyContainer } from "../styles";

const ContentBody = styled.div`
    margin-top: 48px;
`;

export default () => (<BodyContainer>
    <Link to="/">Home</Link>

    <ContentBody>
        <p>This can be used as a Gatsby starter template for blogging with Markdown, Markdown Remark.</p>
        <p>A sample blog can be visible at: <a href="http://pnhoang.github.io">pnhoang's blog</a></p>
    </ContentBody>
    </BodyContainer>)
