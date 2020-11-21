import React from 'react';

export const Errors = () => {
  return (
    <React.Fragment>
      <section className="jumbotron text-center border-0">
        <div className="container">
          <h1>Error here</h1>
        </div>
      </section>
    </React.Fragment>
  );
}

const Story = {
  title: 'Components/Errors',
  component: Errors
};

export default Story;