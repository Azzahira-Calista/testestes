// import { Renderer, Program, Mesh, Color, Triangle } from "ogl";
// import { useEffect, useRef } from "react";

// const vertexShader = `
// attribute vec2 uv;
// attribute vec2 position;

// varying vec2 vUv;

// void main() {
//   vUv = uv;
//   gl_Position = vec4(position, 0, 1);
// }
// `;

// const fragmentShader = `
// precision highp float;

// uniform float uTime;
// uniform vec3 uResolution;
// uniform vec2 uFocal;
// uniform vec2 uRotation;
// uniform float uStarSpeed;
// uniform float uDensity;
// uniform float uHueShift;
// uniform float uSpeed;
// uniform vec2 uMouse;
// uniform float uGlowIntensity;
// uniform float uSaturation;
// uniform bool uMouseRepulsion;
// uniform float uTwinkleIntensity;
// uniform float uRotationSpeed;
// uniform float uRepulsionStrength;
// uniform float uMouseActiveFactor;
// uniform float uAutoCenterRepulsion;
// uniform bool uTransparent;

// varying vec2 vUv;

// #define NUM_LAYER 4.0
// #define STAR_COLOR_CUTOFF 0.2
// #define MAT45 mat2(0.7071, -0.7071, 0.7071, 0.7071)
// #define PERIOD 3.0

// float Hash21(vec2 p) {
//   p = fract(p * vec2(123.34, 456.21));
//   p += dot(p, p + 45.32);
//   return fract(p.x * p.y);
// }

// float tri(float x) {
//   return abs(fract(x) * 2.0 - 1.0);
// }

// float tris(float x) {
//   float t = fract(x);
//   return 1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0));
// }

// float trisn(float x) {
//   float t = fract(x);
//   return 2.0 * (1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0))) - 1.0;
// }

// vec3 hsv2rgb(vec3 c) {
//   vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
//   vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
//   return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
// }

// float Star(vec2 uv, float flare) {
//   float d = length(uv);
//   float m = (0.05 * uGlowIntensity) / d;
//   float rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
//   m += rays * flare * uGlowIntensity;
//   uv *= MAT45;
//   rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
//   m += rays * 0.3 * flare * uGlowIntensity;
//   m *= smoothstep(1.0, 0.2, d);
//   return m;
// }

// vec3 StarLayer(vec2 uv) {
//   vec3 col = vec3(0.0);

//   vec2 gv = fract(uv) - 0.5; 
//   vec2 id = floor(uv);

//   for (int y = -1; y <= 1; y++) {
//     for (int x = -1; x <= 1; x++) {
//       vec2 offset = vec2(float(x), float(y));
//       vec2 si = id + vec2(float(x), float(y));
//       float seed = Hash21(si);
//       float size = fract(seed * 345.32);
//       float glossLocal = tri(uStarSpeed / (PERIOD * seed + 1.0));
//       float flareSize = smoothstep(0.9, 1.0, size) * glossLocal;

//       float red = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 1.0)) + STAR_COLOR_CUTOFF;
//       float blu = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 3.0)) + STAR_COLOR_CUTOFF;
//       float grn = min(red, blu) * seed;
//       vec3 base = vec3(red, grn, blu);
      
//       float hue = atan(base.g - base.r, base.b - base.r) / (2.0 * 3.14159) + 0.5;
//       hue = fract(hue + uHueShift / 360.0);
//       float sat = length(base - vec3(dot(base, vec3(0.299, 0.587, 0.114)))) * uSaturation;
//       float val = max(max(base.r, base.g), base.b);
//       base = hsv2rgb(vec3(hue, sat, val));

//       vec2 pad = vec2(tris(seed * 34.0 + uTime * uSpeed / 10.0), tris(seed * 38.0 + uTime * uSpeed / 30.0)) - 0.5;

//       float star = Star(gv - offset - pad, flareSize);
//       vec3 color = base;

//       float twinkle = trisn(uTime * uSpeed + seed * 6.2831) * 0.5 + 1.0;
//       twinkle = mix(1.0, twinkle, uTwinkleIntensity);
//       star *= twinkle;
      
//       col += star * size * color;
//     }
//   }

//   return col;
// }

// void main() {
//   vec2 focalPx = uFocal * uResolution.xy;
//   vec2 uv = (vUv * uResolution.xy - focalPx) / uResolution.y;

//   vec2 mouseNorm = uMouse - vec2(0.5);
  
