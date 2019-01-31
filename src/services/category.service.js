import config from "../config";
import { authHeader } from "../helpers";
import { userService } from "../services";

export const categoryService = {
  getCategories
};

function getCategories() {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  return fetch(`${config.api.URL}/categories`, requestOptions).then(
    handleResponse
  );
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        userService.logout();
        // location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
