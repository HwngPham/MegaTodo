> Use either pm2 or containerized env but not both

> Using 2-steps image reduce image from 232mb to 200mb

> slim image is bigger than alpine about 30%


Requirements

- node >= 18.16
- pnpm

Prepare env
```
cp .env.example .env
pnpm install
```

Start production server
```
pnpm start
```

Start development server
```
pnpm dev
```
