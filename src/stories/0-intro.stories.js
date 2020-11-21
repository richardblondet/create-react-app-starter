import React from 'react';

export const Intro = () => {
  return (
    <React.Fragment>
      <section className="jumbotron text-center border-0">
        <div className="container">
          <h1>Create React App Stater</h1>
          <p className="lead text-muted">Welcome to the Component Development Environment. </p>
        </div>
      </section>
    </React.Fragment>
  );
}

const Story = {
  title: 'Intro',
  component: Intro
};

export default Story;