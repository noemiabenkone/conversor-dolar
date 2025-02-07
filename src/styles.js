import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;
export const Title = styled.h1`
    
    margin-bottom: 20px;
    font-size: 28px;
    color: #333;
`;
export const Converter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 350px;

  @media (max-width: 400px) {
    flex-direction: column;
    gap: 10px;
  }
`;
export const Input = styled.input`
  padding: 12px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
`;
export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;