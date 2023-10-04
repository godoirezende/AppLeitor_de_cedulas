import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const BemVindo = () => {
  const navigation = useNavigation();

  const handleScreenPress = () => {
    navigation.navigate("Camera");
  };

  return (
    <TouchableOpacity onPress={handleScreenPress} style={styles.container}>
      <ImageBackground
        source={require("../assets/fundo.png")} // Substitua pelo caminho real da sua imagem
        style={styles.background}
      >
        {/* Seu conteúdo aqui */}
        <View style={styles.container}>
          {/* Fundo Azul */}
          <View style={styles.background}>
            <Image
              source={require("../assets/logoldc.jpg")}
              style={styles.logo}
            />
          </View>

          {/* Texto de Boas-Vindas */}
          <Text style={styles.welcomeText}>
            Bem-Vindo ao Leitor de Cédulas!
          </Text>
          {/* Texto de Boas-Vindas */}
          <Text style={styles.startText}>Toque para prosseguir</Text>

          {/* Botão de Iniciar */}
          <View style={styles.buttonContainer}>{}</View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    borderRadius: 50,
    marginTop: 20,
  },
  welcomeText: {
    fontSize: 34,
    fontWeight: "bold",
    marginTop: 20,
    alignItems: "center",
    color: "#00CED1",
  },
  startText: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 7,
    alignItems: "center",
    color: "#00CED1",
  },
});

export default BemVindo;
