import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication({
  name: "@curso/react1",
  app: () => System.import("@curso/react1"),
  activeWhen: isActive.react1,
});

registerApplication({
  name: "@curso/react2",
  app: () => System.import("@curso/react2"),
  activeWhen: isActive.react2,
});

start({
  urlRerouteOnly: true,
});
