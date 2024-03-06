import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function LoginButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  

  return (
    <div id="login_section">
      <ul id="login_list">
        <li>네이버를 더 안전하고 편리하게 이용하세요</li>
        <li>
          <button id="login_move_button" onClick={handleClick}>
            NAVER 로그인
          </button>
        </li>
        <li>아이디 찾기 | 비밀번호 찾기 | 회원가입</li>
      </ul>
    </div>
  );
}
