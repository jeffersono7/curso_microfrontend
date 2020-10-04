import { registerApplication, start, RegisterApplicationConfig } from "single-spa";

const applications: RegisterApplicationConfig[] = [
  {
    name: "@microfrontend/app1",
    app: () => System.import("@microfrontend/app1"),
    activeWhen: () => true,
    customProps: {
      token: 'fdsafsdfjgh3g2423'
    }
  },
  {
    name: "@microfrontend/app2",
    app: () => System.import("@microfrontend/app2"),
    activeWhen: ['/'],
    customProps: {
      token: '324234hjkh'
    }
  },
  {
    name: "@microfrontend/app3",
    app: () => System.import("@microfrontend/app3"),
    activeWhen: ['/app3'],
    customProps: {
      token: 'fsadg3425432543gfsd'
    }
  }
];

applications.forEach(registerApplication);

setTimeout(() => {
  start({
    urlRerouteOnly: true,
  });
}, 0);
