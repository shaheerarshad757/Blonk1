// import axios from "axios";
// import _ from "lodash";
// // import i18n from "i18next";
import { CANCEL } from "redux-saga";
// import Config from "react-native-config";

const CancelToken = axios.CancelToken;

export class API {
  static headers() {
    return {
      "Content-Type": "application/json",
      "X-API-KEY": Config.API_ACCESS_TOKEN,
      platform: "mobile",
    };
  }

  static request(options) {
    options.headers = _.merge(this.headers(), options.headers);
    const source = CancelToken.source();
    options.cancelToken = source.token;
    const timeoutHandler = setTimeout(() => {
      source.cancel();
    }, 15000);

    const request = axios(options)
      .then(response => {
        clearTimeout(timeoutHandler);

        if (
          response.data &&
          response.data.status &&
          response.data.status.code !== 200
        ) {
          // Notification.error(
          //   response.data.status.message,
          //   response.data.status.explanation,
          // );
          throw response;
        }

        return response;
      })
      .catch(error => {
        clearTimeout(timeoutHandler);

        if (options.silent === true) {
          throw error;
        } else if (error.message === 'Network Error') {
          axios({
            mehtod: "get",
            url: "https://google.com",
          })
            .then(response => {
              if (!options.silent){
                // Notification.error(
                //   i18n.t(`alerts.failure.serverNotResponding`),
                // );
              }

              throw error;
            })
            .catch(err => {
              if (!options.silent) {
                // Notification.error(
                //   i18n.t(`alerts.failure.checkInternetConnection`),
                // );
              }
              throw err;
            });
        } else {
          if (
            error.response &&
            (error.response.status === 401 || error.response.status === 404)
          ) {
            // // EventBus.publish('logout');
            // global.store.dispatch({ type: "LOGOUT" });
            //
            // if (!options.silent)
            //   Notification.error(
            //     error?.response?.data?.status?.message,
            //     error?.response?.data?.status?.explanation,
            //   );
          } else if (error.response && !options.silent) {
            // const message =
            //   error.response.data?.status?.message ||
            //   error.response.data?.message;
            // Notification.error(
            //   message,
            //   error.response.data?.status?.explanation,
            // );
          }

          const errorKeys = Object.keys(error);

          if (
            errorKeys.length === 1 &&
            errorKeys[0] === "message" &&
            error["message"] === undefined
          ) {
            if (!options.silent) {
              // Notification.error(i18n.t('alerts.failure.request_timeout'));
            }
          }

          throw error;
        }
        throw error;
      });

    request[CANCEL] = () => source.cancel();
    return request;
  }
}
