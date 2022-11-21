class Card extends HTMLElement {
  render() {
    this.innerHTML = `
    <img src="${this.imageUrl}" alt="restaurant photo" />
    <div class="card-title"><p>${this.restaurantName}, ${this.place}</p></div>
    <div class="card-content-container">
      <div class="rating">
        <h1>${this.rating}</h1>
        <div><p>Rating</p></div>
      </div>
      <p class="description">
        ${this.description.slice(0, 71)}...
      </p>
    </div>`;
  }

  connectedCallback() {
    this.imageUrl = this.getAttribute("image") || null;
    this.restaurantName = this.getAttribute("restaurant-name") || null;
    this.place = this.getAttribute("place") || null;
    this.rating = this.getAttribute("rating") || null;
    this.description = this.getAttribute("description") || null;

    this.render();
  }
}

customElements.define("card-div", Card);
