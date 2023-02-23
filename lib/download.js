module.exports = async (req, res) => {
  const { cod, format } = req.params
  const url = 'https://www.youtube.com/watch?v=' + cod

  // download the video
}