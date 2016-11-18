import { Reducer } from 'redux';

export const scene: Reducer<{}> = (state = [{ type: 'sphere', position: { x: 0, y: 0, z: 0 }, color: { r: 255, g: 0, b: 0, a: 255 } }], action) => {
    switch (action.type) {
        default:
            return state;
    }
}