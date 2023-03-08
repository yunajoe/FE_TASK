import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  width: 600px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 4px;
  background: white;
`;

function TodoTemplate({ children }) {
  return (
    <>
      <TodoTemplateBlock>{children}</TodoTemplateBlock>
    </>
  );
}

export default TodoTemplate;
