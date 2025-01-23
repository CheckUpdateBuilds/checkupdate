// pages/Admin/Analytics.jsx
import React, { useEffect } from "react";
import Sidebar from "../../Components/Admin/sidebar";
import Header from "../../Components/Admin/Header";
import Chart from "chart.js/auto";
import "bootstrap/dist/css/bootstrap.min.css";

const Analytics = () => {
  useEffect(() => {
    // Example Chart Data
    const trafficData = [10, 30, 50, 70, 40, 60, 80];
    const trafficLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
    const topArticlesData = [100, 120, 80, 90, 60];
    const topArticlesLabels = [
      "Article 1",
      "Article 2",
      "Article 3",
      "Article 4",
      "Article 5",
    ];
    const dateTrafficData = [50, 60, 40, 30, 20, 10, 0];
    const dateTrafficLabels = [
      "2025-01-01",
      "2025-01-02",
      "2025-01-03",
      "2025-01-04",
      "2025-01-05",
      "2025-01-06",
      "2025-01-07",
    ];

    // Traffic Overview Chart
    new Chart(document.getElementById("trafficChart"), {
      type: "line",
      data: {
        labels: trafficLabels,
        datasets: [
          {
            label: "Website Traffic",
            data: trafficData,
            borderColor: "#C43737",
            fill: false,
            tension: 0.1,
          },
        ],
      },
    });

    // Top-performing Articles Chart
    new Chart(document.getElementById("topArticlesChart"), {
      type: "bar",
      data: {
        labels: topArticlesLabels,
        datasets: [
          {
            label: "Views",
            data: topArticlesData,
            backgroundColor: "#C43737",
          },
        ],
      },
    });

    // Traffic by Date Chart
    new Chart(document.getElementById("dateTrafficChart"), {
      type: "bar",
      data: {
        labels: dateTrafficLabels,
        datasets: [
          {
            label: "Visitors",
            data: dateTrafficData,
            backgroundColor: "#C43737",
          },
        ],
      },
    });
  }, []);

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="content">
        <Header title="Analytics" />
        <div className="d-flex justify-content-between align-items-center my-3">
          <input type="date" className="form-control w-25" id="startDate" />
          <input type="date" className="form-control w-25" id="endDate" />
          <button className="btn btn-primary">Apply Date Range</button>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="card">
              <div className="card-header">Articles Published</div>
              <div className="card-body">
                <h2 id="articlesPublished">50</h2>
                <p>Total articles published in the last 30 days.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="card">
              <div className="card-header">Traffic Overview</div>
              <div className="card-body">
                <canvas id="trafficChart"></canvas>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="card">
              <div className="card-header">Top-performing Articles</div>
              <div className="card-body">
                <canvas id="topArticlesChart"></canvas>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">Traffic by Date</div>
              <div className="card-body">
                <canvas id="dateTrafficChart"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;