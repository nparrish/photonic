import { Vector3d } from './vector';

export class Ray {
    public origin: Vector3d;
    public direction: Vector3d;

    constructor(origin: Vector3d, direction: Vector3d) {
        this.origin = origin;
        this.direction = direction;
    }
}
