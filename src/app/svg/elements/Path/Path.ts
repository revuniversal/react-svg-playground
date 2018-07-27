import { Color } from 'csstype';
import { action, observable } from 'mobx';
import Coordinate from 'src/app/Coordinate';
import { sortDown, sortUp } from 'src/app/ISortable';
import ISvgElement from '../../SvgElement';
import Command from './Command';
import Curve from './Curve';
import Line from './Line';

class Path implements ISvgElement {
  @observable public canSortDown: boolean;
  @observable public canSortUp: boolean;
  @observable public commands: Command[] = [];
  @observable public start: Coordinate = new Coordinate(0, 0);
  @observable public autoClose: boolean = false;
  @observable public strokeWidth: number = 1;
  @observable public stroke: Color = '#000000';
  @observable public fill: Color = 'blue';

  @action
  public deleteCommand = (target: Command) => {
    const index = this.commands.indexOf(target);
    this.commands.splice(index, 1);
    this.setSortability(0);
    this.setSortability(this.commands.length - 1);
  };

  @action
  public addLine = () => {
    this.addCommand(new Line());
  };

  @action
  public addCurve = () => {
    this.addCommand(new Curve());
  };

  @action
  public addCommand = (command: Command) => {
    this.commands.push(command);
    this.setSortability(0);
    this.setSortability(this.commands.length - 1);
  };

  // TODO: pass the command directly to sort/remove methods.

  @action
  public sortCommandUp = (target: Command) => {
    sortUp(this.commands, target);
  };

  @action
  public sortCommandDown = (target: Command) => {
    sortDown(this.commands, target);
  };

  public toData = (): string => {
    const start = `m ${this.start.x} ${this.start.y}`;
    const cmds = this.commands.map(commandToData).join(' ');
    const formattedCmds = cmds ? ' ' + cmds : '';
    const close = this.autoClose ? ' Z' : '';

    return start + formattedCmds + close;

    function curveToData(curve: Curve) {
      const h1 = curve.handle1;
      const h2 = curve.handle2;
      const to = curve.to;
      return `c ${h1.x} ${h1.y} ${h2.x} ${h2.y} ${to.x} ${to.y}`;
    }
    function lineToData(l: Line) {
      return `l ${l.to.x} ${l.to.y}`;
    }
    function commandToData(command: Command) {
      switch (command.constructor) {
        case Curve:
          return curveToData(command as Curve);
        case Line:
          return lineToData(command as Line);
        default:
          throw new Error(
            `Unexpected path command type: ${command.constructor}`
          );
      }
    }
  };

  public get xml(): string {
    return `<path 
              d="${this.toData()}"
              stroke="${this.stroke}"
              fill="${this.fill}"
              strokeWidth="${this.strokeWidth}"
            />`;
  }

  private setSortability = (index: number) => {
    if (this.commands[index] != null) {
      const target = this.commands[index];
      target.canSortUp = index > 0;
      target.canSortDown = index < this.commands.length - 1;
    }
  };
}

export default Path;
