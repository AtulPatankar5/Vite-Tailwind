// src/Components/Footer.js
export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white py-2 mt-1">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-right text-white font-semibold">
                    <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
