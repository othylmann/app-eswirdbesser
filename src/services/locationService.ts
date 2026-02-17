// Location Service - GPS & Permissions

import * as Location from 'expo-location';
import { Coordinates } from '../types/weather';

export async function getCurrentLocation(): Promise<Coordinates> {
  try {
    // Permission Request
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      throw new Error('Location permission denied. Wir brauchen deinen Standort, um dir zu sagen, dass es besser wird! 🌈');
    }

    // GPS-Koordinaten ermitteln
    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Balanced,
    });

    return {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Standort konnte nicht ermittelt werden. Bitte prüfe deine Einstellungen.');
  }
}

// Optional: Stadt-Name ermitteln (für spätere Features)
export async function getCityName(coords: Coordinates): Promise<string> {
  try {
    const [location] = await Location.reverseGeocodeAsync(coords);
    return location?.city || location?.name || 'Dein Standort';
  } catch {
    return 'Dein Standort';
  }
}
