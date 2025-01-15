const Footer = () => {
    return (
        <footer className="themed-footer text-white py-2 mt-1">
            <div className="container px-0 md:px-0">
                <div className="text-center font-semibold">
                    <p>&copy; {new Date().getFullYear()} by Fortytwo42 Technology Innovations Pvt Ltd.</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;