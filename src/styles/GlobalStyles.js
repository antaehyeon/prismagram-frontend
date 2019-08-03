import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

/**
 * 최신방식으로 만드는 global style
 * 모든 style 속성들을 초기화 시켜준다
 */
export default createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
    }
`;
