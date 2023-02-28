import { devfApi } from "../../utils/http";

export const getBio = (id) => new Promise((resolve, reject) => {
    devfApi.get(`/${id}/biography`)
    .then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
  