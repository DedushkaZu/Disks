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
        linkDisksSmall: ['', 'discs/g-d2-o-DOTZ-MISANO-GREY-small.png', 'discs/g-d3-DOTZ-REVVO-DARK-small.png'],
        linkDisksBig: ['', 'discs/g-d2-o-DOTZ-MISANO-GREY-big.png', 'discs/g-d3-DOTZ-REVVO-DARK-big.png'],
        color: ['g', 'b'],
        photoCount: 24
      }
    }
  }
}
export default initState
