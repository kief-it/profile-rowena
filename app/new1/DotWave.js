import { useEffect, useRef } from "react";

export default function SplitDualDotWave({
  topConfig = {
    color: "#F1F1F2",
    rows: 20,
    columns: 50,
    baseRadius: 1.5,
    waveSpeed: 0.01,
    waveAmplitude: 2,
  },
  bottomConfig = {
    color: "#00ffff",
    rows: 20,
    columns: 30,
    baseRadius: 4,
    waveSpeed: 0.05,
    waveAmplitude: 2,
  },
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let time = 0;

    const hexToRgb = (hex) => {
      hex = hex.replace(/^#/, "");
      if (hex.length === 3) {
        hex = hex
          .split("")
          .map((c) => c + c)
          .join("");
      }
      const num = parseInt(hex, 16);
      return {
        r: (num >> 16) & 255,
        g: (num >> 8) & 255,
        b: num & 255,
      };
    };

    const adjustBrightness = (rgb, factor) => {
      const r = Math.min(255, Math.max(0, Math.round(rgb.r * factor)));
      const g = Math.min(255, Math.max(0, Math.round(rgb.g * factor)));
      const b = Math.min(255, Math.max(0, Math.round(rgb.b * factor)));
      return `rgb(${r},${g},${b})`;
    };

    const drawTriangle = (ctx, x, y, radius, upsideDown = false) => {
      const side = radius * 2;
      const height = (Math.sqrt(3) / 2) * side;

      ctx.beginPath();
      if (!upsideDown) {
        ctx.moveTo(x, y - height / 2);
        ctx.lineTo(x + side / 2, y + height / 2);
        ctx.lineTo(x - side / 2, y + height / 2);
      } else {
        ctx.moveTo(x, y + height / 2);
        ctx.lineTo(x + side / 2, y - height / 2);
        ctx.lineTo(x - side / 2, y - height / 2);
      }
      ctx.closePath();
      ctx.fill();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerY = canvas.height / 2;

      // --- Top Wave: Circles ---
      const {
        color: topColor,
        rows: topRows,
        columns: topColumns,
        baseRadius: topRadius,
        waveSpeed: topSpeed,
        waveAmplitude: topAmp,
      } = topConfig;

      const topRgb = hexToRgb(topColor);
      const spacingXTop = canvas.width / (topColumns + 1);
      const spacingYTop = centerY / (topRows + 1);

      for (let row = 0; row < topRows; row++) {
        const y = spacingYTop * (row + 1);
        const scale = 1 - row / topRows;

        for (let col = 0; col < topColumns; col++) {
          const x = spacingXTop * (col + 1);
          const wave = Math.sin(time + (topRows - row) * 0.3);
          const radius = topRadius * scale + wave * topAmp * scale;

          const isOddPos = (row + col) % 2 === 1;
          const brightnessFactor = isOddPos ? 0.8 : 1.1;

          ctx.beginPath();
          ctx.arc(x, y, Math.max(radius, 1), 0, Math.PI * 2);
          ctx.fillStyle = adjustBrightness(topRgb, brightnessFactor);
          ctx.fill();
        }
      }

      // --- Bottom Wave: Triangles ---
      const {
        color: bottomColor,
        rows: bottomRows,
        columns: bottomColumns,
        baseRadius: bottomRadius,
        waveSpeed: bottomSpeed,
        waveAmplitude: bottomAmp,
      } = bottomConfig;

      const bottomRgb = hexToRgb(bottomColor);
      const spacingXBottom = canvas.width / (bottomColumns + 1);
      const spacingYBottom = centerY / (bottomRows + 1);

      for (let row = 0; row < bottomRows; row++) {
        const y = canvas.height - spacingYBottom * (row + 1);
        const scale = 1 - row / bottomRows;

        for (let col = 0; col < bottomColumns; col++) {
          const x = spacingXBottom * (col + 1);
          const wave = Math.sin(time + (bottomRows - row) * 0.3 + Math.PI);
          const radius = bottomRadius * scale + wave * bottomAmp * scale;

          const isOddPos = (row + col) % 2 === 1;
          const brightnessFactor = isOddPos ? 0.8 : 1.1;

          ctx.fillStyle = adjustBrightness(bottomRgb, brightnessFactor);

          const upsideDown = row % 2 === 1;
          drawTriangle(ctx, x, y, Math.max(radius, 1), upsideDown);
        }
      }

      time += Math.max(topSpeed, bottomSpeed);
      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [topConfig, bottomConfig]);

  return <canvas ref={canvasRef} className="w-full h-full block" />;
}
