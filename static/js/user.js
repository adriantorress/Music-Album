const nav_user = document.querySelector(".nav-user")
const aside = document.querySelector('.nav-aside')
const main = document.querySelector('main')

const siteSections = document.querySelector('.site-sections')

const site_sections = [
  {
    id: 6,
    href: "Anime-Endings",
    title: "Ir para Anime Endings",
    name: "Anime Endings",
    album: [
      {
        title_alt: "Album das endings de One Piece",
        img_src: "anime-endings/one-piece.jpg",
        div2_name: "One Piece",
        span: "Toei Animation"
      },
      {
        title_alt: "Album das endings Naruto Clássico",
        img_src: "anime-endings/naruto-classico.jpg",
        div2_name: "Naruto Clássico",
        span: "Studio Pierrot e TV Tokyo"
      },
      {
        title_alt: "Album das endings de Naruto Shippuden",
        img_src: "anime-endings/naruto-shippuden.jpg",
        div2_name: "Naruto Shippuden",
        span: "Studio Pierrot e TV Tokyo"
      },
      {
        title_alt: "Album das endings de Dragon Ball",
        img_src: "anime-endings/dragon-ball-2.jpg",
        div2_name: "Dragon Ball",
        span: "Toei Animation"
      },
      {
        title_alt: "Album das endings de Dragon Ball Z",
        img_src: "anime-endings/dragon-ball-z-2.png",
        div2_name: "Dragon Ball Z",
        span: "Toei Animation"
      },
      {
        title_alt: "Album das endings de Death Note",
        img_src: "anime-endings/death-note-2.jpg",
        div2_name: "Death Note",
        span: "Madhouse"
      },
      {
        title_alt: "Album das endings de Boku No Hero",
        img_src: "anime-endings/boku-no-hero.webp",
        div2_name: "Boku No Hero",
        span: "TOHO, Shueisha"
      },
      {
        title_alt: "Album das endings de Attack On Titan",
        img_src: "anime-endings/attack-on-titan.jpg",
        div2_name: "Attack On Titan",
        span: "TOHO"
      }

    ]
  },
  {
    id: 5,
    href: "Anime-Openings",
    title: "Ir para Anime Openings",
    name: "Anime Openings",
    album: [
      {
        title_alt: "Album das openings de One Piece",
        img_src: "anime-openings/one-piece-2.png",
        div2_name: "One Piece",
        span: "Toei Animation"
      },
      {
        title_alt: "Album das openings Naruto Clássico",
        img_src: "anime-openings/naruto-classico-2.jpg",
        div2_name: "Naruto Clássico",
        span: "Studio Pierrot e TV Tokyo"
      },
      {
        title_alt: "Album das openings de Naruto Shippuden",
        img_src: "anime-openings/naruto-shippuden-2.webp",
        div2_name: "Naruto Shippuden",
        span: "Studio Pierrot e TV Tokyo"
      },
      {
        title_alt: "Album das openings de Dragon Ball",
        img_src: "anime-openings/dragon-ball-classico.jpeg",
        div2_name: "Dragon Ball",
        span: "Toei Animation"
      },
      {
        title_alt: "Album das openings de Dragon Ball Z",
        img_src: "anime-openings/dragon-ball-z.webp",
        div2_name: "Dragon Ball Z",
        span: "Toei Animation"
      },
      {
        title_alt: "Album das openings de Death Note",
        img_src: "anime-openings/death-note.jpg",
        div2_name: "Death Note",
        span: "Madhouse"
      },
      {
        title_alt: "Album das openings de Boku No Hero",
        img_src: "anime-openings/boku-no-hero-2.webp",
        div2_name: "Boku No Hero",
        span: "TOHO, Shueisha"
      },
      {
        title_alt: "Album das openings de Attack On Titan",
        img_src: "anime-openings/attack-on-titan-2.jpg",
        div2_name: "Attack On Titan",
        span: "TOHO"
      }

    ]
  },
  {
    id: 0,
    href: "Funk",
    title: "Ir para Funk",
    name: "Funk",
    album: [
      {
        title_alt: "Album de funk do Mc Gaab",
        img_src: "funk/gaab.jpg",
        div2_name: "Positividade",
        span: "Gaab"
      },
      {
        title_alt: "Album de funk do Mc Kevin",
        img_src: "funk/kevin.jpg",
        div2_name: "MC Kevin no Estúdio Showlivre (Ao Vivo)",
        span: "MC Kevin"
      },
      {
        title_alt: "Album de funk do Mc Hariel",
        img_src: "funk/hariel.webp",
        div2_name: "Avisa Que É O Funk",
        span: "Mc Hariel"
      },
      {
        title_alt: "Album de funk do Mc Neguinho do Kaxeta",
        img_src: "funk/neguinho-do-kaxeta.webp",
        div2_name: "Respeita Minha História (Ao Vivo)",
        span: "Mc Neguinho do Kaxeta"
      },
      {
        title_alt: "Album de funk do Mc Daleste",
        img_src: "funk/mc-daleste.webp",
        div2_name: "+ Amor - Recalque",
        span: "Mc Daleste"
      },
      {
        title_alt: "Album de funk do Mc Cabelinho",
        img_src: "funk/mc-cabelinho.webp",
        div2_name: "Ainda",
        span: "Mc Cabelinho"
      },
      {
        title_alt: "Album de funk da Ludmilla",
        img_src: "funk/ludmilla.webp",
        div2_name: "Numanice #2 (Ao Vivo)",
        span: "Ludmilla"
      },
      {
        title_alt: "Album de funk do Mc Cabelinho",
        img_src: "funk/mc-cabelinho-2.webp",
        div2_name: "LITTLE HAIR",
        span: "Mc Cabelinho"
      }

    ]
  },
  {
    id: 7,
    href: "MPB",
    title: "Ir para MPB",
    name: "MPB",
    album: [
      {
        title_alt: "Album de MPB do Djavan",
        img_src: "mpb/djavan.webp",
        div2_name: "Perfil",
        span: "Djavan"
      },
      {
        title_alt: "Album de MPB do Gonzaguinha",
        img_src: "mpb/gonzaguinha.webp",
        div2_name: "Meus Momentos",
        span: "Gonzaguinha"
      },
      {
        title_alt: "Album de MPB da Elis Regina",
        img_src: "mpb/elis-regina.webp",
        div2_name: "Perfil",
        span: "Elis Regina"
      },
      {
        title_alt: "Album de MPB do Belchior",
        img_src: "mpb/belchior.webp",
        div2_name: "Auto-Retrato",
        span: "Belchior"
      },
      {
        title_alt: "Album de MPB do Nando Reis",
        img_src: "mpb/nando-reis.webp",
        div2_name: "Nando Reis & Os Infernais (Ao Vivo)",
        span: "Nando Reis"
      },
      {
        title_alt: "Album de MPB do Zé Ramalho",
        img_src: "mpb/ze-ramalho.webp",
        div2_name: "Antologia Acústica - 20 Anos",
        span: "Zé Ramalho"
      },
      {
        title_alt: "Album de MPB do Chico Buarque",
        img_src: "mpb/chico-buarque.webp",
        div2_name: "As Cidades",
        span: "Chico Buarque"
      },
      {
        title_alt: "Album de MPB do Fagner",
        img_src: "mpb/fagner.webp",
        div2_name: "Perfil",
        span: "Fagner"
      }

    ]
  },
  {
    id: 2,
    href: "Rap",
    title: "Ir para Rap",
    name: "Rap",
    album: [
      {
        title_alt: "Album de rap do Sabotage",
        img_src: "rap/sabotage.webp",
        div2_name: "Rap É Compromisso",
        span: "Sabotage"
      },
      {
        title_alt: "Album de rap de Racionais",
        img_src: "rap/racionais.webp",
        div2_name: "Nada Como Um Dia Após O Outro Dia",
        span: "Racionais MC's"
      },
      {
        title_alt: "Album de rap do 2Pac",
        img_src: "rap/greatest-hits.webp",
        div2_name: "Greatest Hits",
        span: "2Pac"
      },
      {
        title_alt: "Album de rap do Drake",
        img_src: "rap/drake.webp",
        div2_name: "Scorpion",
        span: "Drake"
      },
      {
        title_alt: "Album de rap do Filipe Ret",
        img_src: "rap/filipe-ret.webp",
        div2_name: "Imaterial",
        span: "Filipe Ret"
      },
      {
        title_alt: "Album de rap do Djonga",
        img_src: "rap/djonga.webp",
        div2_name: "O Menino Que Queria Ser Deus",
        span: "Djonga"
      },
      {
        title_alt: "Album de rap do 50 Cent",
        img_src: "rap/50-cent.webp",
        div2_name: "Get Rich Or Die Tryin",
        span: "50 Cent"
      },
      {
        title_alt: "Album de rap do Eminem",
        img_src: "rap/eminem.webp",
        div2_name: "Curtain Call: The Hits (Deluxe Edition)",
        span: "Eminem"
      }

    ]
  },
  {
    id: 6,
    href: "Rock",
    title: "Ir para Rock",
    name: "Rock",
    album: [
      {
        title_alt: "Album de rock do Linkin Park",
        img_src: "rock/linkin-park.webp",
        div2_name: "Greatest Hits",
        span: "Linkin Park"
      },
      {
        title_alt: "Album de rock do Elvis Presley",
        img_src: "rock/elvis-presley.webp",
        div2_name: "Hitstory",
        span: "Elvis Presley"
      },
      {
        title_alt: "Album de rock do Guns N' Roses",
        img_src: "rock/guns-n-roses.webp",
        div2_name: "Destruction, Lies: The Road To Illusion",
        span: "Guns N' Roses"
      },
      {
        title_alt: "Album de rock do Bon Jovi",
        img_src: "rock/bon-jovi.webp",
        div2_name: "Cross Road",
        span: "Bon Jovi"
      },
      {
        title_alt: "Album de rock do The Beatles",
        img_src: "rock/the-beatles.webp",
        div2_name: "#1",
        span: "The Beatles"
      },
      {
        title_alt: "Album de rock do Metallica",
        img_src: "rock/metallica.webp",
        div2_name: "Live Shit : Binge And Purge",
        span: "Metallica"
      },
      {
        title_alt: "Album de rock do Raul Seixas",
        img_src: "rock/raul-seixas.webp",
        div2_name: "Maluco Beleza",
        span: "Raul Seixas"
      },
      {
        title_alt: "Album de rock do Legião Urbana",
        img_src: "rock/legiao-urbana.webp",
        div2_name: "Mais do Mesmo",
        span: "Legião Urbana"
      }

    ]
  },
  {
    id: 4,
    href: "Sertanejo",
    title: "Ir para Sertanejo",
    name: "Sertanejo",
    album: [
      {
        title_alt: "Album de sertanejo da Marília Mendonça",
        img_src: "sertanejo/marilia-mendonca.webp",
        div2_name: "Perfil",
        span: "Marília Mendonça"
      },
      {
        title_alt: "Album de sertanejo do Luan Santana",
        img_src: "sertanejo/luan-santana.webp",
        div2_name: "LUAN CITY (Ao Vivo)",
        span: "Luan Santana"
      },
      {
        title_alt: "Album de sertanejo de Jorge E Matheus",
        img_src: "sertanejo/jorge-e-matheus.webp",
        div2_name: "10 Anos",
        span: "Jorge e Matheus"
      },
      {
        title_alt: "Album de sertanejo de Maiara e Maraisa",
        img_src: "sertanejo/maiara-e-maraisa.webp",
        div2_name: "Patroas 35%",
        span: "Maiara e Maraisa"
      },
      {
        title_alt: "Album de sertanejo de Matheus e Kauan",
        img_src: "sertanejo/matheus-e-kauan.webp",
        div2_name: "Na Praia",
        span: "Matheus e Kauan"
      },
      {
        title_alt: "Album de sertanejo de Victor e Leo",
        img_src: "sertanejo/victor-e-leo.webp",
        div2_name: "Seleção Essencial",
        span: "Victor e Leo"
      },
      {
        title_alt: "Album de sertanejo do Gusttavo Lima",
        img_src: "sertanejo/gusttavo-lima.webp",
        div2_name: "O Embaixador",
        span: "Gusttavo Lima"
      },
      {
        title_alt: "Album de sertanejo de Henrique e Juliano",
        img_src: "sertanejo/henrique-e-juliano.webp",
        div2_name: "Novas Historias (Ao Vivo)",
        span: "Henrique e Juliano"
      }

    ]
  },
  {
    id: 1,
    href: "Trap",
    title: "Ir para Trap",
    name: "Trap",
    album: [
      {
        title_alt: "Album de trap do Matuê",
        img_src: "trap/matue.webp",
        div2_name: "Máquina do Tempo",
        span: "Matuê"
      },
      {
        title_alt: "Album de trap do Travis Scott",
        img_src: "trap/travis-scott.webp",
        div2_name: "ASTROWORLD",
        span: "Travis Scott"
      },
      {
        title_alt: "Album de trap do Lil Pump",
        img_src: "trap/lil-pump.webp",
        div2_name: "Lil Pump",
        span: "Lil Pump"
      },
      {
        title_alt: "Album de trap do A$AP Ferg",
        img_src: "trap/asap-ferg.webp",
        div2_name: "Trap Lord",
        span: "A$AP Ferg"
      },
      {
        title_alt: "Album de trap do Clipse",
        img_src: "trap/clipse.webp",
        div2_name: "Hell Hath No Fury",
        span: "Clipse"
      },
      {
        title_alt: "Album de trap do Chief Keef",
        img_src: "trap/chief-keef.webp",
        div2_name: "Finally Rich",
        span: "Chief Keef"
      },
      {
        title_alt: "Album de trap do A$AP Rocky",
        img_src: "trap/asap-rocky.webp",
        div2_name: "AT.LONG.LAST.A$AP",
        span: "A$AP Rocky"
      },
      {
        title_alt: "Album de trap do Young Thug",
        img_src: "trap/young-thug.webp",
        div2_name: "Slime Season 3",
        span: "Young Thug"
      }

    ]
  }
]

