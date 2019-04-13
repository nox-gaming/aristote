import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static getInitialProps(ctx) {
        return Document.getInitialProps(ctx)
    }

    render() {
        return (
            <html>
                <Head>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
