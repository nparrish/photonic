import * as React from 'react';
import * as Dimensions from 'react-dimensions';
import { connect } from 'react-redux';


interface IRenderTargetProps {
    containerWidth: number;
    containerHeight: number
}

class RenderTarget extends React.Component<IRenderTargetProps, {}> {
    componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas() {
        if (this.props.containerWidth && this.props.containerHeight) {
            const ctx: CanvasRenderingContext2D = (this.refs['canvas'] as any).getContext('2d');
            let imageData: ImageData = ctx.createImageData(this.props.containerWidth, this.props.containerHeight);
            for (let x: number = 0; x < this.props.containerWidth; ++x) {
                for (let y: number = 0; y < this.props.containerHeight; ++y) {
                    let arrayCoords: number = (y * this.props.containerWidth + x) * 4;
                    imageData.data[arrayCoords] = 255;
                    imageData.data[arrayCoords + 1] = 0;
                    imageData.data[arrayCoords + 2] = 0;
                    imageData.data[arrayCoords + 3] = 255;
                }
            }
            ctx.putImageData(imageData, 0, 0);
        }
    }

    render() {
        return (
            <canvas ref="canvas" style={{ width: "100%", height: "100%" }} />
        );
    }
}

const mapStateToProps = (state, props) => {
    return ({ scene: state.scene });
};

const mapDispatchToProps = dispatch => ({

});

export let SizedRenderTarget = connect(mapStateToProps, mapDispatchToProps)(Dimensions({
    elementResize: true,
    getHeight: elem => {
        return elem.parentNode.clientHeight;
    },
    getWidth: elem => {
        return elem.clientWidth;
    }
})(RenderTarget));
