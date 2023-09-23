import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";

export default class TransactionScreen extends Component {
  //Desafio 1: Definir os estados iniciais em nosso App:
  constructor(props){

  }

  //Desafio 2: Criar a função para solicitar permissão para a câmera

  //Desafio 5: Criar função para digitalização concluída

  render() {
    //Desafio 3: Chamar os estados iniciais
    

    //Desafio 4: Depois de View ANTES TouchableOpacity exibir um texto "Solicitar permissão da câmera?"
    return (
      <View style={styles.container}>
        <TouchableOpacity style = {styles.button}>
          <Text style = {styles.buttonText}> Digitalizar QRCode </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  text: {
    color: "#ffff",
    fontSize: 30
  },
  button: {
    width: "43%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F48D20",
    borderRadius: 15
  },
  buttonText: {
    fontSize: 15,
    color: "#FFFFFF"
  }
});