//   if (uAutoCenterRepulsion > 0.0) {
//     vec2 centerUV = vec2(0.0, 0.0); // Center in UV space
//     float centerDist = length(uv - centerUV);
//     vec2 repulsion = normalize(uv - centerUV) * (uAutoCenterRepulsion / (centerDist + 0.1));
//     uv += repulsion * 0.05;
//   } else if (uMouseRepulsion) {
//     vec2 mousePosUV = (uMouse * uResolution.xy - focalPx) / uResolution.y;
//     float mouseDist = length(uv - mousePosUV);
//     vec2 repulsion = normalize(uv - mousePosUV) * (uRepulsionStrength / (mouseDist + 0.1));
//     uv += repulsion * 0.05 * uMouseActiveFactor;
//   } else {
//     vec2 mouseOffset = mouseNorm * 0.1 * uMouseActiveFactor;
//     uv += mouseOffset;
//   }

//   float autoRotAngle = uTime * uRotationSpeed;
//   mat2 autoRot = mat2(cos(autoRotAngle), -sin(autoRotAngle), sin(autoRotAngle), cos(autoRotAngle));
//   uv = autoRot * uv;

//   uv = mat2(uRotation.x, -uRotation.y, uRotation.y, uRotation.x) * uv;

//   vec3 col = vec3(0.0);

//   for (float i = 0.0; i < 1.0; i += 1.0 / NUM_LAYER) {
//     float depth = fract(i + uStarSpeed * uSpeed);
//     float scale = mix(20.0 * uDensity, 0.5 * uDensity, depth);
//     float fade = depth * smoothstep(1.0, 0.9, depth);
//     col += StarLayer(uv * scale + i * 453.32) * fade;
//   }

//   if (uTransparent) {
//     float alpha = length(col);
//     alpha = smoothstep(0.0, 0.3, alpha); // Enhance contrast
//     alpha = min(alpha, 1.0); // Clamp to maximum 1.0
//     gl_FragColor = vec4(col, alpha);
//   } else {
//     gl_FragColor = vec4(col, 1.0);
//   }
// }
// `;

// export default function Galaxy({
//   focal = [0.5, 0.5],
//   rotation = [1.0, 0.0],
//   starSpeed = 0.5,
//   density = 1,
//   hueShift = 140,
//   disableAnimation = false,
//   speed = 1.0,
//   mouseInteraction = true,
//   glowIntensity = 0.3,
//   saturation = 0.0,
//   mouseRepulsion = true,
//   repulsionStrength = 2,
//   twinkleIntensity = 0.3,
//   rotationSpeed = 0.1,
//   autoCenterRepulsion = 0,
//   transparent = true,
//   ...rest
// }) {
//   const ctnDom = useRef(null);
//   const targetMousePos = useRef({ x: 0.5, y: 0.5 });
//   const smoothMousePos = useRef({ x: 0.5, y: 0.5 });
//   const targetMouseActive = useRef(0.0);
//   const smoothMouseActive = useRef(0.0);

//   useEffect(() => {
//     if (!ctnDom.current) return;
//     const ctn = ctnDom.current;
//     const renderer = new Renderer({
//       alpha: transparent,
//       premultipliedAlpha: false,
//     });
//     const gl = renderer.gl;

//     if (transparent) {
//       gl.enable(gl.BLEND);
//       gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
//       gl.clearColor(0, 0, 0, 0);
//     } else {
//       gl.clearColor(0, 0, 0, 1);
//     }

//     let program;

//     function resize() {
//       const scale = 1;
//       renderer.setSize(ctn.offsetWidth * scale, ctn.offsetHeight * scale);
//       if (program) {
//         program.uniforms.uResolution.value = new Color(
//           gl.canvas.width,
//           gl.canvas.height,
//           gl.canvas.width / gl.canvas.height
//         );
//       }
//     }
//     window.addEventListener("resize", resize, false);
//     resize();

