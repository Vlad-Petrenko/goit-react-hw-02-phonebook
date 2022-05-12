import styled from 'styled-components';

export const ItemContact = styled.li`
  padding: 16px;
  font-size: 24px;
  align-items: center;
  display: flex;

  &:before {
    content: '■';
    font-size: 10px;
    margin-left: -14px;
    padding-right: 8px;
    text-decoration: none !important;
    vertical-align: 20%;
  }
`;
