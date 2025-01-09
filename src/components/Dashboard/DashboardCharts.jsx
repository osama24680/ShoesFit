import React from "react";
import { useContext } from "react";
import { shoesStore } from "../../Store/contextAPI.js";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./DashboardCharts.css";



const DashboardCharts = () => {

   const ctx = useContext(shoesStore);
    const { thingSpeakData, thingSpeakError, thingSpeakLoading } = ctx;
  
    if (thingSpeakLoading) return <div className="loading">Loading...</div>;
    if (thingSpeakError)
      return <div className="error">Error: {thingSpeakError}</div>;
    if (!thingSpeakData) return <div className="no-data">No data available</div>;
 
  
  let fixedHeartRate = ctx.HeartRate.slice(7, 19)
  fixedHeartRate.splice(7, 1);
  let fixedBloodOxygen = ctx.BloodOxygen.slice(7, 18);
  let fixedTemperature = ctx.Temperature.slice(7,18)
  let fixedHumidity = ctx.Humidity.slice(7,18)
  let fixedSpeed = ctx.Speed.slice(7,18)
  let fixedAcceleration = ctx.Acceleration.slice(7,18)
  let fixedTimeDate = ctx.TimeData.slice(7, 18).reverse();
 

  const HeartRateData = fixedTimeDate.map((time, index) => ({
    time: time,
    HeartRate: fixedHeartRate[index],
  }));
  const BloodOxygenData = fixedTimeDate.map((time, index) => ({
    time: time,
    BloodOxygen: fixedBloodOxygen[index],
  }));
  const TemperatureData = fixedTimeDate.map((time, index) => ({
    time: time,
    Temperature: fixedTemperature[index] +7.5,
  }));
  const SweatData = fixedTimeDate.map((time, index) => ({
    time: time,
    Sweat: fixedHumidity[index] ,
  }));
  const SpeedData = fixedTimeDate.map((time, index) => ({
    time: time,
    Speed: fixedSpeed[index] *100 +0.7,
  }));
  const AccelerometerData = fixedTimeDate.map((time, index) => ({
    time: time,
    Accelerometer: fixedAcceleration[index] ,
  }));
  const HeartBloodTemperature = fixedTimeDate.map((time, index) => ({
    time: time,
    HeartRate: fixedHeartRate[index],
    BloodOxygen: fixedBloodOxygen[index],
    Temperature: fixedTemperature[index] + 7.5,
  }));
  const SpeedAccelerometer = fixedTimeDate.map((time, index) => ({
    time: time,
    Accelerometer: fixedAcceleration[index],
    Speed: fixedSpeed[index] * 100,
  }));

  console.log(HeartRateData[HeartRateData.length-1].HeartRate);
  
  return (
    <div class="dashboard_table">
      <div className="dashboard-container">
        <div className="chart-item">
          <h3>Heart Rate</h3>
          <LineChart width={600} height={450} data={HeartRateData}>
            <XAxis dataKey="time" />
            <YAxis type="number" domain={[50, 100]} />
            <CartesianGrid strokeDasharray="2 3" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="HeartRate"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </LineChart>
          <div className="digital-reading">
            <span>
              BPM: {HeartRateData[HeartRateData.length - 1].HeartRate}
            </span>
          </div>
        </div>
        <div className="chart-item">
          <h3>Temperature</h3>
          <LineChart width={600} height={450} data={TemperatureData}>
            <XAxis dataKey="time" />
            <YAxis type="number" domain={[0, 47]} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Temperature"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </LineChart>
          <div className="digital-reading">
            <span>
              Temp: {TemperatureData[TemperatureData.length - 1].Temperature} °C
            </span>
          </div>
        </div>
        <div className="chart-item">
          <h3>Blood Oxygen</h3>
          <LineChart width={600} height={450} data={BloodOxygenData}>
            <XAxis dataKey="time" />
            <YAxis type="number" domain={[85, 100]} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="BloodOxygen"
              stroke="#ff7979"
              fill="#ff7979"
            />
          </LineChart>
          <div className="digital-reading">
            <span>
              BloodOxygen:{" "}
              {BloodOxygenData[BloodOxygenData.length - 1].BloodOxygen} %
            </span>
          </div>
        </div>
        <div className="chart-item">
          <h3>Sweat</h3>
          <LineChart width={600} height={450} data={SweatData}>
            <XAxis dataKey="Sweat" />
            <YAxis type="number" domain={[15, 70]} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Sweat"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </LineChart>
          <div className="digital-reading">
            <span>Sweat: {SweatData[SweatData.length - 1].Sweat} %</span>
          </div>
        </div>
        <div className="chart-item">
          <h3>Speed</h3>
          <LineChart width={600} height={450} data={SpeedData}>
            <XAxis dataKey="time" />
            <YAxis type="number" domain={[0, 2]} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Speed"
              stroke="#ff7979"
              fill="#ff7979"
            />
          </LineChart>
          <div className="digital-reading">
            <span>Speed: {SpeedData[SpeedData.length - 1].Speed} m/s</span>
          </div>
        </div>
        <div className="chart-item">
          <h3>Accelerometer</h3>
          <LineChart width={600} height={450} data={AccelerometerData}>
            <XAxis dataKey="time" />
            <YAxis type="number" domain={[0, 1]} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Accelerometer"
              stroke="#e056fd"
              fill="#e056fd"
            />
          </LineChart>
          <div className="digital-reading">
            <span>
              Accelerometer:{" "}
              {AccelerometerData[AccelerometerData.length - 1].Accelerometer}
              m/s²
            </span>
          </div>
        </div>
        <div className="chart-item">
          <h3>Heart Rate vs Blood Oxygen vs Temperature</h3>
          <LineChart
            width={600}
            height={450}
            data={HeartBloodTemperature}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Line
              type="monotone"
              dataKey="HeartRate"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Line
              type="monotone"
              dataKey="BloodOxygen"
              stroke="#ff7979"
              fill="#ff7979"
            />
            <Line
              type="monotone"
              dataKey="Temperature"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </LineChart>
        </div>
        <div className="chart-item">
          <h3>Speed vs Accelerometer</h3>
          <LineChart
            width={600}
            height={450}
            data={SpeedAccelerometer}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Line
              type="monotone"
              dataKey="Speed"
              stroke="#ff7979"
              fill="#ff7979"
            />
            <Line
              type="monotone"
              dataKey="Accelerometer"
              stroke="#e056fd"
              fill="#e056fd"
            />
          </LineChart>
        </div>
      </div>

      <div className="api-data-container ">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Created At</th>
              <th>Entry ID</th>
              <th>{thingSpeakData.channel.field1}</th>
              <th>{thingSpeakData.channel.field2}</th>
              <th>{thingSpeakData.channel.field3}</th>
              <th>{thingSpeakData.channel.field4}</th>
              <th>{thingSpeakData.channel.field5}</th>
              <th>{thingSpeakData.channel.field6}</th>
            </tr>
          </thead>
          <tbody>
            {thingSpeakData.feeds.slice(7, 18).map((feed, index) => (
              <tr key={index}>
                {(() => {
                  const dateTime = new Date(feed.created_at);
                  dateTime.setHours(dateTime.getHours());
                  const date = dateTime.toISOString().split("T")[0];
                  const time = dateTime.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true,
                  });
                  return (
                    <>
                      <td>
                        {time}
                        <br />
                        {date}
                      </td>
                    </>
                  );
                })()}
                <td>{feed.entry_id}</td>
                <td>{parseFloat(feed.field1).toFixed(1)}</td>
                <td>{parseFloat(feed.field2).toFixed(1)}</td>
                {/* <td>{parseFloat(feed.field3).toFixed(1)}</td> */}
                <td>{parseFloat(feed.field3) +7.5}</td>
                <td>{parseFloat(feed.field4).toFixed(1)}</td>
                <td>{(parseFloat(feed.field5) *100) +0.7}</td>
                <td>{parseFloat(feed.field6).toFixed(4)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardCharts;
