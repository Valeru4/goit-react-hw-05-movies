import styled from 'styled-components';

const Wrapper = styled.div`
  /* height: 100%;
  margin: 0;
  display: flex;
  justify-content: center; */
  position: absolute; /* Абсолютное позиционирование для лоадера */
  top: 200%; /* Располагаем верхний край лоадера по центру экрана */
  left: 50%; /* Располагаем левый край лоадера по центру экрана */
  transform: translate(-50%, -50%);
`;

export { Wrapper };
