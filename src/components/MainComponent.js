import React, { Component } from "react";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";

import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import DishDetail from "./DishDetailComponent";
import { connect } from "react-redux";
import {
  postComment,
  fetchDishes,
  fetchComments,
  fetchPromos,
} from "../redux/ActionCreators";
//doi addComment thanh postComment, addComment se khong con co the truy cap truc tiep tu MainCompo nua
//Thay vao do neu muon them nhan xet, ban se dang binh luan, vi vay ta dung postComment. Ban than addComment
//se duoc postComment su dung de them vao co so du lieu

//import { actions } from "react-redux-form";

//withRouter: dinh cau hinh React Component de ket noi voi Redux
const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

//fetchDishes ở đây là 1 thunk, do đó chúng ta có thể phân phối bằng cách sử dụng dispatch dể thực hiện công việc dispatch
//ta cần ánh xạ nó trong mapDispatchToProps để dispatch dishes trở nên khả dụng cho Main Component mà ta sử dụng. Vì vậy trong Main, ta cần fetch các dishes
//Vậy ta fetch các dishes ở đâu. Ta nhờ đến lifectycle method là componentDidMount
const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) =>
    dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  fetchComments: () => {
    dispatch(fetchComments());
  },
  fetchPromos: () => {
    dispatch(fetchPromos());
  },
});

class Main extends Component {
  constructor(props) {
    super(props);
  }

  //Bất cứ thứ gì chúng ta đưa vào đây sẽ được ràng buộc sẽ được gọi hoặc sẽ được
  //thực thi ngay sau khi component này được gắn vào view ứng dụng. Vì vậy ngay tại
  //Gọi hàm fetchDishes, gọi nó là index, điều xảy ra là khi Main được gắn vào view của ứng dụng React
  //Tại thời điểm sau khi được gắn kết. fetchDished sẽ được gọi là kết quả là trong lần call để lấy các món ăn
  // và sau đó tải nó vào redux store và sau khi điều đó trở nên khả dụng, sau đó nó sẽ có sẵn trong ứng dụng
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={
            this.props.promotions.promotions.filter(
              (promo) => promo.featured
            )[0]
          }
          promosLoading={this.props.promotions.isLoading}
          promosErrMess={this.props.promotions.errMess}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.props.dishes.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}
        />
      );
    };

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            path="/aboutus"
            component={() => <About leaders={this.props.leaders} />}
          />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.props.dishes} />}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

/* //--Lab 4.1
import React, { Component } from "react";
import Menu from "./MenuComponent";
import { Navbar, NavbarBrand } from "reactstrap";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetailComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">
              Ristorante Con Fusion - Exercise 1
            </NavbarBrand>
          </div>
        </Navbar>
        <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
        />
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        />
      </div>
    );
  }
}

export default Main;
*/
