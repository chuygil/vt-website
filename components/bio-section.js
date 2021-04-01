import styled from 'styled-components';
import Image from 'next/image';

const BioHeading = styled.h2`
  margin-bottom: var(--space-xl);

  @media (max-width: 640px) {
    text-align: center;
  }
`;

const BioCard = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  place-items: center;
  gap: var(--space-lg);
  margin-bottom: var(--space-lg);

  @media (max-width: 640px) {
    grid-template-columns: 1fr;

    > p {
      text-align: center;
    }
  }
`;

const BioImageWrapper = styled.div`
  width: 300px;
  height: 419px;

  > img {
    width: 100%;
    height: 100%;
  }
`;

function BioSection() {
  return (
    <section>
      <BioHeading>About Us</BioHeading>
      <BioCard>
        <BioImageWrapper>
          <Image
            src="/images/vicente_fifa.PNG"
            alt="Vicente Tirado fifa profile card"
            width={300}
            height={419}
          />
        </BioImageWrapper>
        <p>
          I am man of little interests, fútbol and walking around my block on a
          cute sunny morning under the stars. I played the beautiful game once
          upon a time, peaked at the age of 12 with a gradual decline. Graduated
          from the University of Louisville with a Sports Administration degree
          and currently attending Judson University to get my Masters in
          Business Administration. My days are mostly spent with my dog and cat,
          yes I have a cat. They’re named Sansa and Ned because I’m obsessed
          with the non-fiction historical show, Game of Thrones and I idolize
          Ned and love Sophie Turner. (Oh I also love my girlfriend lol sorry in
          case she sees this). When I’m not with my two animal kids, I’m usually
          working with my brothers roofing company{' '}
          <a
            href="https://www.instagram.com/adexteriorsandremodeling/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--color-blue-primary)' }}
          >
            @adexteriorsandremodeling
          </a>{' '}
          and coaching at West Chicago FC.
        </p>
      </BioCard>
      <BioCard>
        <BioImageWrapper>
          <Image
            src="/images/marcel_fifa.PNG"
            alt="Marcel Carrasco fifa profile card"
            width={300}
            height={419}
          />
        </BioImageWrapper>
        <p>
          Im a man of many interests such as scrapbooking, skipping rocks,
          origami, and fútbol. My fútbol playing years are far behind me, so I
          turned the page to my post-playing career by gaining 50 pounds and
          graduating with a Journalism degree from Northern Illinois University.
          To ensure I would stay unemployed post-graduation, I also graduated
          with an English degree. I spend my days working from home -living the
          American dream, but there isn’t a day I don’t miss having the ball at
          my feet. Or hands since I was a sub par goalkeeper. It’s been tough
          getting away from the sport I loved since a little pipsqueak, so I
          took my talents to the local parks where I coach and train
          goalkeepers.
        </p>
      </BioCard>
    </section>
  );
}

export default BioSection;
