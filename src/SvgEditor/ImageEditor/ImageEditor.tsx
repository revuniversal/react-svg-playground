import { observer } from 'mobx-react';
import * as React from 'react';
import { Path } from 'src/app/svg/elements';
import SvgImage from 'src/app/svg/SvgImage';
import Button from 'src/SvgEditor/Forms/Button';
import ElementListItem from './ElementListItem';
import ImageEditorLayout, {
  ElementList,
  ImagePropertiesPanel
} from './ImageEditorLayout';

interface IProps {
  image: SvgImage;
}

class ControlPanel extends React.Component<IProps> {
  public render() {
    return (
      <ImageEditorLayout>
        <ImagePropertiesPanel>
          <Button onClick={this.addPath}>+ Add Path</Button>
        </ImagePropertiesPanel>
        <ElementList>
          {this.props.image.elements.map((el, i) => (
            <ElementListItem
              key={i}
              svgElement={el}
              active={this.props.image.selectedElement === el}
              // tslint:disable-next-line jsx-no-lambda
              onClick={() => this.props.image.select(el)}
            />
          ))}
        </ElementList>
      </ImageEditorLayout>
    );
  }

  private addPath = () => this.props.image.addElement(new Path());
}

export default observer(ControlPanel);
