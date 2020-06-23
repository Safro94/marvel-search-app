import { createGlobalStyle } from 'styled-components';
import style from 'styled-theming';

const getBgColor = style('mode', { light: '#fff', dark: '#000' });

export default createGlobalStyle`
    body {
        background-color: ${getBgColor}
    }
`;
