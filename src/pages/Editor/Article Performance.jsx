import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Chart } from "chart.js/auto";
import { useState } from "react";

const ArticlePerformance = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const ctx = document.getElementById("performanceChart").getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["SEO", "AI", "ML", "Web Dev"],
        datasets: [
          {
            label: "Views",
            data: [1200, 900, 750, 1050],
            backgroundColor: "#C43737",
            borderColor: "#C43737",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "top" },
          tooltip: { enabled: true },
        },
      },
    });
  }, []);

  return (
    <div className="d-flex">


        {/* Metrics */}
        <div className="row mt-4">
          {[
            { label: "Views", value: "1,250" },
            { label: "Likes", value: "300" },
            { label: "Shares", value: "120" },
            { label: "Comments", value: "75" },
          ].map((metric, index) => (
            <div key={index} className="col-md-3">
              <div className="metric-card p-3 text-center border rounded">
                <h4 className="text-danger">{metric.label}</h4>
                <div className="metric-value fs-2 fw-bold">{metric.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Date Filter */}
        <div className="row mt-4">
          <div className="col-md-4">
            <input type="date" className="form-control" />
          </div>
          <div className="col-md-4">
            <input type="date" className="form-control" />
          </div>
          <div className="col-md-4">
            <button className="btn btn-primary">Filter</button>
          </div>
        </div>

        {/* Chart */}
        <div className="row mt-4">
          <div className="col-md-12">
            <canvas id="performanceChart"></canvas>
          </div>
        </div>

        {/* Articles Table */}
        <div className="table-responsive mt-4">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Article Title</th>
                <th>Views</th>
                <th>Likes</th>
                <th>Shares</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              {[
                { title: "How to Improve SEO", views: 1200, likes: 250, shares: 100, comments: 50 },
                { title: "The Future of AI", views: 900, likes: 180, shares: 60, comments: 30 },
                { title: "Understanding Machine Learning", views: 750, likes: 150, shares: 50, comments: 20 },
                { title: "Best Practices for Web Development", views: 1050, likes: 200, shares: 80, comments: 40 },
              ].map((article, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{article.title}</td>
                  <td>{article.views}</td>
                  <td>{article.likes}</td>
                  <td>{article.shares}</td>
                  <td>{article.comments}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default ArticlePerformance;