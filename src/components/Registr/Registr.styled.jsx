import styled from "styled-components";

export const RegistrContainer = styled.section`
    padding: 50px 0;
`
export const RegistrWrapp = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 30px;
`;
export const RegistrForm = styled.form`
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
`
export const RegistrLabel = styled.label`
    font-size: 16px;
    line-height: 1.2;
    color: #ffffff;
    font-weight: 500;
`;
export const RegistrInput = styled.input`
   width: 280px;
    height: 20px;
    margin-left: 20px;
    outline: none;
    order: 1px solid #1083eb8a;
    border-radius: 5px; 
    padding: 3px 5px;
`;
export const RegistrBtn = styled.button`
    padding: 5px 15px;
    border: 1px solid #19013188;
    border-radius: 5px;
    background-color: #faf2ff;
    color: #220153ab;
    margin: 30px auto;

    &:hover{
        background-color: #1083eb8a;
        color: #ffffff;
        }
    &:focus {
        background-color: #1083eb8a;
        color: #ffffff;
        }
`;


