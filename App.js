import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Controle from "./pages/controle";

export default function App() {
  const [logado, setLogado] = useState(false);
  const [pagina, setPagina] = useState("inicio");

  if (!logado) {
    return <Login onLogin={() => setLogado(true)} />;
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0d0c11"
      />

      <View style={styles.conteudo}>
        {pagina === "inicio" && <Dashboard />}

        {pagina === "controles" && <Controle />}

        {pagina === "historico" && (
          <View style={styles.pagina}>
            <Text style={styles.titulo}>Histórico</Text>
            <Text style={styles.subtitulo}>
              Dados da Sala de Reunião 01
            </Text>

            <View style={styles.card}>
              <Text style={styles.cardTitulo}>
                🌡️ Temperatura
              </Text>

              <Text style={styles.valor}>
                25.6 °C
              </Text>

              <Text style={styles.info}>
                Máxima hoje: 28.4 °C
              </Text>

              <Text style={styles.info}>
                Mínima hoje: 21.8 °C
              </Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitulo}>
                👤 Presença
              </Text>

              <Text style={styles.valorMenor}>
                18 entradas
              </Text>

              <Text style={styles.info}>
                Tempo ocupado: 5h 32min
              </Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitulo}>
                💡 Iluminação
              </Text>

              <Text style={styles.valorMenor}>
                4h 18min ligada
              </Text>
            </View>
          </View>
        )}

        {pagina === "logs" && (
          <View style={styles.pagina}>
            <Text style={styles.titulo}>Logs</Text>
            <Text style={styles.subtitulo}>
              Últimos eventos do sistema
            </Text>

            <Log
              hora="10:57"
              texto="Presença detectada"
              icone="person"
            />

            <Log
              hora="10:55"
              texto="Ar-condicionado ligado"
              icone="snow"
            />

            <Log
              hora="10:52"
              texto="Iluminação desligada"
              icone="bulb"
            />

            <Log
              hora="10:48"
              texto="Temperatura atingiu 26°C"
              icone="thermometer"
            />

            <Log
              hora="10:45"
              texto="Arduino conectado"
              icone="hardware-chip"
            />
          </View>
        )}
      </View>

      {/* NAVBAR */}
      <View style={styles.navbar}>

        <BotaoNav
          icone="grid"
          texto="Início"
          ativo={pagina === "inicio"}
          onPress={() => setPagina("inicio")}
        />

        <BotaoNav
          icone="settings"
          texto="Controles"
          ativo={pagina === "controles"}
          onPress={() => setPagina("controles")}
        />

        <BotaoNav
          icone="bar-chart"
          texto="Histórico"
          ativo={pagina === "historico"}
          onPress={() => setPagina("historico")}
        />

        <BotaoNav
          icone="document-text"
          texto="Log"
          ativo={pagina === "logs"}
          onPress={() => setPagina("logs")}
        />

      </View>
    </View>
  );
}

function BotaoNav({
  icone,
  texto,
  ativo,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.navItem}
      onPress={onPress}
    >

      <View
        style={[
          styles.iconeNav,
          ativo && styles.iconeNavAtivo,
        ]}
      >
        <Ionicons
          name={icone}
          size={20}
          color={ativo ? "#ffffff" : "#77717f"}
        />
      </View>

      <Text
        style={[
          styles.navTexto,
          ativo && styles.navTextoAtivo,
        ]}
      >
        {texto}
      </Text>

    </TouchableOpacity>
  );
}

function Log({ hora, texto, icone }) {
  return (
    <View style={styles.log}>

      <View style={styles.logIcon}>
        <Ionicons
          name={icone}
          size={20}
          color="#9d7cff"
        />
      </View>

      <View>
        <Text style={styles.logTexto}>
          {texto}
        </Text>

        <Text style={styles.logHora}>
          Hoje às {hora}
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#0d0c11",
  },

  conteudo: {
    flex: 1,
  },

  pagina: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 60,
  },

  titulo: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 5,
  },

  subtitulo: {
    color: "#77717f",
    fontSize: 14,
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#1c1b20",
    borderRadius: 22,
    padding: 20,
    marginBottom: 15,
  },

  cardTitulo: {
    color: "#a49eac",
    fontSize: 14,
    marginBottom: 12,
  },

  valor: {
    color: "#42c5ff",
    fontSize: 38,
    fontWeight: "700",
    marginBottom: 5,
  },

  valorMenor: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 5,
  },

  info: {
    color: "#77717f",
    fontSize: 13,
    marginTop: 5,
  },

  navbar: {
    height: 85,
    backgroundColor: "#101015",
    borderTopWidth: 1,
    borderTopColor: "#29272e",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 8,
  },

  navItem: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
  },

  iconeNav: {
    width: 56,
    height: 28,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  iconeNavAtivo: {
    backgroundColor: "#5f4a91",
  },

  navTexto: {
    color: "#77717f",
    fontSize: 12,
    marginTop: 4,
  },

  navTextoAtivo: {
    color: "#a98aff",
    fontWeight: "600",
  },

  log: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1b1a1f",
    borderRadius: 17,
    padding: 15,
    marginBottom: 10,
  },

  logIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#271b48",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  logTexto: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
  },

  logHora: {
    color: "#77717f",
    fontSize: 12,
    marginTop: 4,
  },

});