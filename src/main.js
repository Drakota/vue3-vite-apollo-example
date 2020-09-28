import ApolloClient from "apollo-boost";
import ApolloComposable from "@vue/apollo-composable";

import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

const apolloClient = new ApolloClient({
  uri: `https://graphql.anilist.co/`,
});

createApp(App)
  .provide(ApolloComposable.DefaultApolloClient, apolloClient)
  .mount("#app");
