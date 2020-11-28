import React from 'react';
import { Typography } from '../components/Typography';

const { H1, H2, H3, H4, H5, Lead, Link, Paragraph, Small } = Typography;

export const Intro = () => {
  return (
    <React.Fragment>
      <section className="jumbotron text-center border-0">
        <div className="container">
          <H1>Create React App Stater</H1>
          <p className="lead text-muted">Welcome to the Component Development Environment. </p>
        </div>
        <H2>Typography</H2>
        <hr />
        <H1>H1: Animi aperiam, aspernatur culpa deserunt eaque, eius explicabo inventore ipsa laudantium</H1>
        <H2>H2: Consectetur consequuntur cum deserunt dignissimos esse fugiat inventore iusto, laboriosam maiores minima!.</H2>
        <H3>H3: Culpa dignissimos expedita facilis, fugiat minus odio reiciendis ut? Accusamus delectus dicta eius.</H3>
        <H4>H4: Accusamus ad adipisci alias aliquam aperiam autem, culpa dolorem enim error est eum.</H4>
        <H5>H5: Debitis distinctio dolorum fugiat impedit itaque necessitatibus, quo sunt? Atque consectetur, corporis.</H5>
        <Lead>Lead:Deleniti est facere id placeat provident sapiente totam vitae. Asperiores consequuntur eaque eum.</Lead>
        <>: At aut corporis culpa doloribus ea enim error est impedit, ipsum iure maxime molestiae omnis optio.</>
        <Paragraph>
          Paragraph: Facilis hic iste perspiciatis qui quibusdam sint velit vero Animi doloremque esse ex iure perferendis.
        </Paragraph>
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