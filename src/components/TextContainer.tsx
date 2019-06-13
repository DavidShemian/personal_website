import styled from 'styled-components';
import { TEXT_CONTAINER_WIDTH, MARGIN_FROM_TEXT_TO_TITLE_SIZE, TEXT_CONTAINER_MIN_WIDTH } from '../constants/Sizes';


const TextContainer = styled.div`
    width: ${TEXT_CONTAINER_WIDTH};
    min-width: ${TEXT_CONTAINER_MIN_WIDTH};
    margin-top: ${MARGIN_FROM_TEXT_TO_TITLE_SIZE};
    height: auto;
`; 


export default TextContainer;