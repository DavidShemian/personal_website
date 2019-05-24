import styled from 'styled-components';


const CenteredContainer = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: ${props => props.marginTop ? props.marginTop : '3vh'};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : '#FFFFF'};
    width: 100%;
`; 


export default CenteredContainer;