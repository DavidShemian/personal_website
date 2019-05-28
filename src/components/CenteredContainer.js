import styled from 'styled-components';


const CenteredContainer = styled.div`
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