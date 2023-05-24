import React, { useEffect, useState } from 'react';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch()
    }, [])
    return (
        <div>
            <h2>Left Side</h2>
        </div>
    );
};

export default LeftSideNav;