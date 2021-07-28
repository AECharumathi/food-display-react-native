import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Card } from 'react-native-elements'

import { fetchFoodList } from "../redux/actions/index";
import Cuisine from "./cuisine";

class MainPage extends Component {

    constructor(){
        super();
        this.state={
            menuList: [],
        }
    }

  componentDidMount() {
    this.props.fetchFoodList();
    this.setState({
        menuList: this.props.foodList
    })
  }

  static getDerivedStateFromProps(props, state) {
    if(props.foodList !== state.menuList && state.menuList.length === 0 ){
        //Change in props
        return{
            menuList: props.foodList
        };
    }
    return null; // No change to state
}
  showVegan = () => {
      let onlyVegan = this.props.foodList.filter((item)=>item.type === "Vegan")
        this.setState({
            menuList: onlyVegan
        });
  }

  showFatFree = () => {
      let onlyFatFree = this.props.foodList.filter((item)=>item.type === "Fat free")
        this.setState({
            menuList: onlyFatFree
        });
  }

  showAll = () => {
        this.setState({
            menuList: this.props.foodList
        });
  }

  render() {
    return (
      <View style={styles.container}>
        <Card>
          <Card.Title>MULTI CUISINE MENU</Card.Title>
          <Card.Divider />
            <View style={styles.filter}>
                <Text style={styles.filterText} onPress={()=>this.showAll()}>HOME</Text>
                <Text style={styles.filterText} onPress={()=>this.showVegan()}>Vegan</Text>
                <Text style={styles.filterText} onPress={()=>this.showFatFree()}>Fat Free</Text>
            </View>
            <ScrollView>
          <Cuisine menuList={this.state.menuList} />
          </ScrollView>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:"90%"
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  filter:{
      display:"flex",
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 10,
      backgroundColor: "#EDE7F6",
      height:30,
      alignItems: "center",
  },
  filterText: {
    color:"#6A1B9A",
    fontWeight: "bold"
  },
  name: {
      textAlign: "left"
  }
});

const mapStateToProps = (state) => ({
  foodList: state.foodList.data,
  requesting: state.foodList.requesting,
  error: state.foodList.error,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchFoodList: fetchFoodList,
    },
    dispatch
  );
};

MainPage.prototypes = {
  fetchFoodList: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
