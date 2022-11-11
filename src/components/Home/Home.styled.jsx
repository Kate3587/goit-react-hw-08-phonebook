import styled from "styled-components";

export const HomeContainer = styled.section`
    padding: 50px 0;
`;
export const HomeWrapp = styled.div`
    padding: 0 30px;
`;
export const HomeMainTitle = styled.h1`
    position: relative;
    margin: 0;
    font-weight: 800;
    font-size: 60px;
    line-height: 1.9;
    color: #ffffff;
`;
export const HomeBtn = styled.button`
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate (-50%, 0%);

    font-size: 35px;
    font-weight: 500;
    padding: 20px 40px;
    background-color: transparent;
    border-radius: 5px;
    color: #1083eb8a;
    border: 2px solid #1083eb8a;

    &:hover{
        background-color: #1083eb8a;
        color: #ffffff;
    }
    &:focus{
        background-color: #1083eb8a;
        color: #ffffff;
    }
`;

export const HomeList = styled.ul`
    gap: 20px;
    display: flex;
    flex-direction: column;
`;

export const HomeModal = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #357cbdfa;
    border-radius: 5px;
    padding: 20px;
    width: 400px;
    top: 0;

    transform: translate(422px, 60%);
    box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.12),
    4px 7px 7px rgba(252, 240, 240, 0.06), 2px 6px 8px rgba(255, 247, 247, 0.16);
  
`;