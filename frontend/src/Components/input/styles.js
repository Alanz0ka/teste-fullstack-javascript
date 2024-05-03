import styled from "styled-components";

export const InputCustomizado = styled.input`
    color: #fff;
    font-size: 20px;
    background-color: #121212;
    border: 2px solid ${props => props.error ? '#FF0000' : 'transparent'};
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 16px 20px;
    width: 100%;
    
    &::placeholder {
        color: #fff;
        font-size: 12px;
        opacity: 0.7;
    }
    &:focus {
        outline: none;
        border-color: #fff;
    }

`