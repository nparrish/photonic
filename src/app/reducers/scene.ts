import { Reducer } from 'redux';

export const scene: Reducer<{}> = (state = [
    {
        type: 'sphere', position: { x: 0, y: 0, z: 0 }, color: { r: 255, g: 0, b: 0, a: 255 }
    },
    {
        type: 'camera', position: { x: 0, y: 0, z: -40 }, direction: { x: 0, y: 0, z: 1 }, up: { x: 0, y: 1, z: 0 }
    }], action) => {
    switch (action.type) {
        default:
            return state;
    }
}
