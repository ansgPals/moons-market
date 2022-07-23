import { css } from "@emotion/react";
export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 10px;
    font-family: "SUIT";
    @media (max-width: 1440px) {
      font-size: 9px;
    }
    @media (max-width: 1250px) {
      font-size: 8px;
    }
    @media (max-width: 992px) {
      font-size: 6px;
    }
  }
  // font-weight 100일 때 사용
  @font-face {
    font-family: "SUIT100";
    src: url(/fonts/SUIT-Thin.woff2);
  }
  // font-weight 200일 때 사용
  @font-face {
    font-family: "SUIT200";
    src: url(/fonts/SUIT-ExtraLight.woff2);
  }
  // font-weight 300일 때 사용
  @font-face {
    font-family: "SUIT300";
    src: url(/fonts/SUIT-Light.woff2);
  }
  // font-weight 400일 때 사용
  @font-face {
    font-family: "SUIT";
    src: url(/fonts/SUIT-Regular.woff2);
  }
  // font-weight 500일 때 사용
  @font-face {
    font-family: "SUIT500";
    src: url(/fonts/SUIT-Medium.woff2);
  }
  // font-weight 600일 때 사용
  @font-face {
    font-family: "SUIT600";
    src: url(/fonts/SUIT-SemiBold.woff2);
  }
  // font-weight 700일 때 사용
  @font-face {
    font-family: "SUIT700";
    src: url(/fonts/SUIT-Bold.woff2);
  }
  // font-weight 800일 때 사용
  @font-face {
    font-family: "SUIT800";
    src: url(/fonts/SUIT-ExtraBold.woff2);
  }
  // font-weight 900일 때 사용
  @font-face {
    font-family: "SUIT900";
    src: url(/fonts/SUIT-Heavy.woff2);
  }
`;
