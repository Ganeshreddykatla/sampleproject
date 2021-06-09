import React, { useState } from 'react';
import "./Hsemonth.css";
import welcome from "../../../assets/welcome.png";

import {Bar, Pie, Doughnut} from 'react-chartjs-2'


const Hsemonth = () => {

    // const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    //     new Date("2020-06-18T21:11:54")
    //   );
    //   const handleDateChange = (date) => {
    //     setSelectedDate(date);
    //   };
  return (
    <div className="hse">
        <div className="hse_welcome">
            <div>
                <div className="welcome_logo">
                  <img src={welcome} />
                </div>
                <div className="welcome_text">
             Lorem ipusum is simply dummy text.
                </div>
            </div>
            <div >
             <input placeholder="June 2020"  value="June 2020"/>
            </div>
        </div>
         {/* cards start  */}
        <div className="main__cards">
          <div className="card">
            <i
              className="fa fa-user-o fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <div></div>
              <p className="text-primary-p">Number of Subscribers</p>
              <span className="font-bold text-title">578</span>
              
              <div className="chart_bar"><Bar 
      data={{
        labels:['Baddi', 'Kolkata', 'Baddi'],
        datasets:[{
          label:'Store 1',
          data:[100,400,230],
          backgroundColor:'red',
          // barThickness:12
        },
        
        ]
      }}
      options={{
        // tooltips:{
        //   mode:'index',
        //   callbacks:{
        //     label:function(toolTipItem){
        //       return ("Revenue: $"+toolTipItem.value)
        //     }
        //   }

        // },
        scales:{
          xAxes:[
            {
              gridLines:{
              color:'cyan'
            },
              scaleLabel:{
                labelString:'Months',
                display:true,
                fontColor:'blue',
                fontSize:20
              },
              ticks:{
                fontColor:'green'
              }
            }
          ],
          yAxes:[
          {
            gridLines:{
              color:'cyan'
            },
            scaleLabel:{
                labelString:'Revenue',
                display:true,
                fontColor:'blue',
                fontSize:20,
              },
            ticks:{
              beginAtZero:true,
              fontColor:'green',
              
            }
          }
          ]
        }
      }}
      >

      </Bar>
      </div>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">Times of Watching</p>
              <span className="font-bold text-title">2467</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-video-camera fa-2x text-yellow"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Videos</p>
              <span className="font-bold text-title">340</span>
            </div>
          </div>

          {/* cards end */}
        </div>
    </div>
  );
};

export default Hsemonth;
