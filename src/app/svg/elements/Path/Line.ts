import { observable } from 'mobx';
import Coordinate from 'src/app/Coordinate';
import Command from './Command';

class Line extends Command {
  @observable public to: Coordinate = new Coordinate(0, 0);
}

export default Line;
