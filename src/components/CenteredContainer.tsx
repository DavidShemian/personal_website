import styled from 'styled-components';

interface ICenteredContainer {
    backgroundColor?: string,
    marginTop?: string
}


const CenteredContainer = styled.div<ICenteredContainer>`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : '#FFFFF'};
    width: 100%;
    min-width: 300px;
    overflow: hidden;
    margin-bottom: 2vh;
    margin-top: ${props => props.marginTop};
`;


export default CenteredContainer;