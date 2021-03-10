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
        disks: ['d1', 'd2'],
        color: ['b', 'r'],
        linkDisksSmall: ['discs/m-e-d1-DEZENT-TH-DARK-small.png', 'discs/m-e-d2-AEZ-PANAMA-DARK-small.png'],
        linkDisksBig: ['discs/m-e-d1-DEZENT-TH-DARK-big.png', 'discs/m-e-d2-AEZ-PANAMA-DARK-big.png'],
        nameDisks: ['DEZENT TH DARK', 'AEZ PANAMA DARK'],
        photoCount: 24
      }
    },
    v: {
      g: {
        disks: ['d1', 'd2', 'd3'],
        linkDisksSmall: ['', 'discs/g-d2-DEZENT-TA-SILVER-small.png', 'discs/g-d3-DOTZ-REVVO-DARK-small.png'],
        linkDisksBig: ['', 'discs/g-d2-DEZENT-TA-SILVER-big.png', 'discs/g-d3-DOTZ-REVVO-DARK-big.png'],
        nameDisks: ['', 'DEZENT TA SILVER', 'DOTZ REVVO DARK'],
        color: ['g', 'b', 'r'],
        photoCount: 24
      }
    },
    b: {
      z: {
        disks: ['d1'],
        linkDisksSmall: ['discs/b-z-d1-DOTZ-LAGUNASECA-DARK-small.png'],
        linkDisksBig: ['discs/b-z-d1-DOTZ-LAGUNASECA-DARK-big.png'],
        nameDisks: ['DOTZ LAGUNASECA DARK'],
        color: ['b'],
        photoCount: 23
      }
    }
  },
  basket: [],
  config: false,
}
export default initState