//     const geometry = new Triangle(gl);
//     program = new Program(gl, {
//       vertex: vertexShader,
//       fragment: fragmentShader,
//       uniforms: {
//         uTime: { value: 0 },
//         uResolution: {
//           value: new Color(
//             gl.canvas.width,
//             gl.canvas.height,
//             gl.canvas.width / gl.canvas.height
//           ),
//         },
//         uFocal: { value: new Float32Array(focal) },
//         uRotation: { value: new Float32Array(rotation) },
//         uStarSpeed: { value: starSpeed },
//         uDensity: { value: density },
//         uHueShift: { value: hueShift },
//         uSpeed: { value: speed },
//         uMouse: {
//           value: new Float32Array([
//             smoothMousePos.current.x,
//             smoothMousePos.current.y,
//           ]),
//         },
//         uGlowIntensity: { value: glowIntensity },
//         uSaturation: { value: saturation },
//         uMouseRepulsion: { value: mouseRepulsion },
//         uTwinkleIntensity: { value: twinkleIntensity },
//         uRotationSpeed: { value: rotationSpeed },
//         uRepulsionStrength: { value: repulsionStrength },
//         uMouseActiveFactor: { value: 0.0 },
//         uAutoCenterRepulsion: { value: autoCenterRepulsion },
//         uTransparent: { value: transparent },
//       },
//     });

//     const mesh = new Mesh(gl, { geometry, program });
//     let animateId;

//     function update(t) {
//       animateId = requestAnimationFrame(update);
//       if (!disableAnimation) {
//         program.uniforms.uTime.value = t * 0.001;
//         program.uniforms.uStarSpeed.value = (t * 0.001 * starSpeed) / 10.0;
//       }

//       const lerpFactor = 0.05;
//       smoothMousePos.current.x +=
//         (targetMousePos.current.x - smoothMousePos.current.x) * lerpFactor;
//       smoothMousePos.current.y +=
//         (targetMousePos.current.y - smoothMousePos.current.y) * lerpFactor;

//       smoothMouseActive.current +=
//         (targetMouseActive.current - smoothMouseActive.current) * lerpFactor;

//       program.uniforms.uMouse.value[0] = smoothMousePos.current.x;
//       program.uniforms.uMouse.value[1] = smoothMousePos.current.y;
//       program.uniforms.uMouseActiveFactor.value = smoothMouseActive.current;

//       renderer.render({ scene: mesh });
//     }
//     animateId = requestAnimationFrame(update);
//     ctn.appendChild(gl.canvas);

//     function handleMouseMove(e) {
//       const rect = ctn.getBoundingClientRect();
//       const x = (e.clientX - rect.left) / rect.width;
//       const y = 1.0 - (e.clientY - rect.top) / rect.height;
//       targetMousePos.current = { x, y };
//       targetMouseActive.current = 1.0;
//     }

//     function handleMouseLeave() {
//       targetMouseActive.current = 0.0;
//     }

//     if (mouseInteraction) {
//       ctn.addEventListener("mousemove", handleMouseMove);
//       ctn.addEventListener("mouseleave", handleMouseLeave);
//     }

//     return () => {
//       cancelAnimationFrame(animateId);
//       window.removeEventListener("resize", resize);
//       if (mouseInteraction) {
//         ctn.removeEventListener("mousemove", handleMouseMove);
//         ctn.removeEventListener("mouseleave", handleMouseLeave);
//       }
//       ctn.removeChild(gl.canvas);
//       gl.getExtension("WEBGL_lose_context")?.loseContext();
//     };
//   }, [
//     focal,
//     rotation,
//     starSpeed,
//     density,
//     hueShift,
//     disableAnimation,
//     speed,
//     mouseInteraction,
//     glowIntensity,
//     saturation,
//     mouseRepulsion,
//     twinkleIntensity,
//     rotationSpeed,
//     repulsionStrength,
//     autoCenterRepulsion,
//     transparent,
//   ]);

//   return <div ref={ctnDom} className="w-full h-full relative" {...rest} />;
// }

import { useEffect, useRef } from "react";
import { Renderer, Camera, Geometry, Program, Mesh } from "ogl";

const defaultColors = ["#ffffff", "#ffffff", "#ffffff"];

const hexToRgb = (hex) => {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) {
    hex = hex.split("").map((c) => c + c).join("");
  }
  const int = parseInt(hex, 16);
  const r = ((int >> 16) & 255) / 255;
  const g = ((int >> 8) & 255) / 255;
  const b = (int & 255) / 255;
  return [r, g, b];
};

const vertex = /* glsl */ `
  attribute vec3 position;
  attribute vec4 random;
  attribute vec3 color;
  
  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uSpread;
  uniform float uBaseSize;
  uniform float uSizeRandomness;
  
  varying vec4 vRandom;
  varying vec3 vColor;
  
  void main() {
    vRandom = random;
    vColor = color;
    
    vec3 pos = position * uSpread;
    pos.z *= 10.0;
    
    vec4 mPos = modelMatrix * vec4(pos, 1.0);
    float t = uTime;
    mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x);
    mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w);
    mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z);
    
    vec4 mvPos = viewMatrix * mPos;
    gl_PointSize = (uBaseSize * (1.0 + uSizeRandomness * (random.x - 0.5))) / length(mvPos.xyz);
    gl_Position = projectionMatrix * mvPos;
  }
`;

