import React from 'react';
import moment from 'moment';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const ArticleCard = ({ title, description, createdAt, imageSource, fullName, handleClick }: any) => {
  return (
    <Card className="card flex-sm-row mb-gutter">
      <CardBody width="80%">
        <CardTitle>{title}</CardTitle>
        <CardText
          style={{
            height: '160px',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'pre-wrap'
          }}
        >
          {description}
        </CardText>
        <CardText>
          <small className="text-muted">
            {moment(parseInt(createdAt, 10)).fromNow()} by {fullName}
          </small>
        </CardText>
        <Button onClick={handleClick}> View Article </Button>
      </CardBody>
      <img className="card-img-sm-right" width="20%!important" src={imageSource} alt="description" />
    </Card>
  );
};

export default ArticleCard;
