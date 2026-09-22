import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { fazerLogin } from "../services/api";

const blue = "#2F63E9";

export default function Login({ onLogin }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");
  const entrar = async () => {
    if (!usuario || !senha || carregando) return;

    setErro("");
    setCarregando(true);
    try {
      const dados = await fazerLogin(usuario.trim(), senha);
      onLogin(dados);
    } catch (erroLogin) {
      setErro(erroLogin.message || "Não foi possível entrar. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  };

  return <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : undefined}>
    <View style={styles.brand}><View style={styles.logo}><Ionicons name="grid" size={25} color="#FFFFFF" /></View><Text style={styles.brandName}>Smart Room</Text></View>
    <View style={styles.content}>
      <View style={styles.accessIcon}><Ionicons name="person-outline" size={25} color={blue} /></View>
      <Text style={styles.eyebrow}>ACESSO RESTRITO</Text>
      <Text style={styles.titulo}>Bem-vindo de volta</Text>
      <Text style={styles.subtitulo}>Entre com seus dados para acessar o painel.</Text>
      <View style={styles.form}>
        <Text style={styles.label}>E-mail</Text>
        <View style={styles.inputContainer}><Ionicons name="mail-outline" size={19} color="#8A99B2" /><TextInput style={styles.input} placeholder="seu@email.com" placeholderTextColor="#9CA9BD" autoCapitalize="none" autoComplete="email" keyboardType="email-address" value={usuario} onChangeText={setUsuario} /></View>
        <Text style={styles.label}>Senha</Text>
        <View style={styles.inputContainer}><Ionicons name="lock-closed-outline" size={19} color="#8A99B2" /><TextInput style={styles.input} placeholder="Digite sua senha" placeholderTextColor="#9CA9BD" secureTextEntry autoComplete="password" value={senha} onChangeText={setSenha} /></View>
        <View style={styles.security}><View style={styles.securityDot} /><Text style={styles.securityText}>Acesso seguro</Text></View>
        {!!erro && <Text accessibilityRole="alert" style={styles.erro}>{erro}</Text>}
        <TouchableOpacity accessibilityRole="button" disabled={!usuario || !senha || carregando} style={[styles.botao, (!usuario || !senha || carregando) && styles.botaoDisabled]} onPress={entrar}><Text style={styles.botaoTexto}>{carregando ? "Entrando..." : "Entrar no painel"}</Text><Ionicons name="arrow-forward" size={19} color="#FFFFFF" /></TouchableOpacity>
      </View>
    </View>
    <Text style={styles.rodape}>Smart Room · Sistema de gestão inteligente</Text>
  </KeyboardAvoidingView>;
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF", paddingHorizontal: 28 }, brand: { alignItems: "center", flexDirection: "row", paddingTop: 45 }, logo: { alignItems: "center", backgroundColor: "#2456C6", borderRadius: 12, height: 40, justifyContent: "center", width: 40 }, brandName: { color: "#0A1F44", fontSize: 18, fontWeight: "700", marginLeft: 10 },
  content: { flex: 1, justifyContent: "center", paddingBottom: 25 }, accessIcon: { alignItems: "center", backgroundColor: "#EEF4FF", borderRadius: 14, height: 48, justifyContent: "center", marginBottom: 20, width: 48 }, eyebrow: { color: blue, fontSize: 11, fontWeight: "700", letterSpacing: 1.2, marginBottom: 10 }, titulo: { color: "#0A1F44", fontSize: 28, fontWeight: "700", letterSpacing: -0.5 }, subtitulo: { color: "#71809B", fontSize: 14, marginTop: 8 }, form: { marginTop: 28 }, label: { color: "#0A1F44", fontSize: 12, fontWeight: "700", marginBottom: 8, marginTop: 14 }, inputContainer: { alignItems: "center", backgroundColor: "#FFFFFF", borderColor: "#D7E0ED", borderRadius: 12, borderWidth: 1, flexDirection: "row", height: 54, paddingHorizontal: 15 }, input: { color: "#0A1F44", flex: 1, fontSize: 14, marginLeft: 11 }, security: { alignItems: "center", flexDirection: "row", justifyContent: "flex-end", marginTop: 12 }, securityDot: { backgroundColor: "#22C78A", borderRadius: 4, height: 7, marginRight: 6, width: 7 }, securityText: { color: "#71809B", fontSize: 11 }, erro: { color: "#C62828", fontSize: 12, marginTop: 12 }, botao: { alignItems: "center", backgroundColor: blue, borderRadius: 12, flexDirection: "row", height: 54, justifyContent: "center", marginTop: 16 }, botaoDisabled: { opacity: 0.58 }, botaoTexto: { color: "#FFFFFF", fontSize: 15, fontWeight: "700", marginRight: 9 }, rodape: { color: "#94A1B7", fontSize: 11, paddingBottom: 27, textAlign: "center" },
});
