import styled from "styled-components";

export const ItemName = styled.div`
    margin-bottom: 2px;
    width: 250px;
    font-size: 14px;
    font-weight: 500;
    color: #fefefe;

    /* margin-left: auto;
    margin-right: auto; */

    &:hover,
    &:focus{
        color: #3f0968;
    }
`;

export const ContactBtn = styled.div`   
    width: 50px;
    text-align: center;
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 1px;
    font-size: 12px;
    background-color: #aea7f6;
    margin-right: auto;
    margin-left: 60px;

    &:hover,
    &:focus{
        background-color: #470e73;
        color: #e6e5f7;
    }
`;