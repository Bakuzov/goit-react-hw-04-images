import { RevolvingDot } from 'react-loader-spinner';
import { Div } from './Loader.styled';

export const Loader = () => {
  return (
    <Div>
      <RevolvingDot color="#00BFFF" height={40} width={40} />
    </Div>
  );
};
