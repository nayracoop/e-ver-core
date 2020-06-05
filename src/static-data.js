import moment from 'moment'

const date = moment()

export const event = {
  name: 'e-ver demo app',
  startDate: '2020-07-06',
}

export const talks = [
  {
    id: 1,
    title: 'Charla matutina',
    details:
      'Excepteur sint occaecat cupidatat, dolore eu fugiat nulla pariatur non proident. Dolorem sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et fugiat nulla pariatur dolore magna aliqua. Irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    summary: 'Elit esse cillum dolore eu fugiat nulla pariatur.',
    begin: date.format(),
    duration: 120,
    video: {
      URI: 'https://www.youtube.com/watch?v=j8NTPQR0lc8',
      comments:
        'Hola este es un comentario que tiene que ver con el video',
      autoplay: false,
      type: 'live',
    },
    speakers: [
      {
        id: 1,
        name: 'Tulia Caradhro',
        bio:
          'Nam tempor utamur gubergren no. Pri quas audiam virtute ut, case utamur fuisset eam ut, dolor in reprehenderit iisque accommodare an eam. Reque blandit qui eu, cu vix nonumy volumus. Intellegam fugiat nulla pariatur id usu, vide oporteat vix eu, id illud principes has.',
        company: 'Second Life',
        avatar: 'avatar.png',
        role: 'Archiduki',
      },
    ],
    allowsComments: true,
  },
  {
    id: 2,
    title: 'Café, té y medialunas',
    details:
      'sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    summary:
      'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    begin: date.clone().add(2, 'hour').format(),
    duration: 60,
    video: {
      URI: 'https://www.youtube.com/watch?v=-smN6ZUHzgk',
      comments:
        'Hola este es un comentario que tiene que ver con el video',
      autoplay: false,
      type: 'recording',
    },
    speakers: [
      {
        id: 2,
        name: 'Paco Amd Plus',
        bio:
          'Nam tempor utamur gubergren no. Pri quas audiam virtute ut, case utamur fuisset eam ut, dolor in reprehenderit iisque accommodare an eam. Reque blandit qui eu, cu vix nonumy volumus. Intellegam fugiat nulla pariatur id usu, vide oporteat vix eu, id illud principes has.',
        company: 'Third Life',
        avatar: 'avatar.png',
        role: 'Chief Developer',
      },
    ],
    allowsComments: true,
  },
  {
    id: 3,
    title: 'Pohétk Musicae',
    details:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.',
    summary: 'Consectetur adipiscing elit, sed do eiusmod tempor',
    begin: date.clone().add(3, 'hour').format(),
    duration: 30,
    video: {
      URI: 'https://www.youtube.com/watch?v=HcIOnyQPfa8',
      comments: 'Nop aado komment das ist',
      autoplay: false,
      type: 'recording',
    },
    speakers: [
      {
        id: 2,
        name: 'Paco Amd Plus',
        bio:
          'Nam tempor utamur gubergren no. Pri quas audiam virtute ut, case utamur fuisset eam ut, dolor in reprehenderit iisque accommodare an eam. Reque blandit qui eu, cu vix nonumy volumus. Intellegam fugiat nulla pariatur id usu, vide oporteat vix eu, id illud principes has.',
        company: 'Third Life',
        avatar: 'avatar.png',
        role: 'Chief Developer',
      },
      {
        id: 3,
        name: 'Dr Jeff Arzala',
        bio:
          "Është një fakt gjerësisht i njohur që lexuesi do të hutohet nga përmbajtja e një faqeje gjatë kohës që shikon dizenjimin. Arsyeja e përdorimit të Lorem Ipsum është sepse ka pak a shumë distribucion normal të gërmave, ndryshe nga përdorimi i 'Përmbajtja këtu, përmbajtja këtu', që e bën të ngjajë me një gjuhë të lexueshme. Shumë aplikacione publikimi dhe editorë tani përdorin Lorem Ipsum si tektin e tyre bazë, dhe një kërkim 'lorem ipsum' do të shfaqë shumë faqe interneti të pambaruara që në vend të përmbajtjes kanë pikërisht tekstin Lorem Ipsum. Shumë versione kanë evoluar gjatë viteve, disa në mënyë kazuale, disa me qëllim (humor dhe gjëra të ngjashme).",
        company: 'The Coop International',
        avatar: 'avatar.png',
        role: 'Sheik',
      },
    ],
    allowsComments: true,
  },
]

export const sponsors = [
  {
    id: 1,
    name: 'Fafa',
    logo: 'logo.svg',
    website: 'https://nayra.coop',
  },
  {
    id: 2,
    name: 'tutu',
    logo: 'logo.svg',
    website: 'https://nayra.coop',
  },
]
