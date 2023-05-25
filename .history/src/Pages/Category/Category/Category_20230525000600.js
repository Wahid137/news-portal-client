import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const categoriesNews = useLoaderData();
    return (
        <div>
            <h2>This is category: {categoriesNews.length}</h2>
        </div>
    );
};

export default Category;