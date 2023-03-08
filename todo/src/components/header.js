// src/components/header.js

import React, { useState, useCallback } from "react";
// useCallback ==> 함수를 매번 새로 생성하는 것이 아니라 디펜던시 리스트가 변경될 때만 함수를 생성

function Header({ onChange }) {
  const [text, setText] = useState("");

  // const handleChange = (e) => {
  //   setText(e.target.value);
  // };

  const handleChange = useCallback((e) => {
    setText(e.target.value);
    // console.log(text); >> input에 값만 넣어도 console에 값 찍힘
  }, []);

  const handleClick = () => {
    if (text === "") {
      return;
    }
    onChange(text);
    setText(""); // 추가 후 input 을 비워주기 위해 state 를 초기화 합니다.
  };

  return (
    <div>
      <h1>Things..to..do</h1>
      <input
        type="text"
        onChange={handleChange}
        value={text}
        placeholder="add_things_to_do"
      />
      <button onClick={handleClick}>추가</button>
    </div>
  );
}

export default Header;
