import styled from 'styled-components';

export const Container = styled.div`
  height: 314px;
  width: 220px;
  background-color: #fff;
  border-radius: 7px;
  border: 1px solid #999;
  color: black;
  /* font-size: 14px; */
  font-family: sans-serif;
  text-align: center;
  margin: 0 auto;
`;

export const Descr = styled.div`
  padding: 20px;
  text-align: center;
  /* margin-bottom: 59px; */
`;

export const Photo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: grey;
  margin: 0 auto 20px;
`;

export const Name = styled.p`
  margin-bottom: 16px;
  font-size: 24px;
`;
export const Tags = styled.p`
  margin-bottom: 16px;
  font-size: 16px;
`;

export const Location = styled.p`
  font-size: 16px;
`;

export const StatsList = styled.ul`
  display: flex;
  list-style: none;
  background-color: #e4e9f0;
  border-top: 1px solid #1123;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
`;

export const StatItem = styled.li`
  padding: 10px 5px;
  &:not(:last-child) {
    border-right: 1px solid #1123;
  }
`;
