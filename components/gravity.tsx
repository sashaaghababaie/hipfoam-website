"use client";

import { useEffect, useRef } from "react";

export default function GravityPile() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let frameId: number;

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;
      ctx.scale(ratio, ratio);
    };

    resize();
    window.addEventListener("resize", resize);

    // === Physics setup ===
    const GRAVITY = 0.9;
    const FRICTION = 0.97;
    const BOUNCE_DAMP = 0.3;
    const SLEEP_THRESHOLD = -0.1;
    const MAX_SPEED = 15;

    interface Ball {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      asleep: boolean;
      color: string;
    }

    const BALLS: Ball[] = Array.from({ length: 25 }, () => ({
      x: Math.random() * canvas.clientWidth,
      y: Math.random() * -400,
      vx: 0,
      vy: 0,
      r: 10 + Math.random() * 70, // bigger balls
      asleep: false,
      color: `black`,
    }));

    const drawBall = (b: Ball) => {
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fillStyle = b.color;
      ctx.fill();
    };

    const update = () => {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      for (let i = 0; i < BALLS.length; i++) {
        const b = BALLS[i];
        if (b.asleep) {
          drawBall(b);
          continue;
        }

        // Gravity
        b.vy += GRAVITY;

        // Clamp velocity
        b.vx = Math.max(Math.min(b.vx, MAX_SPEED), -MAX_SPEED);
        b.vy = Math.max(Math.min(b.vy, MAX_SPEED), -MAX_SPEED);

        // Move
        b.x += b.vx;
        b.y += b.vy;

        // Floor collision
        const floor = canvas.clientHeight - b.r;
        if (b.y > floor) {
          b.y = floor;
          b.vy *= -BOUNCE_DAMP;
          b.vx *= FRICTION;
          if (Math.abs(b.vy) < 0.3) b.vy = 0;
        }

        // Wall collision
        if (b.x - b.r < 0 || b.x + b.r > canvas.clientWidth) {
          b.vx *= -BOUNCE_DAMP;
          b.x = Math.max(b.r, Math.min(canvas.clientWidth - b.r, b.x));
        }

        // Ball–ball collisions
        for (let j = i + 1; j < BALLS.length; j++) {
          const b2 = BALLS[j];
          const dx = b2.x - b.x;
          const dy = b2.y - b.y;
          const dist = Math.hypot(dx, dy);
          const minDist = b.r + b2.r;

          if (dist < minDist && dist > 0) {
            const nx = dx / dist;
            const ny = dy / dist;
            const overlap = 0.4 * (minDist - dist); // smaller correction
            b.x -= overlap * nx;
            b.y -= overlap * ny;
            b2.x += overlap * nx;
            b2.y += overlap * ny;

            const dvx = b.vx - b2.vx;
            const dvy = b.vy - b2.vy;
            const dot = dvx * nx + dvy * ny;
            b.vx -= dot * nx * 0.5;
            b.vy -= dot * ny * 0.5;
            b2.vx += dot * nx * 0.5;
            b2.vy += dot * ny * 0.5;
          }
        }

        // Damping
        b.vx *= FRICTION;
        b.vy *= FRICTION;

        // Sleep check
        if (
          Math.abs(b.vx) < SLEEP_THRESHOLD &&
          Math.abs(b.vy) < SLEEP_THRESHOLD &&
          b.y + b.r >= canvas.clientHeight - 1
        ) {
          b.asleep = true;
          b.vx = b.vy = 0;
        }

        drawBall(b);
      }

      frameId = requestAnimationFrame(update);
    };

    update();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="bg-hipfoam-black block h-full w-full" />
  );
}

// "use client";

// import { useEffect, useRef } from "react";
// import { constrainAndMap } from "@/utils";

// export default function GravityBalls() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current!;
//     const ctx = canvas.getContext("2d")!;

//     // Responsive canvas
//     const resize = () => {
//       canvas.width = canvas.clientWidth;
//       canvas.height = canvas.clientHeight;
//     };

//     resize();
//     window.addEventListener("resize", resize);

//     // Physics
//     const GRAVITY = 0.4;
//     const FRICTION = 0.98;
//     const BOUNCE = 0.45;

//     // Create balls
//     const balls = Array.from({ length: 18 }, () => {
//       const r = 12 + Math.random() * 18;
//       return {
//         x: Math.random() * canvas.width,
//         y: 0,
//         vx: (Math.random() - 0.5) * 1.5,
//         vy: 0,
//         r,
//       };
//     });

//     // Scroll-controlled valley depth
//     let curveAmount = 0;

//     const onScroll = () => {
//       const windowHeight = window.innerHeight;
//       const rect = canvas.getBoundingClientRect();

//       // const progress = Math.min(1, window.scrollY / window.innerHeight);
//       const progress = constrainAndMap(1 - rect.top / windowHeight, 0.5, 1);

//       curveAmount = progress * 100; // depth of valley
//       // console.log(progress);
//     };

//     window.addEventListener("scroll", onScroll);

//     // U-shaped valley floor
//     const floorAtX = (x: number, r: number) => {
//       const w = canvas.width;
//       const base = canvas.height - r;

//       // NEGATIVE sin = valley
//       // console.log(curveAmount);
//       return base + curveAmount * Math.sin((x / w) * Math.PI);
//     };

//     const update = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // No floor drawn → background stays empty

//       for (const b of balls) {
//         b.vy += GRAVITY;
//         b.x += b.vx;
//         b.y += b.vy;

