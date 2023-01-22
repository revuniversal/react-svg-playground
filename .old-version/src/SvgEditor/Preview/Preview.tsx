import { observer } from 'mobx-react';
import * as React from 'react';
import Image from 'src/app/svg/SvgImage';
import GraphicView from './GraphicView';
import PreviewLayout, { GraphicPanel, SourcePanel } from './PreviewLayout';
import SourceView from './SourceView';

interface IProps {
  image: Image;
}

class Preview extends React.Component<IProps> {
  public render() {
    return (
      <PreviewLayout>
        <SourcePanel>
          <SourceView markup={this.props.image.xml} />
        </SourcePanel>
        <GraphicPanel>
          <GraphicView image={this.props.image} />
        </GraphicPanel>
      </PreviewLayout>
    );
  }
}

export default observer(Preview);
