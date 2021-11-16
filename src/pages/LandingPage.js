import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

import { fetchPage } from "store/actions/page";
class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  componentDidMount() {
    document.title = "Housecation | Home";
    window.scrollTo(0, 0);

    if (!this.props.page.landingPage)
      this.props.fetchPage(`/landing-page`, "landingPage");
  }

  render() {
    const { page } = this.props;
   console.log(page);
    if (!page.hasOwnProperty("landingPage")) return null;
    

    console.log(page)
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={page.landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={page.landingPage.mostPicked}
        />
        <Categories data={page.landingPage.category} />
        <Testimony data={page.landingPage.testimonial} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(LandingPage);

// import React, { Component } from "react";

// import Header from "parts/Header";
// import Hero from "parts/Hero";
// import MostPicked from "parts/MostPicked";
// import Categories from "parts/Categories";
// import Testimony from "parts/Testimony";
// import Footer from "parts/Footer";

// import LandingPage from "json/landingPage.json";
// export default class LandingPage_ extends Component {
//   constructor(props) {
//     super(props);
//     this.refMostPicked = React.createRef();
//   }

//   render() {
//     return (
//       <>
//         <Header {...this.props}></Header>
//         <Hero refMostPicked={this.refMostPicked} data={LandingPage.hero} />
//         <MostPicked refMostPicked={this.refMostPicked} data={LandingPage.mostPicked} />
//         <Categories data={LandingPage.categories} />
//         <Testimony data={LandingPage.testimonial} />
//         <Footer />
//       </>
//     );
//   }
// }