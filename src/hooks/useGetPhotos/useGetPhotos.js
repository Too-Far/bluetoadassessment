import { useState } from "react";
import axios from "axios";

function useGetPhotos() {
  const [photoList, setPhotoList] = useState([]);
  const [page, setPage] = useState(1);

  const retreivePhotos = async (query) => {
    const clientId = process.env.REACT_APP_UNSPLASH_ID;
    setPhotoList([]);
    try {
      await axios
        .get(
          `https://api.unsplash.com/search/photos/?page=${page}&per_page=20&query=${query}&content_filter=high&client_id=${clientId}`
        )
        .then((res) => {
          const resultArray = res.data.results;
          resultArray.map((photo) =>
            setPhotoList((photoList) => [
              ...photoList,
              {
                url: photo.urls.regular,
                altDesc: photo.alt_description,
                id: photo.id,
              },
            ])
          );
        });
      setPage(page + 1);
    } catch (err) {
      console.error(`Error with API call; ${err}`);
    }
  };
  return [photoList, retreivePhotos];
}

export default useGetPhotos;
