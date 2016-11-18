import { Ray } from './ray';
import { Vector3d } from './vector';

export interface ISceneObject {
    intersect(ray: Ray): any;
}
