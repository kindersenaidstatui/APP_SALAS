import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BRAND = { blue: "#2456C6", actionBlue: "#2F63E9", navy: "#0A1F44", muted: "#71809B", line: "#E3EAF5", surface: "#FFFFFF", background: "#F5F8FD", green: "#22C78A" };

export default function Controle() {
  const [luz, setLuz] = useState(false);
  const [ar, setAr] = useState(true);
  const [temperatura, setTemperatura] = useState(22);
  const ajustarTemperatura = (valor) => setTemperatura((atual) => Math.min(30, Math.max(16, atual + valor)));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.eyebrow}>SMART ROOM</Text>
          <Text style={styles.titulo}>Controles da sala</Text>
          <Text style={styles.subtitulo}>Sala de Reunião 01</Text>
        </View>
        <View style={styles.status}><View style={styles.statusDot} /><Text style={styles.statusText}>Online</Text></View>
      </View>

      <Text style={styles.sectionTitle}>Ambiente</Text>
      <ControlCard icon="bulb-outline" iconStyle={styles.iconYellow} titulo="Iluminação" descricao={luz ? "Luzes acesas" : "Luzes apagadas"} ativo={luz} onPress={() => setLuz((atual) => !atual)} />
      <ControlCard icon="snow-outline" iconStyle={styles.iconBlue} titulo="Ar-condicionado" descricao={ar ? "Em funcionamento" : "Desligado"} ativo={ar} onPress={() => setAr((atual) => !atual)} />

      <View style={[styles.card, styles.temperatureCard]}>
        <View style={styles.temperatureTop}>
          <View><Text style={styles.cardLabel}>TEMPERATURA DESEJADA</Text><Text style={styles.temperature}>{temperatura}°C</Text></View>
          <View style={styles.thermometerIcon}><Ionicons name="thermometer-outline" size={22} color={BRAND.actionBlue} /></View>
        </View>
        <View style={styles.temperatureControls}>
          <TouchableOpacity accessibilityLabel="Diminuir temperatura" style={styles.temperatureButton} onPress={() => ajustarTemperatura(-1)}><Ionicons name="remove" size={20} color={BRAND.actionBlue} /></TouchableOpacity>
          <View style={styles.range}><View style={[styles.rangeProgress, { width: `${((temperatura - 16) / 14) * 100}%` }]} /></View>
          <TouchableOpacity accessibilityLabel="Aumentar temperatura" style={[styles.temperatureButton, styles.temperatureButtonActive]} onPress={() => ajustarTemperatura(1)}><Ionicons name="add" size={20} color="#FFFFFF" /></TouchableOpacity>
        </View>
        <View style={styles.limits}><Text style={styles.limitText}>16°C</Text><Text style={styles.limitText}>30°C</Text></View>
      </View>

      <View style={styles.automation}>
        <View style={styles.automationIcon}><Ionicons name="sparkles-outline" size={21} color={BRAND.actionBlue} /></View>
        <View style={styles.automationInfo}><Text style={styles.automationTitle}>Automação ativa</Text><Text style={styles.automationText}>O ambiente se ajusta automaticamente.</Text></View>
        <View style={styles.activePill}><Text style={styles.activePillText}>ATIVO</Text></View>
      </View>
    </SafeAreaView>
  );
}

