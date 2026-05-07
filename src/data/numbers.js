export const muyscaNumbers = [
  { id: 0, name: "ytu", lugo_name:"", glyph: "0", fon: "ˈətu", fingers: "z", count: 0, category: "hand", objectIcon: "corn" },
  { id: 1, name: "ata", lugo_name:"ata", glyph: "1", fon: "*ˈa.ta", fingers: "a", count: 1, category: "hand", objectIcon: "corn" },
  { id: 2, name: "boza", lugo_name:"boʒha", glyph: "2", fon: "*ˈbo.tsa", fingers: "b", count: 2, category: "hand", objectIcon: "corn" },
  { id: 3, name: "mica", lugo_name:"mica", glyph: "3", fon: "*ˈmi.ka", fingers: "c", count: 3, category: "hand", objectIcon: "mica" },
  { id: 4, name: "muyhyca", lugo_name:"mhûɣcâ", glyph: "4", fon: "*məʔ.ˈka.a", fingers: "d", count: 4, category: "hand", objectIcon: "corn" },
  { id: 5, name: "hyzca", lugo_name:"hɣcscâ", glyph: "5", fon: "*əhts.ˈka.a", fingers: "e", count: 5, category: "hand", objectIcon: "corn" },
  { id: 6, name: "taa", lugo_name:"ta", glyph: "6", fon: "*ˈta.a", fingers: "f", count: 6, category: "hand", objectIcon: "corn" },
  { id: 7, name: "cuhupqua", lugo_name:"qhûpquâ", glyph: "7", fon: "*kuʔ.ˈkʷa.a", fingers: "g", count: 7, category: "hand", objectIcon: "corn" },
  { id: 8, name: "suhuza", lugo_name:"shûʒhâ", glyph: "8", fon: "*suʔ.ˈtsa.a", fingers: "h", count: 8, category: "hand", objectIcon: "corn" },
  { id: 9, name: "aca", lugo_name:"aca", glyph: "9", fon: "*ˈa.ka",  fingers: "i", count: 9, category: "hand", objectIcon: "corn" },
  { id: 10, name: "ubchihica", lugo_name:"hubchìhicâ", glyph: "A", fon: "uɡ.ˈʃiʔ.ka", fingers: "j", count: 10, category: "hand", objectIcon: "corn" },
  { id: 11, name: "quihicha ata", lugo_name:"qhicħa ata", glyph: "B", fon: "*ˈkiʔ.tʃa ˈa.ta", fingers: "k", count: 11, category: "foot", objectIcon: "corn" },
  { id: 12, name: "quihicha boza", lugo_name:"qhicħa boʒha", glyph: "C", fon: "*ˈkiʔ.tʃa ˈbo.tsa", fingers: "l", count: 12, category: "foot", objectIcon: "corn" },
  { id: 13, name: "quihicha mica", lugo_name:"qhicħa mica", glyph: "D", fon: "*ˈkiʔ.tʃa ˈmi.ka", fingers: "m", count: 13, category: "foot", objectIcon: "corn" },
  { id: 14, name: "quihicha muyhyca", lugo_name:"qhicħa mhûɣcâ", glyph: "E", fon: "*ˈkiʔ.tʃa məʔ.ˈka.a", fingers: "n", count: 14, category: "foot", objectIcon: "corn" },
  { id: 15, name: "quihicha hyzca", lugo_name:"qhicħa hɣcscâ", glyph: "F", fon: "*ˈkiʔ.tʃa əhts.ˈka.a", fingers: "o", count: 15, category: "foot", objectIcon: "corn" },
  { id: 16, name: "quihicha taa", lugo_name:"qhicħa ta", glyph: "G", fon: "*ˈkiʔ.tʃa ˈta.a", fingers: "p", count: 16, category: "foot", objectIcon: "corn" },
  { id: 17, name: "quihicha cuhupqua", lugo_name:"qhicħa qhûpquâ", glyph: "H", fon: "*ˈkiʔ.tʃa kuʔ.ˈkʷa.a", fingers: "q", count: 17, category: "foot", objectIcon: "corn" },
  { id: 18, name: "quihicha suhuza", lugo_name:"qhicħa shûʒhâ", glyph: "I", fon: "*ˈkiʔ.tʃa suʔ.ˈtsa.a", fingers: "r", count: 18, category: "foot", objectIcon: "corn" },
  { id: 19, name: "quihicha aca", lugo_name:"qhicħa aca", glyph: "J", fon: "*ˈkiʔ.tʃa ˈa.ka", fingers: "s", count: 19, category: "foot", objectIcon: "corn" }
];

export const systemLogic = {
  title: "Lógica Digital (Dedos)",
  description: "El sistema muysca es vigesimal (base 20). Se basa en el conteo de los dedos de las manos y los pies.",
  phases: [
    { label: "1-5", detail: "Representación esquemática de los dedos levantados de una mano." },
    { label: "6-10", detail: "Se añade una segunda mano representada por un giro de 90 grados." },
    { label: "11-19", detail: "Conteo en los dedos de los pies (Quihicha)." }
  ]
};
