import { observer } from 'mobx-react';
import * as React from 'react';
import Path, { Command } from 'src/app/svg/elements/Path';
import Button from 'src/SvgEditor/Forms/Button';
import CommandForm from 'src/SvgEditor/Forms/CommandForm';
import EditorLayout, {
  CommandsBody,
  CommandsHeader,
  PropertiesBody,
  PropertiesHeader
} from './PathEditorLayout';
import PathProperties from './PathProperties';

interface IProps {
  currentPath: Path;
}

@observer
class Editor extends React.Component<IProps> {
  public render() {
    return (
      <EditorLayout>
        <PropertiesHeader>
          <h3>Path Properties</h3>
        </PropertiesHeader>
        <PropertiesBody>
          <PathProperties path={this.props.currentPath} />
        </PropertiesBody>
        <CommandsHeader>
          <h3>Path Commands</h3>
          <Button
            type="button"
            onClick={this.props.currentPath.addCurve}
            style={{ margin: '4px 13px' }}
          >
            + Add Curve
          </Button>
          <Button type="button" onClick={this.props.currentPath.addLine}>
            + Add Line
          </Button>
        </CommandsHeader>
        <CommandsBody>
          {this.props.currentPath.commands.map((command, i) => (
            <CommandForm
              key={i}
              index={i}
              command={command}
              onSortUp={this.sortCommandUpFactory(command)}
              onSortDown={this.sortCommandDownFactory(command)}
              onDelete={this.deleteCommandFactory(command)}
            />
          ))}
        </CommandsBody>
      </EditorLayout>
    );
  }

  private sortCommandUpFactory = (command: Command) => {
    return () => this.props.currentPath.sortCommandUp(command);
  };
  private sortCommandDownFactory = (command: Command) => {
    return () => this.props.currentPath.sortCommandDown(command);
  };
  private deleteCommandFactory = (command: Command) => {
    return () => this.props.currentPath.deleteCommand(command);
  };
}

export default Editor;
