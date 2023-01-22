import { observer } from 'mobx-react';
import * as React from 'react';
import Coordinate from 'src/app/Coordinate';
import { Line } from 'src/app/svg/elements/Path';
import CoordinateInput from './CoordinateInput';

interface IProps {
  line: Line;
}

@observer
class LineForm extends React.Component<IProps> {
  public render() {
    return (
      <React.Fragment>
        <CoordinateInput
          displayName="To"
          coordinate={this.props.line.to}
          onCoordinateChange={this.setTo}
        />
      </React.Fragment>
    );
  }

  private setTo = (coordinate: Coordinate) => {
    this.props.line.to = coordinate;
  };
}

export default LineForm;
