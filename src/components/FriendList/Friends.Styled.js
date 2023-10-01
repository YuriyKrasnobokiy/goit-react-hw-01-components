import styled from 'styled-components';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
`;

export const FriendsItem = styled.li`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid gray;
  min-width: 150px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const StatusCircleOnLine = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: green;
`;

export const StatusCircleOffLine = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
`;
