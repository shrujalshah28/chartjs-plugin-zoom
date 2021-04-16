import {each} from 'chart.js/helpers';

/**
 * @param {string|function} mode can be 'x', 'y' or 'xy'
 * @param {string} dir can be 'x' or 'y'
 * @param {import('chart.js').Chart} chart instance of the chart in question
 * @returns {boolean}
 */
export function directionEnabled(mode, dir, chart) {
  if (mode === undefined) {
    return true;
  } else if (typeof mode === 'string') {
    return mode.indexOf(dir) !== -1;
  } else if (typeof mode === 'function') {
    return mode({chart}).indexOf(dir) !== -1;
  }

  return false;
}

export function getXAxis(chartInstance) {
  const scales = chartInstance.scales;
  const scaleIds = Object.keys(scales);
  for (let i = 0; i < scaleIds.length; i++) {
    const scale = scales[scaleIds[i]];

    if (scale.isHorizontal()) {
      return scale;
    }
  }
}

export function getYAxis(chartInstance) {
  const scales = chartInstance.scales;
  const scaleIds = Object.keys(scales);
  for (let i = 0; i < scaleIds.length; i++) {
    const scale = scales[scaleIds[i]];

    if (!scale.isHorizontal()) {
      return scale;
    }
  }
}

/**
 * Debounces calling `fn` for `delay` ms
 * @param {function} fn - Function to call. No arguments are passed.
 * @param {number} delay - Delay in ms. 0 = immediate invocation.
 * @returns {function}
 */
export function debounce(fn, delay) {
  let timeout;
  return function() {
    if (delay) {
      clearTimeout(timeout);
      timeout = setTimeout(fn, delay);
    } else {
      fn();
    }
    return delay;
  };
}

/** This function use for check what axis now under mouse cursor.
 * @param {number} [x] X position
 * @param {number} [y] Y position
 * @param {import('chart.js').Chart} [chart] instance of the chart in question
 */
function getScaleUnderPoint(x, y, chart) {
  const scales = chart.scales;
  const scaleIds = Object.keys(scales);
  for (let i = 0; i < scaleIds.length; i++) {
    const scale = scales[scaleIds[i]];
    if (y >= scale.top && y <= scale.bottom && x >= scale.left && x <= scale.right) {
      return scale;
    }
  }
  return null;
}

/** This function return only one scale whose position is under mouse cursor and which direction is enabled.
 * If under mouse hasn't scale, then return all other scales which 'mode' is diffrent with overScaleMode.
 * So 'overScaleMode' works as a limiter to scale the user-selected scale (in 'mode') only when the cursor is under the scale,
 * and other directions in 'mode' works as before.
 * Example: mode = 'xy', overScaleMode = 'y' -> it's means 'x' - works as before, and 'y' only works for one scale when cursor is under it.
 * options.overScaleMode can be a function if user want zoom only one scale of many for example.
 * @param {any} [options] pan or zoom options
 * @param {number} [x] X position
 * @param {number} [y] Y position
 * @param {import('chart.js').Chart} [chart] instance of the chart in question
 */
export function getEnabledScalesByPoint(options, x, y, chart) {
  if (options.enabled && options.overScaleMode) {
    const scale = getScaleUnderPoint(x, y, chart);
    const mode = typeof options.overScaleMode === 'function' ? options.overScaleMode({chart: chart}, scale) : options.overScaleMode;

    if (scale && directionEnabled(mode, scale.axis, chart)) {
      return [scale];
    }

    const enabledScales = [];
    each(chart.scales, function(scaleItem) {
      if (!directionEnabled(mode, scaleItem.axis, chart)) {
        enabledScales.push(scaleItem);
      }
    });
    return enabledScales;
  }
  return null;
}
