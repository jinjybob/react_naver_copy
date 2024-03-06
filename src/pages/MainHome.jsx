import LoginButton from "../components/Login/LoginButton";
import Advertisement from "../components/Advertisement/Advertisement";
import { useEffect, useState } from "react";
import Session from "react-session-api";

export default function MainHome() {
  const [loginText, setLoginText] = useState();
  const member = Session.get("member");
  const [page, setPage] = useState(<LoginButton></LoginButton>);
  function logout() {
    Session.set("member","bad");
    setPage(<LoginButton></LoginButton>)
  }
  useEffect(() => {
    if (member === "good") {
      setLoginText("김진현님 환영합니다.");
    }
  }, [member]);

  useEffect(() => {
    if (loginText) {
      setPage(
        <div style={{ height: "150px" }}>
          <p>{loginText}</p>
          <button onClick={logout}>로그아웃</button>
        </div>
      );
    } else {
      setPage(<LoginButton></LoginButton>);
    }
  }, [loginText]);

  
  return (
    <>
      <main>
        <div id="left_section">
          <Advertisement></Advertisement>
        </div>
        <div id="right_section">{page}</div>
      </main>
    </>
  );
}
