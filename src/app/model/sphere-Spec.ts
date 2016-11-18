import { Sphere } from './sphere';
import { Ray } from './ray';
import { Vector3d } from './vector';
import { Color } from './color';

describe('Sphere tests', () => {
    it('supports basic sphere construction', () => {
        let sphere: Sphere = new Sphere(new Vector3d(0, 0, 0), 5, new Color(0, 255, 0, 255));
        expect(sphere).not.toBeNull();
        expect(sphere.position.x).toBe(0);
        expect(sphere.color.g).toBe(255);
    });

    it('supports basic sphere intersection', () => {
        let sphere: Sphere = new Sphere(new Vector3d(0, 0, 0), 5, new Color(0, 255, 0, 255));
        let ray: Ray = new Ray(new Vector3d(0, 0, -10), new Vector3d(0, 0, 1));
        expect(sphere.intersect(ray)).toBe(5);
        ray = new Ray(new Vector3d(0, 0, -20), new Vector3d(0, 0, 1));
        expect(sphere.intersect(ray)).toBe(15);
    })
})
