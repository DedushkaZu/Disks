import './Carousel.css';

const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active size">
            <img src={`https://wallpaperstock.net/mercedes-benz-s-klasse-side-angle-speed-wallpapers_43531_1366x768.jpg`} className="d-block w-100 img-size" alt="car" />
          </div>
          <div className="carousel-item size">
            <img src={`https://www.nastol.com.ua/pic/201608/1366x768/nastol.com.ua-184726.jpg`} className="d-block w-100 img-size" alt="car" />
          </div>
          <div className="carousel-item size">
            <img src={`http://vw.carwallpapers.ru/volkswagen/golf/2013-gtd-5d/Volkswagen-Golf-GTD-5door-2013-1366x768-015.jpg`} className="d-block w-100 img-size" alt="car" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Carousel;
