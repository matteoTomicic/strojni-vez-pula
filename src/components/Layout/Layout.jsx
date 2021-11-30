import Navigation from "../Globals/Navigation/Navigation";


const Layout = ({ children }) => {
    return (
        <>
            <Navigation />
            {children}
        </>
    );
}

export default Layout;
