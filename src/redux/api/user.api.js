import { API } from "@helpers";
import { API_ENDPOINTS } from "@config";

export function login(data, accessToken) {
  return API.request({
    method: "post",
    url: `${API_ENDPOINTS.LOGIN}/?access_token=${accessToken}`,
    data,
  }).then(response => response);
}

// export function resetPassword(data, accessToken) {
//   return API.request({
//     method: "post",
//     url: `${API_ENDPOINTS.FORGOT_PASSWORD}?access_token=${accessToken}`,
//     data,
//   }).then(response => response);
// }

// export function logout(data, sessionId, accessToken) {
//   return API.request({
//     method: "delete",
//     url: `${API_ENDPOINTS.LOGOUT}/${sessionId}?access_token=${accessToken}`,
//     data,
//   }).then(response => response);
// }
