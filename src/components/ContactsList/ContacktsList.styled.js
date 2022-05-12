import styled from 'styled-components';

export const ListContacts = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const DeleteBtn = styled.button`
  margin-left: 80px;

  text-transform: uppercase;
  text-decoration: none;
  padding: 8px 16px;
  min-width: 160px;
  display: inline-block;
  border-radius: 100px;
  transition: all 0.2s;
  background-color: #5ca4ea;
  color: #fff;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    background-color: #ff4d4d;
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
