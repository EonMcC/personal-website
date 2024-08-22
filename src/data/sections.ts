export enum ESubTitle {
  ME = '',
  PERSONAL_PROJECT = 'Personal Project',
  HOBBY = 'Hobby',
  CAREER = 'Career Employment',
  TODO = 'TODO'
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
    name: 'STOP',
    title: 'Under Construction',
    subTitle: ESubTitle.TODO,
    color: '#EB5757',
    offsetY: false,
    xRange: [-550, -500]
  }
]