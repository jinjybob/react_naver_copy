import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Session from "react-session-api";

export default function LoginPage() {
  const navigate = useNavigate();
  const [userid, setUserid] = useState("");
  const [passwd, setPasswd] = useState("");
  function changeId(e) {
    setUserid(e.target.value);
  }
  function changePasswd(e) {
    setPasswd(e.target.value);
  }

  function handleLogin() {
    if (userid != "netcruz") {
      return alert("없는 아이디입니다.");
    }
    if (passwd != "changeme") {
      return alert("비밀번호가 다릅니다.");
    }
    Session.set("member", "good");
    navigate(-1); 
  }

  return (
    <div id="login_section">
      <ol id="login_list">
        <li>
          <input
            type="text"
            className="login_input"
            name="userid"
            placeholder="아이디"
            onChange={changeId}
          />
        </li>
        <li>
          <input
            type="password"
            className="login_input"
            name="passwd"
            placeholder="비밀번호"
            onChange={changePasswd}
          />
        </li>
        <li>
          <button id="login_button" onClick={handleLogin}>
            로그인
          </button>
        </li>
      </ol>
    </div>
  );
}
