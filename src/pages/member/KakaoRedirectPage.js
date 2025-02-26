import React from "react";
import { useSearchParams } from "react-router-dom";

const KakaoRedirectPage = () => {
  const [searchParams] = useSearchParams();

  const authCode = searchParams.get("code");

  return (
    <div>
      <div>KakaoRedirectPage</div>
      <div>{authCode}</div>
    </div>
  );
};

export default KakaoRedirectPage;
