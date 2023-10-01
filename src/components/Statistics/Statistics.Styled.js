import styled from 'styled-components';
import { generateRandomColor } from '../../utils/functions';

export const Section = styled.section`
  padding: 20px 0;
  text-align: center;
`;
export const Stats = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  text-align: center;
  min-width: 60px;
  background-color: ${generateRandomColor};
`;

export const Title = styled.h2`
  margin-bottom: 10px;
`;
