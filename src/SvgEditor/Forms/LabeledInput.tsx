import * as React from 'react';
import styled from '../../styled-components';

const Input = styled.input`
  width: 80px;
  margin: 0;
`;

interface IProps {
  displayName: string;
  onChange: (args: any) => void;
  value: any;
  type: 'number' | 'text';
}

class LabeledInput extends React.Component<IProps> {
  public render() {
    return (
      <div>
        <div>
          <label>{this.props.displayName}</label>
        </div>
        <div>
          <Input
            type={this.props.type || 'text'}
            onChange={this.handleChange}
            value={this.props.value}
          />
        </div>
      </div>
    );
  }

  private handleChange = (event: React.ChangeEvent) => {
    this.props.onChange((event.target as HTMLInputElement).value);
  };
}

export default LabeledInput;