site_sections.map((section) => {
  let { href, title, name } = section
  siteSections.innerHTML += `<a href="#${href}" title="${title}">${name}</a>`
})

site_sections.sort((cat_a, cat_b) => cat_a.id - cat_b.id).map((section) => {
  let { href, name, album } = section
  main.innerHTML += `<div class="album-name" id="${href}">${name}</div>`
  main.innerHTML += `<section class="container-child-${href}" id="a"></section>`
  let contChild = document.querySelector(`.container-child-${href}`)
  album?.sort((a, b) => a.div2_name.localeCompare(b.div2_name)).map((song, position) => {
    console.log((album.length - 1) === position)
    let { title_alt, img_src, div2_name, span } = song
    contChild.innerHTML +=
      `<a href="#" title="${title_alt}">
          <div class="c">
            <img class="c-img" src="/static/img/${img_src}"
              alt="${title_alt}" />
            <div class="c-txt">${div2_name}</div>
            <span>${span}</span>
          </div>
        </a>`

  })
})

nav_user.addEventListener("click", event => {
  if (aside.classList.contains("open")) {
    aside.classList.remove("open")
  } else {
    aside.classList.add("open")
  };
})

main.addEventListener("click", event => {
  if (aside.classList.contains("open")) {
    aside.classList.remove("open")
  }
})