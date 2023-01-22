import { observer } from 'mobx-react';
import * as React from 'react';
import Element from 'src/app/svg/SvgElement';
import SvgImage from 'src/app/svg/SvgImage';
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
  element: Element;
  image: SvgImage;
  active?: boolean;
  key: number;
  onClick: (el: Element) => void;
}

const ElementListItem = ({ element, image, onClick, active }: IProps) => (
  <Container active={active} onClick={onClick}>
    <LeftGutter>
      <Button onClick={image.deleteElement.bind(image, element)}>
        &times;
      </Button>
    </LeftGutter>
    <Main>
      {element.constructor == null
        ? 'ERROR'
        : `<${element.constructor.name}[${element.id}]>`}
    </Main>
    <RightGutter>
      <Button
        disabled={!element.canSortUp}
        onClick={image.sortElementUp.bind(image, element)}
      >
        &uarr;
      </Button>
      <br />
      <Button
        disabled={!element.canSortDown}
        onClick={image.sortElementDown.bind(image, element)}
      >
        &darr;
      </Button>
    </RightGutter>
  </Container>
);

export default observer(ElementListItem);
