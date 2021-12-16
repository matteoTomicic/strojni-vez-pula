import Navigation from "components/Globals/Navigation/Navigation";


const Layout = ({ children }) => {
    return (
        <>
            <Navigation />
            {children}
        </>
    );
}

export default Layout;
