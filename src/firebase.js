import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDk4fz-XuF4KQd2xo6YjyY-nEpCRwEipzo",
  authDomain: "fir-1-79adb.firebaseapp.com",
  projectId: "fir-1-79adb",
  storageBucket: "fir-1-79adb.appspot.com",
  messagingSenderId: "684658506930",
  appId: "1:684658506930:web:eaf1ba2304e09b3d885dab",
  measurementId: "G-1QTEC37DWE"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
