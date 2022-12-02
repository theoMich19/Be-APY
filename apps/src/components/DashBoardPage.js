import Plot from 'react-plotly.js';
import { useState } from "react"
export const DashBoardPage = () => {
    const [graph, setGraph] = useState(0)

    return (
        <div>
            <div className="rowDashboard">
                <div className="columnNav">
                    <ul>
                        <li><button onClick={e => setGraph(0)}>Personnes de tous âges vivant avec le VIH</button></li>
                        <li><button onClick={e => setGraph(1)}>Décès à cause du VIH</button></li>
                        <li><button onClick={e => setGraph(2)}>Nouvelles personnes atteintes du VIH</button></li>
                        <li><button onClick={e => setGraph(3)}>Femmes enceintes qui se soignent afin d'éviter la transmission mère-enfant</button></li>
                        <li><button onClick={e => setGraph(4)}>Nombre de femmes enceintes qui ont besoin de se soigner pour éviter la transmission mère-enfant</button></li>
                    </ul>
                </div>
                <div className="columnGraph">
                    {graph === 0 &&
                        <Plot
                            data={[
                                {
                                x: [2016, 2017, 2018, 2019, 2020, 2021],
                                y: [35200000, 35900000, 36500000, 37200000, 37800000, 38400000],
                                type: 'scatter',
                                marker: {color: 'red'},
                                }
                            ]}
                            layout={ {width: 800, height: 800, title: 'Personnes de tous âges vivant avec le VIH', paper_bgcolor:"#544293", font: {color: "white", size: 22}, plot_bgcolor:"#544293"} }
                        />
                    }
                    {graph === 1 && 
                        <Plot
                            data={[
                                {
                                    type: 'bar',
                                    x: [2016, 2017, 2018, 2019, 2020, 2021],
                                    y: [880000, 830000, 780000, 730000, 690000, 650000],
                                    marker: {color: 'red'}
                                },
                            ]}
                            layout={ {width: 800, height: 800, title: 'Décès à cause du VIH', paper_bgcolor:"#544293", font: {color: "white", size: 22}, plot_bgcolor:"#544293"} }
                        />
                    }
                    {graph === 2 && 
                        <Plot
                            data={[
                                {
                                    type: 'scatter',
                                    x: [2016, 2017, 2018, 2019, 2020, 2021],
                                    y: [1800000, 1700000, 1700000, 1600000, 1500000, 1500000],
                                    marker: {color: 'red'}
                                },
                            ]}
                            layout={ {width: 800, height: 800, title: 'Nouvelles personnes atteintes du VIH', paper_bgcolor:"#544293", font: {color: "white", size: 22}, plot_bgcolor:"#544293"} }
                        />
                    }
                    {graph === 3 && 
                        <Plot
                            data={[
                                {
                                    type: 'scatter',
                                    x: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
                                    y: [800000, 950000, 1100000, 1100000, 1100000, 1100000, 1100000, 1100000, 1100000, 1100000, 1100000],
                                    marker: {color: 'red'}
                                },
                            ]}
                            layout={ {width: 800, height: 800, title: `Femmes enceintes qui se soignent`, paper_bgcolor:"#544293", font: {color: "white", size: 22}, plot_bgcolor:"#544293"} }
                        />
                    }
                    {graph === 4 && 
                        <Plot
                            data={[
                                {
                                    type: 'bar',
                                    x: [2016, 2017, 2018, 2019, 2020, 2021],
                                    y: [1400000, 1400000, 1400000, 1400000, 1400000, 1400000],
                                    marker: {color: 'red'}
                                }
                            ]}
                            layout={ {width: 800, height: 800, title: 'Femmes enceintes qui ont besoin de se soigner', paper_bgcolor:"#544293", font: {color: "white", size: 22}, plot_bgcolor:"#544293"} }
                        />
                    }
                </div>
            </div>
        </div>
      );
   
   }
