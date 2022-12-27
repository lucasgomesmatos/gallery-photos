import { useEffect, useState, FormEvent } from 'react';
import * as C from './App.style';
import { PhotoItem } from './components/PhotoItem';
import * as Photos from './services/photos';
import { Photo } from './types/Photo';

const App = () => {
  const [uploading, setUploading] = useState(false);
  const [destroy, setDestroy] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const getPhotos = async () => {
      try {
        setLoading(true);
        setPhotos(await Photos.getAll());
      } catch (e) {
        throw new Error('Error');
      } finally {
        setLoading(false);
      }
    };

    getPhotos();
  }, []);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File;
    if (file && file.size > 0) {
      setUploading(true);
      const result = await Photos.insert(file);
      setUploading(false);

      if (result instanceof Error) {
        alert(`${result.name} - ${result.message}`);
      } else {
        let newPhotoList = [...photos];
        newPhotoList.push(result);
        setPhotos(newPhotoList);
      }
    }
  };

  const handleDestroyImage = async (name: string) => {
    setDestroy(true);
    const destroy = await Photos.destroy(name);
    if (destroy) {
      const newList = photos.filter((item) => item.name !== name);
      setPhotos(newList);
      setDestroy(false);
    } else {
      throw new Error('Error');
    }
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>

        <C.UploadFrom method="POST" onSubmit={handleFormSubmit}>
          <C.Input>
            <input type="file" name="image" id="file" />
          </C.Input>
          {uploading ? (
            <button type="submit" disabled>
              Enviando...
            </button>
          ) : (
            <button type="submit">Enviar</button>
          )}
        </C.UploadFrom>

        {loading && (
          <C.ScreenWarning>
            <div className="emoji">👋</div>
            <div>Carregando...</div>
          </C.ScreenWarning>
        )}

        {!loading && photos.length > 0 && (
          <C.PhotoList>
            {photos.map((item, index) => (
              <div key={index}>
                <PhotoItem
                  key={index}
                  url={item.url}
                  name={item.name}
                  handleDestroy={handleDestroyImage}
                  loading={destroy}
                />
              </div>
            ))}
          </C.PhotoList>
        )}

        {!loading && photos.length === 0 && (
          <C.ScreenWarning>
            <div className="emoji">😥</div>
            <div>Não há fotos cadastradas.</div>
          </C.ScreenWarning>
        )}
      </C.Area>
    </C.Container>
  );
};

export default App;
