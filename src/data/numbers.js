export const muyscaNumbers = [
  { id: 0, name: "ytu", logic: "El vacío.", glyph: "ytu.svg", count: 0, category: "hand", objectIcon: "corn" },
  { id: 1, name: "ata", logic: "Un dedo índice levantado)", glyph: "ata.svg", count: 1, category: "hand", objectIcon: "corn" },
  { id: 2, name: "boza", logic: "Dos dedos levantados", glyph: "boza.svg", count: 2, category: "hand", objectIcon: "corn" },
  { id: 3, name: "mica", logic: "Tres dedos levantados", glyph: "mica.svg", count: 3, category: "hand", objectIcon: "mica" },
  { id: 4, name: "muyhyca", logic: "Cuatro dedos levantados (Contorno)", glyph: "muyhyca.svg", count: 4, category: "hand", objectIcon: "corn" },
  { id: 5, name: "hyzca", logic: "Cinco dedos levantados (Mano completa)", glyph: "hyzca.svg", count: 5, category: "hand", objectIcon: "corn" },
  { id: 6, name: "taa", logic: "5 + 1 (Mano girada)", glyph: "taa.svg", count: 6, category: "hand", objectIcon: "corn" },
  { id: 7, name: "cuhupqua", logic: "5 + 2", glyph: "cuhupqua.svg", count: 7, category: "hand", objectIcon: "corn" },
  { id: 8, name: "suhuza", logic: "5 + 3", glyph: "suhuza.svg", count: 8, category: "hand", objectIcon: "corn" },
  { id: 9, name: "aca", logic: "5 + 4", glyph: "aca.svg", count: 9, category: "hand", objectIcon: "corn" },
  { id: 10, name: "ugchihica", logic: "5 + 5", glyph: "ugchihica.svg", count: 10, category: "hand", objectIcon: "corn" },
  { id: 11, name: "quihicha ata", logic: "Pies + 1 (Once)", glyph: "quihicha_ata.svg", count: 11, category: "foot", objectIcon: "corn" },
  { id: 12, name: "quihicha boza", logic: "Pies + 2 (Doce)", glyph: "quihicha_boza.svg", count: 12, category: "foot", objectIcon: "corn" },
  { id: 13, name: "quihicha mica", logic: "Pies + 3 (Trece)", glyph: "quihicha_mica.svg", count: 13, category: "foot", objectIcon: "corn" },
  { id: 14, name: "quihicha muyhyca", logic: "Pies + 4 (Catorce)", glyph: "quihicha_muyhyca.svg", count: 14, category: "foot", objectIcon: "corn" },
  { id: 15, name: "quihicha hyzca", logic: "Pies + 5 (Quince)", glyph: "quihicha_hyzca.svg", count: 15, category: "foot", objectIcon: "corn" },
  { id: 16, name: "quihicha taa", logic: "Pies + 6 (Dieciséis)", glyph: "quihicha_taa.svg", count: 16, category: "foot", objectIcon: "corn" },
  { id: 17, name: "quihicha cuhupqua", logic: "Pies + 7 (Diecisiete)", glyph: "quihicha_cuhupqua.svg", count: 17, category: "foot", objectIcon: "corn" },
  { id: 18, name: "quihicha suhuza", logic: "Pies + 8 (Dieciocho)", glyph: "quihicha_suhuza.svg", count: 18, category: "foot", objectIcon: "corn" },
  { id: 19, name: "quihicha aca", logic: "Pies + 9 (Diecinueve)", glyph: "quihicha_aca.svg", count: 19, category: "foot", objectIcon: "corn" }
];

export const systemLogic = {
  title: "Lógica Digital (Dedos)",
  description: "El sistema muysca es vigesimal (base 20). Se basa en el conteo de los dedos de las manos y los pies, comenzando desde el vacío (Ytu).",
  phases: [
    { label: "0", detail: "Ytu: El concepto del vacío." },
    { label: "1-5", detail: "Representación esquemática de los dedos levantados de una mano." },
    { label: "6-10", detail: "Se añade una segunda mano representada por un giro de 90 grados." },
    { label: "11-19", detail: "Conteo en los dedos de los pies (Quihicha)." }
  ]
};
