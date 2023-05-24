import React, { useEffect, useState } from 'react';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/news-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2>All Categories: {categories.length}</h2>
            {
                categories.map(category => <p
                    key={category.id}
                >{category.name}</p>)
            }
        </div>
    );
};

export default LeftSideNav;