import React from 'react';
import { useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData()
    console.log(news)
    return (
        <div>
            <h3>This is news</h3>
        </div>
    );
};

export default News;