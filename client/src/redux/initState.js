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
        disks: ['d1','d2'],
        color: ['g', 'o'],
        photoCount: 24
      }
    }
  }
}
export default initState
