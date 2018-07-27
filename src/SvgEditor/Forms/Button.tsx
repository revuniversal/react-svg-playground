import styled from '../../styled-components';

const Button = styled.a`
  user-select: none;
  padding: 1px 5px;
  margin: 1px;
  border: 1px solid
    ${(p: any) =>
      p.disabled ? p.theme.panel.passiveAccent : p.theme.panel.accent};
  text-decoration: none;
  cursor: pointer;
  color: ${p =>
    p.disabled ? p.theme.panel.passiveAccent : p.theme.panel.accent};
  &:hover {
    background: ${p =>
      p.disabled ? p.theme.panel.background : p.theme.panel.activeBackground};
    color: ${p =>
      p.disabled ? p.theme.panel.passiveAccent : p.theme.panel.background};
  }
`;

export default Button;
