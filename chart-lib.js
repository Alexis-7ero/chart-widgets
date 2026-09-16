/* WB Chart Components v2.4.1 */
(function (g) {
  function draw(cv, cfg) {
    var ctx = cv.getContext("2d"); var w = cv.width || 600, h = cv.height || 300;
    ctx.fillStyle = "#f5f7fa"; ctx.fillRect(0, 0, w, h);
    var bw = w / ((cfg.labels || []).length || 1);
    (cfg.values || []).forEach(function (v, i) {
      var bh = (v / (cfg.max || 100)) * (h - 60);
      ctx.fillStyle = "#2b7cff"; ctx.fillRect(20 + i * bw, h - 30 - bh, bw * 0.6, bh);
      ctx.fillStyle = "#555"; ctx.font = "12px sans-serif"; ctx.textAlign = "center";
      ctx.fillText(cfg.labels[i], 20 + i * bw + bw * 0.3, h - 10);
      ctx.fillText(v, 20 + i * bw + bw * 0.3, h - 40 - bh);
    });
  }
  g.WBChart = {
    render: function (sel, cfg) {
      var cv = document.querySelector(sel);
      if (!cv) { cv = document.createElement("canvas"); cv.width = 600; cv.height = 300; document.body.appendChild(cv); }
      draw(cv, cfg);
    }
  };
  var cfg = g.__WB_PENDING_CFG || (g.__WB_PENDING_CFG = {
    sel: "#chart-region", labels: ["7月", "8月", "9月"], values: [428, 512, 448], max: 600
  });
  if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", function () { g.WBChart.render(cfg.sel, cfg); }); }
  else { g.WBChart.render(cfg.sel, cfg); }
})(window);
