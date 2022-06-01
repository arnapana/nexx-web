import { atom } from 'recoil'

const STORE_APP = 'STORE_APP'

export const appAppState = atom({
  key: STORE_APP,
  default: {
    anouncement: '',
    anouncementStatus: false,
    facebookPixel: '',
    facebookPixelStatus: false,
    googleAnalyze: '',
    googleAnalyzeState: false,
    pdpa: '',
    pdpaStatus: false
  }
})
