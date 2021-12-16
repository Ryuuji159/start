import {readable} from "svelte/store";

const defaultGroups = [
  {
    name: 'General',
    links: [
      {name: 'twitter', link: 'https://twitter.com'},
      {name: 'youtube', link: 'https://youtube.com'},
      {name: 'hacker_news', link: 'https://news.ycombinator.com'},
      {name: 'lobsters', link: 'https://lobste.rs'},
      {name: 'whatsapp', link: 'https://web.whatsapp.com'},
    ]
  },
  {
    name: 'Inacap',
    links: [
      {name: 'home', link: 'https://www.inacap.cl/'},
      {name: 'intranet', link: 'https://adfs.inacap.cl/adfs/ls/?wtrealm=https://siga.inacap.cl/sts/&wa=wsignin1.0&wreply=https://siga.inacap.cl/sts/&wctx=https%3a%2f%2fadfs.inacap.cl%2fadfs%2fls%2f%3fwreply%3dhttps%3a%2f%2fwww.inacap.cl%2ftportalvp%2fintranet-alumno%26wtrealm%3dhttps%3a%2f%2fwww.inacap.cl%2f'},
      {name: 'aprendizaje', link: 'https://www.inacap.cl/tportalvp/procesar_link.php?url=https://lms.inacap.cl/auth/saml2/login.php?wants=https://lms.inacap.cl/my/'},
    ]
  },
  {
    name: 'Reddit',
    links: [
      {name: 'frontpage', link: 'https://reddit.com'},
      {name: 'r/unixporn', link: 'https://reddit.com/r/unixporn'},
      {name: 'r/piracy', link: 'https://reddit.com/r/piracy'},
      {name: 'r/roms', link: 'https://reddit.com/r/roms'},
      {name: 'r/chile', link: 'https://reddit.com/r/chile'},
    ]
  },
  {
    name: '4chan',
    links: [
      {name: '/g/', link: 'https://4chan.org/g/catalog'},
      {name: '/wg/', link: 'https://4chan.org/wg/catalog'},
      {name: '/v/', link: 'https://4chan.org/v/catalog'},
      {name: '/x/', link: 'https://4chan.org/x/catalog'},
    ]
  },
]

export const groups = readable(defaultGroups, () => {}, ()=>{})