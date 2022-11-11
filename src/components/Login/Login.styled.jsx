import styled from "styled-components";

export const LoginSection = styled.section`
    padding: 50px 0;
`;
export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 30px;
`;
export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;

    background-color: #a7d2f92b;
    border-radius: 5px;
    padding-top: 45px;
    text-align: center;
    gap: 20px;
    width: 400px;
    box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.12),
    4px 7px 7px rgba(252, 240, 240, 0.06), 2px 6px 8px rgba(255, 247, 247, 0.16);
    transform: scale(1.02);
`;
export const LoginLabel = styled.label`
    font-size: 16px;
    line-height: 1.2;
    color: #ffffff;
    font-weight: 500;
`;
export const LoginInput = styled.input`
    width: 280px;
    height: 20px;
    margin-left: 20px;
    outline: none;
    border: 1px solid #1085eb9c;
    border-radius: 5px;
    padding: 3px 5px;

    &:hover{
    background-color: #5510eb89;
    }
    &:focus {
    background-color: #5510eb89;
    }

`;

export const LoginBtn = styled.button`
    padding: 5px 15px;
    border: 1px solid #19013188;
    border-radius: 5px;
    background-color: #faf2ff;
    color: #220153ab;
    margin: 30px auto;

    &:hover{
        background-color: #379bf389;
        color: #ffffff;
        }
    &:focus {
        background-color: #1083eb8a;
        color: #ffffff;
        }
`;
