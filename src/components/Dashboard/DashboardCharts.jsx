import React from "react";
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

const HeartRateData = [
  { time: "0", heartRate: 0 },
  { time: "8:00", HeartRate: 78 },
  { time: "8:07", HeartRate: 65 },
  { time: "8:10", HeartRate: 90 },
  { time: "8:14", HeartRate: 120 },
  { time: "8:17", HeartRate: 60 },
  { time: "8:18", HeartRate: 70 },
  { time: "8:19", HeartRate: 70 },
  { time: "8:21", HeartRate: 60 },
];
const BloodOxygenData = [
  { time: "8:00", BloodOxygen: 98 },
  { time: "8:07", BloodOxygen: 99 },
  { time: "8:10", BloodOxygen: 96 },
  { time: "8:14", BloodOxygen: 88 },
  { time: "8:17", BloodOxygen: 92 },
  { time: "8:18", BloodOxygen: 90 },
  { time: "8:19", BloodOxygen: 98 },
  { time: "8:21", BloodOxygen: 93 },
];
const TemperatureData = [
  { time: "0", Temperature: 0 },
  { time: "8:00", Temperature: 35 },
  { time: "8:07", Temperature: 36 },
  { time: "8:10", Temperature: 38 },
  { time: "8:14", Temperature: 40 },
  { time: "8:17", Temperature: 42 },
  { time: "8:18", Temperature: 45 },
  { time: "8:19", Temperature: 39 },
  { time: "8:21", Temperature: 35 },
];
const SweatData = [
  { time: "0", Sweat: 0 },
  { time: "8:00", Sweat: 22 },
  { time: "8:07", Sweat: 24 },
  { time: "8:10", Sweat: 23 },
  { time: "8:14", Sweat: 22.5 },
  { time: "8:17", Sweat: 26 },
  { time: "8:18", Sweat: 26 },
  { time: "8:19", Sweat: 24.3 },
  { time: "8:21", Sweat: 21 },
];
const SpeedData = [
  { time: "0", Speed: 0 },
  { time: "8:00", Speed: 1.2 },
  { time: "8:07", Speed: 1.1 },
  { time: "8:10", Speed: 1.7 },
  { time: "8:14", Speed: 2.2 },
  { time: "8:17", Speed: 2.9 },
  { time: "8:18", Speed: 2.4 },
  { time: "8:19", Speed: 2.7 },
  { time: "8:21", Speed: 3.3 },
];
const AccelerometerData = [
  { time: "8:00", Accelerometer: 0.2 },
  { time: "8:07", Accelerometer: 0.4 },
  { time: "8:10", Accelerometer: 0.7 },
  { time: "8:14", Accelerometer: 1.2 },
  { time: "8:17", Accelerometer: 0.9 },
  { time: "8:18", Accelerometer: 1.9 },
  { time: "8:19", Accelerometer: 2.1 },
  { time: "8:21", Accelerometer: 1.8 },
];

const HBT_Data = [
  {
    time: "0",
    HeartRate: 0,
    Temperature: 0,
    BloodOxygen: 0,
  },
  {
    time: "8:00",
    HeartRate: 78,
    Temperature: 35,
    BloodOxygen: 98,
  },
  {
    time: "8:07",
    HeartRate: 65,
    Temperature: 36,
    BloodOxygen: 99,
  },
  {
    time: "8:10",
    HeartRate: 90,
    Temperature: 38,
    BloodOxygen: 96,
  },
  {
    time: "8:14",
    HeartRate: 96,
    Temperature: 40,
    BloodOxygen: 88,
  },
  {
    time: "8:17",
    HeartRate: 60,
    Temperature: 42,
    BloodOxygen: 92,
  },
  {
    time: "8:18",
    HeartRate: 70,
    Temperature: 45,
    BloodOxygen: 90,
  },
  {
    time: "8:19",
    HeartRate: 70,
    Temperature: 39,
    BloodOxygen: 98,
  },
  {
    time: "8:21",
    HeartRate: 60,
    Temperature: 35,
    BloodOxygen: 93,
  },
];
const SA_Data = [
  {
    time: "0",
    Speed: 0,
    Accelerometer: 0,
  },
  {
    time: "8:00",
    Speed: 1.2,
    Accelerometer: 0.2,
  },
  {
    time: "8:07",
    Speed: 1.1,
    Accelerometer: 0.4,
  },
  {
    time: "8:10",
    Speed: 1.7,
    Accelerometer: 0.7,
  },
  {
    time: "8:14",
    Speed: 2.2,
    Accelerometer: 1.2,
  },
  {
    time: "8:17",
    Speed: 2.9,
    Accelerometer: 0.9,
  },
  {
    time: "8:18",
    Speed: 2.4,
    Accelerometer: 1.9,
  },
  {
    time: "8:19",
    Speed: 2.7,
    Accelerometer: 2.1,
  },
  {
    time: "8:21",
    Speed: 2.3,
    Accelerometer: 1.8,
  },
];

const DashboardCharts = () => {
  return (
    <div className="dashboard-container">
      <div className="chart-item">
        <h3>Heart Rate</h3>
        <LineChart width={600} height={450} data={HeartRateData}>
          <XAxis dataKey="time" />
          <YAxis type="number" domain={[0, 140]} />
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
          <span>BPM: {HeartRateData[HeartRateData.length - 1].HeartRate}</span>
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
          <YAxis type="number" domain={[0, 30]} />
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
          <YAxis type="number" domain={[0, 4]} />
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
          <YAxis type="number" domain={[0, 2.5]} />
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
          data={HBT_Data}
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
          data={SA_Data}
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
  );
};

export default DashboardCharts;
