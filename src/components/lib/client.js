const Client = {
  onStart() {
    // eslint-disable-next-line
    console.log('router started')
  },
  onNavigate(e) {
    const route = this.routes.find(r => e.$tools.match(e.location.path, r.path))
    if (route) {
      this.state.route = route
    }
  },
  onStop() {
    // eslint-disable-next-line
    console.log('router stopped')
  }
}

module.exports = Client
