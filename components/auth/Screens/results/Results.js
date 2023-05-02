import * as React from "react";
import { useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  Image,
  FlatList,
  Modal,
} from "react-native";
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";
import style from "./style";
import { white } from "../../../../themes/colors";
import { ScrollView } from "react-native-gesture-handler";
import OpenURLButton from "./Url";

export default function Results({ navigation }) {
  const apiData = useSelector((store) => store.data);
  const apiDataLoading = useSelector((store) => store.isLoaded);
  const [index, setIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const loadingConditions = apiData.hits === undefined || apiDataLoading;
  while (loadingConditions) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <ScrollView>
      <SafeAreaView
        style={{
          flex: 1,
          paddingHorizontal: 20,
          backgroundColor: white,
        }}
      >
        <View style={styles.container}>
          <Text style={style.Title}>Results</Text>
          <Text style={style.smallText}>
            Click each title to view the recipe
          </Text>
          <IconButton
            icon={(props) => <Icon name="account-settings" {...props} />}
            onPress={() => navigation.navigate("Settings")}
            style={style.AccountBtn}
          />
          <View>
            {apiData === undefined ? (
              <Text>Loading...</Text>
            ) : apiData.hits.length === 0 ? (
              <Text>No results found</Text>
            ) : (
              <FlatList
                numColumns={2}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  marginTop: 10,
                  paddingBottom: 50,
                }}
                data={apiData.hits}
                renderItem={({ item, index }) => (
                  <Pressable
                    key={index}
                    style={{ margin: 1, marginLeft: 15, flex: 1 }}
                    onPress={() => {
                      setIndex(index);
                      setModalVisible(true);
                    }}
                  >
                    <View style={{}}>
                      {/* <View style={{ alignItems: "flex-end" }}>
                              <Ionicons name="star" color="#ffd700" size={20} />
                            </View> */}

                      <Image
                        style={{
                          //aspectRatio: 2 / 3,
                          height: 160,
                          width: 160,
                          borderRadius: 6,
                        }}
                        source={{ uri: item.recipe.image }}
                      />
                    </View>
                    <Text
                      style={{
                        textAlign: "center",
                        margin: 10,
                        fontWeight: "bold",
                        fontSize: "18",
                      }}
                    >
                      {item.recipe.label}
                    </Text>
                  </Pressable>
                )}
                // keyExtractor={item => item.recipe.uri}
              />
              // );
              // })
            )}
          </View>
        </View>
        <View style={style.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={style.centeredView}>
              <View style={style.modalView}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{ flex: 1, height: 1, backgroundColor: "black" }}
                  />
                  <View>
                    <Text
                      style={{
                        width: 200,
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#B42306",
                      }}
                    >
                      {apiData.hits[index].recipe.label}
                    </Text>
                  </View>
                  <View
                    style={{ flex: 1, height: 1, backgroundColor: "black" }}
                  />
                </View>
                <View
                  style={{
                    height: 430,
                    width: 380,
                    borderRadius: 7,
                    borderColor: "#B42306",
                    borderWidth: 0.5,
                    padding: 15,
                    margin: 10,
                  }}
                >
                  <Text style={style.modalText}>
                    Recipe Details {"\n"}Calories {"\n"}{" "}
                    {Math.round(apiData.hits[index].recipe.calories)}
                  </Text>
                  <Text style={style.modalText}>
                    Serving Size {"\n"} {apiData.hits[index].recipe.yield}
                  </Text>
                  <Text style={style.modalText}>Ingredients</Text>

                  {apiData.hits[index].recipe.ingredients.map((i, index) => {
                    return <Text>{`\u2023 ${i.text}`}</Text>;
                  })}

                  <Text style={style.modalText}>
                    {"\n"}Directions {"\n"}
                    <OpenURLButton url={apiData.hits[index].recipe.url}>
                      {apiData.hits[index].recipe.url}
                    </OpenURLButton>
                  </Text>
                </View>

                <Pressable
                  style={[style.button, style.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={style.textStyle}>Close Window</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
