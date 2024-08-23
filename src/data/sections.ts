export enum ESubTitle {
  ME = '',
  PERSONAL_PROJECT = 'Personal Project',
  HOBBY = 'Hobby',
  CAREER = 'Career Employment',
  EMPLOYMENT = 'Employment',
  TODO = 'TODO',
  EDUCATION = 'Education'
} 

export type Section = {
  name: string;
  title: string;
  subTitle: ESubTitle;
  color: string;
  offsetY: boolean;
  xRange: number[];
}

export const sections = [
  {
    name: 'ABOUT_ME',
    title: 'About me',
    subTitle: ESubTitle.PERSONAL_PROJECT,
    color: '#F2994A',
    offsetY: true,
    xRange: [325, 400]
  },
  {
    name: 'FINANCE_TRACKER',
    title: 'Finance Tracker',
    subTitle: ESubTitle.PERSONAL_PROJECT,
    color: '#C0D684',
    offsetY: false,
    xRange: [150, 200]
  },
  {
    name: 'GAME_DEV',
    title: 'Game Development',
    subTitle: ESubTitle.HOBBY,
    color: '#4E8BBF',
    offsetY: true,
    xRange: [-50, 25]
  },
  {
    name: 'PVP',
    title: 'PvP Health',
    subTitle: ESubTitle.PERSONAL_PROJECT,
    color: '#2C9D5A',
    offsetY: true,
    xRange: [-225, -150]
  },
  {
    name: 'AMI',
    title: 'AMI - Air Menzies International',
    subTitle: ESubTitle.CAREER,
    color: '#85AED7',
    offsetY: false,
    xRange: [-375, -250]
  },
  {
    name: 'POO_TIMER',
    title: 'Poo Timer',
    subTitle: ESubTitle.PERSONAL_PROJECT,
    color: '#6B401D',
    offsetY: true,
    xRange: [-550, -500]
  },
  {
    name: 'AFS',
    title: 'AFS',
    subTitle: ESubTitle.CAREER,
    color: '#F6A727',
    offsetY: false,
    xRange: [-700, -650]
  },
  {
    name: 'CODECLAN',
    title: 'CodeClan',
    subTitle: ESubTitle.EDUCATION,
    color: '#1A3445',
    offsetY: true,
    xRange: [-900, -825]
  },
  {
    name: 'FIRE',
    title: 'Scottish Fire Service',
    subTitle: ESubTitle.EMPLOYMENT,
    color: '#C41230',
    offsetY: false,
    xRange: [-1075, -1000]
  },
  {
    name: 'FAMILY',
    title: 'Family',
    subTitle: ESubTitle.ME,
    color: '#DFC72D',
    offsetY: true,
    xRange: [-1250, -1175]
  },
  {
    name: 'SGN',
    title: 'SGN - Scotia Gas Networks',
    subTitle: ESubTitle.CAREER,
    color: '#EA5A0B',
    offsetY: false,
    xRange: [-1400, -1350]
  },
  {
    name: 'VARIOUS',
    title: 'Various Jobs',
    subTitle: ESubTitle.EMPLOYMENT,
    color: '#A91888',
    offsetY: false,
    xRange: [-1550, -1500]
  },
  {
    name: 'STEVENSON',
    title: 'Stevenson College',
    subTitle: ESubTitle.EDUCATION,
    color: '#162A49',
    offsetY: true,
    xRange: [-1725, -1675]
  },
  {
    name: 'SCHOOL',
    title: 'School',
    subTitle: ESubTitle.EDUCATION,
    color: '#EB5757',
    offsetY: false,
    xRange: [-1875, -1825]
  },
  {
    name: 'BORN',
    title: 'Born',
    subTitle: ESubTitle.ME,
    color: '#F2994A',
    offsetY: false,
    xRange: [-2200, -1975]
  }
]