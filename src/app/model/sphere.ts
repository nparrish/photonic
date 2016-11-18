import { ISceneObject } from './scene-object';
import { Ray } from './ray';
import { Vector3d } from './vector';
import { Color } from './color';
import { solveQuadratic } from '../math';

export class Sphere implements ISceneObject {
    public color: Color;
    public position: Vector3d;
    public radius: number;
    public radiusSq: number;

    constructor(position: Vector3d, radius: number, color: Color) {
        this.position = position;
        this.radius = radius;
        this.radiusSq = radius * radius;
        this.color = color;
    }

    public intersect(ray: Ray): number|boolean {
        // analytic solution
        let t0: number;
        let t1: number;
        let L: Vector3d = ray.origin.minus(this.position);
        let a: number = ray.direction.dotProduct(ray.direction);
        let b: number = 2 * ray.direction.dotProduct(L);
        let c: number = L.dotProduct(L) - this.radiusSq;
        let results = solveQuadratic(a, b, c)
        if (!results) {
            return false;
        }
        else {
            t0 = results['x0'];
            t1 = results['x1'];
        }

        if (t0 > t1) {
            [t0, t1] = [t1, t0];
        }

        if (t0 < 0) {
            t0 = t1; // if t0 is negative, let's use t1 instead
            if (t0 < 0) {
                return false; // both t0 and t1 are negative
            }
        }

        let t = t0;

        return t;
    }

}
