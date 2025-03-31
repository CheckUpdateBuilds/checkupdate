import React from 'react';

const ArticleTable = () => {
    return (
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
                    <tr>
                        <td>1</td>
                        <td>How to Improve SEO</td>
                        <td>1,200</td>
                        <td>250</td>
                        <td>100</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>The Future of AI</td>
                        <td>900</td>
                        <td>180</td>
                        <td>60</td>
                        <td>30</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Understanding Machine Learning</td>
                        <td>750</td>
                        <td>150</td>
                        <td>50</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Best Practices for Web Development</td>
                        <td>1,050</td>
                        <td>200</td>
                        <td>80</td>
                        <td>40</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ArticleTable;
