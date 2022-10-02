import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Main = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const login = async (id: string, password: string) => {
    const response = await axios.post("http://localhost:8000/login", {
      login_id: id,
      login_password: password,
    });

    console.log(response);
  };

  const getIndex = async () => {
    const response = await axios.get("http://localhost:8000/");
    console.log(response);
  };

  const handleIdChange = (id: string) => {
    setId(id);
  };

  const handlePwChange = (pw: string) => {
    setPassword(pw);
  };
  return (
    <MainWrapper>
      <InputWrapper>
        <Row>
          <Label>id</Label>
          <Input
            type="text"
            onChange={(e) => {
              handleIdChange(e.target.value);
            }}
          />
        </Row>
        <Row>
          <Label>pw</Label>
          <Input
            type="text"
            onChange={(e) => {
              handlePwChange(e.target.value);
            }}
          />
        </Row>
        <Row>
          <Button
            onClick={() => {
              login(id, password);
            }}
          >
            login
          </Button>
        </Row>
        <Row>
          <Button
            onClick={() => {
              getIndex();
            }}
          >
            gettest
          </Button>
        </Row>
      </InputWrapper>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
`;

const Input = styled.input``;
const Label = styled.label``;
const Button = styled.button``;
