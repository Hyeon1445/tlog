# 티록 (tlog)

친구와 함께 쓰는 여행 기록 앱.

## 구조

```
apps/
  mobile/     Expo 앱 (expo-router, 화면은 src/app)
  web/        Next.js — 나중에 추가
  api/        Hono 백엔드 — 2단계에서 추가
packages/
  shared/     타입·도메인 로직 (순수 TS, 플랫폼 코드 금지)
supabase/     DB 마이그레이션 — 2단계에서 추가
```

## 시작하기

```bash
pnpm install       # 루트에서 한 번
pnpm mobile        # Expo 개발 서버
```

패키지 추가는 `apps/mobile`에서 `pnpm expo install <패키지>` 사용 (SDK 호환 버전으로 설치됨).