const fragment = /* glsl */ `
  precision highp float;
  
  uniform float uTime;
  uniform float uAlphaParticles;
  varying vec4 vRandom;
  varying vec3 vColor;
  
  void main() {
    vec2 uv = gl_PointCoord.xy;
    float d = length(uv - vec2(0.5));
    
    if(uAlphaParticles < 0.5) {
      if(d > 0.5) {
        discard;
      }
      gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), 1.0);
    } else {
      float circle = smoothstep(0.5, 0.4, d) * 0.8;
      gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), circle);
    }
  }
`;

const Particles = ({
  particleCount = 200,
  particleSpread = 10,
  speed = 0.1,
  particleColors,
  moveParticlesOnHover = false,
  particleHoverFactor = 1,
  alphaParticles = false,
  particleBaseSize = 100,
  sizeRandomness = 1,
  cameraDistance = 20,
  disableRotation = false,
  className,
}) => {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({ depth: false, alpha: true });
    const gl = renderer.gl;
    container.appendChild(gl.canvas);
    gl.clearColor(0, 0, 0, 0);

    const camera = new Camera(gl, { fov: 15 });
    camera.position.set(0, 0, cameraDistance);

    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
    };
    window.addEventListener("resize", resize, false);
    resize();

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current = { x, y };
    };

    if (moveParticlesOnHover) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    const count = particleCount;
    const positions = new Float32Array(count * 3);
    const randoms = new Float32Array(count * 4);
    const colors = new Float32Array(count * 3);
    const palette = particleColors && particleColors.length > 0 ? particleColors : defaultColors;

    for (let i = 0; i < count; i++) {
      let x, y, z, len;
      do {
        x = Math.random() * 2 - 1;
        y = Math.random() * 2 - 1;
        z = Math.random() * 2 - 1;
        len = x * x + y * y + z * z;
      } while (len > 1 || len === 0);
      const r = Math.cbrt(Math.random());
      positions.set([x * r, y * r, z * r], i * 3);
      randoms.set([Math.random(), Math.random(), Math.random(), Math.random()], i * 4);
      const col = hexToRgb(palette[Math.floor(Math.random() * palette.length)]);
      colors.set(col, i * 3);
    }

    const geometry = new Geometry(gl, {
      position: { size: 3, data: positions },
      random: { size: 4, data: randoms },
      color: { size: 3, data: colors },
    });

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uSpread: { value: particleSpread },
        uBaseSize: { value: particleBaseSize },
        uSizeRandomness: { value: sizeRandomness },
        uAlphaParticles: { value: alphaParticles ? 1 : 0 },
      },
      transparent: true,
      depthTest: false,
    });

    const particles = new Mesh(gl, { mode: gl.POINTS, geometry, program });

    let animationFrameId;
    let lastTime = performance.now();
    let elapsed = 0;

    const update = (t) => {
      animationFrameId = requestAnimationFrame(update);
      const delta = t - lastTime;
      lastTime = t;
      elapsed += delta * speed;

      program.uniforms.uTime.value = elapsed * 0.001;

      if (moveParticlesOnHover) {
        particles.position.x = -mouseRef.current.x * particleHoverFactor;
        particles.position.y = -mouseRef.current.y * particleHoverFactor;
      } else {
        particles.position.x = 0;
        particles.position.y = 0;
      }

      if (!disableRotation) {
        particles.rotation.x = Math.sin(elapsed * 0.0002) * 0.1;
        particles.rotation.y = Math.cos(elapsed * 0.0005) * 0.15;
        particles.rotation.z += 0.01 * speed;
      }

      renderer.render({ scene: particles, camera });
    };

    animationFrameId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("resize", resize);
      if (moveParticlesOnHover) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
      if (container.contains(gl.canvas)) {
        container.removeChild(gl.canvas);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    particleCount,
    particleSpread,
    speed,
    moveParticlesOnHover,
    particleHoverFactor,
    alphaParticles,
    particleBaseSize,
    sizeRandomness,
    cameraDistance,
    disableRotation,
  ]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full ${className}`}
    />
  );
};

export default Particles;
