const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const W = 1200;
const H = 630;
const BG = '#0a1f2e';
const TEAL = '#2ebfa5';

const logoPath = path.join(__dirname, '../public/logo.png');
const outPath  = path.join(__dirname, '../public/og-image.jpg');

async function run() {
  // Logo: 940×355 original → scale to max 460px wide
  const LOGO_W = 460;
  const LOGO_H = Math.round((355 / 940) * LOGO_W); // ~174px

  const logoResized = await sharp(logoPath)
    .resize(LOGO_W, LOGO_H, { fit: 'inside' })
    .png()
    .toBuffer();

  // White card behind logo (32px padding each side)
  const PAD_X = 40;
  const PAD_Y = 28;
  const CARD_W = LOGO_W + PAD_X * 2;
  const CARD_H = LOGO_H + PAD_Y * 2;
  const CARD_R = 20; // border-radius

  const CARD_LEFT = Math.round((W - CARD_W) / 2);
  const CARD_TOP  = 148;
  const LOGO_LEFT = CARD_LEFT + PAD_X;
  const LOGO_TOP  = CARD_TOP + PAD_Y;

  const line1Y = CARD_TOP + CARD_H + 56;
  const line2Y = line1Y + 52;

  // SVG: white rounded card + two text lines
  const svgOverlay = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <!-- White card -->
  <rect
    x="${CARD_LEFT}" y="${CARD_TOP}"
    width="${CARD_W}" height="${CARD_H}"
    rx="${CARD_R}" ry="${CARD_R}"
    fill="white" opacity="0.97"/>

  <!-- Tagline -->
  <text
    x="${W / 2}" y="${line1Y}"
    font-family="Arial, Helvetica, sans-serif"
    font-size="34" font-weight="400"
    fill="white" text-anchor="middle"
    letter-spacing="0.3">Tu broker hipotecario de confianza</text>

  <!-- URL -->
  <text
    x="${W / 2}" y="${line2Y}"
    font-family="Arial, Helvetica, sans-serif"
    font-size="26" font-weight="700"
    fill="${TEAL}" text-anchor="middle"
    letter-spacing="1.2">avanzahipotecas.es</text>
</svg>`;

  await sharp({
    create: { width: W, height: H, channels: 3, background: BG },
  })
    .composite([
      { input: Buffer.from(svgOverlay), top: 0, left: 0 },
      { input: logoResized, top: LOGO_TOP, left: LOGO_LEFT },
    ])
    .jpeg({ quality: 93 })
    .toFile(outPath);

  const size = (fs.statSync(outPath).size / 1024).toFixed(1);
  console.log(`✓ og-image.jpg generada (${W}×${H}px, ${size} KB) → ${outPath}`);
}

run().catch(err => { console.error(err); process.exit(1); });
