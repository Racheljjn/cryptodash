

export default function(historical){
 return {
 

   title: {
    text: 'Solar Employment Growth by Sector, 2010-2016'
   },

   subtitle: {
    text: 'Source: thesolarfoundation.com'
   },

   yAxis: {
    title: {
     text: 'Number of Employees'
    }
   },

   xAxis: {
    type:'datetime'
   },

   legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
   },

   plotOptions: {
    series: {
     label: {
      connectorAllowed: false
     },
     pointStart: 2010
    }
   },

   series: historical,
   responsive: {
    rules: [{
     condition: {
      maxWidth: 500
     },
     chartOptions: {
      legend: {
       layout: 'horizontal',
       align: 'center',
       verticalAlign: 'bottom'
      }
     }
    }]
   }

  


 }
 
}
