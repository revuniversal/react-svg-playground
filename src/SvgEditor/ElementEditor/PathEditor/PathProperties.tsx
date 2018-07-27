import { Color } from 'csstype';
import { observer } from 'mobx-react';
import * as React from 'react';
import Coordinate from 'src/app/Coordinate';
import Path from 'src/app/svg/elements/Path';
import styled from 'src/styled-components';
import CoordinateInput from 'src/SvgEditor/Forms/CoordinateInput';
import LabeledInput from 'src/SvgEditor/Forms/LabeledInput';

const FormField = styled.div`
  margin: 4px;
`;

interface IProps {
  path: Path;
}

@observer
class PathProperties extends React.Component<IProps> {
  public render() {
    return (
      <React.Fragment>
        <FormField>
          <CoordinateInput
            displayName="Starting Point"
            coordinate={this.props.path.start}
            onCoordinateChange={this.setStart}
          />
        </FormField>
        <FormField>
          <LabeledInput
            type="number"
            displayName="Stroke Width"
            value={this.props.path.strokeWidth}
            onChange={this.setStrokeWidth}
          />
        </FormField>
        <FormField>
          <LabeledInput
            type="text"
            displayName="Stroke"
            value={this.props.path.stroke}
            onChange={this.setStroke}
          />
        </FormField>
        <FormField>
          <LabeledInput
            type="text"
            displayName="Fill"
            value={this.props.path.fill}
            onChange={this.setFill}
          />
        </FormField>
        <FormField>
          <label>
            <input
              type="checkbox"
              checked={this.props.path.autoClose}
              onChange={this.toggleAutoClose}
            />
            Autoclose
          </label>
        </FormField>
      </React.Fragment>
    );
  }

  private setStart = (coordinate: Coordinate) => {
    this.props.path.start = coordinate;
  };
  private setStrokeWidth = (strokeWidth: number) => {
    this.props.path.strokeWidth = strokeWidth;
  };
  private setStroke = (stroke: Color) => {
    this.props.path.stroke = stroke;
  };
  private setFill = (fill: Color) => {
    this.props.path.fill = fill;
  };
  private toggleAutoClose = () => {
    this.props.path.autoClose = !this.props.path.autoClose;
  };
}

export default PathProperties;
