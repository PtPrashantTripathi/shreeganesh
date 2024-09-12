import { mapObjIndexed, assoc } from "ramda";

const nakshatras_internal = () => ({
  aswi: { name: "Aswini" },
  bhar: { name: "Bharani" },
  krit: { name: "Krittika" },
  rohi: { name: "Rohini" },
  mrig: { name: "Mrigasira" },
  ardr: { name: "Aardra" },
  puna: { name: "Punarvasu" },
  push: { name: "Pushyami" },
  asre: { name: "Aasresha" },
  makh: { name: "Makha" },
  ppha: { name: "Poorva Phalguni" },
  upha: { name: "Uttara Phalguni" },
  hast: { name: "Hasta" },
  chit: { name: "Chitra" },
  swat: { name: "Swaati" },
  visa: { name: "Visaakha" },
  anoo: { name: "Anooraadha" },
  jyes: { name: "Jyeshtha" },
  mool: { name: "Moola" },
  purv: { name: "Poorvaashaadha" },
  usha: { name: "Uttaraashaadha" },
  sava: { name: "Sravanam" },
  dhan: { name: "Dhanishtha" },
  sata: { name: "Satabhishak" },
  pbha: { name: "Poorvaabhaadra" },
  ubha: { name: "Uttaraabhaadra" },
  reva: { name: "Revati" }
});

export const nakshatras = (): Record<"string", { id: "string", name: "string" }> =>
  mapObjIndexed((v, k) => assoc("id", k, v), nakshatras_internal());
