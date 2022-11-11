import styled from "styled-components";

export const NavWrapp = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavThumb = styled.div`
    display: inline-block;

    font-size: 18px;
    font-weight: 500;
    line-height: 1.2;
    margin-right: 30px;
    padding: 15px 0;

    &:hover{
      color: #1083eb8a;  
    }
    &:focus{
        color: #1083eb8a; 
    }
`;



