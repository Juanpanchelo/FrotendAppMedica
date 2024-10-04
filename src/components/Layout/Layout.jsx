import Header from "../Header/Header";

const Layout = ({ children }) => {
    return (
        <div>
            <Header/> 
            {children}
            {/* Footer content goes here */}
        </div>
    )
}

export default Layout;