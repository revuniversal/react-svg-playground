import { observer } from 'mobx-react';
import * as React from 'react';
import Coordinate from 'src/app/Coordinate';
import styled from 'src/styled-components';

const Container = styled.div`
  margin-right: 14px;
  &:last-child {
    margin-right: 0;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-right: 0;

  input {
    width: 40px;
    margin: 0;
  }

  label:not(first-child) {
    margin-left: 4px;
  }
`;

type Axis = 'x' | 'y';

interface IProps {
  coordinate: Coordinate;
  displayName: string;
  onCoordinateChange: (coordinate: Coordinate) => void;
}

@observer
class CoordinateInput extends React.Component<IProps> {
  public render() {
    const { displayName, coordinate } = this.props;
    return (
      <Container>
        <Row>
          <label>{displayName}</label>
        </Row>
        <Row>
          <div>
            <label>x</label>
            <input
              type="number"
              onChange={this.handleChange('x')}
              value={coordinate.x}
            />
          </div>
          <div>
            <label>y</label>
            <input
              type="number"
              onChange={this.handleChange('y')}
              value={coordinate.y}
            />
          </div>
        </Row>
      </Container>
    );
  }

  private handleChange = (axis: Axis) => (event: React.ChangeEvent) => {
    const value = parseInt((event.target as HTMLInputElement).value, 10);
    this.props.onCoordinateChange({
      ...this.props.coordinate,
      [axis]: value
    });
  };
}

export default CoordinateInput;
