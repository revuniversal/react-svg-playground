import * as React from 'react';
import Element from 'src/app/svg/SvgElement';
import styled from 'src/styled-components';
import Button from 'src/SvgEditor/Forms/Button';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  border-bottom: 1 px solid ${p => p.theme.panel.accent};
  background: ${(p: any) =>
    p.active ? p.theme.panel.activeBackground : p.theme.panel.background};

  &:hover {
    background: ${p => p.theme.panel.hoverBackground};
  }
`;

const LeftGutter = styled.div``;

const Main = styled.div``;

const RightGutter = styled.div``;

interface IProps {
  svgElement: Element;
  active?: boolean;
  key: number;
  onClick: (el: Element) => void;
}

const ElementListItem = ({ svgElement, active, onClick }: IProps) => (
  <Container active={active} onClick={onClick}>
    <LeftGutter>
      <Button>&times;</Button>
    </LeftGutter>
    <Main>
      {svgElement.constructor == null ? 'ERROR' : svgElement.constructor.name}
    </Main>
    <RightGutter>
      <Button>&uarr;</Button>
      <br />
      <Button>&darr;</Button>
    </RightGutter>
  </Container>
);

export default ElementListItem;
