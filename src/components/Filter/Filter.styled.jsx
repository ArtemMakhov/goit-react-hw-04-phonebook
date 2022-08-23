import styled from "styled-components";

export const Label = styled.label`
font-size:${p => p.theme.fontSizes.m};
font-weight:${p => p.theme.fontWeights.bold};
line-height: ${p => p.theme.lineHeights.heading};
`;

export const Input = styled.input`
display: block;
margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Text = styled.p`
margin-bottom: ${p => p.theme.space[3]}px;
`;