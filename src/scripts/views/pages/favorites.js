const Favorites = {
  async render() {
    return `
    <div class="content">
      <h1 id="head-title-restaurant">Favorites</h1>
      <section id="card-container"></section>
    </div>  
    `;
  },

  async afterRender() {},
};

export default Favorites;
