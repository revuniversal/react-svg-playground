import { observer } from 'mobx-react';
import * as React from 'react';
import Image from 'src/app/svg/SvgImage';
import ElementEditor from './ElementEditor';
import ImageEditor from './ImageEditor/ImageEditor';
import Preview from './Preview/Preview';
import SvgEditorLayout, {
  ControlPanel,
  ElementEditorPanel,
  PreviewPanel
} from './SvgEditorLayout';

interface IProps {
  image: Image;
}

const SvgEditor = ({ image }: IProps) => (
  <SvgEditorLayout>
    <ControlPanel>
      <ImageEditor image={image} />
    </ControlPanel>
    <PreviewPanel>
      <Preview image={image} />
    </PreviewPanel>
    <ElementEditorPanel>
      <ElementEditor element={image.selectedElement} />
    </ElementEditorPanel>
  </SvgEditorLayout>
);

export default observer(SvgEditor);
