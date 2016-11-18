
export class Vector3d {
    public x: number;
    public y: number;
    public z: number;

    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public minus(other: Vector3d): Vector3d {
        return new Vector3d(this.x - other.x, this.y - other.y, this.z - other.z);
    }

    public dotProduct(other: Vector3d): number {
        return this.x * other.x + this.y * other.y + this.z * other.z;
    }
}
