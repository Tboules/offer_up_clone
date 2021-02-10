import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

const postListing = (obj, onUploadProgress) => {
  let { title, price, category, description, location, images } = obj;

  const data = new FormData();
  const newImages = images.filter((image) => image.id != 100000);
  newImages.forEach((image) => {
    data.append("images", {
      name: image.uri,
      type: "image/jpeg",
      uri: image.uri,
    });
  });
  data.append("title", title);
  data.append("price", Number(price));
  data.append("categoryId", category.id);
  data.append("description", description);
  if (location) data.append("location", JSON.stringify(location));

  return client.post(endpoint, data, {
    onUploadProgress: (pe) => {
      onUploadProgress(pe.loaded / pe.total);
    },
  });
};

export default {
  getListings,
  postListing,
};
