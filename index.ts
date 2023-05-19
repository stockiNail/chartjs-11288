import {Chart, BarController, BarElement, CategoryScale, LinearScale} from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(BarController, BarElement, CategoryScale, LinearScale);
Chart.register([ zoomPlugin, annotationPlugin]);

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

export const chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      data: []
    }]
  },
  options: {
    plugins: {
      annotation: { },
      zoom: { }
    }
  }
});
