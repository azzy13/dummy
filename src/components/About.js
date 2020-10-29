import React from 'react';

const About = ({ name, rgno }) => {
  return (
    <div>
      <h1 style={{ backgroundColor: 'grey', textAlign: 'center' }}>
        Welcome {name}, Register No. {rgno}
      </h1>
      <form style={{ textAlign: 'center' }}>
        <input type='text' placeholder='Department' />
        <br />
        <input type='text' placeholder='Branch' />
        <br />
        <input type='int' placeholder='Year of joining' />
        <br />
        <input type='text' placeholder='Year of completion' />
        <br />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default About;
