import { InitUser } from "./utils/webID";

const InitApp = () => {
    window.addEventListener('load', function () {
        InitUser();
        document.addEventListener('gesturestart', function (e) {
          e.preventDefault();
      });
    });
}

export default InitApp;