import * as C from "./style"

type Props = {
  url: string;
  name: string;
  handleDestroyImage: (name : string) => string
}


export const PhotoItem = ({url, name, handleDestroyImage}:Props) => {
  return(
    <C.Container>
      <img src={url} alt={name} />
      {name}
      <button onClick={() => handleDestroyImage(name)}>Excluir</button>
    </C.Container>
  );
}