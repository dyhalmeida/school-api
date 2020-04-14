class HomeController {
  async index(req, res) {
    return res.json({
      message: 'School Api is running',
    });
  }
}

export default new HomeController();
