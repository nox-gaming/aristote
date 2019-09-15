import Nav from './Nav'

const layoutStyle = {
    margin: 0,
    padding: 0,
    border: '1px solid #DDD'
}

const Layout = (props) => (
    <div style={layoutStyle}>
        <Nav />
        {props.children}
    </div>
)

export default Layout
