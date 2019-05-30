import React from 'react';
import styled from 'styled-components';
import BasicText from "./BasicText";

const Download = ({ href, download, text }) => (
    <DownloadLink href={href} download={download}>
        <BasicText text={text} fontStyle={'italic'} />
    </DownloadLink>
);

const DownloadLink = styled.a`
  text-decoration: none;
`;

export default Download;