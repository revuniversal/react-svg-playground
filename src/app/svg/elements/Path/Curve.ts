import { observable } from 'mobx';
import Coordinate from 'src/app/Coordinate';
import Command from './Command';

class Curve extends Command {
  @observable public to: Coordinate = new Coordinate(0, 0);
  @observable public handle1: Coordinate = new Coordinate(0, 0);
  @observable public handle2: Coordinate = new Coordinate(0, 0);
}

export default Curve;
