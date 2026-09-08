import React from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function Dashboard() {

  return (
    <View style={styles.container}>

      {/* HEADER */}

      <View style={styles.header}>

        <View style={styles.avatar}>
          <Text style={styles.avatarTexto}>
            SR
          </Text>
        </View>

        <View style={styles.headerText}>

          <Text style={styles.nome}>
            Smart Room
          </Text>

          <Text style={styles.sala}>
            Sala de Reunião 01
          </Text>

        </View>

        <TouchableOpacity style={styles.notificacao}>

          <Ionicons
            name="notifications"
            size={19}
            color="#ffd166"
          />

        </TouchableOpacity>

      </View>


      {/* TEMPERATURA */}

      <View style={styles.temperaturaCard}>

        <Text style={styles.nomeSala}>
          SALA DE REUNIÃO 01
        </Text>

        <View style={styles.tempLinha}>

          <Text style={styles.temperatura}>
            25.6
          </Text>

          <Text style={styles.grau}>
            °C
          </Text>

        </View>

        <View style={styles.statusSala}>

          <View style={styles.pontoVerde} />

          <Text style={styles.statusTexto}>
            Sala ocupada
          </Text>

          <View style={styles.umidade}>
            <Text style={styles.gota}>
              💧
            </Text>

            <Text style={styles.umidadeTexto}>
              58%
            </Text>
          </View>

        </View>

      </View>


      {/* GRID */}

      <View style={styles.grid}>

        <StatusCard
          icone="bulb"
          titulo="Iluminação"
          valor="Desligada"
          tipo="luz"
        />

        <StatusCard
          icone="snow"
          titulo="Ar-condicionado"
          valor="Ligado"
          tipo="ar"
        />

        <StatusCard
          icone="person"
          titulo="Presença"
          valor="Detectada"
          tipo="presenca"
        />

        <StatusCard
          icone="water"
          titulo="Umidade"
          valor="58%"
          tipo="umidade"
        />

      </View>


      {/* GERENCIAR */}

      <TouchableOpacity style={styles.gerenciar}>

        <Ionicons
          name="settings"
          size={17}
          color="#ffffff"
        />

        <Text style={styles.gerenciarTexto}>
          Gerenciar dispositivos
        </Text>

      </TouchableOpacity>


      {/* ARDUINO */}

      <View style={styles.arduinoCard}>

        <View>

          <Text style={styles.arduinoTitulo}>
            Arduino
          </Text>

          <Text style={styles.arduinoNome}>
            COM3 · 9600 baud
          </Text>

          <View style={styles.conexao}>

            <View style={styles.pontoConectado} />

            <Text style={styles.conectado}>
              Conectado
            </Text>

            <Text style={styles.firmware}>
              · Firmware v2.1.4
            </Text>

          </View>

        </View>

        <View style={styles.raio}>

          <Text style={styles.raioTexto}>
            ⚡
          </Text>

        </View>

      </View>

    </View>
  );
}


function StatusCard({
  icone,
  titulo,
  valor,
  tipo,
}) {

  let corIcone = "#42c5ff";

  if (tipo === "luz") {
    corIcone = "#ffd166";
  }

  if (tipo === "presenca") {
    corIcone = "#b08cff";
  }

  return (

    <View
      style={[
        styles.statusCard,

        tipo === "ar" && styles.cardAzul,

        tipo === "umidade" && styles.cardAzul,

        tipo === "presenca" && styles.cardRoxo,
      ]}
    >

      <View style={styles.iconeStatus}>

        <Ionicons
          name={icone}
          size={20}
          color={corIcone}
        />

      </View>

      <Text style={styles.statusTitulo}>
        {titulo}
      </Text>

      <Text
        style={[
          styles.statusValor,

          tipo === "ar" && styles.valorAzul,

          tipo === "umidade" && styles.valorAzul,

          tipo === "presenca" && styles.valorRoxo,
        ]}
      >
        {valor}
      </Text>

    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#0d0c11",
    paddingHorizontal: 25,
    paddingTop: 55,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },

  avatar: {
    width: 38,
    height: 38,
    borderRadius: 14,
    backgroundColor: "#7358b7",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarTexto: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "700",
  },

  headerText: {
    marginLeft: 10,
    flex: 1,
  },

  nome: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "700",
  },

  sala: {
    color: "#846ac0",
    fontSize: 12,
    marginTop: 2,
  },

  notificacao: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#1d1c20",
    alignItems: "center",
    justifyContent: "center",
  },

  temperaturaCard: {
    height: 145,
    borderRadius: 24,
    backgroundColor: "#28205b",
    padding: 20,
    marginBottom: 12,
  },

  nomeSala: {
    color: "#b9a8ff",
    fontSize: 12,
    fontWeight: "500",
  },

  tempLinha: {
    flexDirection: "row",
    alignItems: "center",
  },

  temperatura: {
    color: "#43c6ff",
    fontSize: 57,
    fontWeight: "500",
    lineHeight: 65,
  },

  grau: {
    color: "#c2b9d5",
    fontSize: 20,
    marginLeft: 5,
  },

  statusSala: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },

  pontoVerde: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#3edb7b",
    marginRight: 8,
  },

  statusTexto: {
    color: "#ddd8e3",
    fontSize: 12,
  },

  umidade: {
    flexDirection: "row",
    marginLeft: "auto",
    alignItems: "center",
  },

  gota: {
    fontSize: 15,
    marginRight: 5,
  },

  umidadeTexto: {
    color: "#ddd8e3",
    fontSize: 12,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  statusCard: {
    width: "48%",
    height: 105,
    backgroundColor: "#1c1b20",
    borderRadius: 24,
    padding: 15,
    marginBottom: 12,
  },

  cardAzul: {
    backgroundColor: "#002936",
  },

  cardRoxo: {
    backgroundColor: "#211044",
  },

  iconeStatus: {
    height: 30,
  },

  statusTitulo: {
    color: "#807984",
    fontSize: 12,
    marginTop: 2,
  },

  statusValor: {
    color: "#8b8590",
    fontSize: 14,
    marginTop: 4,
  },

  valorAzul: {
    color: "#35bfff",
    fontWeight: "700",
  },

  valorRoxo: {
    color: "#a27cff",
    fontWeight: "700",
  },

  gerenciar: {
    height: 49,
    borderRadius: 25,
    backgroundColor: "#7255b5",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 0,
    marginBottom: 12,
  },

  gerenciarTexto: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 14,
    marginLeft: 8,
  },

  arduinoCard: {
    height: 88,
    borderRadius: 23,
    backgroundColor: "#1c1b20",
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  arduinoTitulo: {
    color: "#77717f",
    fontSize: 12,
  },

  arduinoNome: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 2,
  },

  conexao: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },

  pontoConectado: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#3edb7b",
    marginRight: 5,
  },

  conectado: {
    color: "#3edb7b",
    fontSize: 11,
  },

  firmware: {
    color: "#77717f",
    fontSize: 11,
    marginLeft: 4,
  },

  raio: {
    width: 48,
    height: 48,
    borderRadius: 17,
    backgroundColor: "#07351e",
    alignItems: "center",
    justifyContent: "center",
  },

  raioTexto: {
    fontSize: 23,
  },

});