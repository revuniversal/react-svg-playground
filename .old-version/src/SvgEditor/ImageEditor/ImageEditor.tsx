import { observer } from 'mobx-react';
import * as React from 'react';
import { Path } from 'src/app/svg/elements';
import ISvgElement from 'src/app/svg/SvgElement';
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
              element={el}
              image={this.props.image}
              onClick={this.getSelectElement(el)}
            />
          ))}
        </ElementList>
      </ImageEditorLayout>
    );
  }

  private addPath = () => {
    const id = this.promptForId();
    this.props.image.addElement(new Path(id));
  };

  private promptForId = (): string => {
    const message = 'Provide an ID for the new path.';
    let id: string | null = '';
    let reason = '';
    let can = false;

    while (true) {
      id = prompt(reason ? reason + '\r\n' + message : message);
      [can, reason] = this.props.image.canAssignId(id);

      if (can) {
        return id as string;
      }
    }
  };

  private getSelectElement = (el: ISvgElement) => () =>
    this.props.image.select(el);
}

export default observer(ControlPanel);
