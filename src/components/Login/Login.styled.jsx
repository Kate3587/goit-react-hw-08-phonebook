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
    font-size: 18px;
    line-height: 1.2;
    color: #ffffff;
    font-weight: 500;
`
export const LoginInput = styled.input`
    width: 230px;
    height: 20px;
    margin-left: 20px;
    outline: none;
    border: 1px solid #1083eb8a;
    border-radius: 5px;
`



// .inputLogin:hover,
// .inputLogin:focus {
//   background-color: #1083eb8a;
// }
// .inputLogin:hover .loginForm,
// .inputLogin:focus .loginForm {
//   color: #1083eb8a;
// }