//         // Side walls
//         if (b.x < b.r) {
//           b.x = b.r;
//           b.vx *= -BOUNCE;
//         }
//         if (b.x > canvas.width - b.r) {
//           b.x = canvas.width - b.r;
//           b.vx *= -BOUNCE;
//         }

//         // Valley floor collision
//         const floorY = floorAtX(b.x, b.r) - 200;
//         if (b.y > floorY) {
//           b.y = floorY;
//           b.vy *= -BOUNCE;
//           b.vx *= FRICTION;

//           if (Math.abs(b.vy) < 0.2) b.vy = 0;

//           // Slide down slope
//           const slope = (floorAtX(b.x + 1, b.r) - floorAtX(b.x - 1, b.r)) / 2;

//           b.x += slope * 2;
//         }

//         // Draw ball
//         ctx.beginPath();
//         ctx.fillStyle = "#FFD255";
//         ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
//         ctx.fill();
//       }

//       requestAnimationFrame(update);
//     };

//     update();

//     return () => {
//       window.removeEventListener("resize", resize);
//       window.removeEventListener("scroll", onScroll);
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="bg-hipfoam-black block h-full w-full" />;
// }

// "use client";

// import { useEffect, useRef } from "react";
// import { constrainAndMap } from "@/utils";

// export default function GravityBalls() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current!;
//     const ctx = canvas.getContext("2d")!;

//     // Resizable canvas
//     const resize = () => {
//       canvas.width = canvas.clientWidth;
//       canvas.height = canvas.clientHeight;
//     };
//     resize();
//     window.addEventListener("resize", resize);

//     // Physics constants
//     const GRAVITY = 0.4;
//     const FRICTION = 0.98;
//     const BOUNCE = 0.45;

//     // Create balls
//     const balls = Array.from({ length: 20 }, () => {
//       const r = 12 + Math.random() * 18;
//       return {
//         x: Math.random() * canvas.width,
//         y: 0,
//         vx: (Math.random() - 0.5) * 1,
//         vy: 0,
//         r,
//       };
//     });

//     // Scroll → valley depth
//     let curveAmount = 0;

//     const onScroll = () => {
//       const windowHeight = window.innerHeight;
//       const rect = canvas.getBoundingClientRect();

//       // const progress = Math.min(1, window.scrollY / window.innerHeight);
//       const progress = constrainAndMap(1 - rect.top / windowHeight, 0.5, 1);

//       curveAmount = progress * 100; // depth of valley
//       // console.log(progress);
//     };
//     window.addEventListener("scroll", onScroll);

//     // Valley floor y-position at each X
//     const floorAtX = (x: number, r: number) => {
//       const w = canvas.width;
//       const base = canvas.height - r;
//       return base + curveAmount * Math.sin((x / w) * Math.PI);
//     };

//     const update = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // ---- BALL PHYSICS ----
//       for (let i = 0; i < balls.length; i++) {
//         const b = balls[i];

//         // Movement
//         b.vy += GRAVITY;
//         b.x += b.vx;
//         b.y += b.vy;

//         // Walls
//         if (b.x < b.r) {
//           b.x = b.r;
//           b.vx *= -BOUNCE;
//         }
//         if (b.x > canvas.width - b.r) {
//           b.x = canvas.width - b.r;
//           b.vx *= -BOUNCE;
//         }

//         // Floor collision
//         const floorY = floorAtX(b.x, b.r);
//         if (b.y > floorY) {
//           b.y = floorY;
//           b.vy *= -BOUNCE;
//           b.vx *= FRICTION;

//           if (Math.abs(b.vy) < 0.2) b.vy = 0;

//           // Slide down slope
//           const slope = (floorAtX(b.x + 1, b.r) - floorAtX(b.x - 1, b.r)) / 2;
//           b.x += slope * 2;
//         }
//       }

//       // ---- BALL TO BALL COLLISIONS ----
//       for (let i = 0; i < balls.length; i++) {
//         for (let j = i + 1; j < balls.length; j++) {
//           const b1 = balls[i];
//           const b2 = balls[j];

//           const dx = b2.x - b1.x;
//           const dy = b2.y - b1.y;
//           const dist = Math.hypot(dx, dy);
//           const minDist = b1.r + b2.r;

//           if (dist < minDist) {
//             // Normalize
//             const nx = dx / dist;
//             const ny = dy / dist;

//             // Push apart
//             const overlap = minDist - dist;

//             b1.x -= nx * overlap * 0.5;
//             b1.y -= ny * overlap * 0.5;
//             b2.x += nx * overlap * 0.5;
//             b2.y += ny * overlap * 0.5;

//             // Exchange velocity along normal
//             const dvx = b2.vx - b1.vx;
//             const dvy = b2.vy - b1.vy;
//             const impactSpeed = dvx * nx + dvy * ny;

//             if (impactSpeed < 0) continue;

//             const impulse = impactSpeed * 0.5;
//             b1.vx += impulse * nx;
//             b1.vy += impulse * ny;
//             b2.vx -= impulse * nx;
//             b2.vy -= impulse * ny;
//           }
//         }
//       }

//       // ---- DRAW BALLS ----
//       for (const b of balls) {
//         ctx.beginPath();
//         ctx.fillStyle = "#FFD255";
//         ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
//         ctx.fill();
//       }

//       requestAnimationFrame(update);
//     };

//     update();

//     return () => {
//       window.removeEventListener("resize", resize);
//       window.removeEventListener("scroll", onScroll);
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="block h-[50vh] w-full rounded-xl bg-black" />;
// }
