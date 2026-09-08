import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function Login({ onLogin }) {

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const entrar = () => {

    // Futuramente você pode substituir isso
    // pela autenticação do Laravel.

    if (usuario && senha) {
      onLogin();
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={
        Platform.OS === "ios"
          ? "padding"
          : undefined
      }
    >

      <View style={styles.logo}>
        <Ionicons
          name="home"
          size={40}
          color="#ffffff"
        />
      </View>

      <Text style={styles.titulo}>
        Smart Room
      </Text>

      <Text style={styles.subtitulo}>
        Gerenciamento inteligente de salas
      </Text>

      <View style={styles.form}>

        <Text style={styles.label}>
          Usuário
        </Text>

        <View style={styles.inputContainer}>

          <Ionicons
            name="person-outline"
            size={20}
            color="#77717f"
          />

          <TextInput
            style={styles.input}
            placeholder="Digite seu usuário"
            placeholderTextColor="#66616b"
            value={usuario}
            onChangeText={setUsuario}
          />

        </View>

        <Text style={styles.label}>
          Senha
        </Text>

        <View style={styles.inputContainer}>

          <Ionicons
            name="lock-closed-outline"
            size={20}
            color="#77717f"
          />

          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#66616b"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

        </View>

        <TouchableOpacity
          style={styles.botao}
          onPress={entrar}
        >

          <Text style={styles.botaoTexto}>
            Entrar
          </Text>

          <Ionicons
            name="arrow-forward"
            size={20}
            color="#ffffff"
          />

        </TouchableOpacity>

      </View>

      <Text style={styles.rodape}>
        Smart Room • Sistema IoT
      </Text>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#0d0c11",
    justifyContent: "center",
    paddingHorizontal: 30,
  },

  logo: {
    width: 75,
    height: 75,
    borderRadius: 24,
    backgroundColor: "#7255b5",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
  },

  titulo: {
    color: "#ffffff",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
  },

  subtitulo: {
    color: "#817987",
    textAlign: "center",
    marginTop: 7,
    marginBottom: 45,
  },

  form: {
    width: "100%",
  },

  label: {
    color: "#b5aebd",
    fontSize: 13,
    marginBottom: 8,
    marginTop: 15,
  },

  inputContainer: {
    height: 55,
    backgroundColor: "#1b1a1f",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  input: {
    flex: 1,
    color: "#ffffff",
    marginLeft: 12,
    fontSize: 14,
  },

  botao: {
    height: 55,
    borderRadius: 18,
    backgroundColor: "#7255b5",
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  botaoTexto: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },

  rodape: {
    color: "#514c55",
    textAlign: "center",
    marginTop: 50,
    fontSize: 12,
  },

});