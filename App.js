import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';
import CartItem from './src/components/CartItem';

const pizzaData = [
  {
    id: 1,
    text: "Сырная",
    image: "https://dodopizza-a.akamaihd.net/static/Img/Products/1e3e653d3e9b4b77ae0bdacf8827f6f6_292x292.jpeg",
    price: 390
  }, {
    id: 2,
    text: "Пепперони",
    image: "https://dodopizza-a.akamaihd.net/static/Img/Products/bf3377af7cfe4962915668d14bb8d0f4_292x292.jpeg",
    price: 360
  }, {
    id: 3,
    text: "Микс",
    image: "https://dodopizza-a.akamaihd.net/static/Img/Products/9f4fe925ef56492c93eb1d95254ad29d_292x292.jpeg",
    price: 540
  }, {
    id: 4,
    text: "Ветчина",
    image: "https://dodopizza-a.akamaihd.net/static/Img/Products/aa845b6e841241fbbff1a770b3ad3103_292x292.jpeg",
    price: 400
  }, {
    id: 5,
    text: "Гавайская",
    image: "https://dodopizza-a.akamaihd.net/static/Img/Products/5bf1c77b3ff44f93bb01c840ab35b033_292x292.jpeg",
    price: 350
  }, {
    id: 6,
    text: "Чизбургер",
    image: "https://dodopizza-a.akamaihd.net/static/Img/Products/3bc057459afb4b2b8f2781bd1895b3a9_292x292.jpeg",
    price: 490
  },
  {
    id: 7,
    text: "Супер микс",
    image: "https://dodopizza-a.akamaihd.net/static/Img/Products/a02280d5dd9342f7925538752be9b521_292x292.jpeg",
    price: 380
  }, {
    id: 8,
    text: "Пирог",
    image: "https://dodopizza-a.akamaihd.net/static/Img/Products/c069fc6e169c4d4eae80e319b1d979e7_292x292.jpeg",
    price: 300
  },]


const App = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={"#fff"} barStyle={'dark-content'} />
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Магазин пиццы</Text>
        <Text style={styles.textDesc}>Некое описание {"\n"}длиною в 2 строки</Text>

        <View style={styles.imgContainer}>
          {pizzaData.map(pizza =>
            <CartItem key={pizza.id} text={pizza.text} image={pizza.image} price={pizza.price} />
          )}
        </View>

        <TouchableOpacity style={styles.btn} onPress={() => { Alert.alert("Вы нажали", "... заказать") }}>
          <Text style={styles.orderText}>Заказать</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  text: {
    color: "#000",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 15
  },
  textDesc: {
    color: "gray",
    fontSize: 16,
  },
  imgContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  btn: {
    backgroundColor: "rgb(255, 105, 0)",
    padding: 12,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 3
  },
  orderText: {
    color: "white",
    fontWeight: '400',
    fontSize: 20
  }
});

export default App;
