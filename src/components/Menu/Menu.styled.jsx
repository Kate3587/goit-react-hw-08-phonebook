import styled from "styled-components";

export const MenuContainer = styled.div`
    display: inline-flex;
`;
export const MessageText = styled.span`
     margin-right: 20px;

  font-family: 'Helvetica Neue', sans-serif;
  font-size: 22;
  font-weight: 600;
  line-height: 1.3;

  color: #2258adac;
`;
export const MenuBtn = styled.button`
    padding: 6px 15px;
  border: 1px solid #1083eb8a;
  border-radius: 5px;
  background-color: transparent;
  color: #1083eb8a;

  &:hover{
  background-color: #1083eb8a;
  color: #ffffff;
    }
    &:focus{
  background-color: #1083eb8a;
  color: #ffffff;
    }
`;
