import styled from "styled-components/native";

export const ContactsWrapper = styled.View`
  flex: 1;
  background-color: #FF3122;
`;

export const Header = styled.View`
  padding: 24px;
  background: #FF3122;
  flex-direction: row;
`

export const HeaderText = styled.Text`
  color: #f4ede8;
  font-size: 20px;
  font-family: 'RobotoSlab-Regular';
  line-height: 28px;
`
export const ContactsList = styled.FlatList`
  padding: 32px 24px 16px;
`

export const ItemList = styled.View`
background: #3598DC;
border-radius: 8px;
padding: 10px;
margin-bottom: 16px;
flex-direction: row;
align-items: center;
`

export const Name = styled.Text`
  color: #fff;
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
`
export const Highlight = styled.Text`
  font-family: 'RobotoSlab-Bold';
  font-size: 24px;
  color: #6e37e0;
`

export const Avatar = styled.View`
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #28262e;
  margin-right: 12px;
`
