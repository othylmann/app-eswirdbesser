# Es Wird Besser - Optimistische Wetter-App 🌈

Eine iPhone App, die immer optimistische, positive Nachrichten zeigt - egal wie das Wetter ist!

## Features

✨ **Aktuelles Wetter** mit Live-Standortdaten
🌦️ **6-Stunden-Vorhersage** für bessere Planung
😊 **Optimistische Nachrichten** - immer positiv, auch bei Regen
💡 **Praktische Tipps** wie "Es wird besser! In 3h klart es auf"
🎨 **Modernes Design** mit freundlicher UI

## Tech Stack

- **React Native** mit Expo
- **TypeScript** für Typsicherheit
- **Open-Meteo API** (kostenlos, kein API-Key nötig)
- **expo-location** für GPS-Zugriff

## Installation

```bash
# Dependencies installieren
npm install

# Development Server starten
npm start
```

## Testing

### Auf echtem iPhone (empfohlen):
1. [Expo Go App](https://apps.apple.com/app/expo-go) installieren
2. QR Code scannen
3. Location Permission erlauben

### iOS Simulator:
```bash
npm run ios
```

## Projekt-Struktur

```
src/
├── services/
│   ├── locationService.ts      # GPS/Location
│   ├── weatherService.ts       # Open-Meteo API
│   └── optimismEngine.ts       # ⭐ Kernlogik: Positive Nachrichten
├── screens/
│   └── WeatherScreen.tsx       # Hauptscreen
├── components/
│   ├── CurrentWeather.tsx      # Aktuelles Wetter
│   ├── OptimismMessage.tsx     # Optimistische Nachricht
│   ├── ForecastList.tsx        # 6-Stunden Forecast
│   └── ForecastCard.tsx        # Einzelne Karte
├── hooks/
│   └── useWeather.ts           # Custom Hook
├── types/
│   └── weather.ts              # TypeScript Interfaces
└── constants/
    ├── weatherCodes.ts         # WMO Mappings
    └── colors.ts               # Design-Farben
```

## Optimismus-Beispiele

- **Regen**: "Frische Luft! Der Regen reinigt die Luft und bringt neues Leben! 🌧️"
- **Bewölkt**: "Angenehm mild! Keine grelle Sonne - perfekt für einen aktiven Tag! ☁️"
- **Sonnig**: "Perfekter Tag! Die Sonne lädt dich ein, das Leben zu genießen! ☀️"

## Zukünftige Features

- [ ] Weather Caching (AsyncStorage)
- [ ] Mehrere Städte speichern
- [ ] Dark Mode
- [ ] Wetter-Animationen
- [ ] Share-Funktion
- [ ] iOS Home Screen Widget

## Lizenz

MIT
