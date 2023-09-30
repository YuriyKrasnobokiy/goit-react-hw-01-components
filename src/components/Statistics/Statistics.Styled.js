import styled from 'styled-components';

export const Section = styled.section`
  padding: 20px 0;
  text-align: center;
  /* width: 300px; */
  /* margin: 0 auto; */
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
  background-color: ${generateRandomColor};
`;

export const Title = styled.h2`
  margin-bottom: 10px;
`;

function generateRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const color = `rgb(${red}, ${green}, ${blue})`;

  return color;
}
