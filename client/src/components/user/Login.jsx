import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import firebase from "../../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const LoginFunc = async (e) => {
    e.preventDefault();

    if(!(email && password)){
      return alert("모든 값을 채워주세요.")
    }
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      alert("로그인이 완료되었습니다.")
      navigate("/")
    } catch(err) {
      console.log(err)
      setErrorMsg("이메일과 비밀번호를 다시 한번 확인해주세요.")
    }
  }
  return (
    <section className="login_wrap">
      <div className="login_header">
        <h3>Login</h3>
        <p>로그인을 해주세요!</p>
      </div>
      <div className="login_form">
        <form action="#" name="#" method="post">
          <fieldset>
            <legend className="blind">로그인 영역</legend>
            <div>
              <label htmlFor="youEmail" className="required blind">
                이메일
              </label>
              <input
                type="email"
                id="yourEmail"
                name="yourEmail"
                placeholder="이메일"
                className="input_style"
                autoComplete="off"
                required
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </div>
            <div>
              <label htmlFor="youPass" className="required blind">
                비밀번호
              </label>
              <input
                type="paddword"
                id="youPass"
                name="youPass"
                placeholder="비밀번호"
                className="input_style"
                autoComplete="off"
                required
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </div>
            <div>{errorMsg !== "" && <p>{errorMsg}</p>}</div>
            <button
              type="submit"
              onClick={(e) => LoginFunc(e)}
              className="btn_style2 mt30"
            >
              로그인
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Login;
