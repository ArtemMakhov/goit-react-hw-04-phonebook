import styled from "styled-components";

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
width: 400px;
margin: ${p => p.theme.space[4]}px auto;
padding: ${p => p.theme.space[4]}px;
border:${p => p.theme.borders.normal};
`

export const Label = styled.label`
font-size:${p => p.theme.fontSizes.m};
font-weight:${p => p.theme.fontWeights.bold};
line-height: ${p => p.theme.lineHeights.heading};
`;

export const Input = styled.input`
display: block;
margin-top: ${p => p.theme.space[2]}px;
margin-bottom: ${p => p.theme.space[5]}px;
`;


export const Btn = styled.button`
width: 120px;
padding: ${p => p.theme.space[3]}px;
border: ${p => p.theme.borders.none};
border-radius: ${p => p.theme.radii.sm};
cursor: pointer;

:hover, 
:focus  {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.primary};
}
`;


