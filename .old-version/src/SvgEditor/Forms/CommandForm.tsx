import { observer } from 'mobx-react';
import * as React from 'react';
import { Command, Curve, Line } from 'src/app/svg/elements/Path';
import styled from 'src/styled-components';
import Button from './Button';
import CurveForm from './CurveForm';
import LineForm from './LineForm';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4px;

  &:not(last-child) {
    user-select: none;
    border-bottom: 1px solid ${p => p.theme.panel.accent};
  }

  > div {
    margin: 0 4px;

    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;

interface IProps {
  index: number;
  command: Command;
  onDelete: () => void;
  onSortUp: () => void;
  onSortDown: () => void;
}

const CommandForm = observer(
  ({ command, onSortUp, onSortDown, onDelete }: IProps) => (
    <Container>
      <div>
        <Button onClick={onDelete}>&times;</Button>
        <span> | </span>
        <Button disabled={!command.canSortUp} onClick={onSortUp}>
          &uarr;
        </Button>
        <Button disabled={!command.canSortDown} onClick={onSortDown}>
          &darr;
        </Button>
      </div>
      <div style={{ width: '120px' }}>
        <label>{command.constructor.name.toUpperCase()}</label>
      </div>

      {(() => {
        switch (command.constructor) {
          case Curve:
            return <CurveForm curve={command as Curve} />;
          case Line:
            return <LineForm line={command as Line} />;
          default:
            return <span>{JSON.stringify(command)}</span>;
        }
      })()}
    </Container>
  )
);

export default CommandForm;
