export const translations = {
  es: {
    welcome: {
      title: "Números Muyscas",
      start: "¡VAMOS A EMPEZAR! 🚀"
    },
    levelSelect: {
      title: "¿Qué números quieres aprender hoy?",
      level1: "DEL 1 AL 5",
      level2: "DEL 6 AL 10",
      level3: "DEL 11 AL 19",
      back: "Atrás"
    },
    dashboard: {
      changeLevel: "🔄 Cambiar Nivel",
      level: (val) => `Nivel ${val}`,
      learn: "Aprender",
      play: "Jugar"
    },
    learn: {
      menu: "🏠 Menú",
      title: (val) => `Aprendiendo el Nivel ${val}`,
      close: "Cerrar",
      selectPrompt: "Selecciona un número para aprender",
      discover: "Ver ícono ✨",
      showBody: "Ver dedos 🖐️👣"
    },
    play: {
      menu: "🏠 Menú",
      find: "¿Cuál numero es?",
      wellDone: "¡MUY BIEN! 🎉"
    },
    objects: {
      empty: "El vacío (Ytu)",
      names: {
        comba: { s: "jaguar", p: "jaguares" },
        fuquy: { s: "curí", p: "curíes" },
        guahagui: { s: "venado", p: "venados" },
        quye: { s: "árbol", p: "árboles" },
        quynza: { s: "colibrí", p: "colibríes" },
        sumne: { s: "pato", p: "patos" }
      },
      format: (count, name) => `${count} ${count === 1 ? name.s : name.p}`
    }
  },
  chb: {
    welcome: {
      title: "Gytygo",
      start: "¡Chisieca! 🚀"
    },
    levelSelect: {
      title: "Ipqua mucango maguisca",
      level1: "ata - hyzca",
      level2: "taa - ugchihica",
      level3: "quihicha ata - quihicha aca",
      back: "Uscu" // uscasuca
    },
    dashboard: {
      changeLevel: "🔄 Iez imyu",
      level: (val) => `Gata ${val}`,
      learn: "Ucasu",
      play: "Pquazu"
    },
    learn: {
      menu: "🏠 Gue",
      title: (val) => `Gata ${val}z mucansuca`,
      close: "Gucu",
      selectPrompt: "¡Uque ata azo!",
      discover: "Bes uqueo ✨",
      showBody: "Ytubas quihichubasa 🖐️👣"
    },
    play: {
      menu: "🏠 Gue",
      find: "Bes uqueo",
      wellDone: "¡Hata choin! 🎉"
    },
    objects: {
      empty: "Ytu",
      names: {
        comba: "comba",
        fuquy: "fuquy",
        guahagui: "guahagui",
        quye: "quye",
        quynza: "quynza",
        sumne: "sumne"
      },
      format: (count, name) => `${name} ${count}`
    }
  }
};