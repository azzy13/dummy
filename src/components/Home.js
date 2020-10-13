import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import pic from '../assets/kanki.jpg';

const Home = ({ history }) => {
  return (
    <div>
      <Card>
        <CardImg
          src={pic}
          width='100%'
          alt='Card image cap'
          className='custom_img'
        />
        <CardBody>
          <CardTitle className='text-center'>
            <strong>General Kanki</strong>{' '}
          </CardTitle>
          <Button
            className='btn btn-block'
            onClick={(e) => history.push('/about')}
            type='button'
          >
            Goto About page
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Home;
