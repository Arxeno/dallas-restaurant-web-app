const NowAvailable = {
  async render() {
    return `
    <img
        id="hero-image"
        src="./images/heros/hero-image_1.jpg"
        alt="people cooking"
    />
    <div class="content">
      <h1 id="head-title-restaurant">Explore The World of Food</h1>
      <section id="card-container"></section>
    </div>
    `;
  },

  async afterRender() {
    // after render goes here
  },
};

export default NowAvailable;
