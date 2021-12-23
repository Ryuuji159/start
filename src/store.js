import {readable} from "svelte/store";

const defaultGroups = [
  {
    name: 'General',
    links: [
      {name: 'twitter', href: 'https://twitter.com'},
      {name: 'youtube', href: 'https://youtube.com'},
      {name: 'hacker_news', href: 'https://news.ycombinator.com'},
      {name: 'lobsters', href: 'https://lobste.rs'},
      {name: 'whatsapp', href: 'https://web.whatsapp.com'},
    ]
  },
  {
    name: 'Inacap',
    links: [
      {name: 'home', href: 'https://www.inacap.cl/'},
      {name: 'intranet', href: 'https://adfs.inacap.cl/adfs/ls/?wtrealm=https://siga.inacap.cl/sts/&wa=wsignin1.0&wreply=https://siga.inacap.cl/sts/&wctx=https%3a%2f%2fadfs.inacap.cl%2fadfs%2fls%2f%3fwreply%3dhttps%3a%2f%2fwww.inacap.cl%2ftportalvp%2fintranet-alumno%26wtrealm%3dhttps%3a%2f%2fwww.inacap.cl%2f'},
      {name: 'aprendizaje', href: 'https://www.inacap.cl/tportalvp/procesar_link.php?url=https://lms.inacap.cl/auth/saml2/login.php?wants=https://lms.inacap.cl/my/'},
    ]
  },
  {
    name: 'Reddit',
    links: [
      {name: 'frontpage', href: 'https://reddit.com'},
      {name: 'r/unixporn', href: 'https://reddit.com/r/unixporn'},
      {name: 'r/piracy', href: 'https://reddit.com/r/piracy'},
      {name: 'r/roms', href: 'https://reddit.com/r/roms'},
      {name: 'r/chile', href: 'https://reddit.com/r/chile'},
    ]
  },
  {
    name: '4chan',
    links: [
      {name: '/g/', href: 'https://4chan.org/g/catalog'},
      {name: '/wg/', href: 'https://4chan.org/wg/catalog'},
      {name: '/v/', href: 'https://4chan.org/v/catalog'},
      {name: '/x/', href: 'https://4chan.org/x/catalog'},
    ]
  },
  {
    name: 'Home',
    links: [
      {name: 'status', href: 'http://192.168.1.200:19999'},
      {name: 'torrent', href: 'http://192.168.1.200:8080'},
    ]
  },
]

export const groups = readable(defaultGroups, () => {}, ()=>{})
