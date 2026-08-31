import { Product } from '../types/solara';

export type CustomizationStyle = 'gold-foil' | 'laser-engrave' | 'leather-patch' | 'silver-foil';

interface RenderOptions {
  canvas: HTMLCanvasElement;
  product: Product;
  customText: string;
  style: CustomizationStyle;
}

export const renderProductCustomization = ({
  canvas,
  product,
  customText,
  style
}: RenderOptions) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const width = canvas.width;
  const height = canvas.height;

  // Clear Canvas
  ctx.clearRect(0, 0, width, height);

  // 1. Studio Backdrop (Luxury Moody Lighting)
  const bgGradient = ctx.createRadialGradient(
    width / 2, height / 2 - 50, 60,
    width / 2, height / 2, width / 1.1
  );
  bgGradient.addColorStop(0, '#152438');
  bgGradient.addColorStop(0.5, '#0A1424');
  bgGradient.addColorStop(1, '#03070E');
  ctx.fillStyle = bgGradient;
  ctx.fillRect(0, 0, width, height);

  // Ambient Pedestal Shadow
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(width / 2, height - 90, 260, 45, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.65)';
  ctx.filter = 'blur(16px)';
  ctx.fill();
  ctx.restore();

  // 2. Draw Product Silhouette & Natural Straw Weave
  ctx.save();

  if (product.category === 'tote' || product.category === 'clutch' || product.category === 'crossbody') {
    // Draw Luxury Handcrafted Bag / Clutch Body
    const bagX = width / 2 - 190;
    const bagY = 160;
    const bagW = 380;
    const bagH = 310;
    const bagRadius = 36;

    // Bag Drop Shadow
    ctx.shadowColor = 'rgba(0, 0, 0, 0.45)';
    ctx.shadowBlur = 24;
    ctx.shadowOffsetY = 16;

    // Draw Main Body Path
    ctx.beginPath();
    ctx.moveTo(bagX + bagRadius, bagY);
    ctx.lineTo(bagX + bagW - bagRadius, bagY);
    ctx.quadraticCurveTo(bagX + bagW, bagY, bagX + bagW, bagY + bagRadius);
    ctx.lineTo(bagX + bagW - 25, bagY + bagH - bagRadius);
    ctx.quadraticCurveTo(bagX + bagW - 30, bagY + bagH, bagX + bagW - bagRadius - 30, bagY + bagH);
    ctx.lineTo(bagX + bagRadius + 30, bagY + bagH);
    ctx.quadraticCurveTo(bagX + 30, bagY + bagH, bagX + 25, bagY + bagH - bagRadius);
    ctx.lineTo(bagX, bagY + bagRadius);
    ctx.quadraticCurveTo(bagX, bagY, bagX + bagRadius, bagY);
    ctx.closePath();

    // Fill with Mediterranean Palm Straw Base
    const strawGrad = ctx.createLinearGradient(bagX, bagY, bagX + bagW, bagY + bagH);
    strawGrad.addColorStop(0, '#F3E5C8');
    strawGrad.addColorStop(0.3, '#E6D3AC');
    strawGrad.addColorStop(0.7, '#D7BE93');
    strawGrad.addColorStop(1, '#C5A775');
    ctx.fillStyle = strawGrad;
    ctx.fill();

    // Reset Shadow for interior texture
    ctx.shadowColor = 'transparent';

    // Procedural Cross-Hatch Straw Weave Texture
    ctx.save();
    ctx.clip(); // Clip to bag shape

    ctx.strokeStyle = 'rgba(168, 134, 88, 0.35)';
    ctx.lineWidth = 2.5;
    for (let i = bagY; i < bagY + bagH + 100; i += 12) {
      ctx.beginPath();
      ctx.moveTo(bagX - 50, i);
      ctx.lineTo(bagX + bagW + 50, i + 35);
      ctx.stroke();
    }
    ctx.strokeStyle = 'rgba(255, 245, 220, 0.25)';
    for (let i = bagY - 100; i < bagY + bagH + 50; i += 12) {
      ctx.beginPath();
      ctx.moveTo(bagX - 50, i + 35);
      ctx.lineTo(bagX + bagW + 50, i);
      ctx.stroke();
    }

    // Top Leather Rim Band (Cognac)
    const rimH = 26;
    ctx.fillStyle = '#6E3A1A';
    ctx.fillRect(bagX, bagY, bagW, rimH);
    
    // Gold Rim Stitching
    ctx.strokeStyle = '#E5A93C';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([5, 4]);
    ctx.beginPath();
    ctx.moveTo(bagX + 10, bagY + 13);
    ctx.lineTo(bagX + bagW - 10, bagY + 13);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.restore();

    // Leather Handles (Double Arch)
    ctx.save();
    ctx.strokeStyle = '#52290F';
    ctx.lineWidth = 14;
    ctx.lineCap = 'round';
    
    // Left Handle Arch
    ctx.beginPath();
    ctx.moveTo(width / 2 - 80, bagY + 10);
    ctx.bezierCurveTo(width / 2 - 80, 50, width / 2 + 80, 50, width / 2 + 80, bagY + 10);
    ctx.stroke();

    // Inner Handle Highlight Stitch
    ctx.strokeStyle = '#D4AF37';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();

  } else {
    // Draw Fedora Hat (Boho-Luxe Hat Silhouette)
    const crownX = width / 2;
    const crownY = 220;

    // Hat Brim Outer
    ctx.beginPath();
    ctx.ellipse(crownX, 330, 240, 95, 0, 0, Math.PI * 2);
    const brimGrad = ctx.createRadialGradient(crownX, 330, 40, crownX, 330, 240);
    brimGrad.addColorStop(0, '#E8D4AE');
    brimGrad.addColorStop(0.8, '#D6BE93');
    brimGrad.addColorStop(1, '#BFA270');
    ctx.fillStyle = brimGrad;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
    ctx.shadowBlur = 24;
    ctx.fill();
    ctx.shadowColor = 'transparent';

    // Hat Crown (Center Dome)
    ctx.beginPath();
    ctx.ellipse(crownX, crownY, 120, 110, 0, Math.PI, 0);
    ctx.fillStyle = '#DFC79C';
    ctx.fill();

    // Crease Indentation
    ctx.beginPath();
    ctx.ellipse(crownX, crownY - 60, 50, 18, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(140, 110, 70, 0.35)';
    ctx.fill();

    // Hat Ribbon (Midnight Navy or Cognac)
    ctx.beginPath();
    ctx.ellipse(crownX, 260, 122, 32, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#0B192C';
    ctx.fill();
  }

  ctx.restore();

  // 3. Render Personalized Embellishment (The Master Customization Badge)
  const centerX = width / 2;
  const centerY = product.category === 'hat' ? 260 : 330;
  const textToDraw = customText.trim() || 'SOLARA';

  ctx.save();

  if (style === 'gold-foil') {
    // Luxury 18k Solid Brushed Gold Plaque
    const plaqueW = Math.max(220, textToDraw.length * 15 + 70);
    const plaqueH = 64;
    const plaqueX = centerX - plaqueW / 2;
    const plaqueY = centerY - plaqueH / 2;

    // Cast Shadow
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 16;
    ctx.shadowOffsetY = 6;

    // Gold Plaque Base
    const goldGrad = ctx.createLinearGradient(plaqueX, plaqueY, plaqueX + plaqueW, plaqueY + plaqueH);
    goldGrad.addColorStop(0, '#FFF3D1');
    goldGrad.addColorStop(0.2, '#E5C158');
    goldGrad.addColorStop(0.5, '#D4AF37');
    goldGrad.addColorStop(0.8, '#AA820A');
    goldGrad.addColorStop(1, '#FDF2CE');
    ctx.fillStyle = goldGrad;
    
    // Rounded Plaque
    ctx.beginPath();
    ctx.roundRect(plaqueX, plaqueY, plaqueW, plaqueH, 16);
    ctx.fill();

    // Beveled Inner Rim
    ctx.shadowColor = 'transparent';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(plaqueX + 3, plaqueY + 3, plaqueW - 6, plaqueH - 6, 13);
    ctx.stroke();

    // Rivet Corner Screws
    ctx.fillStyle = '#684F07';
    [
      [plaqueX + 12, plaqueY + 12],
      [plaqueX + plaqueW - 12, plaqueY + 12],
      [plaqueX + 12, plaqueY + plaqueH - 12],
      [plaqueX + plaqueW - 12, plaqueY + plaqueH - 12]
    ].forEach(([rx, ry]) => {
      ctx.beginPath();
      ctx.arc(rx, ry, 2.5, 0, Math.PI * 2);
      ctx.fill();
    });

    // Engraved Text with Deep Chisel Shader
    ctx.fillStyle = '#261C02';
    ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
    ctx.shadowOffsetY = 1;
    ctx.shadowBlur = 1;
    ctx.font = 'bold 22px "Playfair Display", "Cairo", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(textToDraw, centerX, centerY);

  } else if (style === 'laser-engrave') {
    // Deep Charred Laser Burn directly on the Natural Straw
    ctx.fillStyle = 'rgba(56, 32, 10, 0.9)';
    ctx.shadowColor = 'rgba(255, 240, 200, 0.25)';
    ctx.shadowOffsetY = 1;
    ctx.shadowBlur = 2;
    ctx.font = 'bold 28px "Cinzel", "Cairo", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(textToDraw.toUpperCase(), centerX, centerY);

    // Decorative Laser Underline Flourish
    ctx.strokeStyle = 'rgba(56, 32, 10, 0.8)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(centerX - 80, centerY + 22);
    ctx.lineTo(centerX + 80, centerY + 22);
    ctx.stroke();

    // Central Sun Dot
    ctx.beginPath();
    ctx.arc(centerX, centerY + 22, 3.5, 0, Math.PI * 2);
    ctx.fill();

  } else if (style === 'leather-patch') {
    // Stitched Cognac Calfskin Leather Patch
    const patchW = Math.max(210, textToDraw.length * 14 + 60);
    const patchH = 68;
    const patchX = centerX - patchW / 2;
    const patchY = centerY - patchH / 2;

    // Drop Shadow
    ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
    ctx.shadowBlur = 12;
    ctx.shadowOffsetY = 5;

    // Leather Gradient
    const leatherGrad = ctx.createLinearGradient(patchX, patchY, patchX, patchY + patchH);
    leatherGrad.addColorStop(0, '#7A401E');
    leatherGrad.addColorStop(0.5, '#633113');
    leatherGrad.addColorStop(1, '#4A2209');
    ctx.fillStyle = leatherGrad;

    ctx.beginPath();
    ctx.roundRect(patchX, patchY, patchW, patchH, 12);
    ctx.fill();

    // Hand Stitched Border (Saddle Stitching)
    ctx.shadowColor = 'transparent';
    ctx.strokeStyle = '#D4AF37';
    ctx.lineWidth = 1.8;
    ctx.setLineDash([5, 4]);
    ctx.beginPath();
    ctx.roundRect(patchX + 5, patchY + 5, patchW - 10, patchH - 10, 8);
    ctx.stroke();
    ctx.setLineDash([]);

    // Debossed Gold Stamped Text
    ctx.fillStyle = '#E5C158';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 2;
    ctx.font = 'bold 20px "Cinzel", "Cairo", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(textToDraw, centerX, centerY);

  } else if (style === 'silver-foil') {
    // Brushed Platinum Silver Plaque
    const plaqueW = Math.max(220, textToDraw.length * 15 + 70);
    const plaqueH = 64;
    const plaqueX = centerX - plaqueW / 2;
    const plaqueY = centerY - plaqueH / 2;

    ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
    ctx.shadowBlur = 14;
    ctx.shadowOffsetY = 6;

    const silverGrad = ctx.createLinearGradient(plaqueX, plaqueY, plaqueX + plaqueW, plaqueY + plaqueH);
    silverGrad.addColorStop(0, '#FFFFFF');
    silverGrad.addColorStop(0.3, '#CBD5E1');
    silverGrad.addColorStop(0.7, '#94A3B8');
    silverGrad.addColorStop(1, '#F8FAFC');
    ctx.fillStyle = silverGrad;

    ctx.beginPath();
    ctx.roundRect(plaqueX, plaqueY, plaqueW, plaqueH, 16);
    ctx.fill();

    ctx.shadowColor = 'transparent';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(plaqueX + 3, plaqueY + 3, plaqueW - 6, plaqueH - 6, 13);
    ctx.stroke();

    ctx.fillStyle = '#0F172A';
    ctx.shadowColor = 'rgba(255, 255, 255, 0.4)';
    ctx.shadowOffsetY = 1;
    ctx.shadowBlur = 1;
    ctx.font = 'bold 22px "Playfair Display", "Cairo", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(textToDraw, centerX, centerY);
  }

  // 4. Authenticity Watermark Stamp at Bottom
  ctx.shadowColor = 'transparent';
  ctx.fillStyle = 'rgba(212, 175, 55, 0.5)';
  ctx.font = '10px "Cinzel", monospace';
  ctx.textAlign = 'center';
  ctx.fillText('SOLARA ARCHIVE — HANDCRAFTED IN EGYPT', width / 2, height - 25);

  ctx.restore();
};
