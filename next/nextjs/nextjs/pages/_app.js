// import App from 'next/app'
// import 'antd/dist/antd.css'
// export default App;
import App, { Container } from 'next/app'
import 'antd/dist/antd.css'
import LayOut from '../component/Layout';
class MyApp extends App {
    static async getInitialProps({ Component }) {
        let pageProps;
        if (Component && Component.getInitialProps) {
            pageProps = await Component.getInitialProps();
        }
        return {
            pageProps
        }
    }
    render() {
        const { Component, pageProps } = this.props;
        return (
            <LayOut>
                <Component {...pageProps} />
            </LayOut>
        )
    }
}
export default MyApp;