function ControlCard({ icon, iconStyle, titulo, descricao, ativo, onPress }) {
  return <View style={styles.card}><View style={styles.row}>
    <View style={[styles.iconContainer, iconStyle]}><Ionicons name={icon} size={23} color={BRAND.actionBlue} /></View>
    <View style={styles.info}><Text style={styles.cardTitle}>{titulo}</Text><Text style={[styles.cardDescription, ativo && styles.cardDescriptionActive]}>{descricao}</Text></View>
    <TouchableOpacity accessibilityLabel={`${ativo ? "Desligar" : "Ligar"} ${titulo}`} accessibilityRole="switch" accessibilityState={{ checked: ativo }} style={[styles.switch, ativo && styles.switchActive]} onPress={onPress}><View style={[styles.knob, ativo && styles.knobActive]} /></TouchableOpacity>
  </View></View>;
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: BRAND.background, paddingHorizontal: 20 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", paddingTop: 25, paddingBottom: 27 },
  eyebrow: { color: BRAND.actionBlue, fontSize: 11, fontWeight: "700", letterSpacing: 1.4, marginBottom: 7 }, titulo: { color: BRAND.navy, fontSize: 28, fontWeight: "700", letterSpacing: -0.6 }, subtitulo: { color: BRAND.muted, fontSize: 14, marginTop: 5 },
  status: { alignItems: "center", flexDirection: "row", backgroundColor: "#EAF9F3", borderRadius: 20, paddingHorizontal: 10, paddingVertical: 7, marginTop: 11 }, statusDot: { height: 7, width: 7, borderRadius: 4, backgroundColor: BRAND.green, marginRight: 6 }, statusText: { color: "#16845A", fontSize: 11, fontWeight: "700" },
  sectionTitle: { color: BRAND.navy, fontSize: 14, fontWeight: "700", marginBottom: 11 }, card: { backgroundColor: BRAND.surface, borderColor: BRAND.line, borderRadius: 18, borderWidth: 1, marginBottom: 12, padding: 16 }, row: { alignItems: "center", flexDirection: "row" },
  iconContainer: { alignItems: "center", borderRadius: 14, height: 48, justifyContent: "center", width: 48 }, iconYellow: { backgroundColor: "#FFF7E7" }, iconBlue: { backgroundColor: "#EAF1FF" }, info: { flex: 1, marginLeft: 13 }, cardTitle: { color: BRAND.navy, fontSize: 15, fontWeight: "700" }, cardDescription: { color: BRAND.muted, fontSize: 12, marginTop: 4 }, cardDescriptionActive: { color: "#16845A" },
  switch: { backgroundColor: "#D8E0ED", borderRadius: 18, height: 30, justifyContent: "center", padding: 3, width: 52 }, switchActive: { backgroundColor: BRAND.actionBlue }, knob: { backgroundColor: "#FFFFFF", borderRadius: 12, elevation: 1, height: 24, width: 24 }, knobActive: { alignSelf: "flex-end" },
  temperatureCard: { marginTop: 4, padding: 18 }, temperatureTop: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" }, cardLabel: { color: BRAND.muted, fontSize: 10, fontWeight: "700", letterSpacing: 0.7 }, temperature: { color: BRAND.navy, fontSize: 36, fontWeight: "700", letterSpacing: -1, marginTop: 6 }, thermometerIcon: { alignItems: "center", backgroundColor: "#EAF1FF", borderRadius: 14, height: 48, justifyContent: "center", width: 48 },
  temperatureControls: { alignItems: "center", flexDirection: "row", marginTop: 17 }, temperatureButton: { alignItems: "center", backgroundColor: "#EEF3FB", borderRadius: 12, height: 38, justifyContent: "center", width: 38 }, temperatureButtonActive: { backgroundColor: BRAND.actionBlue }, range: { backgroundColor: "#E5EBF5", borderRadius: 4, flex: 1, height: 6, marginHorizontal: 13, overflow: "hidden" }, rangeProgress: { backgroundColor: BRAND.actionBlue, borderRadius: 4, height: "100%" }, limits: { flexDirection: "row", justifyContent: "space-between", marginHorizontal: 51, marginTop: 8 }, limitText: { color: "#94A1B7", fontSize: 11 },
  automation: { alignItems: "center", backgroundColor: "#EEF4FF", borderRadius: 18, flexDirection: "row", padding: 15 }, automationIcon: { alignItems: "center", backgroundColor: "#FFFFFF", borderRadius: 12, height: 42, justifyContent: "center", width: 42 }, automationInfo: { flex: 1, marginLeft: 12 }, automationTitle: { color: BRAND.navy, fontSize: 14, fontWeight: "700" }, automationText: { color: BRAND.muted, fontSize: 11, marginTop: 3 }, activePill: { backgroundColor: "#DDF7EB", borderRadius: 8, paddingHorizontal: 8, paddingVertical: 6 }, activePillText: { color: "#16845A", fontSize: 9, fontWeight: "700", letterSpacing: 0.6 },
});
