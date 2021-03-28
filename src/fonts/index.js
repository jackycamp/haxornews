import { createGlobalStyle } from 'styled-components';

import PressStartRegular from './Press_Start_2P/PressStart2P-Regular.ttf';
import TitilliumWeb from './Titillium_Web/TitilliumWeb-Regular.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'PressStartRegular';
        src: local('PressStartRegular'),
        url(${PressStartRegular}) format('truetype')
    }
    @font-face {
        font-family: 'TitilliumWeb';
        src: local('TitiliumWeb'),
        url(${TitilliumWeb}) format('truetype')
    }
`;