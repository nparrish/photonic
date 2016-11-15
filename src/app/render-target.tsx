import React from 'react';
import Dimensions from 'react-dimensions';

export class RenderTarget extends React.Component<{ containerWidth: number, containerHeight: number }, {}> {
    componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas() {
        const ctx: CanvasRenderingContext2D = (this.refs['canvas'] as any).getContext('2d');
        let imageData: ImageData = ctx.createImageData(this.props.containerWidth, this.props.containerHeight);
        for (let x: number = 0; x < this.props.containerWidth; ++x) {
            for (let y: number = 0; y < this.props.containerHeight; ++y) {
                let arrayCoords: number = (y * this.props.containerWidth + x) * 4;
                imageData.data[arrayCoords] = 255;
                imageData.data[arrayCoords+1] = 0;
                imageData.data[arrayCoords+2] = 0;
                imageData.data[arrayCoords+3] = 255;
            }
        }

        ctx.putImageData(imageData, 0, 0);
    }

    render() {
        return (
            <canvas ref="canvas" style={{ width: "100%", height: "100%" }} />
        );
    }
}

export default Dimensions()(RenderTarget);