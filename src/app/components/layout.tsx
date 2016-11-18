import * as React from 'react';
import { RenderTarget } from './';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

export class PhotonicLayout extends React.Component<{}, {}> {
    public store: any;

    public render() {
        return (
            <div style={{ height: '100%', position: 'relative' }}>
                <Layout fixedHeader fixedDrawer>
                    <Header title="Photonic">
                    </Header>
                    <Drawer title="Title">
                        <Navigation>
                            <a href="">Link</a>
                            <a href="">Link</a>
                            <a href="">Link</a>
                            <a href="">Link</a>
                        </Navigation>
                    </Drawer>
                    <Content height = "100%">
                        <RenderTarget />
                    </Content>
                </Layout>
            </div>
        );
    }
}