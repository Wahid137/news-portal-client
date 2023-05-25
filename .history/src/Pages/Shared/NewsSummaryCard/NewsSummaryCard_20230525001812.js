import React from 'react';

const NewsSummaryCard = ({ news }) => {
    console.log(news)
    return (
        <div>
            <h2>{news.title}</h2>
            <img src={news.thumbnail_url} alt="" />
        </div>
    );
};

export default NewsSummaryCard;