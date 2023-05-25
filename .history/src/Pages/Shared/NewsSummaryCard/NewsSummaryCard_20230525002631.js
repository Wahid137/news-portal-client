import React from 'react';
import Card from 'react-bootstrap/Card';

const NewsSummaryCard = ({ news }) => {
    const { _id, title, author, details, image_url, rating, total_view } = news;

    return (
        <Card className="">
            <Card.Header>
                <div>
                    <img src={author.img} alt="" />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;