# App Store Veröffentlichungs-Checkliste

## ✅ Voraussetzungen

- [ ] Apple Developer Account (99$/Jahr) - https://developer.apple.com/programs/
- [ ] Expo Account erstellen - https://expo.dev/signup

## 🎨 Assets erstellen

### App Icon (1024x1024 PNG)
- [ ] Erstelle ein Icon mit:
  - Sonne/Wolken/Regenbogen Motiv
  - Farben: #4A90E2 (Blau), #FDB813 (Gelb)
  - Keine Transparenz, abgerundete Ecken nicht nötig (iOS macht das automatisch)
  - Tool: Figma, Canva, oder https://www.appicon.co

### Screenshots (benötigt für App Store)
- [ ] iPhone 6.7" Display (iPhone 15 Pro Max) - mindestens 3 Screenshots
- [ ] Optional: iPhone 5.5" Display (ältere iPhones)
- Tipp: Mache Screenshots in Expo Go oder im Simulator

### App Store Texte
- [ ] **App Name:** "Es Wird Besser - Optimistisches Wetter" (max 30 Zeichen)
- [ ] **Subtitle:** "Immer positive Wetter-Nachrichten" (max 30 Zeichen)
- [ ] **Beschreibung:** (siehe unten)
- [ ] **Keywords:** wetter, optimismus, positiv, motivation, etc.
- [ ] **Support URL:** z.B. deine Website oder GitHub
- [ ] **Privacy Policy URL:** Benötigt! (siehe unten)

## 🏗️ App Build Setup

