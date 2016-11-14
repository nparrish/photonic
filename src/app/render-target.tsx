import React from 'react';


export default class RenderTarget extends React.Component<{}, {}> {
    private width: number = 800;
    private height: number = 600;

    componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas() {
        const ctx: CanvasRenderingContext2D = (this.refs['canvas'] as any).getContext('2d');
        let imageData: ImageData = ctx.createImageData(this.width, this.height);
        for (let x: number = 0; x < this.width; ++x) {
            for (let y: number = 0; y < this.height; ++y) {
                let arrayCoords: number = (y * this.width + x) * 4;
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
            <canvas ref="canvas" width={this.width} height={this.height}/>
        );
    }
}
