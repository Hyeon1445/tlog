/** 여행 하나. 기록·지출·미션 등은 모두 tripId로 이 여행에 붙는다. */
export type Trip = {
  id: string; // UUID — 나중에 서버 동기화·공유 시 충돌 방지
  title: string; // 예: "2026 오사카"
  startDate: string; // YYYY-MM-DD
  endDate: string | null;
  coverPhotoUri: string | null;
  createdAt: string; // ISO 8601
  updatedAt: string;
};