### 1. EAS CLI installieren
\`\`\`bash
npm install -g eas-cli
\`\`\`

### 2. Bei Expo anmelden
\`\`\`bash
eas login
\`\`\`

### 3. EAS Build konfigurieren
\`\`\`bash
eas build:configure
\`\`\`

### 4. iOS Credentials einrichten
\`\`\`bash
eas credentials
\`\`\`
- Expo managed: Expo erstellt automatisch Certificates & Provisioning Profiles
- Oder: Eigene Certificates verwenden

### 5. Ersten Build erstellen
\`\`\`bash
# Production Build für App Store
eas build --platform ios --profile production
\`\`\`

⏱️ **Dauer:** 10-20 Minuten (läuft in der Cloud)

## 📦 App Store Connect Setup

### 1. App Store Connect öffnen
https://appstoreconnect.apple.com

### 2. Neue App erstellen
- Klicke auf "+" → "Neue App"
- **Platform:** iOS
- **Name:** Es Wird Besser
- **Primary Language:** Deutsch
- **Bundle ID:** com.eswirdbesser.app (aus app.json)
- **SKU:** Eindeutige ID, z.B. "eswirdbesser001"
- **User Access:** Full Access

### 3. App-Informationen ausfüllen

#### **Allgemeine Informationen**
- [ ] Name: "Es Wird Besser"
- [ ] Subtitle
- [ ] Kategorie: "Wetter" (Primary), "Lifestyle" (Secondary)
- [ ] Altersfreigabe: 4+ (keine sensiblen Inhalte)

#### **App Store Beschreibung**
\`\`\`
Es Wird Besser - Die optimistische Wetter-App! 🌈

Egal ob Regen, Sonne oder Wolken - diese App zeigt dir IMMER die positive Seite des Wetters!

✨ FEATURES:
• Aktuelles Wetter mit GPS-Standort
• 6-Stunden Vorhersage für bessere Planung
• Optimistische Nachrichten für jede Wetterlage
• Praktische Tipps: "Es wird besser! In 3h klart es auf"
• Modernes, freundliches Design

🌧️ BEISPIELE:
→ Regen: "Frische Luft! Der Regen reinigt die Luft!"
→ Bewölkt: "Angenehm mild! Perfekt für einen aktiven Tag!"
→ Sonnig: "Perfekter Tag! Genieße das Leben!"

💡 WARUM "ES WIRD BESSER"?
Wir alle schauen aufs Wetter - aber warum nicht mit einer positiven Einstellung? Diese App verwandelt jede Wetterlage in gute Nachrichten und gibt dir praktische Tipps für deinen Tag.

🎯 PERFEKT FÜR:
• Menschen, die optimistisch in den Tag starten wollen
• Alle, die das Wetter mit Humor nehmen
• Motivationssuchende an grauen Tagen

📍 DATENSCHUTZ:
Wir verwenden deinen Standort NUR, um Wetterdaten zu laden. Keine Speicherung, keine Weitergabe.

Lade jetzt "Es Wird Besser" und entdecke die positive Seite des Wetters! ☀️
\`\`\`

#### **Screenshots hochladen**
- [ ] Minimum 3, Maximum 10 Screenshots
- [ ] 6.7" Display (1290 x 2796 Pixel)

#### **App-Vorschau Video (optional)**
- [ ] 15-30 Sekunden Vorschau-Video

### 4. Build hochladen
Nach \`eas build\` ist fertig:
\`\`\`bash
# Build wird automatisch zu App Store Connect hochgeladen
# Oder manuell mit Transporter App
\`\`\`

### 5. Build auswählen
- [ ] In App Store Connect → "Builds" Section
- [ ] Wähle den hochgeladenen Build
- [ ] Warte auf Processing (5-30 Minuten)

### 6. Export Compliance
- [ ] "Verwendet deine App Verschlüsselung?" → **JA** (HTTPS wird verwendet)
- [ ] "Verwendet deine App Verschlüsselung außer HTTPS?" → **NEIN**

### 7. Privacy Policy erstellen

**WICHTIG:** App Store benötigt eine Privacy Policy URL!

Beispiel-Text (anpassen!):
\`\`\`
DATENSCHUTZERKLÄRUNG - ES WIRD BESSER

1. WELCHE DATEN SAMMELN WIR?
- Standortdaten (GPS): Nur während App-Nutzung, um Wetterdaten zu laden
- Keine persönlichen Daten
- Keine Speicherung von Daten

2. WIE VERWENDEN WIR DATEN?
- Standort wird NUR verwendet, um Wetterdaten von Open-Meteo API zu laden
- Keine Weitergabe an Dritte
- Keine Werbung, kein Tracking

3. THIRD-PARTY SERVICES
- Open-Meteo API (Wetterdaten): https://open-meteo.com

4. KONTAKT
[Deine E-Mail Adresse]

Letzte Aktualisierung: [Datum]
\`\`\`

**Hosting:**
- GitHub Gist (kostenlos)
- Eigene Website
- Notion Public Page

## 🚀 Einreichung & Review

### 1. Alle Felder ausfüllen
- [ ] App-Beschreibung
- [ ] Screenshots
- [ ] Keywords
- [ ] Support URL
- [ ] Privacy Policy URL
- [ ] Altersfreigabe

### 2. Pricing & Availability
- [ ] **Preis:** Kostenlos (oder Preis festlegen)
- [ ] **Verfügbarkeit:** Alle Länder oder ausgewählte

### 3. App Review Informationen
- [ ] **Kontakt-Info:** Deine E-Mail & Telefonnummer
- [ ] **Demo Account:** Falls Login nötig (nicht relevant hier)
- [ ] **Notizen:**
\`\`\`
Diese App zeigt optimistische Wetter-Nachrichten.
Standort-Zugriff ist erforderlich, um Wetterdaten zu laden.
\`\`\`

### 4. Zur Review einreichen
- [ ] Klicke "Submit for Review"

⏱️ **Review-Dauer:** 1-3 Tage (manchmal schneller)

## 📊 Nach der Veröffentlichung

### App Store Optimierung (ASO)
- [ ] Keywords optimieren basierend auf Downloads
- [ ] Screenshots A/B testen
- [ ] Auf Bewertungen antworten

### Updates
\`\`\`bash
# Neuen Build erstellen
eas build --platform ios --profile production

# In App Store Connect neuen Build auswählen
# "Was ist neu" Text schreiben
# Erneut zur Review einreichen
\`\`\`

## 💡 Tipps

1. **TestFlight zuerst:** Teste die App mit Freunden über TestFlight
   \`\`\`bash
   eas build --platform ios --profile preview
   \`\`\`

2. **Screenshots im Simulator:**
   - Starte iOS Simulator
   - Drücke Cmd+S für Screenshot
   - Oder: Verwende Expo Go auf echtem iPhone

3. **App Review Ablehnungsgründe vermeiden:**
   - Privacy Policy vorhanden ✓
   - Standort-Begründung klar ✓
   - Keine Crashes ✓
   - App funktioniert wie beschrieben ✓

4. **Kosten:**
   - Apple Developer: 99$/Jahr
   - EAS Build: Kostenlos für begrenzte Builds, oder 29$/Monat für mehr

## 🆘 Support

- Expo Docs: https://docs.expo.dev/distribution/introduction/
- App Store Guidelines: https://developer.apple.com/app-store/review/guidelines/
- Expo Discord: https://chat.expo.dev
