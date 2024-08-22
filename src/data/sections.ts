export enum ESubTitle {
  PERSONAL_PROJECT = 'Personal Project',
  HOBBY = 'Hobby'
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
    name: 'FINANCE_TRACKER',
    title: 'Finance Tracker',
    subTitle: ESubTitle.PERSONAL_PROJECT,
    color: '#C0D684',
    offsetY: false,
    xRange: [325, 400]
  },
  {
    name: 'GAME_DEV',
    title: 'Game Development',
    subTitle: ESubTitle.HOBBY,
    color: '#4E8BBF',
    offsetY: true,
    xRange: [125, 225]
  },
  {
    name: 'PVP',
    title: 'PvP Health',
    subTitle: ESubTitle.PERSONAL_PROJECT,
    color: '#2C9D5A',
    offsetY: true,
    xRange: [-50, 25]
  }
]