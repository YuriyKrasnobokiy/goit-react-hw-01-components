import {
  Container,
  Photo,
  StatsList,
  StatItem,
  Descr,
  Name,
  Tags,
  Location,
} from '../Profile/Profile.Styled';

export const Profile = ({ avatar, tag, username, location, stats }) => (
  <Container>
    <Descr>
      <Photo src={avatar} alt={tag} />
      <Name>{username}</Name>
      <Tags>@{tag}</Tags>
      <Location>{location}</Location>
    </Descr>
    <StatsList>
      <StatItem>
        <span>Followers: </span>
        <span>{stats.followers}</span>
      </StatItem>
      <StatItem>
        <span>Views: </span>
        <span>{stats.views}</span>
      </StatItem>
      <StatItem>
        <span>Likes: </span>
        <span>{stats.likes}</span>
      </StatItem>
    </StatsList>
  </Container>
);
