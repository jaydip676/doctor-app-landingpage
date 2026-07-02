/* Ported from home/lampros-healthcare.html */
// @ts-nocheck
export function initParticleScene(canvas: HTMLCanvasElement): () => void {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var isMobile = window.matchMedia("(max-width:760px)").matches;
  var ctx = canvas.getContext("2d");
  if (!ctx) return function cleanup() {};
  var chars = "·∙•+┼▪";
  var INK = [11, 20, 17],
    CORAL = [255, 106, 69];
  function themeParticleInkRgb() {
    var raw = getComputedStyle(document.documentElement)
      .getPropertyValue("--particle-ink")
      .trim();
    var parts = raw.split(",").map(function (p) {
      return parseInt(p.trim(), 10);
    });
    if (
      parts.length >= 3 &&
      parts.every(function (n) {
        return !isNaN(n);
      })
    ) {
      return parts.slice(0, 3);
    }
    return [11, 20, 17];
  }
  function refreshThemeColors() {
    TEAL = themeAccentRgb();
    INK = themeParticleInkRgb();
  }
  function themeAccentRgb() {
    var raw = getComputedStyle(document.documentElement)
      .getPropertyValue("--teal")
      .trim();
    if (raw.indexOf("#") === 0 && raw.length >= 7) {
      var n = parseInt(raw.slice(1, 7), 16);
      return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
    }
    var rgb = raw.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
    if (rgb) {
      return [+rgb[1], +rgb[2], +rgb[3]];
    }
    return [15, 161, 124];
  }
  var TEAL = themeAccentRgb();
  INK = themeParticleInkRgb();
  var themeObserver = new MutationObserver(refreshThemeColors);
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-color-mode", "data-theme"],
  });
  var N = isMobile ? 1800 : 3800;

  /* ---------- shape generators ---------- */
  var L = 1.0,
    a = 0.33,
    depth = 0.42;
  function inPlus(x, y) {
    return (
      (Math.abs(x) <= a && Math.abs(y) <= L) ||
      (Math.abs(y) <= a && Math.abs(x) <= L)
    );
  }
  var Vp = [
    [-a, L],
    [a, L],
    [a, a],
    [L, a],
    [L, -a],
    [a, -a],
    [a, -L],
    [-a, -L],
    [-a, -a],
    [-L, -a],
    [-L, a],
    [-a, a],
  ];
  var edges = [],
    per = 0;
  for (var i = 0; i < Vp.length; i++) {
    var p0 = Vp[i],
      p1 = Vp[(i + 1) % Vp.length];
    var len = Math.hypot(p1[0] - p0[0], p1[1] - p0[1]);
    edges.push([p0, p1, len]);
    per += len;
  }
  function perim() {
    var s = Math.random() * per;
    for (var i = 0; i < edges.length; i++) {
      if (s <= edges[i][2]) {
        var e = edges[i],
          u = s / e[2];
        return [
          e[0][0] + (e[1][0] - e[0][0]) * u,
          e[0][1] + (e[1][1] - e[0][1]) * u,
        ];
      }
      s -= edges[i][2];
    }
    return [0, 0];
  }
  function genPlus(n) {
    var o = new Float32Array(n * 3);
    for (var i = 0; i < n; i++) {
      var x, y, z;
      if (Math.random() < 0.64) {
        do {
          x = (Math.random() * 2 - 1) * L;
          y = (Math.random() * 2 - 1) * L;
        } while (!inPlus(x, y));
        z =
          ((Math.random() < 0.5 ? 1 : -1) * depth) / 2 +
          (Math.random() - 0.5) * 0.05;
      } else {
        var pp = perim();
        x = pp[0];
        y = pp[1];
        z = ((Math.random() * 2 - 1) * depth) / 2;
      }
      o[i * 3] = x;
      o[i * 3 + 1] = y;
      o[i * 3 + 2] = z;
    }
    return o;
  }
  function genFracture(n) {
    var o = new Float32Array(n * 3),
      K = 5,
      cc = [];
    for (var c = 0; c < K; c++) {
      var ang = (c / K) * Math.PI * 2 + 0.4;
      cc.push([
        Math.cos(ang) * 1.5,
        Math.sin(ang) * 1.2,
        (Math.random() * 2 - 1) * 0.5,
      ]);
    }
    for (var i = 0; i < n; i++) {
      var c = i % K,
        b = cc[c];
      o[i * 3] = b[0] + (Math.random() * 2 - 1) * 0.42;
      o[i * 3 + 1] = b[1] + (Math.random() * 2 - 1) * 0.42;
      o[i * 3 + 2] = b[2] + (Math.random() * 2 - 1) * 0.3;
    }
    return o;
  }
  function genSphere(n) {
    var o = new Float32Array(n * 3);
    for (var i = 0; i < n; i++) {
      var y = 1 - (i / (n - 1)) * 2,
        r = Math.sqrt(Math.max(0, 1 - y * y)),
        th = i * 2.39996323;
      o[i * 3] = Math.cos(th) * r;
      o[i * 3 + 1] = y;
      o[i * 3 + 2] = Math.sin(th) * r;
    }
    return o;
  }
  function genCube(n) {
    var o = new Float32Array(n * 3),
      s = 0.82;
    for (var i = 0; i < n; i++) {
      var f = (Math.random() * 6) | 0,
        u = (Math.random() * 2 - 1) * s,
        v = (Math.random() * 2 - 1) * s;
      if (f === 0) {
        o[i * 3] = s;
        o[i * 3 + 1] = u;
        o[i * 3 + 2] = v;
      } else if (f === 1) {
        o[i * 3] = -s;
        o[i * 3 + 1] = u;
        o[i * 3 + 2] = v;
      } else if (f === 2) {
        o[i * 3] = u;
        o[i * 3 + 1] = s;
        o[i * 3 + 2] = v;
      } else if (f === 3) {
        o[i * 3] = u;
        o[i * 3 + 1] = -s;
        o[i * 3 + 2] = v;
      } else if (f === 4) {
        o[i * 3] = u;
        o[i * 3 + 1] = v;
        o[i * 3 + 2] = s;
      } else {
        o[i * 3] = u;
        o[i * 3 + 1] = v;
        o[i * 3 + 2] = -s;
      }
    }
    return o;
  }
  function genHeart(n) {
    var o = new Float32Array(n * 3),
      c = 0;
    while (c < n) {
      var x = (Math.random() * 2 - 1) * 1.25,
        y = (Math.random() * 2 - 1) * 1.3;
      if (Math.pow(x * x + y * y - 1, 3) - x * x * y * y * y < 0) {
        o[c * 3] = x * 0.82;
        o[c * 3 + 1] = -(y * 0.82 + 0.12);
        o[c * 3 + 2] = (Math.random() * 2 - 1) * 0.3;
        c++;
      }
    }
    return o;
  }
  function genFromDraw(draw, n, zd) {
    var S = 240,
      cc = document.createElement("canvas");
    cc.width = cc.height = S;
    var x = cc.getContext("2d");
    x.clearRect(0, 0, S, S);
    x.fillStyle = "#000";
    draw(x, S);
    var data = x.getImageData(0, 0, S, S).data,
      op = [];
    for (var py = 0; py < S; py += 2)
      for (var px = 0; px < S; px += 2) {
        if (data[(py * S + px) * 4 + 3] > 128) op.push(px, py);
      }
    var np = op.length / 2,
      o = new Float32Array(n * 3);
    for (var i = 0; i < n; i++) {
      var k = ((Math.random() * np) | 0) * 2;
      o[i * 3] = ((op[k] / S) * 2 - 1) * 0.95;
      o[i * 3 + 1] = -((op[k + 1] / S) * 2 - 1) * 0.95;
      o[i * 3 + 2] = (Math.random() * 2 - 1) * (zd || 0.16);
    }
    return o;
  }
  function drawStar(x, S) {
    var c = S / 2,
      R = S * 0.46,
      r = S * 0.14;
    x.beginPath();
    for (var k = 0; k < 8; k++) {
      var ang = -Math.PI / 2 + (k * Math.PI) / 4,
        rad = k % 2 === 0 ? R : r,
        px = c + Math.cos(ang) * rad,
        py = c + Math.sin(ang) * rad;
      k === 0 ? x.moveTo(px, py) : x.lineTo(px, py);
    }
    x.closePath();
    x.fill();
  }
  function drawShield(x, S) {
    x.save();
    x.translate(0, S);
    x.scale(1, -1);
    var c = S / 2,
      w = S * 0.3,
      top = S * 0.13;
    x.beginPath();
    x.moveTo(c, top);
    x.lineTo(c + w, top + S * 0.1);
    x.lineTo(c + w, S * 0.5);
    x.quadraticCurveTo(c + w, S * 0.8, c, S * 0.9);
    x.quadraticCurveTo(c - w, S * 0.8, c - w, S * 0.5);
    x.lineTo(c - w, top + S * 0.1);
    x.closePath();
    x.fill();
    x.restore();
  }

  var SP = genPlus(N);
  // ordinals: 0 plus,1 fracture,2 orb,3 cube,4 star,5 heart,6 shield,7 plus
  var SHAPES = [
    SP,
    genFracture(N),
    genSphere(N),
    genCube(N),
    genFromDraw(drawStar, N),
    genHeart(N),
    genFromDraw(drawShield, N),
    SP,
  ];
  var FLAT = [0, 0, 0, 0, 1, 1, 1, 0],
    BEATF = [0, 0, 0, 0, 0, 1, 0, 0];
  var dir = new Float32Array(N * 3);
  for (var i = 0; i < N * 3; i++) dir[i] = Math.random() * 2 - 1;
  var offX = new Float32Array(N),
    offY = new Float32Array(N);

  var anchors = [].slice.call(document.querySelectorAll(".anchor"));
  var allSecs = [].slice.call(document.querySelectorAll("section"));

  var W = 1,
    H = 1,
    dpr = 1,
    mx = 0,
    my = 0,
    tmx = 0,
    tmy = 0,
    curX = -9999,
    curY = -9999,
    tarX = -9999,
    tarY = -9999;
  var cloudOp = 1,
    rotY = 0,
    rotX = 0,
    time = 0,
    raf = null,
    running = false,
    proj = [];
  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    var r = canvas.getBoundingClientRect();
    W = r.width;
    H = r.height;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener("resize", resize);
  function ss(x) {
    x = Math.max(0, Math.min(1, x));
    return x * x * (3 - 2 * x);
  }
  function smoother(x) {
    x = Math.max(0, Math.min(1, x));
    return x * x * x * (x * (x * 6 - 15) + 10);
  }
  function beat(t) {
    var ph = t % 2.4;
    return Math.min(
      1,
      Math.exp(-Math.pow(ph / 0.1, 2)) +
        Math.exp(-Math.pow((ph - 0.2) / 0.12, 2)) * 0.7,
    );
  }
  function sideX(idx) {
    return isMobile ? W * 0.5 : idx % 2 === 0 ? W * 0.72 : W * 0.28;
  }

  function render() {
    ctx.clearRect(0, 0, W, H);
    var mid = H / 2;
    // locate position among shape anchors
    var prevI = 0,
      nextI = 0,
      tt = 0,
      centers = [];
    for (var i = 0; i < anchors.length; i++) {
      var r = anchors[i].getBoundingClientRect();
      centers[i] = r.top + r.height / 2;
    }
    if (mid <= centers[0]) {
      prevI = nextI = 0;
      tt = 0;
    } else if (mid >= centers[centers.length - 1]) {
      prevI = nextI = centers.length - 1;
      tt = 0;
    } else {
      for (var i = 0; i < centers.length - 1; i++) {
        if (mid >= centers[i] && mid < centers[i + 1]) {
          prevI = i;
          nextI = i + 1;
          tt = (mid - centers[i]) / (centers[i + 1] - centers[i]);
          break;
        }
      }
    }

    // fade when the section under the viewport centre is a wide one
    var op = 1;
    for (var i = 0; i < allSecs.length; i++) {
      var r = allSecs[i].getBoundingClientRect();
      if (r.top <= mid && r.bottom > mid) {
        op = allSecs[i].classList.contains("wide") ? 0 : 1;
        break;
      }
    }
    cloudOp += (op - cloudOp) * 0.08;

    curX += (tarX - curX) * 0.22;
    curY += (tarY - curY) * 0.22;
    mx += (tmx - mx) * 0.06;
    my += (tmy - my) * 0.06;

    var A = SHAPES[prevI],
      B = SHAPES[nextI],
      te = ss(tt);
    var faceFwd = FLAT[prevI] + (FLAT[nextI] - FLAT[prevI]) * te;
    var beatW = BEATF[prevI] + (BEATF[nextI] - BEATF[prevI]) * te;
    var glow =
      (prevI !== nextI ? Math.exp(-Math.pow((tt - 0.5) / 0.3, 2)) : 0) *
      cloudOp;
    var bump = Math.sin(tt * Math.PI) * 0.1;
    var pulse = reduce ? 0 : beat(time);

    var cx = sideX(prevI) + (sideX(nextI) - sideX(prevI)) * smoother(tt);
    var cy = centers[prevI] + (centers[nextI] - centers[prevI]) * smoother(tt); // ride with the section, settle with it

    rotY += 0.005;
    rotX += 0.0032;
    var eY = rotY * (1 - faceFwd) + mx * 0.4,
      eX = rotX * (1 - faceFwd) + my * 0.34;
    var cY = Math.cos(eY),
      sY = Math.sin(eY),
      cX = Math.cos(eX),
      sX = Math.sin(eX);
    var radius = Math.min(W, H) * (isMobile ? 0.36 : 0.4);
    var fs = Math.max(8, radius * 0.022);
    ctx.font = fs + "px 'JetBrains Mono', monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    var R = Math.min(W, H) * (isMobile ? 0.15 : 0.18),
      MP = R * 0.6,
      bscale = 1 + pulse * 0.06 * beatW;

    if (glow > 0.02) {
      var rg = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 1.25);
      rg.addColorStop(
        0,
        "rgba(" +
          TEAL[0] +
          "," +
          TEAL[1] +
          "," +
          TEAL[2] +
          "," +
          (0.22 * glow).toFixed(3) +
          ")",
      );
      rg.addColorStop(
        0.5,
        "rgba(" +
          TEAL[0] +
          "," +
          TEAL[1] +
          "," +
          TEAL[2] +
          "," +
          (0.1 * glow).toFixed(3) +
          ")",
      );
      rg.addColorStop(
        1,
        "rgba(" + TEAL[0] + "," + TEAL[1] + "," + TEAL[2] + ",0)",
      );
      ctx.fillStyle = rg;
      ctx.fillRect(0, 0, W, H);
    }

    if (cloudOp > 0.02) {
      proj.length = 0;
      var mAlpha = cloudOp * (isMobile ? 0.7 : 1);
      for (var i = 0; i < N; i++) {
        var i3 = i * 3;
        var bx = A[i3] + (B[i3] - A[i3]) * te,
          by = A[i3 + 1] + (B[i3 + 1] - A[i3 + 1]) * te,
          bz = A[i3 + 2] + (B[i3 + 2] - A[i3 + 2]) * te;
        bx = (bx + dir[i3] * bump) * bscale;
        by = (by + dir[i3 + 1] * bump) * bscale;
        bz = (bz + dir[i3 + 2] * bump) * bscale;
        var nx = bx * cY - bz * sY,
          nz = bx * sY + bz * cY,
          ny = by * cX - nz * sX,
          fz = by * sX + nz * cX;
        var ci = Math.max(
          0,
          Math.min(
            chars.length - 1,
            Math.floor(((fz + 1) / 2) * (chars.length - 1)),
          ),
        );
        var wt = Math.max(glow * 0.8, faceFwd * 0.34),
          wc = beatW * 0.6;
        var sx = cx + nx * radius,
          sy = cy + ny * radius;
        var dx = sx - curX,
          dy = sy - curY,
          d = Math.hypot(dx, dy),
          tox = 0,
          toy = 0;
        if (d < R) {
          if (d < 1) {
            dx = Math.cos(i * 1.7);
            dy = Math.sin(i * 1.7);
            d = 1;
          }
          var f = 1 - d / R,
            push = f * f * MP;
          tox = (dx / d) * push;
          toy = (dy / d) * push;
        }
        offX[i] += (tox - offX[i]) * 0.18;
        offY[i] += (toy - offY[i]) * 0.18;
        proj.push({
          sx: sx + offX[i],
          sy: sy + offY[i],
          z: fz,
          ch: chars[ci],
          wt: wt,
          wc: wc,
        });
      }
      proj.sort(function (p, q) {
        return p.z - q.z;
      });
      for (var i = 0; i < proj.length; i++) {
        var q = proj[i];
        var alpha =
          Math.min(1, (0.16 + (q.z + 1) * 0.34) * (1 + glow * 0.4)) * mAlpha;
        var r = INK[0] + (TEAL[0] - INK[0]) * q.wt,
          g = INK[1] + (TEAL[1] - INK[1]) * q.wt,
          b = INK[2] + (TEAL[2] - INK[2]) * q.wt;
        r = r + (CORAL[0] - r) * q.wc;
        g = g + (CORAL[1] - g) * q.wc;
        b = b + (CORAL[2] - b) * q.wc;
        ctx.fillStyle =
          "rgba(" +
          (r | 0) +
          "," +
          (g | 0) +
          "," +
          (b | 0) +
          "," +
          alpha.toFixed(3) +
          ")";
        ctx.fillText(q.ch, q.sx, q.sy);
      }
    }
    time += reduce ? 0 : 0.02;
    raf = requestAnimationFrame(render);
  }
  function start() {
    if (!running) {
      running = true;
      raf = requestAnimationFrame(render);
    }
  }
  function stop() {
    if (running) {
      running = false;
      cancelAnimationFrame(raf);
    }
  }

  window.addEventListener(
    "pointermove",
    function (e) {
      tarX = e.clientX;
      tarY = e.clientY;
      tmx = (e.clientX / window.innerWidth) * 2 - 1;
      tmy = -((e.clientY / window.innerHeight) * 2 - 1);
    },
    { passive: true },
  );
  window.addEventListener("pointerleave", function () {
    tarX = -9999;
    tarY = -9999;
  });
  if (reduce) {
    render();
    stop();
  } else {
    start();
    document.addEventListener("visibilitychange", function () {
      document.hidden ? stop() : start();
    });
  }

  return function cleanup() {
    stop();
    themeObserver.disconnect();
    window.removeEventListener("resize", resize);
  };
}
