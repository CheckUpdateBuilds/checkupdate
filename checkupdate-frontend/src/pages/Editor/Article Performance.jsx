import React from 'react';
import ChartComponent from '../../Components/Editor/ChartComponent';
import ArticleTable from '../../Components/Editor/ArticleTable';

const ArticlePerformance = () => {
    return (
        <div className="content-page">
            <div className="row">
                <div className="col-md-3">
                    <div className="metric-card">
                        <h4>Views</h4>
                        <div className="metric-value" id="views-count">1,250</div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="metric-card">
                        <h4>Likes</h4>
                        <div className="metric-value" id="likes-count">300</div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="metric-card">
                        <h4>Shares</h4>
                        <div className="metric-value" id="shares-count">120</div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="metric-card">
                        <h4>Comments</h4>
                        <div className="metric-value" id="comments-count">75</div>
                    </div>
                </div>
            </div>

            <ChartComponent />

            <ArticleTable />
        </div>
    );
};


export default ArticlePerformance;