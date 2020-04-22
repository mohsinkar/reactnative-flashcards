import styled  from 'styled-components/native';
import { Platform } from 'react-native';


export const CenterView = styled.View`
  flex: 1;
  flex-direction: column;
  align-items:  center;
  background-color: #333;
  border-radius: ${Platform.OS === 'ios' ? '16px' :'2px'};
  padding: 20px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 17px;
  justify-content: center;
  shadow-radius: 3px;
  shadow-opacity: 0.8;
  shadow-color: 'rgba(0, 0, 0, 0.24)';
`