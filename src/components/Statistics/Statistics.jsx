import {
  Section,
  Stats,
  StatsItem,
  Title,
} from '../Statistics/Statistics.Styled';

export const Statistics = ({ title, stats }) => (
  <Section>
    <Title>{title}</Title>

    <Stats>
      {stats.map(item => (
        <StatsItem key={item.id}>
          <span>{item.label}</span>
          <span>{item.percentage}</span>
        </StatsItem>
      ))}
    </Stats>
  </Section>
);
