const initState = {
  loader: false,
  error: {
    status: false,
    errorMessage: '',
  },
  auth: false,
  cars:
  {
    m: {
      e: {
        disks: ['d1'],
        color: ['b', 'r'],
        linkDisksSmall: ['discs/m-e-d1-DEZENT-TH-DARK-small.png'],
        linkDisksBig: ['discs/m-e-d1-DEZENT-TH-DARK-big.png'],
        nameDisks: ['DEZENT-TH-DARK'],
        photoCount: 24
      }
    },
    v: {
      g: {
        disks: ['d1', 'd2', 'd3'],
        linkDisksSmall: ['', 'discs/g-d2-DEZENT-TA-SILVER-small.png', 'discs/g-d3-DOTZ-REVVO-DARK-small.png'],
        linkDisksBig: ['', 'discs/g-d2-DEZENT-TA-SILVER-big.png', 'discs/g-d3-DOTZ-REVVO-DARK-big.png'],
        nameDisks: ['', 'DEZENT-TA-SILVER', 'DOTZ-REVVO-DARK'],
        color: ['g', 'b', 'r'],
        photoCount: 24
      }
    }
  },
  basket: [],
  config: false,
}
export default initState
