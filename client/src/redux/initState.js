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
        color: ['g', 'b'],
        photoCount: 24
      }
    }
  }
}
export default initState
