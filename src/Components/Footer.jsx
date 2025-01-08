export default function Footer() {
    return (
      <footer className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white py-2 mt-1">
            <div className="container  px-0 md:px-0">
                <div className="text-end text-white font-semibold">
                    <p>&copy; {new Date().getFullYear()} by Fortytwo42 Technology Innovations Pvt Ltd. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
  }
  