

function Header() {
    return (
      <div classNameName="header">
            <div className="header__container">
                <nav className="navbar navbar_header">
                    <div className="header__wrapper">
                        <p className="header__logo">Shop<span className="header__logo-black">per</span></p>

                        <label className="header__form-search" for="">
                        <input placeholder="Search Items" type="search" className="header__input-field" />
                        </label>

                        <p className="header__basket-info">0 items Added</p>
                        <button className="header__authorization">Login or Sign Up</button>
                    </div>

                    <ul className="menu">
                        <li><a className="menu__link" href="#">Features</a></li>
                        <li><a className="menu__link" href="#">Products</a></li>
                        <li><a className="menu__link" href="#">Blog</a></li>
                        <li><a className="menu__link" href="#">About</a></li>
                    </ul>

                </nav>

            <div className="about">

                <div className="about__descr">
                <h1>Discover Our Latest Products</h1>
                <p className="about__descr_text">
                    Lorem ipsum is a placeholder text commonly used to demonstrate the
                    visual form of a product
                </p>
                <div className="about__descr__container">
                    <button className="btn-buy about__descr_btn ">Buy Now</button>
                </div>
                <div className="about__reviews">
                    <div className="icons">
                    <img className="icons__face icon1" src="./img/Ellipse 7.png" alt="" />
                    <img className="icons__face icon2" src="./img/Ellipse 9.png" alt="" />
                    <img className="icons__face icon3" src="./img/Ellipse 11.png" alt="" />
                    <img className="icons__face icon4" src="./img/Ellipse 13.png" alt="" />
                    </div>
                    <p className="about__reviews_descr">15k Well <br />Reviews</p>
                </div>
                </div>


                <div className="about__interactive">
                <div className="play">

                    <img className="play__img" src="./img/image 11.png" alt="" />

                    <button className="play__text">Play Video</button>
                </div>

                <div className="beets">
                    <p className="beets__text">
                    <span className="beets__char1">R</span>
                    <span className="beets__char2">e</span>
                    <span className="beets__char3">d</span>

                    <span className="beets__char5">B</span>
                    <span className="beets__char6">e</span>
                    <span className="beets__char7">a</span>
                    <span className="beets__char8">t</span>
                    <span className="beets__char9">s</span>

                    <span className="beets__char11">M</span>
                    <span className="beets__char12">I</span>
                    <span className="beets__char13">9</span>
                    <span className="beets__char14">c</span>
                    <span className="beets__char15">2</span>
                    <span className="beets__char16">z</span>
                    <span className="beets__char17">m</span>
                    <span className="beets__char18">/</span>
                    <span className="beets__char19">a</span>
                    </p>
                    <img className="star star__first" src="/img/Star 1.png" alt="star"/>
                    <img className="star star__second" src="/img/Star 1.png" alt="star"/>

                    <div className="beets__img-price">
                    <img className="beets__img" src="./img/image 6.png" alt="" />
                    <p className="beets__price">50$</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
      </div>
    )
  }

  export default Header;