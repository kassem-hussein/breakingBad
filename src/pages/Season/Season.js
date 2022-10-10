import React from 'react';
import CardSeason from '../../components/Card-seasons/Card';
import s1 from '../../assets/images/s1.jpg';
import s2 from '../../assets/images/s2.jpg';
import s3 from '../../assets/images/s3.jpg';
import s4 from '../../assets/images/s4.jpg';
import s5 from '../../assets/images/s5.jpg';
const Season = () => {
  return (
    <div>
      <CardSeason
        season={1}
        image={s1}
        desc={
          'The first season of the American television drama series Breaking Bad premiered on January 20, 2008 and concluded on March 9, 2008. It consisted of seven episodes, each running approximately 48 minutes in length, except the pilot episode which runs for approximately 58 minute'
        }
      />
      <CardSeason
        season={2}
        image={s2}
        desc={
          'The second season of the American television drama series Breaking Bad premiered on March 8, 2009 and concluded on May 31, 2009. It consisted of 13 episodes, each running approximately 47 minutes in length. AMC broadcast the second season on Sundays at 10:00 pm in the United States. The complete second season was released on Region 1 DVD and Region A Blu-ray on March 16, 2010.['
        }
      />
      <CardSeason
        season={3}
        image={s3}
        desc={
          'The third season of the American television drama series Breaking Bad premiered on March 21, 2010, and concluded on June 13, 2010. It consisted of 13 episodes, each running about 47 minutes. AMC broadcast the third season on Sundays at 10:00 pm in the United States. '
        }
      />
      <CardSeason
        season={4}
        image={s4}
        desc={
          'The fourth season of the American television drama series Breaking Bad premiered on July 17, 2011 and concluded on October 9, 2011. It consisted of 13 episodes, each running approximately 47 minutes in length. AMC broadcast the fourth season on Sundays at 10:00 pm ET in the United States. The complete fourth season was released on Region 1 DVD and Region A Blu-ray on June 5, 2012.           '
        }
      />
      <CardSeason
        season={5}
        image={s5}
        desc={
          'The fifth and final season of the American television drama series Breaking Bad premiered on July 15, 2012, and concluded on September 29, 2013 on AMC in the United States and Canada. The 16-episode season is split into two parts, each containing eight episode'
        }
      />
    </div>
  );
};

export default Season;
