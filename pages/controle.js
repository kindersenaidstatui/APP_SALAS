import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function Controle() {

  const [luz, setLuz] = useState(false);
  const [ar, setAr] = useState(true);

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Controles
      </Text>

      <Text style={styles.subtitulo}>
        Sala de Reunião 01
      </Text>


      {/* ILUMINAÇÃO */}

      <View style={styles.card}>

        <View style={styles.linha}>

          <View style={styles.icone}>

            <Ionicons
              name="bulb"
              size={25}
              color="#ffd166"
            />

          </View>

          <View style={styles.info}>

            <Text style={styles.nome}>
              Iluminação
            </Text>

            <Text style={styles.estado}>
              {luz ? "Ligada" : "Desligada"}
            </Text>

          </View>

          <TouchableOpacity
            style={[
              styles.switch,
              luz && styles.switchAtivo,
            ]}
            onPress={() => setLuz(!luz)}
          >

            <View
              style={[
                styles.bolinha,
                luz && styles.bolinhaAtiva,
              ]}
            />

          </TouchableOpacity>

        </View>

      </View>


      {/* AR */}

      <View style={styles.card}>

        <View style={styles.linha}>

          <View style={styles.icone}>

            <Ionicons
              name="snow"
              size={25}
              color="#35bfff"
            />

          </View>

          <View style={styles.info}>

            <Text style={styles.nome}>
              Ar-condicionado
            </Text>

            <Text style={styles.estado}>
              {ar ? "Ligado" : "Desligado"}
            </Text>

          </View>

          <TouchableOpacity
            style={[
              styles.switch,
              ar && styles.switchAtivo,
            ]}
            onPress={() => setAr(!ar)}
          >

            <View
              style={[
                styles.bolinha,
                ar && styles.bolinhaAtiva,
              ]}
            />

          </TouchableOpacity>

        </View>

      </View>


      {/* TEMPERATURA */}

      <View style={styles.card}>

        <Text style={styles.cardTitulo}>
          Temperatura desejada
        </Text>

        <Text style={styles.temperatura}>
          22°C
        </Text>

        <View style={styles.barra}>

          <View style={styles.progresso} />

          <View style={styles.ponto} />

        </View>

        <View style={styles.limites}>

          <Text>16°C</Text>
          <Text>30°C</Text>

        </View>

      </View>


      {/* AUTOMACAO */}

      <View style={styles.automacao}>

        <View>

          <Text style={styles.automacaoTitulo}>
            🤖 Automação
          </Text>

          <Text style={styles.automacaoTexto}>
            Controle automático ativado
          </Text>

        </View>

        <View style={styles.ativo}>
          <Text style={styles.ativoTexto}>
            ATIVO
          </Text>
        </View>

      </View>

    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#0d0c11",
    paddingHorizontal: 25,
    paddingTop: 60,
  },

  titulo: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "700",
  },

  subtitulo: {
    color: "#77717f",
    fontSize: 14,
    marginTop: 5,
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#1c1b20",
    borderRadius: 22,
    padding: 20,
    marginBottom: 15,
  },

  linha: {
    flexDirection: "row",
    alignItems: "center",
  },

  icone: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: "#28252b",
    alignItems: "center",
    justifyContent: "center",
  },

  info: {
    flex: 1,
    marginLeft: 14,
  },

  nome: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "600",
  },

  estado: {
    color: "#77717f",
    fontSize: 13,
    marginTop: 5,
  },

  switch: {
    width: 50,
    height: 28,
    borderRadius: 20,
    backgroundColor: "#353139",
    padding: 3,
    justifyContent: "center",
  },

  switchAtivo: {
    backgroundColor: "#7255b5",
  },

  bolinha: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#77717f",
  },

  bolinhaAtiva: {
    backgroundColor: "#ffffff",
    alignSelf: "flex-end",
  },

  cardTitulo: {
    color: "#a29ba8",
    fontSize: 13,
  },

  temperatura: {
    color: "#42c5ff",
    fontSize: 38,
    fontWeight: "700",
    marginTop: 10,
  },

  barra: {
    height: 6,
    backgroundColor: "#36313d",
    borderRadius: 5,
    marginTop: 20,
    position: "relative",
  },

  progresso: {
    width: "45%",
    height: 6,
    borderRadius: 5,
    backgroundColor: "#7255b5",
  },

  ponto: {
    position: "absolute",
    left: "43%",
    top: -5,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#ffffff",
  },

  limites: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  automacao: {
    backgroundColor: "#211044",
    borderRadius: 22,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  automacaoTitulo: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700",
  },

  automacaoTexto: {
    color: "#8e829d",
    fontSize: 12,
    marginTop: 5,
  },

  ativo: {
    backgroundColor: "#3d246a",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 10,
  },

  ativoTexto: {
    color: "#a98aff",
    fontSize: 10,
    fontWeight: "700",
  },

});