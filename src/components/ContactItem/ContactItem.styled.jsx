import styled from "styled-components";

export const ContactCard = styled.li`
margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Name = styled.span`
font-size: ${p => p.theme.fontSizes.m};
font-weight: ${p => p.theme.fontWeights.bold};
margin-right: ${p => p.theme.space[3]}px;
`;

export const Number = styled.span`
margin-right:${p => p.theme.space[3]}px;
`;

export const Btn = styled.button`
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