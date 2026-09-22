import React, { useEffect, useRef, useState } from "react";
import { Animated, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Controle from "./pages/controle";
import Historico from "./pages/historico";
import Logs from "./pages/logs";
import Splash from "./pages/splash";

const blue = "#2F63E9";

export default function App() {
  const [logado, setLogado] = useState(false);
  const [pagina, setPagina] = useState("inicio");
  const [carregando, setCarregando] = useState(true);
  if (carregando) return <Splash onFinish={() => setCarregando(false)} />;
  if (!logado) return <Login onLogin={() => setLogado(true)} />;

  const paginas = { inicio: <Dashboard onGerenciar={() => setPagina("controles")} />, controles: <Controle />, historico: <Historico />, logs: <Logs /> };
  return <SafeAreaView style={styles.container}>
    <StatusBar barStyle="dark-content" backgroundColor="#F5F8FD" />
    <View style={styles.content}>{paginas[pagina]}</View>
    <View style={styles.navbar}>
      <BotaoNav icone="grid-outline" texto="Início" ativo={pagina === "inicio"} onPress={() => setPagina("inicio")} />
      <BotaoNav icone="settings-outline" texto="Controles" ativo={pagina === "controles"} onPress={() => setPagina("controles")} />
      <BotaoNav icone="bar-chart-outline" texto="Histórico" ativo={pagina === "historico"} onPress={() => setPagina("historico")} />
      <BotaoNav icone="document-text-outline" texto="Logs" ativo={pagina === "logs"} onPress={() => setPagina("logs")} />
    </View>
  </SafeAreaView>;
}

function BotaoNav({ icone, texto, ativo, onPress }) {
  const escala = useRef(new Animated.Value(ativo ? 1 : 0.9)).current;
  useEffect(() => { Animated.spring(escala, { toValue: ativo ? 1 : 0.9, useNativeDriver: true, speed: 24, bounciness: 7 }).start(); }, [ativo, escala]);
  return <TouchableOpacity accessibilityRole="tab" accessibilityState={{ selected: ativo }} style={styles.navItem} onPress={onPress}>
    <Animated.View style={[styles.navIcon, ativo && styles.navIconActive, { transform: [{ scale: escala }] }]}><Ionicons name={icone} size={20} color={ativo ? "#FFFFFF" : "#71809B"} /></Animated.View>
    <Text style={[styles.navText, ativo && styles.navTextActive]}>{texto}</Text>
  </TouchableOpacity>;
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F8FD" }, content: { flex: 1 }, navbar: { alignItems: "center", backgroundColor: "#FFFFFF", borderTopColor: "#E3EAF5", borderTopWidth: 1, flexDirection: "row", height: 74, justifyContent: "space-around", paddingBottom: 5 }, navItem: { alignItems: "center", width: 75 }, navIcon: { alignItems: "center", borderRadius: 15, height: 34, justifyContent: "center", width: 45 }, navIconActive: { backgroundColor: blue }, navText: { color: "#71809B", fontSize: 10, marginTop: 4 }, navTextActive: { color: blue, fontWeight: "700" },
});
