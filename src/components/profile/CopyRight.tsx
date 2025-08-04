import React from "react";

function CopyRight() {
    const currentYear = new Date().getFullYear();
    return (
        <p className="text-gray-500 text-sm mt-6">© {currentYear} All rights reserved.</p>
    );
}

export default CopyRight;
