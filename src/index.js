import "./index.css";

import dva from "dva";

import classall from "../src/z_model/classall";

import smodel from '@/models/syhmodel'
const app = dva();

app.model({
    namespace: 'products',
    state: ['user'],
    reducers: {
      borderland(state,action){
          return [...state,action.payload]
      }
    },
});

app.model(smodel);

app.router(require("./routers").default);

app.start("#root");
