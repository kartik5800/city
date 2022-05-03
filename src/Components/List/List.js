import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

function List({ data }) {
    // console.log(data)
    return(
        data.map((d, i) => {
            return (
                <>
    
                    <Card key={d.age} className='col-3 mt-5 me-3'>
                        <CardBody>
                            <CardTitle>{d.name}</CardTitle>
                            <CardSubtitle>{d.quantity}</CardSubtitle>
                            <CardText>{d.price}</CardText>
                            <Button>order</Button>
                        </CardBody>
                    </Card>
    
    
                </>
            );
        })
    )
}

export default List;