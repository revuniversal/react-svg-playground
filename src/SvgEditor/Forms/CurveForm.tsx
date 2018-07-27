import { observer } from 'mobx-react';
import * as React from 'react';
import Coordinate from 'src/app/Coordinate';
import { Curve } from 'src/app/svg/elements/Path';
import CoordinateInput from './CoordinateInput';

interface IProps {
  curve: Curve;
}

@observer
class CurveForm extends React.Component<IProps> {
  public render() {
    return (
      <React.Fragment>
        <CoordinateInput
          displayName="To"
          coordinate={this.props.curve.to}
          onCoordinateChange={this.setTo}
        />
        <CoordinateInput
          displayName="Handle 1"
          coordinate={this.props.curve.handle1}
          onCoordinateChange={this.setHandle1}
        />
        <CoordinateInput
          displayName="Handle 2"
          coordinate={this.props.curve.handle2}
          onCoordinateChange={this.setHandle2}
        />
      </React.Fragment>
    );
  }

  private setTo = (coordinate: Coordinate) => {
    this.props.curve.to = coordinate;
  };
  private setHandle1 = (coordinate: Coordinate) => {
    this.props.curve.handle1 = coordinate;
  };
  private setHandle2 = (coordinate: Coordinate) => {
    this.props.curve.handle2 = coordinate;
  };
}

export default CurveForm;
