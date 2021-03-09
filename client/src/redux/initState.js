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
      s: {
        disks: 2,
        color: ['black', 'white'],
        photoCount: 20
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
}
export default initState
