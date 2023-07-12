//import {Chart, BarController, BarElement, CategoryScale, LinearScale, UpdateMode} from 'chart.js';
import Chart from 'chart.js/auto';
import annotationPlugin from 'chartjs-plugin-annotation';
import zoomPlugin from 'chartjs-plugin-zoom';
import ChartDataLabels from 'chartjs-plugin-datalabels';
//Chart.register(BarController, BarElement, CategoryScale, LinearScale);
Chart.register([ zoomPlugin, annotationPlugin, ChartDataLabels]);

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

//const a:UpdateMode = 'zoom';

export const chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      data: []
    }]
  },
  options: {
    plugins: false
/*    plugins: {
	  tooltip: {},
	  legend: false,
      annotation: { },
      zoom: { },
	  datalabels: {}
    }
*/    
  }
});
