import { styled } from "styled-components";

const Cores = {
    black: "#000",
    white: "#fff"
}

export const Cabecalho = styled.header`
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
    height: 200px;
    gap: 80px;
    background-color: ${Cores.black};
`

export const ParagraphTitle = styled.a`
    color: ${Cores.white};
    text-decoration: none;
    font-family: "Poetsen One", sans-serif;
    font-weight: 600;
    font-size: 16pt;
`

export const ParagraphFooter = styled.a`
    color: ${Cores.white};
    text-decoration: none;
    font-family: "Poetsen One", sans-serif;
    font-weight: 600;
    font-size: 14pt;
`

export const a = styled.div`
    width: 5px;
    height: 12px;
`

export const FooterDiv = styled.footer`
    color: ${Cores.white};
    background-color: ${Cores.black};
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    padding: 8px 0;
    height: auto;
    justify-self: end;
`

export const LinksFooter = styled.div`
    display: flex;
    gap: 50px;
    font-size: 12pt;
    align-items: center;
`

export const SpotFi = styled.div`
    position: absolute;
    align-self: flex-end;
    padding-right: 40px;
    padding-top: 20px;
`