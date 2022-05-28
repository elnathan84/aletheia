import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom';

export const Container = styled.div`
    background: #EDEDED;
    @media screen and (max-width: 768px){
        padding: 100px 0;
        
    }
`

export const Button = styled.button`
    text-align: center;
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#002855' : '#7D8597')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#fff' : '#010606')};
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#5C677D' : '#002855')};
    }
`

export const FormWrap = styled.div`
    height: 360px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 150px;

    @media screen and (max-width: 400px){
        height: auto;
    }
`
export const FormContent = styled.div`
    height: 100%;
    margin: auto;
    padding: .625rem;
    border: 10rem;
    @media screen and (max-width: 480px){
        padding: 10px;
        width: 100%;
    }
`
export const FormLoader = styled.div`
    height: 120px;
    margin: auto;
    width: auto;
    border: 10rem;
    @media screen and (max-width: 480px){
        padding: 10px;
    }
`
export const ContentTable = styled.div`
    height: 380px;
    margin: auto;
    border: 10rem;
    display: flex;
    justify-content: center;
    background-color: #EDEDED;
    @media screen and (max-width: 480px){
        display: flex;
        padding: 10px;
    }
`
export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #33415C;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`
