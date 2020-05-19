import React from "react";
import { api } from "@curso/api";

export default function Root(props) {
  api().request();

  return <section> <br /> <br /> <br />React1 está carregado!</section>;
}
