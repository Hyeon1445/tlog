/** 여행 중 남기는 기록 한 건: 사진 + 글 + 위치 + 시간 */
export type Entry = {
  id: string;
  tripId: string;
  photoUris: string[];
  text: string | null;
  location: GeoPoint | null;
  placeName: string | null;
  takenAt: string; // 사진 촬영 시간 또는 기록 시간 (ISO 8601)
  createdAt: string;
  updatedAt: string;
};

export type GeoPoint = {
  lat: number;
  lng: number;
};
