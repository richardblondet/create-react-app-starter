import React from 'react';
import { Typography } from '../components/Typography';

const { H1, H2, H3, H4, H5, H6, Lead, Paragraph, Small } = Typography;

export const Intro = () => {
  return (
    <React.Fragment>
      <section className="jumbotron text-center border-0">
        <div className="container">
          <H1>Create React App Stater</H1>
          <Paragraph>Welcome to the Component Development Environment. </Paragraph>
        </div>
        <hr />
        <H2>Styleguide</H2>
        <hr />
        <H1>H1</H1>
        <H2>H2</H2>
        <H3>H3</H3>
        <H4>H4</H4>
        <H5>H5</H5>
        <H6>H6</H6>
        <Lead>Lead</Lead>
        <Paragraph>Paragraph: At aut corporis culpa doloribus ea enim error est impedit, ipsum iure maxime molestiae omnis optio.</Paragraph>
        <Paragraph>
          Paragraph: Facilis hic iste perspiciatis qui quibusdam sint velit vero Animi doloremque esse ex iure perferendis.
        </Paragraph>
        <Paragraph>Paragraph: At aut corporis culpa doloribus ea enim error est impedit, ipsum iure maxime molestiae omnis optio.</Paragraph>
        <Small>Small: Ad animi at debitis eligendi explicabo facere illum inventore, ipsum minus obcaecati.</Small>
        
        <hr />
        <H2>Colors</H2>
        <Paragraph>These colors are defined in styleguide colors.ts.</Paragraph>
        <hr />
        <div>
          <div>
            <Small>Kind</Small>
          </div>
          <div>
            <Small>HEX</Small>
          </div>
          <div>
            <Small>Color</Small>
          </div>
        </div>
        <hr />
        <H2>Breakpoints</H2>
        <Paragraph>These are the responsive breakpoints being used</Paragraph>
        <hr />
        <H2>Space</H2>

      </section>
    </React.Fragment>
  );
}

const Story = {
  title: 'Intro',
  component: Intro
};

export default Story;