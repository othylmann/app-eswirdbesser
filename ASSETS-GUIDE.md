# 🎨 Assets Guide - Es Wird Besser

## 📱 Benötigte Assets für den App Store

### 1. App Icon (PFLICHT)
- **Größe:** 1024 x 1024 Pixel
- **Format:** PNG (keine Transparenz)
- **Speicherort:** `assets/icon.png`

### 2. Screenshots (PFLICHT)
- **Minimum:** 3 Screenshots
- **Maximum:** 10 Screenshots
- **Größe:** 1290 x 2796 Pixel (iPhone 6.7" / iPhone 15 Pro Max)
- **Optional:** 1242 x 2688 Pixel (iPhone 5.5" / ältere Geräte)

### 3. Splash Screen (Optional)
- **Größe:** 2048 x 2732 Pixel
- **Format:** PNG
- **Speicherort:** `assets/splash.png`

---

## 🚀 Schnellstart

### Option 1: Icon Generator (Bereits erstellt!)

1. **Öffne den Generator:**
   ```bash
   open icon-generator.html
   ```
   Oder Doppelklick auf `icon-generator.html` im Finder

2. **Wähle ein Design:**
   - ☀️ Sonnig (Lächelnde Sonne)
   - ☁️ Wolkig (Wolke mit Sonne)
   - 🌈 Regenbogen (Der Optimismus-Klassiker!)

3. **Download:** Klicke auf "Herunterladen"

4. **Speichern:** Verschiebe die Datei:
   ```bash
   mv ~/Downloads/es-wird-besser-icon.png assets/icon.png
   ```

5. **In app.json eintragen:**
   ```json
   "icon": "./assets/icon.png"
   ```

---

## 📸 Screenshots erstellen

### Methode 1: Im iOS Simulator (Empfohlen)

1. **Starte den Simulator:**
   ```bash
   npm run ios
   ```

2. **Wähle iPhone 15 Pro Max:**
   - Simulator → Device → iPhone 15 Pro Max

3. **Mache Screenshots:**
   - Drücke `Cmd + S` im Simulator
   - Screenshots werden automatisch gespeichert

4. **Welche Screens fotografieren?**
   - Hauptscreen mit aktuellem Wetter
   - Optimistische Nachricht (z.B. Regen)
   - 6-Stunden Forecast
   - Loading-Screen (optional)
   - Verschiedene Wetterbedingungen

### Methode 2: Auf echtem iPhone

1. **App in Expo Go öffnen**
2. **Screenshots machen:** Lautstärke + Power Button
3. **Übertragen:** AirDrop oder iCloud Photos
4. **Größe anpassen:** Verwende ein Tool wie:
   - https://www.appscreenshots.io
   - Preview App (Mac)

### Methode 3: Screenshot-Generator Tools

- **Smartmockups:** https://smartmockups.com
- **Previewed:** https://previewed.app
- **Mockuuups:** https://mockuuups.studio

Lade deine Screenshots hoch und erstelle professionelle Device-Mockups!

---

## 🎨 Design-Richtlinien

### Farben
- **Primary:** #4A90E2 (Optimistisches Blau)
- **Background:** #F5F9FF (Helles Blau-Weiß)
- **Sunny:** #FDB813 (Warmes Gelb)
- **Text:** #2C3E50 (Dunkelgrau)

### Icon-Stil
- ✅ Freundlich und optimistisch
- ✅ Klare, erkennbare Symbole
- ✅ Helle, positive Farben
- ❌ Keine düsteren oder negativen Elemente
- ❌ Keine zu komplexen Details (Icon wird klein angezeigt)

### Screenshot-Tipps
1. **Klare Darstellung:** Zeige die Hauptfunktion
2. **Text-Overlay:** Füge kurze Beschreibungen hinzu (optional)
3. **Vielfalt:** Zeige verschiedene Wetterbedingungen
4. **Qualität:** Nur scharfe, gut beleuchtete Screenshots
5. **Konsistenz:** Gleicher iPhone-Typ für alle Screenshots

---

## 📋 Checkliste

### Vor dem Build:
- [ ] `icon.png` in `assets/` vorhanden (1024x1024)
- [ ] Icon in `app.json` eingetragen
- [ ] Splash Screen optional erstellt

### Vor App Store Submission:
- [ ] Minimum 3 Screenshots (1290 x 2796)
- [ ] Screenshots zeigen Hauptfeatures
- [ ] Keine persönlichen Daten in Screenshots
- [ ] Screenshots sind scharf und gut lesbar

---

## 🛠️ Tools & Ressourcen

### Icon-Erstellung
- **Canva:** https://www.canva.com (Einfach, Templates verfügbar)
- **Figma:** https://www.figma.com (Professionell, kostenlos)
- **Icon Kitchen:** https://icon.kitchen (AI-Generator)
- **Unser Generator:** `icon-generator.html` ✓

### Screenshot-Bearbeitung
- **Preview** (Mac, kostenlos)
- **Figma** (Mockups erstellen)
- **Photoshop** / **GIMP** (Fortgeschritten)

### App Store Screenshot-Mockups
- **Smartmockups:** https://smartmockups.com
- **Previewed:** https://previewed.app
- **Screely:** https://screely.com (Kostenlos)

### Farben & Inspiration
- **Coolors:** https://coolors.co (Farbpaletten)
- **Dribbble:** https://dribbble.com/search/weather-app (Inspiration)

---

## 💡 Professionelle Screenshot-Gestaltung (Optional)

Für maximalen Impact kannst du Screenshots mit Text-Overlays versehen:

### Beispiel-Texte für Screenshots:

**Screenshot 1:** (Hauptscreen)
"Optimistisches Wetter - Immer positiv!"

**Screenshot 2:** (Regen-Ansicht)
"Auch bei Regen: Es wird besser! 🌈"

**Screenshot 3:** (6h Forecast)
"Praktische Tipps für die nächsten Stunden"

**Screenshot 4:** (Sonnig)
"Perfekter Tag! Genieße das Leben ☀️"

**Screenshot 5:** (Wolkig)
"Angenehm mild - Ideal für aktive Tage!"

---

## 🎯 Quick Actions

### Icon jetzt erstellen:
```bash
open icon-generator.html
```

### Screenshots vorbereiten:
```bash
# Starte Simulator
npm run ios

# Wähle iPhone 15 Pro Max
# Mache Screenshots mit Cmd+S
```

### Assets checken:
```bash
ls -lh assets/
```

---

## ❓ FAQ

**Q: Muss das Icon abgerundete Ecken haben?**
A: Nein! iOS fügt automatisch abgerundete Ecken hinzu. Verwende ein quadratisches Design.

**Q: Kann ich Transparenz im Icon verwenden?**
A: Nein, der App Store akzeptiert keine Icons mit Transparenz.

**Q: Wie viele Screenshots brauche ich mindestens?**
A: Minimum 3, empfohlen 5-7 für gute Präsentation.

**Q: Muss ich für jede iPhone-Größe Screenshots machen?**
A: Minimum für 6.7" (neueste iPhones). Apple skaliert automatisch für ältere Geräte.

---

## 🆘 Hilfe benötigt?

Falls du Probleme hast oder ein individuelles Design brauchst, sag Bescheid! Ich kann dir helfen:
- Icon-Design zu verfeinern
- Screenshot-Beschreibungen zu schreiben
- App Store Texte zu optimieren
