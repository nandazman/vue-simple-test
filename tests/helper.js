// To remove vuetify warn [Vuetify] Unable to locate target [data-app]
export function addElemWithDataAppToBody() {
  const app = document.createElement("div");
  app.setAttribute("data-app", true);
  document.body.append(app);
}
