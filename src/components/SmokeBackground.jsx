import { useEffect, useRef } from 'react'

// ── SHADERS ────────────────────────────────────────────────────────────────
const VERT = `#version 300 es
precision highp float;
in vec4 position;
void main(){ gl_Position = position; }`

const FRAG = `#version 300 es
precision highp float;
out vec4 O;
uniform float time;
uniform vec2  resolution;
uniform vec3  u_color;

#define FC gl_FragCoord.xy
#define R  resolution
#define T  (time + 660.)

float rnd(vec2 p){
  p = fract(p * vec2(12.9898, 78.233));
  p += dot(p, p + 34.56);
  return fract(p.x * p.y);
}
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p), u = f*f*(3.-2.*f);
  return mix(
    mix(rnd(i), rnd(i+vec2(1,0)), u.x),
    mix(rnd(i+vec2(0,1)), rnd(i+1.), u.x),
    u.y
  );
}
float fbm(vec2 p){
  float t=.0, a=1.;
  for(int i=0;i<5;i++){
    t += a*noise(p);
    p *= mat2(1,-1.2,.2,1.2)*2.;
    a *= .5;
  }
  return t;
}

void main(){
  vec2 uv = (FC - .5*R) / R.y;
  vec3 col = vec3(1);
  uv.x += .25;
  uv *= vec2(2,1);

  float n = fbm(uv*.28 - vec2(T*.01, 0));
  n = noise(uv*3. + n*2.);

  col.r -= fbm(uv + vec2(0, T*.015) + n);
  col.g -= fbm(uv*1.003 + vec2(0, T*.015) + n + .003);
  col.b -= fbm(uv*1.006 + vec2(0, T*.015) + n + .006);

  col = mix(col, u_color, dot(col, vec3(.21, .71, .07)));
  col = mix(vec3(.06), col, min(time*.12, 1.));
  col = clamp(col, .06, 1.);
  O = vec4(col, 1);
}`

// ── HELPERS ────────────────────────────────────────────────────────────────
function hexToRgb(hex) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return r
    ? [parseInt(r[1], 16) / 255, parseInt(r[2], 16) / 255, parseInt(r[3], 16) / 255]
    : null
}

// ── WEBGL RENDERER CLASS ───────────────────────────────────────────────────
class Renderer {
  constructor(canvas) {
    this.canvas  = canvas
    this.gl      = canvas.getContext('webgl2')
    this.color   = [0.29, 0.42, 0.23] // moss green default
    this.program = null
    this.vs      = null
    this.fs      = null
    this.buffer  = null

    if (!this.gl) return
    this._setup()
    this._init()
  }

  updateColor(rgb) { this.color = rgb }

  resize() {
    const { gl, canvas } = this
    if (!gl) return
    const dpr = Math.max(1, window.devicePixelRatio)
    canvas.width  = window.innerWidth  * dpr
    canvas.height = window.innerHeight * dpr
    gl.viewport(0, 0, canvas.width, canvas.height)
  }

  _compile(shader, src) {
    const { gl } = this
    gl.shaderSource(shader, src)
    gl.compileShader(shader)
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
      console.error('Shader error:', gl.getShaderInfoLog(shader))
  }

  _setup() {
    const { gl } = this
    this.vs = gl.createShader(gl.VERTEX_SHADER)
    this.fs = gl.createShader(gl.FRAGMENT_SHADER)
    this.program = gl.createProgram()
    this._compile(this.vs, VERT)
    this._compile(this.fs, FRAG)
    gl.attachShader(this.program, this.vs)
    gl.attachShader(this.program, this.fs)
    gl.linkProgram(this.program)
    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS))
      console.error('Link error:', gl.getProgramInfoLog(this.program))
  }

  _init() {
    const { gl, program } = this
    if (!program) return
    this.buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,1,-1,-1,1,1,1,-1]), gl.STATIC_DRAW)
    const pos = gl.getAttribLocation(program, 'position')
    gl.enableVertexAttribArray(pos)
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0)
    // Cache uniform locations directly on the program object
    program._res   = gl.getUniformLocation(program, 'resolution')
    program._time  = gl.getUniformLocation(program, 'time')
    program._color = gl.getUniformLocation(program, 'u_color')
  }

  render(now = 0) {
    const { gl, program, buffer, canvas, color } = this
    if (!gl || !program || !gl.isProgram(program)) return
    gl.clearColor(0, 0, 0, 1)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.useProgram(program)
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.uniform2f(program._res,   canvas.width, canvas.height)
    gl.uniform1f(program._time,  now * 1e-3)
    gl.uniform3fv(program._color, color)
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
  }

  destroy() {
    const { gl, program, vs, fs, buffer } = this
    if (!gl) return
    if (vs) { gl.detachShader(program, vs); gl.deleteShader(vs) }
    if (fs) { gl.detachShader(program, fs); gl.deleteShader(fs) }
    if (buffer) gl.deleteBuffer(buffer)
    if (program) gl.deleteProgram(program)
  }
}

// ── COMPONENT ─────────────────────────────────────────────────────────────
export default function SmokeBackground({ smokeColor = '#4a6b3a' }) {
  const canvasRef  = useRef(null)
  const rendererRef = useRef(null)

  // Boot WebGL, start RAF loop
  useEffect(() => {
    // Skip if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new Renderer(canvas)
    rendererRef.current = renderer

    const onResize = () => renderer.resize()
    onResize()
    window.addEventListener('resize', onResize, { passive: true })

    let raf
    const loop = (now) => { renderer.render(now); raf = requestAnimationFrame(loop) }
    loop(0)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      renderer.destroy()
    }
  }, [])

  // Update color whenever prop changes
  useEffect(() => {
    const rgb = hexToRgb(smokeColor)
    if (rgb && rendererRef.current) rendererRef.current.updateColor(rgb)
  }, [smokeColor])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  )
}
