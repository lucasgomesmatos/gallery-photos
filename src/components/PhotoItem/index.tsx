import * as C from './style';

type Props = {
  url: string;
  name: string;
  loading: boolean;
  handleDestroy: (name: string) => Promise<void>;
};

export const PhotoItem = ({ url, name, handleDestroy, loading }: Props) => {
  return (
    <C.Container>
      <img src={url} alt={name} />
      {name}

      <button onClick={() => handleDestroy(name)}>Excluir</button>
    </C.Container>
  );
};
